import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home">
      <div className="banner">
        <h1>Distribuidora Belleza</h1>
        <h2>15 Y 16 DE NOVIEMBRE DE 2024</h2>
        <div className="discount">25% OFF</div>
        <p>EN PRIMERS Y BASES DE MARCAS SELECCIONADAS</p>
        <Link to="/products" className="cta-button">¡COMPRA YA!</Link>
      </div>
      
      <div className="welcome-section">
        <h1>Bienvenido a nuestra tienda</h1>
      </div>
     
      <section className="about-us">
        <h2>Nuestra Historia</h2>
        <p>
          Nuestra tienda de cosméticos para mujer nació con la misión de realzar la belleza natural de cada persona. 
          Desde 2020, nos hemos dedicado a ofrecer productos de la más alta calidad, cuidadosamente seleccionados 
          para satisfacer las necesidades de nuestras clientas. Comenzamos como un pequeño emprendimiento local en 
          Florencia, Caquetá, y hoy nos enorgullece ser una referencia en el mercado de la belleza, brindando no 
          solo productos excepcionales sino también asesoramiento personalizado y atención dedicada a cada cliente. 
          Nuestro compromiso con la calidad y la satisfacción del cliente nos ha permitido crecer y establecer 
          relaciones duraderas con nuestra comunidad.
        </p>
      </section>
      
      <section className="contact-info">
        <h2>Información de Contacto</h2>
        <p>Dirección: Calle Principal 123, Florencia-Caqueta</p>
        <p>Teléfono: (321) 456-7890</p>
        <p>Email: cosmeticos@gmail.com</p>
      </section>
    </div>
  );
}

export default Home;