import Navbar from "@/components/navbar";
import "./globals.css";

export const metadata = {
  title: "3codevault",
  description: "All FullStack Projects- available for free",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="selection:bg-primary selection:text-white">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
