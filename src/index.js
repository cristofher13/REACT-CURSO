import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const emojis = ['👍','👏','❤️','🥳','🤙','🌺','💚'];

const root = ReactDOM.createRoot(document.getElementById('root'));
const mostrarEmojis = () => {
  const contenedoremojis = document.getElementById('emoji');
  const intervalo = setInterval(() => {
    if (contenedoremojis.childElementCount < 100) {
      const emojialeatorio = emojis[Math.floor(Math.random() * emojis.length)];/* funcion randomizada */
      const elementoemoji = document.createElement('span');
      elementoemoji.textContent = emojialeatorio;
      elementoemoji.style.position = 'absolute';
      elementoemoji.style.left = `${Math.random() * 100}%`; /* randomizar alineacion horizontal */
      elementoemoji.style.animation = 'flotar 5s linear';
      contenedoremojis.appendChild(elementoemoji);

    }
  }, 100); /* intervalo de milisegundoss */
  setTimeout(() => {
    clearInterval(intervalo); /* listo fin */
    contenedoremojis.innerHTML = '';
  }, 5000);
};
const handleClick = () => {
  mostrarEmojis();
};

root.render(
  <div style={{ backgroundColor: 'black', color: 'white', padding: '100px',textAlign: 'center', }}>
    <h1>Hola Promocion 2024 <br></br>
        ¿Les gustó la Exposicion? 🤑😄</h1>
    <button className="boton" onClick={handleClick}>SI!!</button>
    <div id="emoji" style={{ position: 'relative', height: '200px' }}></div>
  </div>
);