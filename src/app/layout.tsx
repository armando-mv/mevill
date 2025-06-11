import type { Metadata } from 'next';
import './globals.css';
import { Inter } from 'next/font/google';
import { cn } from '@/lib/utils';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: {
    default: 'Mevill Constructions - Engineering & Building Excellence',
    template: '%s - Mevill Constructions',
  },
  description: 'Mevill Constructions: Your trusted partner in civil engineering and construction projects. We build the future, strong and reliable.',
  keywords: ['civil engineering', 'construction', 'mevill', 'building', 'infrastructure'],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn(inter.variable, "font-body")} suppressHydrationWarning={true}>
      <head>
        {/* Google Fonts are managed by next/font, no need for manual <link> tags if using it properly.
            If specific instructions were to use <link>, they would be here.
            The current setup with next/font is preferred.
        */}
      </head>
      <body className="font-body antialiased flex flex-col min-h-screen" suppressHydrationWarning={true}>
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
