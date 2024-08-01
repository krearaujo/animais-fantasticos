import ScrollSuave from './modules/scroll-suave.js';
import Accordion from './modules/accordion.js';
import TabNav from './modules/tabnav.js';
import Modal from './modules/modal.js';
// import Tooltip from './modules/tooltip.js';
import DropdownMenu from './modules/dropdown-menu.js';
// import MenuMobile from './modules/menu-mobile.js';
// import Funcionamento from './modules/funcionamento.js';
// import FetchAnimais from './modules/fetch-animais.js';
// import FetchBitcoin from './modules/fetch-bitcoin.js';
// import ScrollAnima from './modules/scroll-anima.js';
// import SlideNav from './modules/slide.js';


const scrollSuave = new ScrollSuave('[data-menu="suave"] a[href^="#"]');
scrollSuave.init();

const accordion = new Accordion('[data-anime="accordion"] dt');
accordion.init();

const tabNav = new TabNav('[data-tab="menu"] li', '[data-tab="content"] section');
tabNav.init();

const dropdrownMenu = new DropdownMenu('[data-dropdown');
dropdrownMenu.init();

const modal = new Modal('[data-modal="abrir"]', '[data-modal="fechar"]', '[data-modal="container"]');
modal.init();