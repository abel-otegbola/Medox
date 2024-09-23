import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import AuthProvider from "@/context/useAuth";
import Footer from "@/components/footer/footer";
import CheckDashboard from "@/components/header/checkHeader";
import NextTopLoader from "nextjs-toploader";

const roboto = Roboto({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Medox",
  description: "Health care",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
        <body className={`${roboto.className} text-[14px] text-secondary dark:bg-dark dark:text-gray`}>
          <AuthProvider>
            <NextTopLoader />
              <CheckDashboard />
              {children}
              <Footer />
          </AuthProvider>
        </body>
    </html>
  );
}
