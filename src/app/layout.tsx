import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import SmallSideBar from "@/components/small-sidebar";
import { MuiSystemThemeProvider } from "@/context/theme";
import LargeSideBar from "@/components/large-sidebar";
import MainClientUIWrapper from "@/components/main-client-ui-warper";

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
  return (
    <html lang="en">
      <body className={`${roboto.variable} antialiased`}>
        <MainClientUIWrapper>
          <MuiSystemThemeProvider>
            <main className="flex flex-row items-start h-screen overflow-y-hidden">
              <SmallSideBar />
              <LargeSideBar />
              <div className="flex flex-1 w-full md:max-w-5xl md:mx-auto">
                {children}
              </div>
            </main>
          </MuiSystemThemeProvider>
        </MainClientUIWrapper>
      </body>
    </html>
  );
}
