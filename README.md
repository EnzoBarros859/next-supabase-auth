# Next.js Supabase Authentication

A modern authentication system built with Next.js 14 and Supabase, featuring a beautiful dark theme UI and secure authentication flows.

## Features

- 🔐 Secure Authentication with Supabase
- 🌙 Modern Dark Theme UI
- 📱 Responsive Design
- 🔄 Real-time Session Management
- 🔒 Protected Routes
- 📧 Email Verification
- 🔑 Password Reset Flow
- 👤 User Profile Management
- 👨‍💼 Admin Dashboard

## Tech Stack

- [Next.js 14](https://nextjs.org/) - React Framework
- [Supabase](https://supabase.com/) - Backend & Authentication
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [TypeScript](https://www.typescriptlang.org/) - Type Safety

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Supabase account

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/nextjs-supabase-auth.git
cd nextjs-supabase-auth
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Create a `.env.local` file in the root directory and add your Supabase credentials:
```env
NEXT_PUBLIC_SUPABASE_URL=your-project-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
```

4. Start the development server:
```bash
npm run dev
# or
yarn dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/                    # Next.js app directory
│   ├── auth/              # Authentication routes
│   ├── profile/           # User profile page
│   ├── admin/             # Admin dashboard
│   └── layout.tsx         # Root layout
├── components/            # React components
│   ├── Auth/             # Authentication components
│   ├── Header.tsx        # Navigation header
│   └── UserProfile.tsx   # User profile component
└── lib/                  # Utility functions
```

## Authentication Flows

### Sign In
- Email and password authentication
- Secure session management
- Error handling and validation
- "Remember me" functionality

### Sign Up
- Email verification
- Password confirmation
- Secure account creation
- Welcome email

### Password Reset
- Secure password reset flow
- Email-based reset link
- Password confirmation
- Success/error feedback

### User Profile
- View and edit profile information
- Update password
- Session management
- Account status

## Security Features

- Server-side authentication checks
- Protected API routes
- Secure session management
- CSRF protection
- Rate limiting
- Input validation

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Next.js Documentation](https://nextjs.org/docs)
- [Supabase Documentation](https://supabase.com/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
