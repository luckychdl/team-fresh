import { useEffect,useRef,useState } from "react"
import styled from "styled-components"
import { SliderImg } from "../SliderImg/sliderImg"

const MainWrapper = styled.div`  
  display: flex;
  justify-content: center;
  overflow: hidden;
`
const SlideImg = styled.img`
  width: 100vw;
`
const SlideWrapper = styled.div`
width: 100vw;
display:flex;
position: relative;

`
const PrevButton = styled.div`
  font-size: 30px;
  font-weight: 900;
  color: #FFFFFF;
  opacity: 0.5;
  cursor: pointer;
  z-index: 10;
`
const NextButton = styled.div`
  font-size: 30px;
  font-weight: 900;
  color: #FFFFFF;
  opacity: 0.5;
  cursor: pointer;
  z-index: 10;
`
const BtnWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position:absolute;
  top: 40%;
  width: 80%;
`
const Title = styled.div`
  color: #FFFFFF;
  z-index: 10;
  font-size: 28px;
  margin-bottom: 10px;
  font-weight: 500;
`
const SubTitle = styled.div`
  color: #FFFFFF;
  z-index: 10;
  font-size: 38px;
  font-weight: 700;
  opacity: 0.8;
`
const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  position: absolute;
  /* background-color: black; */
  top: 43%;
  
`
const Slider = () => {
  const [currentSlider, setCurrentSlider] = useState(0)
  const length = SliderImg.length - 1
  const sliderRef = useRef(null)
 
  const NextSlide = () => {
      setCurrentSlider(currentSlider >= length ? 0 : currentSlider + 1); 
  };
  const PrevSlide = () => {
      setCurrentSlider(currentSlider === 0 ? length : currentSlider - 1); 
  };
  useEffect(() => {
    sliderRef.current.style.transition = 'all 0.5s ease-in-out';
    sliderRef.current.style.transform = `translateX(-${currentSlider}00%)`;
  }, [currentSlider]);
  if (!Array.isArray(SliderImg) || length <= 0) {
    return null
  }

  return (
    <MainWrapper >
      <BtnWrapper>
        <PrevButton onClick={PrevSlide}>{"<"}</PrevButton>
        <NextButton onClick={NextSlide}>{">"}</NextButton>
      </BtnWrapper>
      <SlideWrapper ref={sliderRef} >
        {SliderImg.map((slide,idx) => {
          return (
            <div key={idx}>
              <SlideImg src={slide.image}/>
              <TitleWrapper>
              <Title>{slide.title}</Title>
              <SubTitle>{slide.subTitle}</SubTitle>
              </TitleWrapper>
            </div>
          )
        })}
        </SlideWrapper>
    </MainWrapper>
    )
}
export default Slider