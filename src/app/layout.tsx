import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import SmallSideBar from "@/components/small-sidebar";
import { MuiSystemThemeProvider } from "@/context/theme";
import LargeSideBar from "@/components/large-sidebar";
import { headers } from "next/headers";
import { ChatItemType } from "@/mocks/fake-types";
import MainClientUIAuthWrapper from "@/components/main-client-ui-auth-warper";
import MainClientUIAppWrapper from "@/components/main-client-ui-app-warper";
import AuthFlowSection from "@/components/auth-flow-section";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-roboto",
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
  const country = headersList.get('X-CF-Country');

  const session = true;

  if (!session) {
    return (
      <html lang="en">
        <body className={`${roboto.variable} antialiased`}>
          <MainClientUIAuthWrapper country={country} />
        </body>
      </html>
    );
  }
  
  return (
    <html lang="en">
      <body className={`${roboto.variable} antialiased`}>
        <MainClientUIAppWrapper>
          {children}
        </MainClientUIAppWrapper>
      </body>
    </html>
  );
}
