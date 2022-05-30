import PageBody from "./page-body/page-body";
import PageCover from "./page-cover/page-cover";
import '../../style/style.css';

const LandingPage = () => {
        return(
            <div className="container__landing-page">
                <PageBody/>
                <PageCover/>
            </div>
        )
}

export default LandingPage;