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
                            "Naməlum Kommunist", "Secret Hitler" masaüstü oyununun adaptasiya olunmuş formasıdır. 
                            Oyun minimum 5, maksimum 10 oyunçu ilə oyanır, 5-dən az olduqda botlarla oynamaq olar.

                            <br/><br/>Oyunun Məqsədi: Liberal oyunçular 5 liberal qanun keçirməklə 
                            və ya Hitleri tapıb edam etməklə qazanır. 
                            Faşistlər isə 6 faşist qanun keçirməklə 
                            və ya 3-cü faşist qanunu keçirildikdən sonra Hitlerin kansler seçilməsiylə qazanır.

                            <br/><br/>Necə Oynanır: Hər turda bir pyunçu Prezident seçilir və öz hökuməti üçün 
                            oyunçulardan birini Kansler seçir. Oyunçular hökuməti qəbul edib-etmədikləri üçün 
                            səs verir. Əgər hökumət səs çoxluğu ilə qəbul edilərsə, Prezident qanunların olduğu 
                            dəstədən 3 qanun kartı çəkir, birini ləğv etməyi seçir və qalan ikisini Kanslerə 
                            göndərir, Kansler də 2 qanunun arasından birini tətbiq edir.

                            <br/><br/> Tips: Liberallar Hitler olduğunu düşündükləri oyunçunun 3-cü faşist qanunu tətbiq edildikdən 
                            sonra kansler seçilməməsi üçün hökümətə etiraz edə bilərlər. Hitler isə kansler seçilmək üçün özünü 
                            gizlədə bilər. Faşistlər isə Hitlerin kansler seçilə bilməsi üçün digər oyunçuları şübhə altına sala bilər. 

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