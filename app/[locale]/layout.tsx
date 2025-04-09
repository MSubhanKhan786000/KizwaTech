import type { Metadata } from "next";
import "./globals.css";

import { Provider } from "app/provider";
import { theme } from "app/config";
import { poppins, nura, nuraBold } from "app/config/fonts";
import { RootLayoutProps } from "app/interfaces";
import { Header } from "app/components";
import { NextIntlClientProvider, useMessages } from "next-intl";
export const metadata: Metadata = {
  title: "KizwaTech | Innovative Technology Solutions",
  description:
    "KizwaTech is your trusted partner for cutting-edge technology solutions, offering expert advice, support, and a range of services to help you navigate the tech landscape.",
  keywords:
    "Technology Solutions, Expert Support, IT Consulting, Tech Services, Digital Transformation",
  authors: { name: "KizwaTech" },
  robots: "index, follow",
};

export default function RootLayout({
  children,
  params: { locale },
}: Readonly<RootLayoutProps>) {
  const messages = useMessages();
  return (
    <html
      lang={locale}
      className={`${poppins.variable} ${nura.variable} ${nuraBold.variable}`}
      suppressHydrationWarning
    >
      <body className={`bg-white dark:bg-dark-mode-bg overflow-x-hidden`}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Provider>
            <Header />
            <main>{children}</main>
          </Provider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
