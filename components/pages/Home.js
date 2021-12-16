import { Component } from "react";
import Item from "../Item";

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  componentDidMount () {
    const videos = this.props.videos
    const firstVideo = videos?.shift()
    videos?.reverse()
    this.setState({firstVideo: firstVideo})
    this.setState({videos})
  }

  render () {
    return (
        <div className="container">
            <Item url={this.state.firstVideo?.url} />
            <div className="container__videos">
                {this.state.videos?.length?
                this.state.videos.map((v, i) => <Item url={v.url} key={i} />)
                :
                <div className="container__center">
                    {'No videos yet!'}
                </div>
                }
            </div>
        </div>
    )
  }
}

export default Home;
