import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import emailjs from '@emailjs/browser';

function Checkout() {
  const navigate = useNavigate();
  const [cart, setCart] = useState([]);
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    direccion: '',  
    ciudad: '',
    codigoPostal: '',
    metodoPago: ''
  });

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('cart') || '[]');
    setCart(savedCart);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const cartDetails = cart.map(item => 
      `${item.name} - $${item.price.toFixed(3)}`
    ).join('\n');

    const total = cart.reduce((sum, item) => sum + item.price, 0);

    // Template para el correo de la tienda
    const storeTemplateParams = {
      to_email: 'vasquezkarina402@gmail.com',
      from_name: formData.nombre,
      from_email: formData.email,
      telefono: formData.telefono,
      direccion: formData.direccion,
      ciudad: formData.ciudad,
      codigo_postal: formData.codigoPostal,
      metodo_pago: formData.metodoPago,
      cart_items: cartDetails,
      total: total.toFixed(3)
    };

    // Template para el correo del cliente
    const clientTemplateParams = {
      to_email: formData.email,
      client_name: formData.nombre,
      cart_items: cartDetails,
      total: total.toFixed(3),
      direccion: formData.direccion,
      ciudad: formData.ciudad,
      codigo_postal: formData.codigoPostal,
      metodo_pago: formData.metodoPago,
      reply_to: 'vasquezkarina402@gmail.com'
    };

    try {
      // Enviar correo a la tienda
      await emailjs.send(
        'service_14lb1wj',
        'template_82gz4p8',
        storeTemplateParams,
        'M8pAT6DYecPDyA5qO'
      );

      // Enviar correo al cliente
      await emailjs.send(
        'service_14lb1wj',
        'template_lbetdl5', // Deberás crear esta plantilla en EmailJS
        clientTemplateParams,
        'M8pAT6DYecPDyA5qO'
      );

      alert('¡Pedido realizado con éxito!');
      localStorage.removeItem('cart');
      navigate('/');
    } catch (error) {
      console.error('Error:', error);
      alert('Error al enviar el pedido. Por favor, intenta nuevamente.');
    }
  };

  return (
    <div className="checkout-container">
      <h1>Finalizar Compra</h1>
      
      <div className="checkout-summary">
        <h2>Resumen del Pedido</h2>
        {cart.map(item => (
          <div key={item.id} className="checkout-item">
            <span>{item.name}</span>
            <span>${item.price.toFixed(3)}</span>
          </div>
        ))}
        <div className="checkout-total">
          <strong>Total: ${cart.reduce((sum, item) => sum + item.price, 0).toFixed(3)}</strong>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="checkout-form">
        <div className="form-group">
          <label htmlFor="nombre">Nombre Completo:</label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            value={formData.nombre}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Correo Electrónico:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="telefono">Teléfono:</label>
          <input
            type="tel"
            id="telefono"
            name="telefono"
            value={formData.telefono}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="direccion">Dirección:</label>
          <input
            type="text"
            id="direccion"
            name="direccion"
            value={formData.direccion}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="ciudad">Ciudad:</label>
          <input
            type="text"
            id="ciudad"
            name="ciudad"
            value={formData.ciudad}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="codigoPostal">Código Postal:</label>
          <input
            type="text"
            id="codigoPostal"
            name="codigoPostal"
            value={formData.codigoPostal}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="metodoPago">Método de Pago:</label>
          <select
            id="metodoPago"
            name="metodoPago"
            value={formData.metodoPago}
            onChange={handleInputChange}
            required
            className="payment-select"
          >
            <option value="">Seleccione un método de pago</option>
            <option value="Efectivo">Efectivo</option>
            <option value="Nequi">Nequi</option>
            <option value="Daviplata">Daviplata</option>
            <option value="Bancolombia">Bancolombia</option>
          </select>
        </div>

     
        <button type="submit" className="submit-button">
          Confirmar Pedido
        </button>
      </form>
    </div>
  );
}

export default Checkout; 