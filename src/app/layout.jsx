import Footer from "./(componentes)/Footer";

import "./globals.css";
import Header from "./(componentes)/header.jsx";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
     <body className="min-h-screen">
        <Header></Header>
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
