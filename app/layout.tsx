import localFont from "next/font/local";
import "./globals.css";
import Navigation from "@/components/navigation";

// import PlanetBg from "@/components/planetBg";

// export const antonio = localFont({
//   src: "./fonts/Antonio-Medium.woff",
//   weight: "500",
// });
const leagueSpartan = localFont({
  src: "./fonts/LeagueSpartan-Bold.woff",
  weight: "700",
});
// export const leagueSpartanRegular = localFont({
//   src: "./fonts/LeagueSpartan-Regular.woff",
//   weight: "400",
// });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${leagueSpartan.className} bg-tertiary-900 text-tertiary-100 bg-[url('/assets/background-stars.svg')]`}
      >
        <div style={{ height: "100vh" }}>
          <div>
            <Navigation />
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
