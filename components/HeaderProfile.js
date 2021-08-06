import Avatar from "react-avatar";

const HeaderProfile = ({name, image}) => {
    return (
        <div className="header__content">
            <div className="header__profile--picture" >
                <Avatar name={name} src={image} size={"12rem"} round />
            </div>
            <h1 className="header__profile--name">Fethi Draoui</h1>
            <p className="header__profile--job"> Graphic design / Motion Graphic / 2d Animation </p>
        </div>
    )
}

export default HeaderProfile;