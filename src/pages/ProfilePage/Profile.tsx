import React,{useState,useEffect} from "react";
import "./Profile.css";
import Header from "src/Components/HeaderProp/Header";
import Footer from "src/Components/FooterProp/Footer";
import { HEADER_ITEMS, HeaderConstant,LOGO_CONSTANTS, LogoConstant } from '../../constants';
import {PAGE_TITLE} from '../../constants';
import BackgroundProp from "src/Components/BackgroundProp/BackgroundProp";
import { useNavigate } from "react-router-dom";
import ProfileContainer from "src/Components/ProfileContainer/ProfileContainer";

export const Profile = () => {
    const title = PAGE_TITLE;
    const logo: LogoConstant[] = LOGO_CONSTANTS;
    const menuItems: HeaderConstant[] = HEADER_ITEMS;
    const [isMenuOpen, setIsMenuOpen] = useState(true); // add state for isMenuOpen
    const navigate = useNavigate();
    
    const [getUsername, setUsername] = useState("");
    const [getImg, setImg] = useState("boy-engineer");
    const [getPoints, setPoints] = useState(0);
    const handleMenuToggle = () => {
      setIsMenuOpen(!isMenuOpen);
    };  
    const url = "http://localhost:3001";
    useEffect(() => {
        //fetch data from api
        fetch(`´${url}/profile`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ 
                username: getUsername,
                img: getImg,
                points: getPoints }),
        })
        .then((response) => response.json())
        .then((data) => {
            setUsername(data.username);
            setImg(data.img);
            setPoints(data.points);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    }, []);

    return(
        <div>
                <BackgroundProp backgroundName="blue-background" />
                <Header
                    title={title}
                    logo={logo[0]}
                    menuItems={menuItems}
                    isAuthenticated={true}
                    isAdmin={true}
                    isMenuOpen={isMenuOpen}
                    onMenuToggle={handleMenuToggle}
                />

                <Footer title={title} logo={logo[0]} menuItems={menuItems} />
                <ProfileContainer username={getUsername} profileImg={getImg} points={getPoints}/>
                
        </div>
    );
}

