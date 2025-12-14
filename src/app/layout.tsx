import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import SmallSideBar from "@/components/small-sidebar";
import { MuiSystemThemeProvider } from "@/context/theme";
import LargeSideBar from "@/components/large-sidebar";
import MainClientUIWrapper from "@/components/main-client-ui-warper";
import AuthFlowSection from "@/components/auth-flow-section";
import { headers } from "next/headers";
import { ChatItemType } from "@/mocks/fake-types";

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

  const response = await fetch(
    'https://fake-chats-data-fetch.n-qahtani.workers.dev/data'
  );

  if (!response.ok) {
    console.log(response)
  }

  const data: ChatItemType[] = await response.json();

  const session = true;

  if (!session) {
    return (
      <html lang="en">
        <body className={`${roboto.variable} antialiased`}>
          <MainClientUIWrapper>
            <MuiSystemThemeProvider>
              <main className="w-full h-screen overflow-hidden">
                <AuthFlowSection country={country} />
              </main>
            </MuiSystemThemeProvider>
          </MainClientUIWrapper>
        </body>
      </html>
    );
  }
  return (
    <html lang="en">
      <body className={`${roboto.variable} antialiased`}>
        <MainClientUIWrapper>
          <MuiSystemThemeProvider>
            <main className="flex flex-row items-start max-h-screen min-h-screen h-screen overflow-y-hidden">
              <SmallSideBar />
              <LargeSideBar data={data}/>
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
