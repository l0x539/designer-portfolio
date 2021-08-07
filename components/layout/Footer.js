import Image from "next/image";
import { Component } from "react";

class Footer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            
        }
    }

    render () {
        return (
            <footer className="footer">
                <div className="footer__logo">
                    <Image alt="Portfolio Image" src="/logoFooter.png" width={128*1.3} height={43*1.3} /> 
                </div>
                <div className="footer__copyright">Made by <a href="https://0x539.co" target="_blank" rel="noreferrer"><span className="footer__first">S</span>ikouk <span className="footer__last">N</span>ourdin</a></div>
            </footer>
        )
    }
}

export default Footer;