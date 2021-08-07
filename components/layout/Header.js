import { Component } from "react";
import HeaderProfile from "../HeaderProfile";
import NavBar from "./NavBar";
import Socials from "../Socials";

const Header = ({username, description, image, socials}) => {
    socials = socials?socials[0]:{}
    return (
        <heade className="header" >
            <NavBar />
            <HeaderProfile name={username} description={description} image={image} />
            <Socials instagram={socials?.instagram} vimeo={socials?.vimeo} dribble={socials?.dribble} behance={socials?.behance} fiverr={socials?.fiverr}  />
        </heade>
    )
    
}

export default Header;