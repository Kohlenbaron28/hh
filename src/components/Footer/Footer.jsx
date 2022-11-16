import './Footer.css';
import logo from './img/logo.png';
import telegramm from './img/telegramm.png';
import Vector from './img/Vector.png';
import vk from './img/vk.png';

export default function Footer() {
    return(
        <footer>
        <div className="footer__container">
            <div className='footer_title'>
                <img src={logo} alt="logo" className='logo-footer'/>
                <div className='logos'>
                <img src={telegramm} alt="telegramm" />
                <img src={vk} alt="vk" />
                </div>
               
            </div>
            <div className='footer_content'>
                <span className='round3'>Связаться с нами</span>
                <div className='footer_left'>
                    <div>
                        <span>Наименование</span>
                        <p>ООО «ЗаряД»</p>
                    </div>
                    <div>
                        <span>Юридический адрес</span>
                        <p>Республика Татарстан, г. Набережные Челны,
ул. Альметьевский тракт, д. 6а</p>
                    </div>
                    <div className='left-str'>
                        <div>
                            <span>Телефон</span>
                            <p>+7 (800) 511-93-90</p>
                        </div>
                        <div>
                            <span>Email</span>
                            <p>info@zaryad-hockey.ru</p>
                        </div>
                    </div>
                    <div className='left-str'>
                        <div>
                            <span>ИНН</span>
                            <p>1646040440</p>
                        </div>
                        <div>
                            <span>ОГРН</span>
                            <p>1151674001632</p>
                        </div>
                    </div>
                    <div className='left-bottom'>
                        <p>© 2017-2022 Заряд</p>
                        <p className='left-bottom-last'>Политика конфиденциальности</p>
                    </div>
                </div>
                <div className='footer_right'>
                    <div className='right-top'>
                        <div className='right-top-left'>
                            <span>О бренде</span>
                            <p>История бренда</p>
                            <p>Технологии производства</p>
                            <p>Производство</p>
                            <p>Контакты магазинов</p>
                        </div>
                        <div className='right-top-right'>
                            <span>Партнерам</span>
                            <p>Как стать партнером</p>
                            <p>Как мы работаем</p>
                            <p>Производство</p>
                            <p>Информация о выборе контрагентов</p>
                        </div>
                    </div>
                    <div className='right-bottom'>
                        <div className='right-bottom-title'>
                        Покупателям
                        </div>
                        <div className='right-bottom-content'>
                        <div className='right-bottom-left'>
                            <p>Доставка и оплата</p>
                            <p>Обмен и возврат</p>
                            <p>Гарантия</p>
                        </div>
                        <div className='right-bottom-right'>
                            <p>Бонусная программа</p>
                            <p>Таблица размеров</p>
                            <p>Подарочный сертификат</p>
                            
                        </div>
                        <div className='right-bottom-logo'>
                        <img src={Vector} alt="vector" />
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </footer>
    )
}