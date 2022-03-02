import styled from "styled-components"

export const MainWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 75px;
  justify-content: space-between;
  align-items: center;
`
export const Logo = styled.img `
  width: 110px;
  height: 25px;
  padding: 20px;
  cursor: pointer;
`
export const NaviWrapper = styled.div`
  display: flex;
  padding: 20px;
  @media (max-width:990px){
  display:none;
}
  
`
export const Menu = styled.div`
  padding: 20px;
  font-size: 18px;
  font-weight: 500;
  color:rgb(96 96 96);
  cursor: pointer;
  :hover {
    color: #000000;
    font-weight: 700;
  }
`
export const HambergerWrapper = styled.div`
  display:none;
@media (max-width: 991px){
  display:flex;
  width: 56px;
  height: 40px;
  cursor: pointer;
  border-radius: 0.25rem;
  border: 1px solid rgba(0,0,0,.1);
  align-items: center;
}
`
export const HambergerMenu = styled.img`
  width: 56px;
  height: 40px;
`


export const SideBarDropDownWrapper = styled.div``