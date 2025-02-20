import Navbar from "@/components/Navbar";
import "./globals.css";
import { dm_sans, nunito_sans } from "./fonts";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Fig- Financing for Creators",
  description: "Your creativity knows no boundary. Neither should the resources tobring it to life."
}
export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${dm_sans.className} ${nunito_sans.className} `}
    >
      <body className="relative w-full">
        <div className="fixed z-[999] top-0 w-full">
          <Navbar />
        </div>

        {children}
        <Footer />
      </body>
    </html>
  );
}
