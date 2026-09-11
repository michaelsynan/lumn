type ContactRequestBody = {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
};

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
  const body = await readBody<ContactRequestBody>(event);
  const runtimeConfig = useRuntimeConfig(event);

  const name = body.name?.trim() ?? "";
  const email = body.email?.trim() ?? "";
  const subject = body.subject?.trim() ?? "";
  const message = body.message?.trim() ?? "";

  if (!name || !email || !subject || !message) {
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
  const businessName = "LUMN";
  const requestTag = `[contact:${Date.now().toString(36)}]`;

  const html = `
    <h2>New Contact Form Submission</h2>
    <p><strong>Name:</strong> ${escapeHtml(name)}</p>
    <p><strong>Email:</strong> ${escapeHtml(email)}</p>
    <p><strong>Subject:</strong> ${escapeHtml(subject)}</p>
    <p><strong>Message:</strong></p>
    <p>${escapeHtml(message).replaceAll("\n", "<br>")}</p>
    <hr>
    <p><a href="https://formworkstudios.com">Website by Formwork Studios</a></p>
  `;

  console.info(`${requestTag} send-start`, {
    recipient,
    from: `${businessName} <hello@formworkstudios.xyz>`,
    replyTo: email,
    subject: `${businessName} Contact Form: ${subject}`,
  });

  const { data, error } = await resend.emails.send({
    from: `${businessName} <hello@formworkstudios.xyz>`,
    to: recipient,
    reply_to: email,
    subject: `${businessName} Contact Form: ${subject}`,
    html,
  });

  if (error) {
    console.error(`${requestTag} send-failed`, {
      recipient,
      subject,
      error,
    });

    throw createError({
      statusCode: 500,
      statusMessage: "Failed to send contact email.",
    });
  }

  console.info(`${requestTag} send-success`, {
    recipient,
    subject,
    resendId: data?.id,
  });

  return { ok: true, id: data?.id };
});
