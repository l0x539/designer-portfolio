import Image from "next/image";
import { Component } from "react";

class NavBar extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render () {
        return (
            <div className="nav">
                <div className="nav__headline"></div>
                <div className="nav__container">
                    <div className="nav__logo">
                        <Image alt="Portfolio Image" src="/logo.png" width={125*0.8} height={100*0.8} />
                    </div>
                </div>
            </div>
        )
    }
}

export default NavBar;