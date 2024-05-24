/* eslint-disable @next/next/no-img-element */
import PageWrapper from "~/components/wrapper/pageWrapper";
import "~/styles/globals.css";

import { exo } from "~/utils/fontComponents";

export const metadata = {
  title: "Dexnet",
  description: "DexnetChain",
  icons: [{ rel: "icon", url: "/DNC.png" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${exo.variable} scroll-smooth`}>
      <body>
        <PageWrapper>
          <div className="h-full w-full">{children}</div>
        </PageWrapper>
      </body>
    </html>
  );
}
