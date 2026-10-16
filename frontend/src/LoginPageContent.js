import React, {Component} from "react";
import ReactGA from "react-ga";
import "./LoginPageContent.css";
import "./util/CustomAliceCarousel.css";


class LoginPageContent extends Component {

    onClickAbout = () => {
        ReactGA.event({
            category: "Clicked About",
            action: "User clicked the link for the about page."
        });
    };

    onClickGameWebsite = () => {
        ReactGA.event({
            category: "Clicked Game Website",
            action: "User clicked the link for the board game website."
        });
    };

    render() {



        return (
            <>
                <div id={"#login-page-description-container"}>
                    <div id={"login-page-description-text-container"}>
                        <h2 id={"login-page-description-text-header"}>Naməlum Kommunist nədir?</h2>
                        <p id={"login-page-description-text"}>
                            Secret Hitler Online is an adaptation of the original Secret Hitler board game,
                            reimagined for the web.
                            It supports up to 10 players, featuring smooth art and animations with all the secrecy and
                            intrigue of the original. It's designed to be easy to pick up and play for any quarantine
                            game night.<br/><br/>Play for free in your browser, with no ads ever!
                            <br/><br/>
                        </p>
                    </div>





                </div>
            </>
        );
    }

}

/*
<div id={"login-page-carousel-container"}>
                        <AliceCarousel mouseTracking items={items} />
                    </div>
 */

LoginPageContent.propTypes = {
};

export default LoginPageContent;