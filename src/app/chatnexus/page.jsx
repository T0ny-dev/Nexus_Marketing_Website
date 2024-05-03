import Title from "../components/ui/Title";
import "./page.css";
import Video from "@/app/components/ui/Video";
import TitleParagraph from "../components/ui/TitleParagraph";
import CardContainer from "../components/ui/CardContainer";

function Chatnexusia() {

  const cardsData = [
    {
      title: 'Marketing Digital',
      paragraph: 'Te ayudo a generar tu plan de marketing',
      image: 'https://qxztypvwedaskoflnbno.supabase.co/storage/v1/object/sign/broshure/bot.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJicm9zaHVyZS9ib3QucG5nIiwiaWF0IjoxNzEzOTc4OTYxLCJleHAiOjE3NDU1MTQ5NjF9.o5RbXNWXSS735Jl_sgb6owD3BXA3nkBGBOQId1oYQB8&t=2024-04-24T18%3A15%3A16.921Z',
    },
    {
      title: 'Mago Creativo',
      paragraph: 'Te ayudo a escribir textos creativos',
      image: 'https://qxztypvwedaskoflnbno.supabase.co/storage/v1/object/sign/broshure/wizard.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJicm9zaHVyZS93aXphcmQucG5nIiwiaWF0IjoxNzEzOTc5Mjk1LCJleHAiOjE3NDU1MTUyOTV9.70J3VZCYvCP0JqPsNoJjVRISeiJaa17BXyrirNPqEro&t=2024-04-24T18%3A20%3A51.771Z',
    },
    {
      title: 'Dr. Preguntas',
      paragraph: 'Robot que genera mas preguntas de calidad',
      image: 'https://qxztypvwedaskoflnbno.supabase.co/storage/v1/object/sign/broshure/robot.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJicm9zaHVyZS9yb2JvdC5wbmciLCJpYXQiOjE3MTM5Nzk2ODksImV4cCI6MTc0NTUxNTY4OX0.PHsolSynSB00eRG2op5hwfK0bC3yntjBX1bNs9jZyA8&t=2024-04-24T18%3A27%3A25.605Z',
    },
    {
      title: 'Buscadora',
      paragraph: 'Compara productos y servicios con datos',
      image: 'https://qxztypvwedaskoflnbno.supabase.co/storage/v1/object/sign/broshure/ivest.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJicm9zaHVyZS9pdmVzdC5wbmciLCJpYXQiOjE3MTM5ODAyNDUsImV4cCI6MTc0NTUxNjI0NX0.NpiRpTE5XH-M2YpScxsZRpeD8ha5gFLnskWo-EMeE-0&t=2024-04-24T18%3A36%3A41.431Z',
    },
  ];


  return (
    <div className="ia_container">
      <div className="nexus">
        <Title text={"ChatNexus IA"} id="nexus_title" />
        <div className="nexus_ia"></div>
        <div className="overview">
          <div className="overview__text">
            <h2>Funcionalidades</h2>
            <p>Comparación de productos VS</p>
            <p>Generación de Planes de marketing</p>
            <p>Análisis y propuesta de SEO para tu web</p>
            <p>Orientación en proyectos desde cero</p>
          </div>
          <div className="overview__text">
            <h2>Capacidades</h2>
            <p>Buscar imágenes</p>
            <p>Buscar Recursos de información</p>
            <p>Genera preguntas y variantes</p>
            <p>Respuestas creativas</p>
          </div>
          <div className="overview__image">
            <img src="https://qxztypvwedaskoflnbno.supabase.co/storage/v1/object/sign/broshure/iPhone%2013.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJicm9zaHVyZS9pUGhvbmUgMTMucG5nIiwiaWF0IjoxNzEzOTIwNzc1LCJleHAiOjE3NDU0NTY3NzV9.15q-nwjkeTLj9x4rhvlk6Mb_hHLLjysz6eszRkZ0psY&t=2024-04-24T02%3A05%3A32.910Z" alt="" />
          </div>
        </div>
      </div>
      <TitleParagraph
      title="Haga más con ChatNexus IA"
      parraf="Puede elegir entre nuestros prompts personalizados para el propósito: Marketing Digital, Busqueda de recursos directamente, Desarrollar proyectos desde cero. Para acceder no necesitas código, por lo que puedes tener creatividad al solicitar respuestas "
    />
      <CardContainer cards={cardsData}/>
      <Video/>

    </div>
  );
}

export default Chatnexusia;
