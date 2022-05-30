import Logo from '../../assets/Logo.svg';
import SignUpCover from './signup-cover/signup-cover';
import SignUpForm from './signup-form/signup-form';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

const SignUpPage = () => {
    const[username, setUsername] = useState();
    const[password, setPassword] = useState();
    const navigate = useNavigate();

    const handleUsername = element => setUsername(element.target.value);
    const handlePassword = element => setPassword(element.target.value);
    const verifyNewAccount = () => {
         if(username === undefined || password === undefined){
             window.alert("Password or username is invalid.");
         }else{
             window.alert("Account created");
             localStorage.setItem('User', username);
             localStorage.setItem('Password', password);
             navigate('/signin');
         }
    };

    return (
        <div className="signin__container">
            <main className="main-signin-page">
                <header className="main__header">
                    <Link to={'/'}>
                        <figure>
                            <img src={Logo} alt="YelpCamp Logo" />
                        </figure>
                    </Link>
                    <Link to={'/search-campground'} className="header__link" aria-label="Go to search">Back to campgrounds</Link>
                </header>
                <SignUpForm getUsername={handleUsername} getPassword={handlePassword} />
                <button className="main__button" type="submit" onClick={verifyNewAccount}>Create an account</button>
                <p className="main__paragraph">
                    Already a user? <Link to={'/signin'} className="main__link" aria-label="Create a new account">Sign In</Link>
                </p>
            </main>
            <SignUpCover/>
        </div>
    )
}

export default SignUpPage;