"use client"
import Hero from "./components/Hero";
import Brand from "./components/Brand";
import styles from "./page.module.css";
import Tabs from "./components/Tabs";
import SectionDouble from "./components/SectionDouble";
import MoreServices from "./components/MoreServices";
import Questions from "./components/Questions";
import Video from "./components/ui/Video";



export default function Home() {
  const tabs = [
    { label: 'Diseño de marca', content1: 'Logotipo', content2: 'Identidad de Marca', content3: 'Materiales de Marketing', content4: 'Presentaciones',content5: 'Plantillas para Redes Sociales', image:"/Notebook.png"},
    { label: 'Diseño web', content1: 'Propuesta visual', content2: 'Palabras Clave', content3: 'Hosting', content4: 'Dominio',content5: 'Correos Electrónicos', image:"/Mac.png" },
    { label: 'Video', content1: 'Propuesta de Idea de Video', content2: 'Edición', content3: 'Correcciones', content4: 'Video',content5: ' Y Más +',image:"/video.png" },
    { label: 'Mercadotecnia Digital', content1: 'Análisis de Mercado y Competencia', content2: 'Estrategia de Posicionamiento', content3: 'Plan de Comunicación y Promoción', content4: 'Posicionamiento',content5: 'Y Más +', image:"/marker.png" },
    { label: 'Redes Sociales',content1: 'Análisis Inicial y Estrategia de Redes Sociales', content2: 'Calendario', content3: 'Contenido Creativo', content4: 'Interacción y Participación',content5: 'Y Más +', image:"/redes.png"},
    { label: 'Consultoría con ChatNexus IA', content1: 'Análisis y Recomendaciones Iniciales', content2: 'Plan Estratégico', content3: 'Desarrollo de Propuestas', content4: 'Consulta de Datos',content5: 'Y Más +',image:"/ia.png" },
    { label: 'Marketing para Academias', content1: 'Análisis y Plan Estratégico', content2: 'Diseño y Desarrollo de Contenido', content3: 'Campañas de Publicidad Digital', content4: 'Plataforma Educativa',content5: 'Seguimiento',image:"/academy.png" },
  ];
  return (
    <main className={styles.main}>
      <Hero
      title={"ChatNexus IA"}
      subtitle={"Agencia Nexus Marketing"}
      parraf={"¡Descubre una nueva era en el Marketing Digital! Nos destacamos por nuestra innovadora estrategia respaldada por tecnología de vanguardia. Con nuestro ChatNexus IA impulsado por la Inteligencia Artificial, transformamos la manera en que interactúas con tu audiencia."}
      image={"/hero_Nexus.png"}
      />
      <Brand/>
      <Tabs tabs={tabs}/>
      <SectionDouble/>
      <MoreServices/>
      <Questions/>
      <Video/>
    </main>
  );
}
