import './Catalog.css';
import cart from './img/cart.png';
import vect from './img/vect.png';
import stripes from './img/stripes.png';
import arrow from './img/arrow.png';
import slider from './img/slider.png';

export default function Catalog() {
    return(
        <>
        <div className='catalog__container'>
            <div className='catalog-title'>
           <p>Выбор наших клиентов</p>
           <img src={slider} alt="slider" width={155} height={58}/>
            </div>
            <div className='catalog-content'>
                <div className='cart'>
                    <img src={cart} alt="cart" />
                    <p>Хоккейная клюшка Заряд Т100</p>
                    <span>14 690 ₽</span>
                    <div className='cart-btm'>
                        <a className='cart-btm-1'><img src={vect} alt="vect" /></a>
                        <a className='cart-btm-2'>Подробнее<img src={arrow} alt="arrow" /></a>
                    </div>
                </div>
                <div className='cart'>
                    <img src={cart} alt="cart" />
                    <p>Хоккейная клюшка Заряд Т100</p>
                    <span>14 690 ₽</span>
                    <div className='cart-btm'>
                        <a className='cart-btm-1'><img src={vect} alt="vect" /></a>
                        <a className='cart-btm-2'>Подробнее<img src={arrow} alt="arrow" /></a>
                    </div>
                </div>
                <div className='cart'>
                    <img src={cart} alt="cart" />
                    <p>Хоккейная клюшка Заряд Т100</p>
                    <span>14 690 ₽</span>
                    <div className='cart-btm'>
                        <a className='cart-btm-1'><img src={vect} alt="vect" /></a>
                        <a className='cart-btm-2'>Подробнее<img src={arrow} alt="arrow" /></a>
                    </div>
                </div>
                <div className='cart'>
                    <img src={cart} alt="cart" />
                    <p>Хоккейная клюшка Заряд Т100</p>
                    <span>14 690 ₽</span>
                    <div className='cart-btm'>
                        <a className='cart-btm-1'><img src={vect} alt="vect" /></a>
                        <a className='cart-btm-2'>Подробнее<img src={arrow} alt="arrow" /></a>
                    </div>
                </div>
                
            </div>
            
        </div>
        <img src={stripes} alt="stripes" className='stripes'/>
        </>
    )
}