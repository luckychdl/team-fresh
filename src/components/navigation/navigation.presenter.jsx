import { 
  MainWrapper,
  Logo,
  NaviWrapper,
  Menu,
  HambergerMenu,
  HambergerWrapper,
  SideBarDropDownWrapper,
} from "./navigation.styles"

const NavigationUI = (props) => {
  return (
    <>
    <MainWrapper>
      <Logo src="https://www.teamfresh.co.kr/resources/assets/img/logo.png" onClick={props.onClickMove}/>
      <NaviWrapper>
        <Menu id="company" onClick={props.onClickMove}>회사소개</Menu>
        <Menu id="overview" onClick={props.onClickMove}>사업소개</Menu>
        <Menu id="notice" onClick={props.onClickMove}>공지사항</Menu>
        <Menu id="news" onClick={props.onClickMove}>보도자료</Menu>
        <Menu id="fresh" onClick={props.onClickMove}>새벽배송</Menu>
      </NaviWrapper>
      <HambergerWrapper onClick={props.onClickOpen}>
        <HambergerMenu src="/menu.svg" alt=""/>
    </HambergerWrapper>
    </MainWrapper>
    {props.isOpen &&
    <>
      <SideBarDropDownWrapper>
        <Menu id="company" onClick={props.onClickMove}>회사소개</Menu>
        <Menu id="overview" onClick={props.onClickMove}>사업소개</Menu>
        <Menu id="notice" onClick={props.onClickMove}>공지사항</Menu>
        <Menu id="news" onClick={props.onClickMove}>보도자료</Menu>
        <Menu id="fresh" onClick={props.onClickMove}>새벽배송</Menu>

      </SideBarDropDownWrapper>
    </>
    }
    
    </>
  )
}

export default NavigationUI