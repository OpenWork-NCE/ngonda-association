import type {Metadata} from 'next';
import {Cormorant_Garamond, Sora} from 'next/font/google';
import './globals.css';
import {ThemeProvider} from '@/components/theme-provider';

const sora = Sora({
  variable: '--font-sora',
  subsets: ['latin']
});

const cormorant = Cormorant_Garamond({
  variable: '--font-cormorant',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700']
});

export const metadata: Metadata = {
  title: 'NGONDA e.V.',
  description:
    'NGONDA e.V. accompagne et renforce les femmes migrantes en Allemagne.',
  icons: {
    icon: [{url: '/ngonda-logo.png', type: 'image/png'}],
    shortcut: '/ngonda-logo.png',
    apple: '/ngonda-logo.png'
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" suppressHydrationWarning>
      <body className={`${sora.variable} ${cormorant.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
