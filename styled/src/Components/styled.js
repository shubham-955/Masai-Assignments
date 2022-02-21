import styled from "styled-components";

export const MainNav = styled.div`
  width:100%;
  height:90px;
  background-color:white;
  display:flex;
  flex-direction:row;
  align-items:center;
  position:relative;
  box-shadow: 0 2px 14px 5px rgb(20 20 20 / 10%);
`
export const Logo = styled.div`
  position:absolute;
  left:40px;
  width:70px;
  height:70px;
  display:${(props) => (props.width < "991" ? "none" : "block")};
`
export const LinksDiv = styled.div`
position:absolute;
right:40px;
display:flex;
flex-direction:row;
justify-content:space-around;
align-items:center;
width:20%;
height:70px;
`
export const Links = styled.a`
font-weight:600;
color:orange;
text-decoration:none;
font-size:${(props) => (props.width > "991" ? "22px" : props.width > "576" ? "18px" : props.width <= "576" && "14px")};
`
