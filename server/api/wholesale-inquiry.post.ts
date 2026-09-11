type WholesaleInquiryRequestBody = {
  firstName?: string;
  lastName?: string;
  businessName?: string;
  businessType?: string;
  email?: string;
  phone?: string;
  businessAddress?: string;
  city?: string;
  state?: string;
  zipCode?: string;
  numberOfLocations?: string;
  heardAboutLumn?: string;
  message?: string;
  website?: string;
  challengeA?: number | string;
  challengeB?: number | string;
  challengeAnswer?: number | string;
};

const WHOLESALE_LOCK_COOKIE = "lumn_wholesale_lock";
const WHOLESALE_LOCK_SECONDS = 60 * 60 * 24;

const escapeHtml = (value: string) =>
  value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");

const isValidEmail = (value: string) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

export default defineEventHandler(async (event) => {
  const body = await readBody<WholesaleInquiryRequestBody>(event);
  const runtimeConfig = useRuntimeConfig(event);

  const lockUntilRaw = getCookie(event, WHOLESALE_LOCK_COOKIE);
  const lockUntil = Number(lockUntilRaw);
  if (Number.isFinite(lockUntil) && lockUntil > Date.now()) {
    throw createError({
      statusCode: 429,
      statusMessage: "A wholesale inquiry was already submitted recently. Please try again in 24 hours.",
    });
  }

  const firstName = body.firstName?.trim() ?? "";
  const lastName = body.lastName?.trim() ?? "";
  const businessName = body.businessName?.trim() ?? "";
  const businessType = body.businessType?.trim() ?? "";
  const email = body.email?.trim() ?? "";
  const phone = body.phone?.trim() ?? "";
  const businessAddress = body.businessAddress?.trim() ?? "";
  const city = body.city?.trim() ?? "";
  const state = body.state?.trim() ?? "";
  const zipCode = body.zipCode?.trim() ?? "";
  const numberOfLocations = body.numberOfLocations?.trim() ?? "";
  const heardAboutLumn = body.heardAboutLumn?.trim() ?? "";
  const message = body.message?.trim() ?? "";
  const website = body.website?.trim() ?? "";

  if (website) {
    throw createError({
      statusCode: 400,
      statusMessage: "Unable to process this request.",
    });
  }

  const challengeA = Number(body.challengeA);
  const challengeB = Number(body.challengeB);
  const challengeAnswer = Number(body.challengeAnswer);
  const challengeIsValid =
    Number.isInteger(challengeA) &&
    Number.isInteger(challengeB) &&
    Number.isInteger(challengeAnswer) &&
    challengeA >= 1 &&
    challengeA <= 20 &&
    challengeB >= 1 &&
    challengeB <= 20 &&
    challengeAnswer === challengeA + challengeB;

  if (!challengeIsValid) {
    throw createError({
      statusCode: 400,
      statusMessage: "Human verification failed. Please solve the addition problem and try again.",
    });
  }

  if (
    !firstName ||
    !lastName ||
    !businessName ||
    !businessType ||
    !email ||
    !phone ||
    !businessAddress ||
    !city ||
    !state ||
    !zipCode ||
    !numberOfLocations
  ) {
    throw createError({
      statusCode: 400,
      statusMessage: "Missing required fields.",
    });
  }

  if (!isValidEmail(email)) {
    throw createError({
      statusCode: 400,
      statusMessage: "Invalid email address.",
    });
  }

  const recipient = runtimeConfig.contactRecipientEmail?.trim();
  if (!recipient) {
    throw createError({
      statusCode: 500,
      statusMessage: "Contact recipient email is not configured.",
    });
  }

  const resend = useResend();
  const requestTag = `[wholesale:${Date.now().toString(36)}]`;

  const html = `
    <h2>New Wholesale Retailer Inquiry</h2>
    <p><strong>First Name:</strong> ${escapeHtml(firstName)}</p>
    <p><strong>Last Name:</strong> ${escapeHtml(lastName)}</p>
    <p><strong>Business Name:</strong> ${escapeHtml(businessName)}</p>
    <p><strong>Business Type:</strong> ${escapeHtml(businessType)}</p>
    <p><strong>Email:</strong> ${escapeHtml(email)}</p>
    <p><strong>Phone:</strong> ${escapeHtml(phone)}</p>
    <p><strong>Business Address:</strong> ${escapeHtml(businessAddress)}</p>
    <p><strong>City:</strong> ${escapeHtml(city)}</p>
    <p><strong>State:</strong> ${escapeHtml(state)}</p>
    <p><strong>ZIP Code:</strong> ${escapeHtml(zipCode)}</p>
    <p><strong>Number of Locations:</strong> ${escapeHtml(numberOfLocations)}</p>
    <p><strong>How did you hear about LUMN:</strong> ${escapeHtml(heardAboutLumn || "Not provided")}</p>
    <p><strong>Message:</strong></p>
    <p>${escapeHtml(message || "Not provided").replaceAll("\n", "<br>")}</p>
    <hr>
    <p><a href="https://formworkstudios.com">Website by Formwork Studios</a></p>
  `;

  const emailSubject = `LUMN Wholesale Inquiry: ${businessName}`;

  console.info(`${requestTag} send-start`, {
    recipient,
    replyTo: email,
    subject: emailSubject,
  });

  const { data, error } = await resend.emails.send({
    from: `LUMN <hello@formworkstudios.xyz>`,
    to: recipient,
    reply_to: email,
    subject: emailSubject,
    html,
  });

  if (error) {
    console.error(`${requestTag} send-failed`, {
      recipient,
      subject: emailSubject,
      error,
    });

    throw createError({
      statusCode: 500,
      statusMessage: "Failed to send wholesale inquiry email.",
    });
  }

  console.info(`${requestTag} send-success`, {
    recipient,
    subject: emailSubject,
    resendId: data?.id,
  });

  const lockUntilMs = Date.now() + WHOLESALE_LOCK_SECONDS * 1000;
  setCookie(event, WHOLESALE_LOCK_COOKIE, String(lockUntilMs), {
    maxAge: WHOLESALE_LOCK_SECONDS,
    httpOnly: true,
    sameSite: "strict",
    secure: process.env.NODE_ENV === "production",
    path: "/",
  });

  setCookie(event, "lumn_wholesale_lock_public", String(lockUntilMs), {
    maxAge: WHOLESALE_LOCK_SECONDS,
    httpOnly: false,
    sameSite: "strict",
    secure: process.env.NODE_ENV === "production",
    path: "/",
  });

  return { ok: true, id: data?.id };
});
