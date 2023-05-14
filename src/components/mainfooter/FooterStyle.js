import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";
export const Footer = styled.footer`
  background-color: white;
  width: 100vw;
  display: flex;
  justify-content: space-evenly;
  align-items: flex-start;
  padding: 1rem 2rem;
  z-index: 9999;
`;

export const FooterMenu = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const FooterLink = styled.a`
  color: black;
  font-size: 1.0rem;
  background-color: transparent
  display: flex;
  text-decoration: none;
  padding: 0.10rem 0rem;
  cursor: pointer;
  transition:0.0s ;
  &:hover {
    color: black;
    border-bottom: 1px solid black;
  }

`;
export const FooterLinkPage = styled(Link)`
  color: black;
  font-size: 1.0rem;
  background-color: transparent
  display: flex;
  text-decoration: none;
  padding: 0.10rem 0rem;
  cursor: pointer;
  transition:0.0s ;
  &:hover {
    color: black;
    border-bottom: 1px solid black;
  }

`;
export const TopicFooter = styled.h5`
  color: black;
  font-size: 1.2rem;
  padding: 0.25rem 0rem;
  border-bottom: 2px solid red;
  

`;
