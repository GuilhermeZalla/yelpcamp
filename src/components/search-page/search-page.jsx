import Logo from '../../assets/Logo.svg'
import { Link } from 'react-router-dom';
import { useEffect, useState, useRef } from 'react';
import CampgroundPlace from './campground-place/campground-place';
import HamburgerMenu from '../../assets/Hamburger Menu.svg';
import CloseMenu from '../../assets/Close.svg';

const signinInitalState = '/signin';

async function getCampground() {
    const response = await fetch("http://localhost:3000/api/db.json");
    const result = await response.json();
    return result;
}

const SearchPage = (props) => {
    const [user, setUser] = useState();
    const [signin, setRote] = useState(signinInitalState);
    const [signup, setSignUpRote] = useState('/signup');
    const [place, setPlace] = useState([]);
    const [searchedCampground, setSearch] = useState('');
    const login = useRef(null);
    const loginMobile = useRef(null);
    const logout = useRef(null);
    const logoutMobile = useRef(null);
    const mobileMenu = useRef(null);
    const icon = useRef(null);

    useEffect(() => {

        getCampground().then(data => setPlace(data));

        const verifyLogin = () => {
            if (localStorage.getItem('logged') === 'true') {
                console.log("Logged");
                setUser(localStorage.getItem('User'));
                login.current.innerText = user;
                login.current.style.fontWeight = '800';
                loginMobile.current.innerText = user;
                loginMobile.current.style.fontWeight = '800';
                setRote('/search-campground');
                logout.current.innerText = 'Logout'
                logout.current.style.padding = '0';
                logout.current.style.backgroundColor = 'transparent';
                logout.current.style.color = 'black';
                logout.current.style.fontWeight = '600';
                logoutMobile.current.innerText = 'Logout'
                logoutMobile.current.style.padding = '0';
                logoutMobile.current.style.backgroundColor = 'transparent';
                logoutMobile.current.style.color = 'black';
                logoutMobile.current.style.fontWeight = '600';
                setSignUpRote('');
                logout.current.addEventListener('click', () => {
                    document.location.reload(true);
                    localStorage.removeItem('logged');
                });
                logoutMobile.current.addEventListener('click', () => {
                    document.location.reload(true);
                    localStorage.removeItem('logged');
                });
            } else {
                setRote('/signin');
                logout.current.innerText = 'Create an account';
                logout.current.style.padding = '15px';
                logout.current.style.borderRadius = '5px';
                logout.current.style.backgroundColor = 'hsl(0, 0%, 0%)';
                logout.current.style.color = 'hsl(0, 0%, 100%)';
                logout.current.style.fontWeight = 'bold';
                logoutMobile.current.innerText = 'Create an account';
                logoutMobile.current.style.padding = '15px';
                logoutMobile.current.style.borderRadius = '5px';
                logoutMobile.current.style.backgroundColor = 'hsl(0, 0%, 0%)';
                logoutMobile.current.style.color = 'hsl(0, 0%, 100%)';
                logoutMobile.current.style.fontWeight = 'bold';
                setSignUpRote('/signup');
            }
        }
        verifyLogin();
    },[user])

    const handleCampgroundSearch = element => setSearch(element.target.value);

    const openMenu = () => {
        mobileMenu.current.style.display = 'block';
        icon.current.style.display = 'none';
    }

    const closeMenu = () => {
        mobileMenu.current.style.display = 'none';
        icon.current.style.display = 'block';
    }

    return (
        <main id="home" className="main">
            <header className="main__header">
                <ul className="main__list">
                    <li className="main__item">
                        <Link to={'/'}>
                            <figure><img src={Logo} alt="Yelpcamp Logo" className="main__img" /></figure>
                        </Link>
                    </li>
                    <li className="main__item is-widescreen-only"><a className="main__link" href="#home" aria-label="Go to home">Home</a></li>
                </ul>
                <ul className="main__list">
                    <li className="main__item is-widescreen-only">
                        <Link to={signin} className="main__link" aria-label="Click to login" ref={login}>Login</Link>
                    </li>
                    <li className="main__item is-widescreen-only">
                        <Link to={signup}><button className="main__button" type="button" ref={logout}>Create an account</button></Link>
                    </li>
                    <li className="main__item is-mobile-only">
                        <figure className="main__mobile-menu" ref={icon}><img src={HamburgerMenu} alt="Mobile Menu icon" onClick={openMenu} /></figure>
                    </li>
                </ul>
                <ul className="main__list is-mobile" ref={mobileMenu}>
                    <li className="main__item">
                        <figure><img src={CloseMenu} alt="Mobile Menu close icon" onClick={closeMenu} /></figure>
                        <Link to={signin} className="main__link" aria-label="Click to login" ref={loginMobile}>Login</Link>
                    </li>
                    <li className="main__item">
                        <Link to={signup}><button className="main__button" type="button" ref={logoutMobile}>Create an account</button></Link>
                    </li>
                </ul>
            </header>
            <aside className="main__aside">
                <h1 className="aside__title">Welcome to YelpCamp!</h1>
                <p className="aside__paragraph">View our hand-picked campgrounds from all over the world, or add your own.</p>
                <input className="aside__input" type="text" placeholder='Search for camps' onBlur={handleCampgroundSearch} />
                <button className="aside__button" type="button">Search</button>
                <Link to={'/add-campground'} className="aside__link" aria-label="Add a new campground">Or add your own campground</Link>
            </aside>
            <div className="articles">
                {
                    searchedCampground === '' ? place.campground?.map((campground, index) => <CampgroundPlace key={index} placeURL={campground.url_compressed} placeName={campground.name} placeAbout={campground.about} id={campground.id} />) : place.campground?.map((campground, index) => {
                        if (campground.name === searchedCampground) {
                            return <CampgroundPlace key={index} placeURL={campground.url_compressed} placeName={campground.name} placeAbout={campground.about} id={campground.id} />
                        }
                    })
                }
            </div>
            <Link to={'/'}>
                <footer className="main__footer">
                    <figure><img src={Logo} alt="Yelpcamp Logo" className="main__img" /></figure>
                </footer>
            </Link>
        </main>
    )
}

export default SearchPage;