import { Component } from "react";
import Footer from "./Footer";
import Header from "./Header";

class Layout extends Component {
    constructor(props) {
        super(props)
        this.state = {
            socials: {
                instagram: "",
                vimeo: "",
                dribble: "",
                behance: "",
                fiverr: "",
            }
        }
    }

    componentDidMount () {
        this.setState({socials: this.props.socials})
    }

    render () {
        return (
            <main className="root">
                <Header socials={this.props.socials} username={this.props.username} description={this.props.description} image={this.props.image} />
                    <div className="content">
                        {this.props.children}
                    </div>
                <Footer />
            </main>
        )
    }
}

export default Layout