import { Link } from "react-router-dom";

const CampgroundPlace = (props) => {
    return (
        <article className="article">
            <header className="article__header">
                <figure className="article__figure">
                    <img src={props.placeURL} alt={props.placeName +" image"} className="article__img" />
                </figure>
            </header>
            <h2 className="article__title">{props.placeName}</h2>
            <p className="article__paragraph">{props.placeAbout}</p>
            <Link to={`/individual-campground/${props.id}`}><button className="article__button">View Campground</button></Link>
        </article>
    )
}

export default CampgroundPlace;