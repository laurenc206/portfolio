import type { Metadata } from "next";
import { Inter, Domine } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./provider";

const inter = Inter({ subsets: ["latin"] });
const domine = Domine({ subsets: ["latin"], variable: '--font-domine' });

export const metadata: Metadata = {
  title: "Lauren's Portfolio",
  description: "Portfolio 2",

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${domine.variable}`}> 
        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
        >
     
            {children}
      
        </ThemeProvider>
      </body>
    </html>
  );
}
