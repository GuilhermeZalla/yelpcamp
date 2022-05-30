import { Link } from 'react-router-dom';
import Logo from '../../../assets/Logo.svg';
import Airbnb from '../../../assets/Airbnb.svg';
import Booking from '../../../assets/Booking.svg';
import PlumGuide from '../../../assets/Plum Guide.svg';

const PageBody = () => {
    return (
            <div className="body">
                <header className="header is-widescreen-only">
                    <figure><img className="header__logo" src={Logo} alt="YelpCamp Logo" /></figure>
                </header>
                <article className="article">
                    <h1 className="article__title">Explore the best camps on Earth.</h1>
                    <p className="article__paragraph">YelpCamp is a curated list of the best camping spots on Earth. Unfiltered and unbiased reviews.</p>
                    <ul className="article__list">
                        <li className="article__item">Add your own camp suggestions.</li>
                        <li className="article__item">Leave reviews and experiences.</li>
                        <li className="article__item">See locations for all camps.</li>
                    </ul>
                    <Link to={'/search-campground'}><button className="article__button" type="button">View Campgrounds</button></Link>
                    <footer className="article__footer">
                        <h2 className="article__subtitle">Partnered with:</h2>
                        <div className="article__div">
                            <figure><img src={Airbnb} alt="Airbnb logo" /></figure>
                            <figure><img src={Booking} alt="Booking logo" /></figure>
                            <figure><img src={PlumGuide} alt="Plum Guide logo" /></figure>
                        </div>
                    </footer>
                </article>
            </div>
    )
}

export default PageBody;