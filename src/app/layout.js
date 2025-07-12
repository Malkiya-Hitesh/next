// app/layout.js or app/layout.tsx

import Navbar from "./Navbar";

export const metadata = {
  title: "first",
  description: "next js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
