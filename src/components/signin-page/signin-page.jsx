import Logo from '../../assets/Logo.svg';
import SignInCover from './signin-cover/signin-cover';
import SignInForm from './signin-form/signin-form';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

const SignInPage = () => {
    const[username, setUsername] = useState();
    const[password, setPassword] = useState();
    const navigator = useNavigate();

    const handleUsername = element => setUsername(element.target.value);
    const handlePassword = element => setPassword(element.target.value);

    const verifyAccount = () => {
         if(username === localStorage.getItem('User') && password === localStorage.getItem('Password')){
             navigator('/search-campground')
             localStorage.setItem('logged', 'true');
             console.log(typeof localStorage.getItem('logged'));
         }else{
             window.alert("Invalid account. Please, try again.");
         }
    }

    return (
        <div className="signin__container">
            <main className="main-signin-page">
                <header className="main__header">
                    <Link to={'/'}>
                        <figure>
                            <img src={Logo} alt="YelpCamp Logo" />
                        </figure>
                    </Link>
                    <Link to={'/search-campground'} className="header__link" aria-label="Go to search campgrounds">Back to campgrounds</Link>
                </header>
                <SignInForm getUsername={handleUsername} getPassword={handlePassword} />
                <button className="main__button" onClick={verifyAccount}>Login</button>
                <p className="main__paragraph">
                    Not a user yet? <Link to={'/signup'} className="main__link" aria-label="Create a new account">Create an account</Link>
                </p>
            </main>
            <SignInCover/>
        </div>
    )
}

export default SignInPage;