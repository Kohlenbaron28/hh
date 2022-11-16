import man from './img/man.png';
import sale from './img/sale.png';
import star from './img/star.png';
import line from './img/line.png';
import title1 from './img/title1.png';
import title2 from './img/title2.png';
import title3 from './img/title3.png';
import count from './img/count.png';
import './Sales.css';

export default function Sales() {
    return(
        <div className="sales__container">
            <div className="sales__container_left">
                <div className='left-title'>
                <span className='round-orng'></span>
                <span className='round-blue'></span> 
                    <div className='title1'>
                        <img src={title1} alt="title1"height={90} />
                        <img src={star} alt="star" height={90}/>
                    </div>
                    <div className='title2'>
                        <img src={sale} alt="sale" width={90} height={80}/>
                        <img src={title2} alt="title2" width={315} height={80} />
                        <img src={count} alt="count" width={250} height={70} />
                    </div>
                    <div className='title3'>
                        <img src={title3} alt="title3" height={70}/>
                    </div>
                </div>
                <div className='left-about'>
                    <p>Никакого спама и рекламы, только полезная информация, скидки и персональные предложения</p>
                </div>
                <div className='left-email'>
                    <p>Ваш Email</p>
                    <img src={line} alt="line" />
                </div>
                <span className='round2'>
                    Подписаться
                </span>
            </div>
            <div className="sales__container_right">
                <img src={man} alt="man" />
            </div>
        </div>
    )
}