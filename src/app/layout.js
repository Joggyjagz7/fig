import Navbar from "@/components/Navbar";
import "./globals.css";
import {  poppins, OpenSans} from "./fonts";

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${poppins.className} ${OpenSans.className} `}>
      <body className="relative">
        <div className="fixed z-[999] top-0 w-full">
          <Navbar />
        </div>

        {children}
      </body>
    </html>
  );
}
