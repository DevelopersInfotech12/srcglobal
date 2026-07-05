import { Cormorant_Garamond, Jost } from 'next/font/google';
import { ThemeProvider } from './lib/ThemeContext';
import './globals.css';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-cormorant',
  display: 'swap',
});

const jost = Jost({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-jost',
  display: 'swap',
});

export const metadata = {
  title: 'SRC Global | BIS Certification, EPR, WPC, TEC & BEE Consultants in India',
  description:
    'Trusted compliance consultants for BIS Certification, EPR Registration, WPC Approval, TEC MTCTE, BEE, LMPC, ISO and CDSCO services across India. 12+ years · 10,000+ clients · 0% failure rate.',
  keywords: 'BIS Certification, EPR Registration, WPC Approval, TEC MTCTE, BEE Registration, LMPC, ISO, CDSCO, Compliance Consultants India',
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* No-flash theme script — runs before React hydrates */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme')||(matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light');if(t==='dark')document.documentElement.classList.add('dark');}catch(e){}})();`,
          }}
        />
      </head>
      <body className={`${cormorant.variable} ${jost.variable}`}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
