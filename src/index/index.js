import { Toggler } from './scripts/toggler';
import './index.scss';
import { TogglerControl } from './scripts/togglerControl';


const first = new Toggler(document
   .querySelector('#togglerFirst'), 'HELLOW WORLD!', 'green');

const second = new Toggler(document
   .querySelector('#togglerSecond'), 'HELLOW WORLD 2!');

const globalController = new TogglerControl(document.querySelector('#togglerController'));