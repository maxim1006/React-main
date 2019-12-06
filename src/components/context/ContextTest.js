import React, {Component} from 'react';
import "./ContextTest.scss";
import ContextCreate from "./ContextCreate";
import LanguageContext from "../../context/LanguageContext";

export default class ContextTest extends Component {
    state = {
        language: "en"
    };
    render() {
        return (
            <div className="context-test">
                Select language:
                <a className="context-test__link" href="#" onClick={this.onLanguageChange.bind(this, "en")}>en</a>
                <a className="context-test__link" href="#" onClick={this.onLanguageChange.bind(this, "ru")}>ru</a>

                <LanguageContext.Provider value={this.state.language}>
                <ContextCreate/>
                </LanguageContext.Provider>
            </div>
        );
    }

    onLanguageChange = (language, event) => {
        event.preventDefault();

        this.setState({
            language
        });
    }
}
