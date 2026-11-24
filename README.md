# Muhammad Adam — Developer Portfolio

A personal developer portfolio built with **Next.js, React, TypeScript, and Tailwind CSS**. It showcases my technical skills, selected projects, and contact information through a modern, responsive, bilingual experience.

**Live Website:** [muhammadadam.vercel.app](https://muhammadadam.vercel.app/)

## Features

- **Bilingual Interface:** Supports Arabic and English.
- **RTL/LTR Support:** Automatically adapts layout direction based on the selected language.
- **Light and Dark Themes:** Switch between light and dark appearances.
- **Responsive Design:** Optimized for desktop, tablet, and mobile devices.
- **Accessibility:** Includes accessibility-conscious interface patterns and reduced-motion support.
- **Projects and Skills:** Dedicated sections showcasing development projects and technical skills.
- **Contact Form:** Server-side email delivery using Resend.
- **Rate Limiting:** Protects the contact endpoint using Upstash Redis and Ratelimit.
- **SEO Foundations:** Includes metadata, sitemap, robots configuration, and other search-engine optimization essentials.

## Tech Stack

| Technology                                    | Purpose              |
| --------------------------------------------- | -------------------- |
| [Next.js](https://nextjs.org/)                | React framework      |
| [React](https://react.dev/)                   | UI development       |
| [TypeScript](https://www.typescriptlang.org/) | Type-safe JavaScript |
| [Tailwind CSS](https://tailwindcss.com/)      | Styling              |
| [Resend](https://resend.com/)                 | Email delivery       |
| [Upstash Redis](https://upstash.com/)         | Rate limiting        |

## Getting Started

### Prerequisites

- Node.js compatible with the project's Next.js version.
- npm.
- A Resend API key for contact-form email delivery.
- Upstash Redis REST credentials for rate limiting.

### Installation

Clone the repository:

```bash
git clone https://github.com/devmuhammadadam/my-portfolio.git
cd my-portfolio
```

Install dependencies:

```bash
npm install
```

### Environment Variables

Create a `.env.local` file in the project root:

```env
RESEND_API_KEY=your_resend_api_key
UPSTASH_REDIS_REST_URL=your_upstash_redis_rest_url
UPSTASH_REDIS_REST_TOKEN=your_upstash_redis_rest_token
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

Replace the example values with your actual configuration.

**Security Notice:** Never commit `.env.local`, API keys, or other sensitive credentials to the repository.

### Run Locally

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

| Command         | Description                                   |
| --------------- | --------------------------------------------- |
| `npm run dev`   | Starts the development server.                |
| `npm run build` | Creates an optimized production build.        |
| `npm run start` | Starts the production server after building.  |
| `npm run lint`  | Runs the project's configured linting checks. |

## Contact Form

The contact form submits requests to the server-side API endpoint:

```text
/api/contact
```

Email delivery is handled by Resend, while Upstash Redis and Ratelimit provide request protection.

### Configuration

- Set `RESEND_API_KEY` in `.env.local`.
- The current test sender is `onboarding@resend.dev`.
- Production email delivery may require a verified domain and a properly configured sender address in Resend.
- The recipient email address is configured in the server-side contact route.
- Rate limiting allows up to **5 requests per IP address within 10 minutes**.
- The rate limiter uses a fail-closed approach: requests are rejected if the required rate-limiting service is unavailable.

Keep all secret credentials on the server. Never expose them through client-side code.

## Deployment

The portfolio is deployed using [Vercel](https://vercel.com/).

To deploy your own instance:

1. Push the project repository to GitHub.
2. Import the repository into Vercel.
3. Configure the required environment variables in Vercel's project settings.
4. Set `NEXT_PUBLIC_SITE_URL` to your production website URL.
5. Configure and verify your production sender domain in Resend if required.
6. Deploy the project and verify that the production build, contact form, rate limiting, language switching, and theme switching work correctly.

## Copyright

Copyright © 2026 Muhammad Adam. All rights reserved.

No license is granted to use, copy, modify, distribute, or reproduce this project's source code or other original materials without prior written permission from the copyright holder.

Third-party libraries and assets remain subject to their respective licenses and terms.
