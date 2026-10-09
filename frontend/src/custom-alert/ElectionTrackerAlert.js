import React, {Component} from 'react';
import PropTypes from "prop-types";
import ButtonPrompt from "./ButtonPrompt";

import ETBoard from '../assets/board-election-tracker.png';
import ETToken from '../assets/board-tracker.png';

import './ElectionTrackerAlert.css';

class ElectionTrackerAlert extends Component {

    constructor(props) {
        super(props);
        let initialPos = "et-position-" + (this.props.trackerPosition - 1);
        let moveClass = "et-moveto-" + (this.props.trackerPosition);
        this.state = {
            trackerClass: initialPos
        };
        setTimeout(()=>this.setState({trackerClass:moveClass}), 500);
    }

    render() {
        return (
            <ButtonPrompt
                label={"QANUNVERİCİ ORQAN QƏBUL EDİLMƏDİ"}
                renderHeader={() => {
                    return (<>
                            <p className={"left-align"}>
                                Hökumət hər hansı bir siyasəti qəbul edə bilmədikdə (və ya qəbul etməkdən imtina
                                etdikdə) seçki sayğacı 1 vahid artır, siyasət qəbul edildikdə isə sıfırlanır.
                            </p>
                            <p className={"left-align highlight"}>
                                Sayğac 3-cü bölgüyə çatdıqda, çəkilmə dəstəsində ən üstdəki qanun birbaşa qəbul edilir.
                                Heç bir prezident səlahiyyəti aktivləşmir və bütün seçki məhdudiyyətləri sıfırlanır.
                            </p>
                        </>);
                }}
                buttonText={"OKEI"}
                buttonOnClick={this.props.closeAlert}
            >
                <div id={"election-tracker-container"}>
                    <img id="election-tracker-board"
                         src={ETBoard}
                         alt={"The election tracker board. A blue board with four circles, which the election tracker advances along."}
                    />
                    <img id="election-tracker-token"
                         className={this.state.trackerClass}
                         src={ETToken}
                         alt={"The election tracker token. It is at position " + this.props.trackerPosition + " out of 3."}
                     />
                </div>
            </ButtonPrompt>
        )
    }
}

ElectionTrackerAlert.propTypes = {
    trackerPosition: PropTypes.number.isRequired,
    closeAlert: PropTypes.func.isRequired,
};

export default ElectionTrackerAlert;