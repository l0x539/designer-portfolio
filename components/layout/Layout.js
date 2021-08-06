import { Component } from "react";
import Footer from "./Footer";
import Header from "./Header";

class Layout extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render () {
        return (
            <main className="root">
                <Header />
                <div className="content">
                    {this.props.children}
                </div>
                <Footer />
            </main>
        )
    }
}

export default Layout