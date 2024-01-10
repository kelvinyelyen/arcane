# Arcane
### Introduction
Arcane serves as a minimalist web-based solution developed as part of the Harvard CS50x final project. It simplifies newsletter management complexities, providing an intuitive remedy for subscriber handling and enabling the creation of engaging newsletters via a comprehensive text editor. Seamlessly integrated with email services, Arcane optimizes communication efficiency and fosters increased subscriber engagement.

Here are some of the features that Arcane provides out-of-the-box:
- **Dashboard:** Gain insights into subscriber engagement metrics and trends through a comprehensive dashboard.

## Deploy Your Own

> Note: one-click deployment is a bit broken at the moment – you'll need to change some of the hard-coded values in the codebase to get it working. We're working on fixing this.

Deploy your own instance of Arcane for enhanced privacy and control. Click the link below to deploy Arcane to Vercel.

[![Deploy with Vercel](https://vercel.com/button)]()

## Built Using
- [Next.js](https://nextjs.org/): Powers the interactive user interface for managing newsletters.
- [Typescript](https://www.typescriptlang.org/): Provides strong typing and ensures code consistency for maintainability.
- [Tailwind CSS](https://tailwindcss.com/): Streamlines UI development, offering a clean and responsive interface.
- [Kinde Auth](https://kinde.com/): Manages user authentication and secures newsletter content.
- [Vercel](https://vercel.com/):  Hosts and deploys Arcane for seamless accessibility.


## Implementation

Arcane is structured as a standard Next.js application. It utilizes [Middleware](https://nextjs.org/docs/advanced-features/middleware) to handle multi-tenancy, drawing inspiration from [the Vercel Platforms Starter Kit](https://github.com/vercel/platforms).

## Author

- Kelvin Yelyen ([@kelvinyelyen](https://twitter.com/kelvinyelyen))
