import { Toggler } from './scripts/toggler';
import './index.scss';


const first = new Toggler(document
   .querySelector('#togglerFirst'), 'HELLOW WORLD!', 'green');

const second = new Toggler(document
   .querySelector('#togglerSecond'), 'HELLOW WORLD 2!');