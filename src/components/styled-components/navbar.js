import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavBar = styled.nav`
  width: 100%;
  height: 74px;
  display: flex;
  align-items: center;
  background: linear-gradient(262deg, #9c05cd, #552e89) #552e89;
  position: fixed;
  z-index: 100;
`;
export const NavBarMobile = styled.nav`
  width: 100%;
  height: 56px;
  display: flex;
  align-items: center;
  background: linear-gradient(262deg, #9c05cd, #552e89) #552e89;
  position: fixed;
  z-index: 100;
  color: #fff;
`;
export const NavBarLogoBlock = styled.div`
  width: 240px;
  padding: 0 0 0 25px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const NavBarLogo = styled(Link)`
  color: #fff;
  & sub{
    color: #ffffff;
    font-family: 'Roboto';
    float: right;
    font-size: 12px;
    text-transform: uppercase;
  }
`;
export const NavBarMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: calc(100% - 240px);
`;
export const NavBarMenuBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  color: #fff;
`;
export const NavBarSubMenu = styled.div`
  width: 70px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
`;
export const NavBarSearchBlock = styled.div`
  width: 70px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  cursor: pointer;
`;
