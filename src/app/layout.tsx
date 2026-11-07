import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'arther-AI asisten',
  description:
    'Asisten AI pribadi untuk membantu menjawab pertanyaan dengan ramah dan cerdas.',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: 'arther-AI asisten',
  },
  icons: {
    icon: '/brand-icon.svg',
    apple: '/icons/icon-180x180.png',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  interactiveWidget: 'resizes-content',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#14213d" />
        <meta name="description" content={metadata.description as string} />
        {/* PWA Meta Tags */}
        <link rel="manifest" href="/manifest.json" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="arther-AI asisten" />
        <link rel="apple-touch-icon" href="/icons/icon-180x180.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/icons/icon-152x152.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="/icons/icon-144x144.png" />
        <link rel="apple-touch-icon" sizes="128x128" href="/icons/icon-128x128.png" />
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#f5f7fc] text-[#14213d] transition-colors duration-300 dark:bg-[#0b1220] dark:text-slate-100">
        {children}
      </body>
    </html>
  );
}
