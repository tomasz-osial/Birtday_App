import React from "react";
import './style.scss'


const Banner = () => {
    return (
        <>
            <div className='galleryTitle'>O nas!</div>
            <div className='bannerContainer'>
                 <span className='text'>
                     <h1 className='title'>Podejmij wyzwanie</h1>
                     <p>Jeśli masz już dość sztampowych scenariuszy urodzinowych dla dzieci, a<br/> nie chcesz przez dwie godziny
                         pilnować dziecka zdzierającego gardło w kulkach, przyjdź do Nas!
                         U nas dzieciaki się porządnie zmęczą, a Ty przez ten czas spokojnie napijesz się kawy,
                         poplotkujesz na temat innych rodziców lub wreszcie nie zrobisz nic!</p>
                     <button className='button'>Umów się już dzisiaj</button>
                 </span>
            </div>
        </>
    )
};

export default Banner;