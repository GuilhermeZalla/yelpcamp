import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddCampgroundScreen from "./screens/add-campground-page-screen";
import IndividualCampgroundSreen from "./screens/individual-campground-page-screen";
import LandinPageScreen from "./screens/landing-page-screen";
import SearchPageScreen from "./screens/search-page-screen";
import SignInPageScreen from "./screens/signin-page-screen";
import SignUpScreen from "./screens/signup-page-screen";

const RoutesScreens = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route exact path='/' element={<LandinPageScreen/>} />
                <Route exact path='/search-campground' element={<SearchPageScreen/>}/>
                <Route exact path='/signin' element={<SignInPageScreen/>}/>
                <Route exact path='/signup' element={<SignUpScreen/>}/>
                <Route exact path='/add-campground' element={<AddCampgroundScreen/>}/>
                <Route exact path='/individual-campground/:id' element={<IndividualCampgroundSreen/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesScreens;