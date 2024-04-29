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
      <head>
      <link rel="favicon agencia Nexus" href="/favicon/favicon.ico"/>
      <meta charset="UTF-8"/>
      <meta name="description" content="Agencia Nexus Marketing IA"/>
      <meta name="keywords" content="Agencia Marketing Reynosa, IA marketing Reynosa, Paginas web reynosa, diseño web reynosa, video reynosa "/>
      <meta name="lang" content="es"/>
      <meta property="og:image" content="/ia_nexus_chat.png"/>
      </head>
      <body>
        <Header />
        <NavbarMobiles/>
        <main className={inter.className}>{children}</main>
        <Footer/>
      </body>
    </html>
  );
}
