import createMiddleware from "next-intl/middleware";
import { EN_LOCALE, LOCALES } from "app/config";

export default createMiddleware({
  locales: LOCALES,

  defaultLocale: EN_LOCALE,
});

export const config = {
  matcher: ["/", "/(ar|en)/:path*"],
};
