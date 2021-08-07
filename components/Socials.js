import { Component } from "react";

class Socials extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    componentDidMount () {
        console.log("instagram", this.props.instagram);
    }

    render() {
        return (
            <div className="socials">
                <a className="socials__item socials__instagram" href={this.props.instagram} target="_blank"><span>Insagram</span></a>
                <a className="socials__item socials__vimeo" href={this.props.vimeo} target="_blank"><span>Vimeo</span></a>
                <a className="socials__item socials__dribble" href={this.props.dribble} target="_blank"><span>Dribble</span></a>
                <a className="socials__item socials__behance" href={this.props.behance} target="_blank"><span>Behance</span></a>
                <a className="socials__item socials__fiverr" href={this.props.fiverr} target="_blank"><span>Fiverr</span></a>
            </div>
        )
    }
}

export default Socials;