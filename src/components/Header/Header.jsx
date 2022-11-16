import './Header.css';
import logo from './img/logo.png';
import search from './img/search.png';
import vector from './img/Vector.png';
import stat from './img/stat.png';
import auth from './img/auth.png';
import cart from './img/cart.png';

export default function Header() {
    return(
        <header className="header__container">
            <div className="header__container_left">
                <div className='left-logo'>
                <img src={logo} alt="logo" />
                </div>
                <div className='left-language'>
                    Ru<span>/En</span>
                </div>
            </div>
            <div className="header__container_center">
                <span>Клюшки</span>
                <div>Одежда</div>
                <div>Аксессуары</div>
                <div>Кастомизация</div>
                <div>Отследить заказ</div>
            </div>
            <div className="header__container_right">
                <div className='right-params'>
                <img src={search} alt="search" className='params1' />
                <img src={vector} alt="vector" className='params2' />
                <img src={stat} alt="stat" className='params3'/>
                <img src={auth} alt="auth" className='params4'/>   
                </div>
                <div className='right-cart'>
                <img src={cart} alt="cart" />
                </div>
            </div>

        </header>
    )
}