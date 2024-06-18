import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/footer/Footer';
import Coffee from '@/components/coffee/Coffee';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'Full stack NextJS app',
    template: '%s | Full stack NextJS app',
  },
  description: 'Homepage description',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main className="lg:min-h-[calc(100vh-120px)]">{children}</main>

        <Footer />
        <Coffee />
      </body>
    </html>
  );
}
