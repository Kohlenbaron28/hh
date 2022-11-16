import './Slider.css';
import banner from './img/banner.png';
import nextl from './img/nextl.png';
import nextr from './img/nextr.png';
import left from './img/left.png';
import right from './img/right.png';
import zaryad from './img/zaryad.png';
import btn from './img/btn.png';

export default function Slider() {
    return(
        <div className='slider__container'>
            <div className='slider__container_top'>
                <img src={zaryad} alt="zaryad" />
            </div>
            <div className='slider__container_banner'>
                <div className='banner-left'>
                    <img src={left} alt="left" />
                </div>
                <div className='next-l'>
                     <img src={nextl} alt="nextl" /> 
                </div> 
                <span className='ellips-orng'></span>
                <span className='ellips-blue'></span> 
                <div className='banner-center'>
                    <img src={banner} alt="banner" />   
                    <div className='banner-center-text'>
                        <span className='round1'>В каталог</span>
                        <p className='text-title'>Константин Константинович</p>
                        <p className='text-about'>Крутой хоккеист какой-то команды</p>
                        <img src={btn} alt="btn" />
                    </div>        
                </div>
                <div  className='next-r'>
                  <img src={nextr} alt="nextr" />  
                </div>
                <div className='banner-right'>
                    <img src={right} alt="right" />
                </div>
            </div>
        </div>
    )
}