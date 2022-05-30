import Logo from '../../assets/Logo.svg'
import AddCampgroundForm from './add-campground-form/add-campground-form';
import { Link, useNavigate } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';
import HamburgerMenu from '../../assets/Hamburger Menu.svg';
import CloseMenu from '../../assets/Close.svg';

const signinInitalState = '/signin';

const AddCampgroundPage = () => {
    const [user, setUser] = useState();
    const [signin, setRote] = useState(signinInitalState);
    const [signup, setSignUpRote] = useState('/signup');
    const login = useRef(null);
    const loginMobile = useRef(null);
    const logout = useRef(null);
    const logoutMobile = useRef(null);
    const navigator = useNavigate(null);
    const mobileMenu = useRef(null);
    const icon = useRef(null);

    useEffect(() => {

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
    }, [user])

    const openMenu = () => {
        mobileMenu.current.style.display = 'block';
        icon.current.style.display = 'none';
    }

    const closeMenu = () => {
        mobileMenu.current.style.display = 'none';
        icon.current.style.display = 'block';
    }

    return (
        <main className="main-add-campground">
            <header className="main__header">
                <ul className="main__list">
                    <li className="main__item">
                        <Link to={'/'}>
                            <figure><img src={Logo} alt="Yelpcamp Logo" className="main__img" /></figure>
                        </Link>
                    </li>
                    <li className="main__item is-widescreen-only"><Link to={'/search-campground'} className="main__link" aria-label="Go to home">Home</Link></li>
                </ul>
                <ul className="main__list">
                    <li className="main__item is-widescreen-only">
                        <Link to={signin} className="main__link" aria-label="Click to login" ref={login}>Login</Link>
                    </li>
                    <li className="main__item is-widescreen-only">
                        <Link to={signup}><button className="main__header-button" aria-label="Click to create an account" ref={logout}>Create an account</button></Link>
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
            <AddCampgroundForm />
            <footer>
                <Link to={'/'}>
                    <figure>
                        <img className="main__figure" src={Logo} alt="YelpCamp logo" />
                    </figure>
                </Link>
            </footer>
        </main>
    )
}

export default AddCampgroundPage;