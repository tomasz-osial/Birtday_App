import React from "react";
import './style.scss'


const Banner = () => {
    return (
        <>
            <div id="about_us" className='galleryTitle'>O nas!</div>
            <div className='bannerContainer'>
                 <span className='text'>
                     <h1 className='title'>Podejmij wyzwanie</h1>
                     <p className='bannerText'>Jeśli masz już dość sztampowych scenariuszy <br/>urodzinowych dla dzieci, a nie chcesz <br/>przez dwie godziny
                         pilnować dziecka<br/> zdzierającego gardło w kulkach, przyjdź do Nas!<br/>
                         U nas dzieciaki się porządnie zmęczą,<br/> a Ty przez ten czas spokojnie<br/> napijesz się kawy,
                         poplotkujesz na temat<br/> innych rodziców lub wreszcie nie zrobisz nic!</p>
                     <a href='#calculator'>
                         <button className='button'>Zapoznaj się z ofertą</button>
                     </a>
                 </span>
            </div>
        </>
    )
};

export default Banner;