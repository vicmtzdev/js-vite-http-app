import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { StrangerThingsApp } from './src/strangerthings/strangerthings-app'


document.querySelector('#app').innerHTML = `
  <div>
    
    <img src="./src/assets/st.png" class="logocustom vanilla"/>
    <div class="card">

    </div>

  </div>
`;

const element = document.querySelector('.card');

StrangerThingsApp(element);
