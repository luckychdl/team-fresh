import styled from "styled-components"

export const MainWrapper = styled.div`
  display: flex;
  width: 100vw;
  height: 75px;
  justify-content: space-between;
  align-items: center;
`
export const Logo = styled.img `
  width: 110px;
  height: 25px;
  padding: 20px;
`
export const NaviWrapper = styled.div`
  display: flex;
  padding: 20px;
  
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