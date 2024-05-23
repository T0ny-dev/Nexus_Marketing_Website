"use client"
import Brand from "./components/Brand";
import VideoHero from "./components/VideoHero";
import AnimatedText from "./components/AnimatedText";
import LogoCarousel from "./components/LogoCarousel";
import styles from "./page.module.css";
import "./style.css"
import Tabs from "./components/Tabs";
import SectionDouble from "./components/SectionDouble";
import MoreServices from "./components/MoreServices";
import Questions from "./components/Questions";
import Video from "./components/ui/Video";



export default function Home() {
  const tabs = [
    { label: 'Diseño de marca', content1: 'Logotipo', content2: 'Identidad de Marca', content3: 'Materiales de Marketing', content4: 'Presentaciones',content5: 'Plantillas para Redes Sociales', image:"/Notebook.webp", link:"/diseno-de-marca"},
    { label: 'Diseño web', content1: 'Propuesta visual', content2: 'Palabras Clave', content3: 'Hosting', content4: 'Dominio',content5: 'Correos Electrónicos', image:"/Mac.webp", link:"/diseno-web" },
    { label: 'Video', content1: 'Propuesta de Idea de Video', content2: 'Edición', content3: 'Correcciones', content4: 'Video',content5: ' Y Más +',image:"/video.webp", link:"/video" },
    { label: 'Mercadotecnia Digital', content1: 'Análisis de Mercado y Competencia', content2: 'Estrategia de Posicionamiento', content3: 'Plan de Comunicación y Promoción', content4: 'Posicionamiento',content5: 'Y Más +', image:"/marker.webp", link:"/marketing-digital"},
    { label: 'Redes Sociales',content1: 'Análisis Inicial y Estrategia de Redes Sociales', content2: 'Calendario', content3: 'Contenido Creativo', content4: 'Interacción y Participación',content5: 'Y Más +', image:"/redes.webp", link:"/redes-sociales"},
    { label: 'Consultoría con ChatNexus IA', content1: 'Análisis y Recomendaciones Iniciales', content2: 'Plan Estratégico', content3: 'Desarrollo de Propuestas', content4: 'Consulta de Datos',content5: 'Y Más +',image:"/ia.webp", link:"/consultoria-chatnexus-ia" },
    { label: 'Marketing para Academias', content1: 'Análisis y Plan Estratégico', content2: 'Diseño y Desarrollo de Contenido', content3: 'Campañas de Publicidad Digital', content4: 'Plataforma Educativa',content5: 'Seguimiento',image:"/academy.png", link:"/marketing-para-academias" },
  ];
  return (
    <main className={styles.main}>
      <VideoHero/>
      <div id="mobile-reel">
        <Video/>
      </div>
      <Brand/>
      <AnimatedText/>
      <LogoCarousel/>
      <Tabs tabs={tabs}/>
      <SectionDouble/>
      <MoreServices/>
      <Questions/>
      <Video/>
    </main>
  );
}
