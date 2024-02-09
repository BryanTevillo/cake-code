import Footer from "./components/Footer/Footer";

import "./globals.css";
import Header from "./components/NavBar/NavBar.jsx";
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
