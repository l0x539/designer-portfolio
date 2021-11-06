import Avatar from "react-avatar";
import Item from "../Item";
import Delete from "../../assets/SVG/delete.svg";
import { add_video, delete_video, update_first_video, update_image, update_infos, update_socials } from "../../lib/requests";
import { Component } from "react";
import Router from 'next/router';

class Admin extends Component {
    constructor(props) {
        super(props)
        this.state = {
            firstVideo: "",
            name: "",
            image: "",
            description: "",
            socials: {}
        }
    }

    componentDidMount () {
        const videos = this.props.videos
        const firstVideo = videos?.shift()
        videos?.reverse()
        this.setState({firstVideo: firstVideo})
        this.setState({name: this.props.name})
        this.setState({image: this.props.image})
        this.setState({description: this.props.description})
        this.setState({videos})
        this.setState({socials: this.props.socials})
    }

    updateImage = (e) => {
        e.preventDefault()
        let form = e.target.elements;
        const image = form[0].value;
        update_image(image)
    }
    updateInfos = (e) => {
        e.preventDefault()
        let form = e.target.elements;
        const name = form[0].value;
        const description = form[1].value;
        update_infos(name, description)
    }
    updateFirstVideo = (e) => {
        e.preventDefault()
        let form = e.target.elements;
        const first_video = form[0].value;
        update_first_video(first_video)
    }
    addVideo = (e) => {
        e.preventDefault()
        let form = e.target.elements;
        const video = form[0].value;
        add_video(video)
    }
    deleteVideo = (i) => {
        console.log("delete:", i.id);
        delete_video(i.id)
        Router.reload()
    }
    updateSocials = (e) => {
        let form = e.target.elements;
        const instagram = form[0].value.length?form[0].value:undefined;
        const vimeo = form[1].value.length?form[1].value:undefined;
        const dribble = form[2].value.length?form[2].value:undefined;
        const behance = form[3].value.length?form[3].value:undefined;
        const fiverr = form[4].value.length?form[4].value:undefined;
        update_socials(instagram, vimeo, dribble, behance, fiverr)
    }

    render () {
        return (
            <main className="root">
                <div className="content">
                    <div className="header__content">
                        <div className="header__profile--picture" >
                            <Avatar name={this.state.name} src={this.state.image} size={"12rem"} round />
                            <form onSubmit={this.updateImage}>
                                <input type="text" name="image" placeholder="Enter Image link"  />
                                <button type="submit" >Change</button>
                            </form>
                        </div>
                        <h1 className="header__profile--name">{this.state.name}</h1>
                        <p className="header__profile--job"> {this.state.description} </p>
                        <form onSubmit={this.updateInfos}>
                            <input type="text" name="username" placeholder="Enter Username"  />
                            <input type="text" name="description" placeholder="Enter Description"  />
                            <button type="submit" >Change</button>
                        </form>
                        <form onSubmit={this.updateSocials}>
                            <input type="text" name="instagram" placeholder="Enter Instagram"  />
                            <input type="text" name="vimeo" placeholder="Enter Vimeo"  />
                            <input type="text" name="dribble" placeholder="Enter Dribble"  />
                            <input type="text" name="behance" placeholder="Enter Behance"  />
                            <input type="text" name="fiverr" placeholder="Enter Fiverr"  />
                            <button type="submit" >Change</button>
                        </form>
                    </div>
                    <div className="container">
                        <form onSubmit={this.updateFirstVideo}>
                            <input type="text" name="first_video" placeholder="Enter First video"  />
                            <button type="submit" className="btn-submit" >Change</button>
                        </form>
                        <form onSubmit={this.addVideo}>
                            <input type="text" name="add_video" placeholder="Add video url"  />
                            <button type="submit" >Add</button>
                        </form>
                        {
                            this.state.firstVideo?
                            <Item url={this.state.firstVideo.url} isFirst />
                            :
                            null
                        }

                        {
                            this.state.videos?.length?
                            <>
                                <div className="container__videos">
                                    {this.state.videos?.length?
                                    this.state.videos.map((v, i) => <><Item url={v.url} key={i} /> <Delete onClick={() => this.deleteVideo(v)} /></>)
                                    :
                                    <div className="container__center">
                                        {'No videos yet!'}
                                    </div>
                                    }
                                </div>
                            </>
                            :
                            'No Items'
                        }
                    </div>
                </div>
            </main>
        )
    }
}

export default Admin;
