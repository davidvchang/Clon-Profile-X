import React, {useRef} from 'react'
import UserSuggestion from './ui/UserSuggestion';
import Nicolas from '../assets/img/Users/Nicolas.webp'
import ESLint from '../assets/img/Users/ESLint.webp'
import Coderos from '../assets/img/Users/Coderos.webp'
import News from './ui/News';
import Footer from './ui/Footer';

function Discover() {

    const iconRef = useRef(null);

    const changeColorIconSearch = () => {
        if (iconRef.current) {
            iconRef.current.style.color = '#1D9BF0';
        }
    };

    const changeAgainColorIconSearch = () => {
        if (iconRef.current) {
            iconRef.current.style.color = '#8C8E90';
        }
    };

    //Icono de Search
    const iconSearch = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 iconSearch" id='iconSearch' ref={iconRef}>
        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
    </svg>

  return (
    <section className='discover'>

        {/* SEARCH */}
        <div className='inputSearch'>
            <input type="search" name="" id="inputSearch" placeholder='Search' onFocus={changeColorIconSearch} onBlur={changeAgainColorIconSearch}/>
            {iconSearch}
        </div>

        {/* YOU MIGHT LIKE */}
        <div className='YouMightLike'>
            <span className='title'>You might like</span>

            <UserSuggestion img={Nicolas} Name='Nicolás Schürmann' User='@_nasch_' textButton='Follow'/>
            <UserSuggestion img={ESLint} Name='ESLint' User='@geteslint' textButton='Follow'/>
            <UserSuggestion img={Coderos} Name='Coderos' User='@Coderosmx' textButton='Follow'/>

            <button className='ShowMore'>
                <span>Show More</span>
            </button>
        </div>

        {/* WHAT`S HAPPENING */}
        <div className='WhatsHappening'>
            <span className='titleWhatsHappening'>What´s happening</span>

            <News category='Trending in Mexico' title='Malilla' numPost='5,203 posts' icon={iconMoreNews}/>
            <News category='Trending in Mexico' title='Rodo' numPost='4,564 posts' icon={iconMoreNews}/>
            <News category='Trending in Mexico' title='Llora' numPost='19.7K posts' icon={iconMoreNews}/>
            <News category='Trending in Mexico' title='Kevin Álvarez' numPost='1,515 posts' icon={iconMoreNews}/>
            <News category='Sport · Trending' title='Televisa' numPost='10.7K posts' icon={iconMoreNews}/>

            <button className='ShowMore'>
                <span>Show More</span>
            </button>
        </div>

        {/* FOOTER */}
        <div className='Footer'>
            <Footer link='#' text='Terms of Services'/>
            <Footer link='#' text='Privacy Policy'/>
            <Footer link='#' text='Cookie Policy'/>
            <Footer link='#' text='Accecibilily'/>
            <Footer link='#' text='Adds info'/>
            <Footer link='#' text='More'/>
            <span>© 2024 X Corp.</span>
        </div>
      
    </section>
  )
}

const iconMoreNews = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 logoMoreNews">
<path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
</svg>


export default Discover
