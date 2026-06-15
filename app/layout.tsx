import Header from '@/components/Header/Header';
import './globals.css';
import Footer from '@/components/Footer/Footer';
import TanStackProvider from '@/components/TanStackProvider/TanStackProvider';
import { Metadata } from 'next';

interface RootLayoutProps {
  children: React.ReactNode;
  details: React.ReactNode;
}

export const metadata: Metadata = {
  title: 'App for practice',
  description: 'An app for practice sessions on the Bootcamp 80 course.',
  openGraph: {
    title: 'App for practice',
    description: 'An app for practice sessions on the Bootcamp 80 course.',
  }
}

export default function RootLayout({ children, details }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>
        <TanStackProvider>
          <Header />
          <main>
            {children}
            {details}
          </main>
          <Footer />
        </TanStackProvider>
      </body>
    </html>
  );
}
