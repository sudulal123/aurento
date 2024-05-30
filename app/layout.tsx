import "./globals.css";
import { Footer, NavBar } from "@components";

export const metadata = {
  title: "Lux Wheels",
  description: "Luxury cars haven",
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
