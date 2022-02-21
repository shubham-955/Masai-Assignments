import React, { useEffect, useState } from 'react'
import { MainNav, Logo, LinksDiv, Links } from './styled'

export const Navbar = () => {

    const [width, setWidth] = useState(0);

    useEffect(() => {
        window.addEventListener('resize', reportWindowSize);

        return () => {
            window.removeEventListener('resize', reportWindowSize);
        }
    }, [])


    const reportWindowSize = () => {
        setWidth(window.innerWidth);
    }

    return (
        <MainNav>
            <Logo width={width}>
                <img src={require("../Img/logo.png")} alt="" style={{ width: "100%", height: "100%" }} />
            </Logo>
            <LinksDiv>
                <Links width={width} href='https://www.google.com' target={"_blank"}>Home</Links>
                <Links width={width} href='https://www.youtube.com' target={"_blank"}>About</Links>
            </LinksDiv>
        </MainNav>
    )
}
