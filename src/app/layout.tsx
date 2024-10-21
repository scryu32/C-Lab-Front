import "./globals.css";
import NavBar from "./navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <NavBar/>
        {children}
      </body>
    </html>
  );
}
