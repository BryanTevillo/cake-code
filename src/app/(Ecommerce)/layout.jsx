"use client";
import Footer from "../../app/components/Footer/Footer.jsx";
import "../globals.css";
import Header from "../../app/components/NavBar/NavBar.jsx";
export default function LayoutPrincipal({ children }) {
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
