import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const products = [
  { id: 1, name: 'Primer', price: 23.900, brand: 'Maybelline', description: 'Base perfecta para un maquillaje duradero', image: 'https://cdn.alexandar-cosmetics.com/media/cache/t760/images/products/665f00e7d2146_40239a.jpg' },
  { id: 2, name: 'Agua de rosas', price: 35.600, brand: 'LOreal Paris ', description: 'Prepara tu piel para una aplicación suave', image: 'https://images-eu.ssl-images-amazon.com/images/I/71TBusPLW7L._AC_UL600_SR600,600_.jpg' },
  { id: 3, name: 'Polvo Compacto', price: 25.700, brand: 'Maybelline', description: 'Cubre imperfecciones con un acabado natural', image: 'https://ettos.co/cdn/shop/files/120_3c0fe2c6-7791-4713-9d55-7e7f588d5502.webp?v=1723153123' },
  { id: 4, name: 'Barra de labios', price: 19.900, brand: 'ESSENCE', description: 'Di “hola” a la barra de labios en un ligero tono nude cálido!.', image: 'https://www.druni.es/media/catalog/product/4/8/4839.jpg' },
  { id: 5, name: 'Rimmel London', price: 14.900, brand: 'London', description: 'Maquillaje para cejas', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGNDP2_vCPfp-Ugum21iTOP5lDkhPq65ToKw&s' },
  { id: 6, name: 'Base piel', price: 10.900, brand: 'Sephora', description: 'Base perfecta para un maquillaje duradero', image: 'https://e00-telva.uecdn.es/assets/multimedia/imagenes/2020/01/06/15783301328359.jpg' },
  { id: 7, name: 'Iluminador', price: 15.600, brand: 'Milani ', description: ' resalta las facciones de tu rostro.', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKIYhByD_CXq9o2g0trb_ItrcoWJ1AZWXPIw&s' },
  { id: 8, name: 'Corrector', price: 40.700, brand: 'YesStyle ', description: '¡Cubre las manchas y las imperfecciones de tu piel', image: 'https://d1flfk77wl2xk4.cloudfront.net/Assets/86/747/XXL_p0159874786.jpg' },
  { id: 9, name: 'Sombras', price: 13.200, brand: 'YesStyle', description: 'Paleta de sombras de ojos de 9 tonos que ayuda a crear varios estilos de ojos, desde un look natural diario hasta un look glamoroso.', image: 'https://d1flfk77wl2xk4.cloudfront.net/Assets/17/058/XXL_p0206005817.jpg' },
  { id: 10, name: 'Protector Solar', price: 31.500, brand: 'Tocoba', description: 'Esta barra de protección solar química y mineral ofrece protección UV SPF 50+ PA++++.', image: 'https://d1flfk77wl2xk4.cloudfront.net/Assets/42/703/XXL_p0176170342.jpg' },

];

function Products() {
  const [filter, setFilter] = useState('');

  const filteredProducts = products.filter(product => 
    product.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <h1>Nuestros Productos</h1>
      <input 
        type="text" 
        placeholder="Buscar productos..." 
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        className="product-filter"
      />
      <div className="product-list">
        {filteredProducts.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} className="product-image" />
            <h2>{product.name}</h2>
            <p>{product.brand}</p>
            <p>{product.description}</p>
            <p className="price">${product.price.toFixed(3)}</p>

            <Link to={`/product/${product.id}`} className="buy-button">Comprar</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;