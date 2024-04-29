"use client"

import Title from "../components/ui/Title";
import MoreServices from "../components/MoreServices";
import Hero from "../components/Hero";
import "./page.css"
import Questions from "../components/Questions";
import Video from "../components/ui/Video";

function Planes () {


  return (
    <div className="plan">
      <Hero 
            title={"Academy Nexus"}
            subtitle={"Próximamente"}
            parraf={"Tu plataforma de aprendizaje en marketing, donde puedes dominar las mejores estrategias y tácticas para impulsar el crecimiento y las ventas en cualquier tipo de negocio para nuestros clientes y la comunidad."}
            image={"https://qxztypvwedaskoflnbno.supabase.co/storage/v1/object/sign/broshure/Component%2032.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJicm9zaHVyZS9Db21wb25lbnQgMzIucG5nIiwiaWF0IjoxNzE0MDY5NDMxLCJleHAiOjE3NDU2MDU0MzF9.7tUDx63bJZuAchPR4gXvhiscbvIJCcX5mQc8mlDcyE4&t=2024-04-25T19%3A23%3A05.500Z"}
      />
      <Title text={"Academy Nexus"}/>
    <div className="letter">
      <p>Academia Nexus es una iniciativa para poder brindar educación y soporte a nuestros clientes*</p>
    </div>
    <MoreServices/>
    <Questions/>
    <Video/>
    </div>
  )
}

export default Planes;