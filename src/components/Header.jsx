import styled from 'styled-components';
import turtleIcon from '../assets/img/2.png';
import { Link } from 'react-router-dom';

const HeaderWrapper = styled.header`
  background: black;
  padding: 1.5rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 0 20px ${({ theme }) => theme.colors.neonGreen};
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const LogoText = styled.h1`
  color: ${({ theme }) => theme.colors.neonGreen};
  font-size: 1.8rem;
  text-shadow: 0 0 10px ${({ theme }) => theme.colors.neonGreen},
               0 0 20px ${({ theme }) => theme.colors.neonGreen};
  font-family: 'Orbitron', sans-serif;
  margin: 0;
  transition: transform 0.3s;

  &:hover {
    transform: rotate(360deg);
    color: ${({ theme }) => theme.colors.pink};
    text-shadow: 0 0 15px ${({ theme }) => theme.colors.pink};
  }
`;

const LogoImage = styled.img`
  width: 70px;
  height: auto;
  box-shadow: 0 0 15px ${({ theme }) => theme.colors.neonGreen};
  border-radius: 50%;
  transition: transform 0.3s;
`;

const Nav = styled.nav`
  display: flex;
  gap: 1.5rem;
  align-items: center;
`;

const NavLink = styled(Link)`
  color: ${({ theme }) => theme.colors.white};
  font-weight: bold;
  transition: 0.3s;

  &:hover {
    color: ${({ theme }) => theme.colors.pink};
    text-shadow: 0 0 8px ${({ theme }) => theme.colors.pink};
  }
`;

const AnchorLink = styled.a`
  color: ${({ theme }) => theme.colors.white};
  font-weight: bold;
  transition: 0.3s;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.pink};
    text-shadow: 0 0 8px ${({ theme }) => theme.colors.pink};
  }
`;

const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const DropdownToggle = styled.div`
  color: ${({ theme }) => theme.colors.white};
  font-weight: bold;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    color: ${({ theme }) => theme.colors.pink};
    text-shadow: 0 0 8px ${({ theme }) => theme.colors.pink};
  }
`;

const DropdownContent = styled.div`
  display: none;
  position: absolute;
  background: black;
  box-shadow: 0 0 15px ${({ theme }) => theme.colors.neonGreen};
  padding: 1rem;
  border-radius: 8px;
  top: 100%;
  left: 0;
  z-index: 999;

  ${DropdownContainer}:hover & {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
`;

export default function Header() {
  return (
    <HeaderWrapper>
      <LogoContainer>
        <LogoText>TMNT</LogoText>
        <LogoImage src={turtleIcon} alt="TMNT Icon" />
      </LogoContainer>
    
      <Nav>
        <DropdownContainer>
          <DropdownToggle>Dashboard ▾</DropdownToggle>
          <DropdownContent>
            <NavLink to="/user/profile">User Dashboard</NavLink>
            <NavLink to="/admin">Admin Dashboard</NavLink>
              <NavLink to="/">HOME</NavLink>
          </DropdownContent>
        </DropdownContainer>

        <AnchorLink href="#characters">Characters</AnchorLink>
        <NavLink to="/episodes">Episodes</NavLink>
        <NavLink to="/fanzone">Fan Zone</NavLink>

        <NavLink to="/login">Login</NavLink>
        <NavLink to="/register">Register</NavLink>

        <DropdownContainer>
          <DropdownToggle>Games ▾</DropdownToggle>
          <DropdownContent>
            <NavLink to="/turtlerace">Turtle Race</NavLink>
            <NavLink to="/memory">Memory Game</NavLink>
          </DropdownContent>
        </DropdownContainer>
      </Nav>
    </HeaderWrapper>
  );
}
