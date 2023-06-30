import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";
export const Nav = styled.nav`
  background-color: white;
  width: 100vw;
  height: 7vh;
  display: flex;
  justify-content: space-around;
  padding: 0.3rem calc((100vw - 1000px) / 2);
  z-index: 9999;
  @media screen and (max-width: 786px) {
    background-color: red;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  // @media screen and (max-width: 786px) {
  //   display: none;
  // }
`;

export const NavLink = styled(Link)`
  color: black;
  margin-left: 5px;
  font-size: 1.0rem;
  background-color: transparent
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0.25rem 0.5rem;
  cursor: pointer;
  transition:0.3s ;
  &.active {
    font-weight: bold;
    font-size: 1.1rem;
    @media screen and (min-width: 992px) {
         border-bottom: .10rem solid red;
    }
  }
  &:hover {
    color: black;
  }
`;
export const ShopLink = styled(Link)`
  color: black;
  margin-left: 5px;
  font-weight: bold;
  font-size: 1.0rem;
  background-color: transparent
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0.25rem 0.5rem;
  cursor: pointer;
  transition:0.3s ;

  &.active {
    font-weight: bold;
    font-size: 1.2rem;
    text-shadow: 2px 2px 3px #FF0000;
  }
  &:hover {
    color: black;
    font-size: 1.3rem;
    text-shadow: 2px 2px 3px #FF0000;
  }
`;
export const MainNavLink = styled(Link)`
  color: black;
  margin-left: 10px;
  font-size: 1.0rem;
  background-color: transparent
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0.25rem 1rem;
  cursor: pointer;
  transition:0.3s ;

  &.active {
    font-weight: bold;
    font-size: 1.1rem;
    }
  &:hover {
    color: black;
  }

`;

