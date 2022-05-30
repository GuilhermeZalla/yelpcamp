import HeroMobile from '../../../assets/HeroMobile.jpg';
import Hero from '../../../assets/HeroImage.jpg';
import Logo from '../../../assets/Logo.svg';
import { Fragment } from 'react';

const PageCover = () => {
    return (
        <Fragment>
            <aside className="aside">
               <picture>
                   <source media="(min-width: 991px)" srcSet={Hero} />
                   <img className="aside__img" src={HeroMobile} alt="Yelpcamp Cover" />
               </picture>
            </aside>
            <header className="header is-mobile-only">
                <figure>
                    <img className="header__logo" src={Logo} alt="YelpCamp Logo" />
                </figure>
            </header>
        </Fragment>
    )
}

export default PageCover;