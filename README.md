This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## WebView

The WebView feature is in active development. Workarounds:

- Use ResizeObserver to detect changes in the height of the object element, but please note that it currently only works in Firefox due to a known bug [https://bugzilla.mozilla.org/show_bug.cgi?id=1689099](https://bugzilla.mozilla.org/show_bug.cgi?id=1689099).

- Use fetch to check the availability of the site, but be aware that it may not work on sites with the 'X-Frame-Options' header.

Here are some sites that work and some that do not work.

| work                                                          | not work             |
|---------------------------------------------------------------|----------------------|
| https://github.io                                             | https://google.com   |
| https://estradax.github.io                                    | https://mixpanel.com |
| https://www.youtube.com/embed/lJIrF4YjHfQ?si=Wth2R4pS2NHzIjDO |                      |
| https://twitter.com (display error message)                   |                      |

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
