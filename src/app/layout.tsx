import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "毛日和寵物洗護 | 專業寵物美容與沐浴",
  description:
    "毛日和寵物洗護提供犬貓沐浴、美容修剪、皮毛護理與安親接送服務，給毛孩溫柔、乾淨、安心的照顧。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-Hant">
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
