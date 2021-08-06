import { Component } from "react";
import HeaderProfile from "../HeaderProfile";
import NavBar from "./NavBar";
import Socials from "../Socials";

class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render () {
        return (
            <heade className="header" >
                <NavBar />
                <HeaderProfile name={this.props.name} image={"https://cdn.discordapp.com/attachments/462737859804266504/872971631675465780/212284056_494157555003579_6762014307334437409_n.png"} round={true} />
                <Socials />
            </heade>
        )
    }
}

export default Header;