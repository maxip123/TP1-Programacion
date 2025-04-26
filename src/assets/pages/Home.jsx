import React from 'react'
import Footer from "../components/Footer.jsx"
import Header from "../components/Header.jsx"
import Main from "../components/Main.jsx"
const Home = () => {
    const Alumno ={
        nombre:"Juan Maximiliano",
        apellido:"Prieto",
        edad:22,
        imagen: 'https://i.gyazo.com/5c5dbd4ecfa959318b58681e3d00b55a.png',
        desc:" Estudiante de Tecnicatura en programacion y ingenieria en sistemas, uso  principalmente javascript"
      }
  return (
      
    
    <div>

        <Header></Header>
        <Main alumno={Alumno}></Main>
        <Footer></Footer>
    </div>
  )
}

export default Home