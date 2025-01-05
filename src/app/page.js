"use client"
import Brand from "./components/Brand";
import VideoHero from "./components/VideoHero";
import AnimatedText from "./components/AnimatedText";
import LogoCarousel from "./components/LogoCarousel";
import LogoCarouselLeft from "./components/LogoCarouselLeft";
import Title from "./components/ui/Title";
import styles from "./page.module.css";
import "./style.css"
import Tabs from "./components/Tabs";
import SectionDouble from "./components/SectionDouble";
import MoreServices from "./components/MoreServices";
import Questions from "./components/Questions";
import WhatsAppIcon from "./components/WhatsAppIcon";



export default function Home() {
  const tabs = [
    { label: 'Diseño de marca', content1: 'Logotipo', content2: 'Identidad de Marca', content3: 'Materiales de Marketing', content4: 'Presentaciones',content5: 'Plantillas para Redes Sociales', image:"/Notebook.webp", link:"/diseno-de-marca"},
    { label: 'Diseño de páginas web', content1: 'Propuesta visual', content2: 'Palabras Clave', content3: 'Hosting', content4: 'Dominio',content5: 'Correos Electrónicos', image:"/Mac.webp", link:"/diseno-de-paginas-web" },
    { label: 'Desarrollo web', content1: 'Análisis de requerimientos', content2: 'Diseño y Desarrollo', content3: 'Stack tecnológico', content4: 'Agile',content5: 'Seguimiento',image:"/developer-web.png", link:"/desarrollo-web" },
    { label: 'Gestión de redes sociales',content1: 'Análisis Inicial y Estrategia de Redes Sociales', content2: 'Calendario', content3: 'Contenido Creativo', content4: 'Contestaciones automáticas con bot',content5: 'Y Más +', image:"/phone.png", link:"/communty-manager"},
    { label: 'Community manager',content1: 'Análisis Inicial y Estrategia de Redes Sociales', content2: 'Calendario', content3: 'Contenido Creativo', content4: 'Interacción y Participación',content5: 'Y Más +', image:"/redes.webp", link:"/communty-manager"},
    { label: 'Video', content1: 'Propuesta de Idea de Video', content2: 'Edición', content3: 'Correcciones', content4: 'Video',content5: ' Y Más +',image:"/video.webp", link:"/video" },
    { label: 'Marketing Digital', content1: 'Análisis de Mercado y Competencia', content2: 'Estrategia de Posicionamiento', content3: 'Plan de Comunicación y Promoción', content4: 'Posicionamiento',content5: 'Y Más +', image:"/marker.webp", link:"/marketing-digital"},
    { label: 'Consultoría con ChatNexus IA', content1: 'Análisis y Recomendaciones Iniciales', content2: 'Plan Estratégico', content3: 'Desarrollo de Propuestas', content4: 'Consulta de Datos',content5: 'Y Más +',image:"/ia.webp", link:"/consultoria-chatnexus-ia" },
    { label: 'Marketing para Academias', content1: 'Análisis y Plan Estratégico', content2: 'Diseño y Desarrollo de Contenido', content3: 'Campañas de Publicidad Digital', content4: 'Plataforma Educativa',content5: 'Seguimiento',image:"/academy.png", link:"/marketing-para-academias" },
    { label: 'Chatbots', content1: 'Diseño de bot', content2: 'Programación de respuestas', content3: 'Revisión de disponibilidad', content4: 'Asistente de flujo de conversación',content5: 'Seguimiento',image:"/bot-m.png", link:"/chatbots" },
    { label: 'Menús digitales', content1: 'Diseño y propuesta', content2: 'Iconos por categorías de comida', content3: 'Fotografía de comida', content4: 'Manternimiento',content5: 'Seguimiento',image:"/menu.png", link:"/menu-digital" },
    { label: 'Tarjetas Digitales', content1: 'Tarjeta de PVC', content2: 'Código QR', content3: 'Tarjeta digital web', content4: 'Dirección url personalizada',content5: 'Seguimiento',image:"/tarjetas-g.png", link:"/tarjeta-digitales" },
    { label: 'Videos con dron', content1: 'Análisis y Plan Estratégico', content2: 'Diseño y Desarrollo de Contenido', content3: 'Campañas de Publicidad Digital', content4: 'Plataforma Educativa',content5: 'Seguimiento',image:"/diji-m.png", link:"/videos-con-dron" },

  ];
  return (
    <main className={styles.main}>
      <VideoHero/>
      <div id="mobile-reel">
      </div>
      <Brand/>
      <AnimatedText/>
      <Title text={"Nuestros clientes"}/>
      <LogoCarousel/>
      <LogoCarouselLeft/>
      <Tabs tabs={tabs}/>
      <SectionDouble/>
      <MoreServices/>
      <WhatsAppIcon/>
      <Questions/>
    </main>
  );
}
