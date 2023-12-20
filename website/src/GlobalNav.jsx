import menu from './menu'

import './GlobalNav.css';
import { useState } from 'react';

function GlobalNav({setPage}){
   
    const list = menu.map(item => {
        return(
            <li className="global-nav__item" key ={item.name}>
                <a className="global-nav__link" href={`#/${item.path}`} onClick={(e) => {
                    e.preventDefault();
                    window.history.pushState(null, '', e.target.hash);
                    setPage(e.target.hash);
                    setOpenMenu(false);
                }} >
                    {item.name}
                </a>
            </li>
        );
    });
    const [openMenu, setOpenMenu] = useState(false);
    const menuStatus = (openMenu) ? "global-nav__list__open" : "global-nav__list__close";
    return(
        <nav className="global-nav">
            <button id="menuToggle" aria-label="Toggle menu" type="button" onClick={()=>{
                setOpenMenu(!openMenu);
            }}>
                <i className="gg-menu"/>
            </button>
            <ul className={`global-nav__list ${menuStatus}`}>
                {list}
            </ul>
        </nav>
    );
}
export default GlobalNav;
