# Resend Contact Forms

Use Resend to handle contact forms in Nuxt projects.

## Standard setup

- Nuxt 3/4
- pnpm when the project uses pnpm
- Nuxt UI for the frontend form when already installed
- Resend for email
- Server-side API endpoint in `server/api/`
- Never expose the Resend API key to the client

Install if needed:

`pnpm add resend`

Use:

`NUXT_RESEND_API_KEY`

## Sender

Always send from:

`[BUSINESS NAME] <hello@formworkstudios.xyz>`

`hello@formworkstudios.xyz` is the Formwork Studios sending alias.

The business name is different for every project and must be determined from the project.

Do not use the client's domain as the sender unless explicitly requested.

## Recipient

Determine the recipient from the project.

Look for an existing business/contact/admin email in the project or configuration.

If it cannot be determined, ask for the recipient email.

Never let the frontend choose the recipient.

## Contact form

There will be a contact form somewhere in the project, likely using Nuxt UI.

Inspect the existing form before creating the API endpoint.

Determine exactly which fields it submits.

Do not assume every form has the same fields.

Connect the existing form to a server API endpoint such as:

`server/api/contact.post.ts`

Do not redesign the form unless necessary.

## Email

Send the submitted form information to the business recipient.

Use the submitted email as `replyTo` so the recipient can reply directly to the person who submitted the form.

Use a clear subject containing the business name and form purpose.

Create a simple HTML email displaying all submitted fields.

Include:

`Website by Formwork Studios`

Link it to:

`https://formworkstudios.com`

## Validation

Validate the form data server-side.

At minimum:
- required fields
- valid email format

Match validation to the actual form fields.

Do not blindly enforce phone-number formats or other requirements unless the project requires them.

## Security

Never:
- expose the Resend API key
- put the API key in `runtimeConfig.public`
- accept `from` or `to` from the frontend
- commit `.env`

## Implementation process

Before making changes:

1. Inspect `package.json` and determine the package manager.
2. Inspect the existing Nuxt UI contact form.
3. Determine its submitted fields.
4. Check whether a server API endpoint already exists.
5. Check the project's environment/configuration.
6. Determine the business name and recipient.
7. Install Resend if necessary.
8. Connect the form to the server endpoint.
9. Test the existing form's success and error handling.

Keep the implementation minimal and follow the project's existing conventions.
