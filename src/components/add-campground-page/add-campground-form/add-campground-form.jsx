import { useEffect, useRef, useState } from "react";
import { useNavigate } from 'react-router-dom';

let newCampground = {
    id: "",
    url_compressed: "",
    url_high_quality: "",
    name: "",
    about: "",
    description: "",
    price: ""
}

async function getCampground() {
    const response = await fetch("http://localhost:3000/api/db.json");
    const result = await response.json();
    return result;
}

const AddCampgroundForm = () => {
    const [place, setPlace] = useState([]);
    const campgroundName = useRef(null);
    const campgroundAbout = useRef(null);
    const campgroundDescription = useRef(null);
    const campgroundPrice = useRef(null);
    const campgroundImage = useRef(null);
    const navigate = useNavigate();

    useEffect(() => {
        getCampground().then(data => setPlace(data));
    }, [])

    const handleName = () => {
        newCampground.id = campgroundName.current.value.replace(/ /g, '');
        newCampground.name = campgroundName.current.value;
    }

    const handleAbout = () => newCampground.about = campgroundAbout.current.value;
    const handleDescription = () => newCampground.description = campgroundDescription.current.value;
    const handlePrice = () => newCampground.price = campgroundPrice.current.value;
    const handleImage = () => {
        newCampground.url_compressed = campgroundImage.current.value;
        newCampground.url_high_quality = campgroundImage.current.value;
    }

    const handleNewCampground = async () => {
        if (localStorage.getItem('logged') === 'true') {
            await fetch("http://localhost:5000/api/db.json" + "/campground", {
                method: "POST",
                body: JSON.stringify(newCampground),
                headers: {
                    "Content-Type": "application/json",
                },
            });
            navigate(`/individual-campground/${newCampground.id}`)
        } else {
            window.alert("You need to be logged to add a new campground.");
        }
    }

    return (
        <form className="form">
            <fieldset>
                <legend className="form__legend">
                    Add New Campground
                </legend>
                <p>
                    <label className="form__label" htmlFor="name">Campground Name</label>
                    <input id="name" className="form__input" type="text" placeholder="Seven Sisters Waterfall" ref={campgroundName} onBlur={handleName} />
                </p>
                <p>
                    <label className="form__label" htmlFor="price">Price</label>
                    <input id="price" className="form__input" type="text" placeholder="$149" ref={campgroundPrice} onBlur={handlePrice} />
                </p>
                <p>
                    <label className="form__label" htmlFor="link">Image</label>
                    <input id="link" className="form__input" type="url" placeholder="www.thepinoytraveler.com/2018/0..." ref={campgroundImage} onBlur={handleImage} />
                </p>
                <p>
                    <label className="form__label" htmlFor="quick-description">Quick Description</label>
                    <input id="quick-description" className="form__input" type="text" placeholder="The Seven Sisters Waterfall is the 39th tallest waterfall in Norway." maxLength="70" ref={campgroundAbout} onBlur={handleAbout} />
                </p>
                <p>
                    <label className="form__label" htmlFor="">Description</label>
                    <textarea name="" id="" rows="10" placeholder="The Seven Sisters is the 39th tallest waterfall in Norway. The 410-metre tall waterfall consists of seven separate streams, and the tallest of the seven has a free fall that measures 250 mestres. The waterfall is located along the Geirangerfjorden in Strand Municipality in More og Romsdal county, Norway." className="form__textarea" ref={campgroundDescription} onBlur={handleDescription}></textarea>
                </p>
                <p>
                    <button className="main__button" type="button" onClick={handleNewCampground}>Add new campground</button>
                </p>
            </fieldset>
        </form>
    )
}

export default AddCampgroundForm;