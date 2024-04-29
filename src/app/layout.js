import "./globals.css";
import Header from "./components/Header";
import NavbarMobiles from "./components/NavbarMobiles";
import { Inter } from 'next/font/google'
import Footer from "./components/Footer";
 
// If loading a variable font, you don't need to specify the font weight
const inter = Inter({ subsets: ['latin'] })


export const metadata = {
  title: "Agencia Nexus Marketing",
  description: "Agencia IA Marketing Reynosa",
};

export default function AppLayout({ children }) {
  return (
    <html>
      <body>
        <Header />
        <NavbarMobiles/>
        <main className={inter.className}>{children}</main>
        <Footer/>
      </body>
    </html>
  );
}
