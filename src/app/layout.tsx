import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { Providers } from "./providers";

const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "FreeWeather",
  description: "Aplicación de pronóstico del tiempo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
