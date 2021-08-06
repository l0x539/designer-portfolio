import Item from "../Item";

const Home = ({videos}) => {
    return (
        <div className="container">
            <div className="container__videos">
                <Item url={"/video1.mp4"} isFirst />
                {videos?.length?
                videos.map((v, i) => <Item url={v} key={i} />)
                :
                <div className="container__center">
                    {'No videos yet!'}
                </div>
                }
            </div>
        </div>
    )
}

export default Home;