import {
  MainWrapper,
  Title,
  SubTitle,
  TitleWrapper,
  Business,
  Border,
  CardWrapper,
  CardImg,
  CardTitle,
  CardContents,
  CardBtn,
  Wrapper,
  ContentsWrapper,
  NoticeWrapper,
  Border2nd,
  Notice,
  NoticeBoxWrapper,
  NoticeTitleWrapper,
  NoticeTitle,
  Plus,
  NoticeInnerWrapper,
  NoticeMenu,
  NoticeTime,
  Border3rd,
  NewsWrapper,
  News,
  NewsBoxWrapper,
  NewsTitle,
  NewsInnerWrapper,
  Border4th
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
      <Border />
      <CardWrapper>
        {CardData.map((card,idx) => {
          return  (
            <Wrapper key={idx}>
              <CardImg src={card.image}/>
              <ContentsWrapper>
                <CardTitle>{card.title}</CardTitle>
                <CardContents>{card.contents}</CardContents>
              </ContentsWrapper>
              <CardBtn>더 알아보기</CardBtn>
            </Wrapper>
          )
        })}
        
      </CardWrapper>
      <Border2nd />
      <NoticeWrapper>
        <Notice>공지사항</Notice>
        <NoticeBoxWrapper>
          <NoticeTitleWrapper>
            <NoticeTitle>Notice</NoticeTitle>
            <Plus>+</Plus>
          </NoticeTitleWrapper>
          <Border3rd />
          <NoticeInnerWrapper>
            <NoticeMenu>[공고] 신주발행 공고 (제3자 배정방식)</NoticeMenu>
            <NoticeTime>2021-09-15</NoticeTime>
          </NoticeInnerWrapper>
          <NoticeInnerWrapper>
            <NoticeMenu>[공고] 신주발행 공고 (제3자 배정방식)</NoticeMenu>
            <NoticeTime>2021-09-08</NoticeTime>
          </NoticeInnerWrapper>
          <NoticeInnerWrapper>
            <NoticeMenu>[공고] 신주발행 공고 (제3자 배정방식)</NoticeMenu>
            <NoticeTime>2021-08-31</NoticeTime>
          </NoticeInnerWrapper>
        </NoticeBoxWrapper>
      </NoticeWrapper>
      <NewsWrapper>
        <News>보도자료</News>
        <NewsBoxWrapper>
          <NewsInnerWrapper>
            <NewsTitle>TimF News</NewsTitle>
            <Plus>+</Plus>
          </NewsInnerWrapper>
          <Border4th />
        </NewsBoxWrapper>
      </NewsWrapper>
    </MainWrapper>
  )
}

export default MainUI