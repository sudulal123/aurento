import "./globals.css";
import { Footer, NavBar } from "@components";

export const metadata = {
  title: "Aurento",
  description: "Car leasing portal",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className='relative'>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
