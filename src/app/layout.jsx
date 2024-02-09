import Footer from "./(componentes)/Footer";

import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen">
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
