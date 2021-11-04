import React, { Component } from 'react';
import ProgressBar from './ProgressBar';


class Languages extends Component {
    state = {
        languages: [
            { id: 1, value: "Javascript", xp: 0.9 },
            { id: 2, value: "Css", xp: 0.9},
            { id: 3, value: "Php", xp: 0.9},
            { id: 4, value: "My sql", xp: 0.9 },
            { id: 5, value: "html", xp: 0.9 }



        ],
        frameworks: [
            { id: 1, value: "React", xp: 0.4 },
            { id: 2, value: "Boostrap", xp: 0.3 },
            { id: 3, value: "Sass", xp: 0.5 },
            { id: 4, value: "TypeScript", xp: 0.5 },
            { id: 5, value: "NextJS", xp: 0.5 }

        ],
    }

    render() {

        let { languages, frameworks } = this.state;

        return (
            <div className="languagesFrameworks">
                <ProgressBar
                    languages={languages}
                    className="languagesDisplay"
                    title="languages"
                />
                <ProgressBar
                    languages={frameworks}
                    title="frameworks & bibliothèques"
                    className="frameworksDisplay"

                />
                <ProgressBar
                    languages={frameworks}
                    title="frameworks & bibliothèques"
                    className="frameworksDisplay"

                />
            </div>
        );
    }
}

export default Languages;