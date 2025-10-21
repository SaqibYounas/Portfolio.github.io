import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] });
const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata = {
  title: 'Muhammad Saqib Younas | Full Stack Developer Portfolio',
  description:
    'Portfolio of Muhammad Saqib Younas — Full Stack Developer based in Lahore, Pakistan. Skilled in React.js, Next.js, Node.js, and building responsive, modern web applications.',
  keywords: [
    'Muhammad Saqib Younas',
    'Full Stack Developer',
    'Web Developer Lahore',
    'Next.js Developer',
    'React Developer',
    'Node.js Developer',
    'Portfolio Website',
    'Frontend Developer',
    'Backend Developer',
  ],
  authors: [
    {
      name: 'Muhammad Saqib Younas',
      url: 'https://www.linkedin.com/in/muhammad-saqib-younas',
    },
  ],
  creator: 'Muhammad Saqib Younas',
  publisher: 'Muhammad Saqib Younas',
  metadataBase: new URL('https://portfolio-github-io-seven-gamma.vercel.app'),

  openGraph: {
    title: 'Muhammad Saqib Younas | Full Stack Developer Portfolio',
    description:
      'Explore the professional portfolio of Muhammad Saqib Younas, a Full Stack Developer specializing in React, Next.js, and Node.js.',
    url: 'https://portfolio-github-io-seven-gamma.vercel.app',
    siteName: 'Muhammad Saqib Younas Portfolio',
    images: [
      {
        url: '/profile.jpg',
        width: 1200,
        height: 630,
        alt: 'Muhammad Saqib Younas - Full Stack Developer Portfolio',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Muhammad Saqib Younas | Full Stack Developer Portfolio',
    description:
      'Full Stack Developer based in Lahore — experienced in React.js, Next.js, Node.js, and modern web technologies.',
    images: ['/profile.jpg'],
  },

  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },

  category: 'Portfolio',
  robots: { index: true, follow: true, nocache: false },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} relative min-h-screen overflow-y-auto bg-gray-900 text-white antialiased`}
      >
        <div className="pointer-events-none fixed inset-0 -z-10 bg-gray-900"></div>

        <>{children}</>
      </body>
    </html>
  );
}
