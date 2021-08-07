import Avatar from "react-avatar";

const HeaderProfile = ({name, image, description}) => {
    return (
        <div className="header__content">
            <div className="header__profile--picture" >
                <Avatar name={name} src={image} size={"12rem"} round />
            </div>
            <h1 className="header__profile--name">{name}</h1>
            <p className="header__profile--job"> {description} </p>
        </div>
    )
}

export default HeaderProfile;