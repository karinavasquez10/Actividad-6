import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home">
      <div className="banner">
        <h2>12 Y 13 DE OCTUBRE DE 2024</h2>
        <div className="discount">25% OFF</div>
        <p>EN PRIMERS Y BASES DE MARCAS SELECCIONADAS</p>
        <Link to="/products" className="cta-button">¡COMPRA YA!</Link>
      </div>
      <h1>Bienvenido a nuestra tienda</h1>
      <section className="about-us">
        <h2>Nuestra Historia</h2>
        <p>
        Nuestra tienda de cosméticos para mujer nació con la misión de realzar la belleza natural de cada persona. 
        Inspirados por la naturaleza y comprometidos con la calidad, seleccionamos cuidadosamente cada producto para ofrecer soluciones que cuidan la piel y resaltan la confianza.
         Desde nuestros inicios, hemos trabajado para crear un espacio donde cada mujer pueda encontrar productos que la hagan sentir única y especial, siempre priorizando ingredientes naturales y prácticas sostenibles.
        ¡Descubre la belleza que te hace brillar desde adentro!</p>
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