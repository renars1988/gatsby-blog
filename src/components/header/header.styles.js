import styled from "styled-components"
import { Link } from "gatsby"

export const HeaderWrapper = styled.header`
  position: relative;
  font-size: 2rem;
`
export const LogoContainer = styled(Link)`
  color: white;
  text-decoration: none;
`
export const LogoAndMenuWrapper = styled.div`
  position: relative;
  z-index: 1000;
  background: ${props => props.theme.colors.black};
  height: 5rem;
  display: flex;
  justify-content: space-between;
`

export const ItemWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 0 1rem;
`
export const MenuIcon = styled.span`
  position: relative;

  &,
  &::before,
  &::after {
    width: 3rem;
    height: 2px;
    background-color: white;
    display: inline-block;
  }

  &::before,
  &::after {
    content: "";
    position: absolute;
    transition: all 0.2s;
  }

  &::before {
    top: ${props => (props.active ? 0 : -0.8)}rem;
    transform: ${props => (props.active ? "rotate(135deg)" : "")};
  }
  &::after {
    top: ${props => (props.active ? 0 : 0.8)}rem;
    transform: ${props => (props.active ? "rotate(-135deg)" : "")};
  }

  & {
    background-color: ${props => (props.active ? "transparent" : "")};
  }
`
export const Nav = styled.nav`
  position: absolute;
  top: 0;
  background-color: ${props => props.theme.colors.black};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  right: 0;
  width: ${props => (props.active ? 100 : 0)}%;
  height: 100vh;
  z-index: 500;
  opacity: 0.8;
  transition: all 0.2s;

  > a,
  div {
    display: ${props => (props.active ? "flex" : "none")};
  }
`
export const NavItem = styled(Link)`
  color: ${props => props.theme.colors.white};
  font-size: 4rem;
  margin-bottom: 1rem;
  align-self: center;
  text-decoration: none;
  text-transform: uppercase;
`
export const IconLinkWrapper = styled.div`
  width: 75%;
  height: 6rem;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  border-top: 2px solid ${props => props.theme.colors.white};
`
export const IconLink = styled.a`
  background-color: ${props => props.theme.colors.black};
  display: flex;
  height: 4rem;
`
