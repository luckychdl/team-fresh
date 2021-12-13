import styled from "styled-components"

export const MainWrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;

`
export const MainImg = styled.img`
  width: 100%;
`
export const TitleWrapper = styled.div`
  height: 230px;
  margin-top: -3px;
  background-color: rgb(23, 45, 76);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 70px 50px;
  margin-bottom: 32px;
  
  `
export const Title = styled.div`
  color: #FFFFFF;
  font-size: 1.5rem;
  font-weight: 800;
  margin-bottom: 16px;
`
export const SubTitle = styled.div`
  color: #FFFFFF;
  font-size: 1.2rem;
  font-weight: 600;
  text-align: center;
`
export const Business = styled.div`
  text-align: center;
  font-size: 2rem;
  font-weight: 700;
  color: rgb(52, 54, 56);
  padding:16px;
  margin-bottom: 8px;
`
export const Border = styled.div`
  border-top: 2px solid #b4b4b4;
  margin:auto;
  width: 75%;
  margin-top: 0.3rem;
  margin-bottom: 3em;
`
export const CardWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-grow:0;
  /* width: 100%; */
  max-width: 100vw;
  padding: 32px;
  @media (max-width:768px){
    flex-wrap:wrap;
  }
`
export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding:1rem;
`
export const CardImg = styled.img`
  width: 100%;
  border-top-left-radius: calc(0.25rem - 1px);
  border-top-right-radius: calc(0.25rem - 1px);
`
export const CardTitle = styled.div`
  text-align: start;
  font-size: 1.2rem;
  font-weight: 700;
  margin-bottom: 14px;
`
export const CardContents = styled.div`
  /* padding: 0 2rem; */
  font-size: 0.85rem;
  line-height: 1.5;
`
export const CardBtn = styled.div`
  font-size: 0.85rem;
  font-weight: 700;
  width: 63px;
  /* margin-right: 2rem; */
  color: #6c757d;
  border: 1px solid #6c757d;
  border-radius: 2rem;
  padding: 0.375rem 0.75rem;
  cursor: pointer;
`
export const ContentsWrapper = styled.div`
  /* margin-bottom: 1.2rem; */
  padding: 20px;
`
export const NoticeWrapper = styled.div`
  width: 90%;
  padding: 10px;
`
export const Border2nd = styled.div`
  width: 95%;
  text-align: center;
  border: 1px solid rgb(238, 238, 238);
  margin-bottom: 40px;
  font-weight: 700;
`
export const Notice = styled.div`
  margin-bottom: 2rem;
  font-size: 1.2rem;
  font-weight: 700;
`
export const NoticeBoxWrapper = styled.div`
  width: 100%;
  border: 1px solid rgb(238, 238, 238);
  background-color: rgb(250, 250, 250);
  display: flex;
  flex-direction: column;
  
`
export const NoticeTitleWrapper = styled.div`
  display:flex;
  align-items: center;
`
export const NoticeTitle = styled.div`
  font-weight: 500;
  font-size: 1.25rem;
  padding: 2rem 1rem 2rem 2rem !important;
 
`
export const Border3rd = styled.div`
  width: 92%;
  border-top: 1px solid #BDBDBD;
  margin-left: 32px;
`
export const Plus = styled.div`
  font-size: 32px;
  height: 32px;
  line-height: 32px;
  text-align: start;
  color: #BDBDBD;
  cursor: pointer;
`
export const NoticeInnerWrapper = styled.div`
  display:flex;
  justify-content: space-between;
  padding: 16px 32px;
`
export const NoticeMenu = styled.div``
export const NoticeTime = styled.div``
export const NewsWrapper = styled.div`
  width: 90%;
  padding: 10px;
  margin-top: 10px;
`
export const News = styled.div`
  margin-bottom: 2rem;
  font-size: 1.2rem;
  font-weight: 700;
`
export const NewsBoxWrapper = styled.div`
  width: 100%;
  border: 1px solid rgb(238, 238, 238);
  background-color: rgb(250, 250, 250);
  display: flex;
  flex-direction: column;
`
export const NewsTitle = styled.div`
    font-weight: 500;
  font-size: 1.25rem;
  padding: 2rem 1rem 2rem 2rem !important;
`
export const NewsInnerWrapper = styled.div`
    display:flex;
  align-items: center;
`
export const Border4th = styled.div`
 width: 92%;
  border-top: 1px solid #BDBDBD;
  margin-left: 32px;
  margin-bottom: 20px;
`