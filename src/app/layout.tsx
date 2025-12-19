import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";
import { headers } from "next/headers";
import MainClientUIAuthWrapper from "@/components/main-client-ui-auth-warper";
import MainClientUIAppWrapper from "@/components/main-client-ui-app-warper";

const rubik = Rubik({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-rubik",
});

export const metadata: Metadata = {
  title: "HalaBaak",
  description: "HalaBaak | Secure and Reliable Free Private Messaging",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const headersList = await headers();
  const country = headersList.get("X-CF-Country");

  const session = true;

  if (!session) {
    return (
      <html lang="en">
        <body className={`${rubik.variable} antialiased`}>
          <MainClientUIAuthWrapper country={country} />
        </body>
      </html>
    );
  }

  return (
    <html lang="en">
      <body className={`${rubik.variable} antialiased`}>
        <MainClientUIAppWrapper>{children}</MainClientUIAppWrapper>
      </body>
    </html>
  );
}
