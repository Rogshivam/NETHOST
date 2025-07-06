# NetHost - Video Streaming Platform

A modern video streaming platform built with Next.js, featuring a beautiful UI and essential streaming features.

## Features

- 🎥 Modern video player with adaptive controls
- 🔐 User authentication (Email/Password, Google, GitHub)
- 🎬 Video categories and search
- 💎 Premium content with subscription wall
- 📱 Responsive design for all devices
- 🎨 Beautiful UI with Tailwind CSS

## Tech Stack

- **Frontend**
  - Next.js 14 (App Router)
  - TypeScript
  - Tailwind CSS
  - Video.js for video playback
  - NextAuth.js for authentication

- **Backend**
  - Next.js API Routes
  - Prisma ORM
  - PostgreSQL Database
  - JWT Authentication

## Getting Started

### Prerequisites

- Node.js 18+ and npm
- PostgreSQL database

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/nethost.git
   cd nethost
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   Create a `.env` file in the root directory with the following variables:
   ```env
   # Database
   DATABASE_URL="postgresql://postgres:postgres@localhost:5432/nethost?schema=public"

   # NextAuth
   NEXTAUTH_URL="http://localhost:3000"
   NEXTAUTH_SECRET="your-secret-key-here"

   # OAuth Providers (Optional)
   GOOGLE_CLIENT_ID=""
   GOOGLE_CLIENT_SECRET=""
   GITHUB_ID=""
   GITHUB_SECRET=""
   ```

4. Set up the database:
   ```bash
   npx prisma generate
   npx prisma db push
   ```

5. Run the development server:
   ```bash
   npm run dev
   ```

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/                 # Next.js app router pages
├── components/         # React components
│   ├── auth/          # Authentication components
│   ├── layout/        # Layout components
│   ├── video/         # Video-related components
│   └── ui/            # Reusable UI components
├── lib/               # Utility functions and configurations
├── types/             # TypeScript type definitions
└── middleware.ts      # Next.js middleware
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Prisma](https://www.prisma.io/)
- [NextAuth.js](https://next-auth.js.org/)
- [Video.js](https://videojs.com/)
