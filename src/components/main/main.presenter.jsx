import {
  MainWrapper,
  Title,
  SubTitle,
  TitleWrapper,
  Business,
  Boader,
  CardWrapper,
  CardImg,
  CardTitle,
  CardContents,
  CardBtn,
  Wrapper
} from "./main.styles"
import Slider from "../../commons/Slider/slider"
import { CardData } from "../../commons/Card/card"

const MainUI = () => {

  return (
    <MainWrapper>
      <Slider />
      <TitleWrapper>
        <Title>대한민국 No.1 Cold-Chain Platform</Title>
        <SubTitle>팀프레시는 국내 유일 Door to Door Cold Chain 통합물류 서비스를 제공합니다. 입출고 – 주문처리 - 새벽배송 전 과정에 신선도 유지를 위한 설비/역량을 보유하고 있습니다.</SubTitle>
      </TitleWrapper>
      <Business>TIMF BUSINESS</Business>
      <Boader />
      <CardWrapper>
        {CardData.map((card,idx) => {
          return  (
            <Wrapper>
            <CardImg src={card.image}/>
            <CardTitle>{card.title}</CardTitle>
            <CardContents>{card.contents}</CardContents>
            <CardBtn></CardBtn>
            </Wrapper>
          )
        })}
        
      </CardWrapper>
    </MainWrapper>
  )
}

export default MainUI