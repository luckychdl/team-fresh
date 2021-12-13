import axios from "axios";
import { useContext, useState } from "react";
import DaumPostcode from "react-daum-postcode";
import styled from "styled-components"
import { GlobalContext } from "../../../App"
const TotalWrapper = styled.div`
  width: 100vw;
  display:flex;
  flex-direction: column;
  align-items: center;
`
const MainWrapper = styled.div`
  width: 380px;
  display:flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #BDBDBD;
`
const TopWrapper = styled.div`
  width: 90%;
  display:flex;
  border-bottom: 5px solid #02204a;
  padding: 10px 10px 0 10px;
`
const Arrow = styled.img`
  padding: 10px;
  margin-bottom: 10px;
  cursor: pointer;
`
const Search = styled.div`
  padding: 10px;
  font-weight: 700;
  font-size: 1.125rem;
  color: #6c757d;
`
const AddressWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`
const PostCode = styled.input`
  width: 120px;
  height: 30px;
  margin-bottom: 8px;
  padding-left: 6px;
`
const Address = styled.input`
  width: 318px;
  height: 30px;
  margin-bottom: 8px;
  padding-left: 6px;
`
const AddressDetail = styled.input`
  width: 318px;
  height: 30px;
  margin-bottom: 12px;
  padding-left: 6px;
`
const SubmitAddress = styled.button`
  width: 318px;
  height: 40px;
  padding-left: 6px;
  font-weight: 700;
  border-radius: 10px;
  border:none;
  color:#FFFFFF;
  background-color: #02204a;
  margin-bottom: 20px;
  cursor: pointer;
`
const InfoWrapper = styled.div`
  width: 330px;
  height: 440px;
  background-color: #e5e8ef;
  display:flex;
  flex-direction: column;
  align-items: center;
`
const Impossible = styled.div`
  color: red;
  font-size: 16px;
  font-weight: 700;
  padding: 20px;
`
const FreshArea = styled.div`
  font-size: 14px;
  color: #98a6ad;
  font-weight: 400;
`
const Border = styled.div`
  width: 90%;
  border: 1px solid #000;
  margin: 30px 0;
`
const FreshArea2nd = styled.div`
  font-size: 14px;
  color: #98a6ad;
  font-weight: 400;
`
const Fresh = ( {PostData} ) => {
  const [isActive, setIsActive] = useState(false)
  const { fresh, postCode, address, setFresh,setPostCode,setDetail,setAddress, detail } = useContext(GlobalContext)
  const onChangeDetail = (e) => {
    setDetail(e.target.value)
  }
  const handleComplete = (data) => {
    let fullAddress = data.address;
    let extraAddress = ''; 
    
    if (data.addressType === 'R') {
      if (data.bname !== '') {
        extraAddress += data.bname;
      }
      if (data.buildingName !== '') {
        extraAddress += (extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName);
      }
      fullAddress += (extraAddress !== '' ? ` (${extraAddress})` : '');
    }

    setPostCode(data.zonecode);
    setAddress(data.address);
    setFresh(data.address+detail)
    setIsActive(true)
    // console.log(address)
  }
  
  return (
  <>
    <DaumPostcode onComplete={handleComplete}/>
    {isActive && 
      <TotalWrapper>
        <MainWrapper>
          <TopWrapper>
            <Arrow src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAVCAYAAACzK0UYAAAACXBIWXMAAA7DAAAOwwHHb6hkAAACJUlEQVRIia3TT0jTYRzH8ffn2XSbodsILDDcFBXqGtGhoJ2khMjo4qFdvEh0ywiJqEtIdOrYKQqCTkEE/TMIEyIoIpHsj9tMmjbIgv1My2j+vh0ySESZbt/Lw8P3eZ7X8+X5PqLsSAVJhPc4dMw3d4tP916Vu9OVt+xQiObwUcldNdSFv/S7/MuVizS7HklXwEKG9TP98M1GEK2b3dbZSCTQL3QCY8T80gD5oQ0BAME1M8mDSee7CxjdYHd9c+fJD01uFIC1Kkl2bZfZTcFepGt+afEy009mNgPAqkpSQRLhTsElpKjv+6fRzxtMDy9uFliNJOvSMk5hbDHfzpBfvA3DpUqA/5DdNSQa04JB4LNhJ8k/eAT4lQIAIpmKOYucM+gDRs23i5Tc+2ocDkDohxekFOogoF5BxGQhOQ1Qa1UzRORFkOCvCazuOtCHqQ14JvG1Wojv28vlFt5VS6I5LWkQY8aks0zdH6JKbxL4O8wu4WVfE+v4JrRf0E20vYDX9AGmKoYCK2bFhnFidZOSDkgcpiEwj7djHKYqauOVCAUfL5sh2npHKCWpl3jtVuqTY8xNfq8Sshxebp5424gz1yjokQIJi7WM4uWK1UMAitmihVueK+jChqVFYCfR1jG83Gz1EICF3IJ5mcfEOwrCjkvuCPH2HMXMJFD2Z1of+RfFtndE3Uc59snoor79KXOZL9VFyC7hNU0Q1aiDGpN7i5cplIv8AY12wKKU1jaJAAAAAElFTkSuQmCC"/>
            <Search>다시 주소 검색하기</Search>
          </TopWrapper>
          <AddressWrapper>
            <PostCode defaultValue={postCode}></PostCode>
            <Address defaultValue={address}></Address>
            <AddressDetail placeholder="나머지 주소를 입력해주세요." onChange={onChangeDetail}></AddressDetail>
            <SubmitAddress onClick={PostData}>주소입력</SubmitAddress>
          </AddressWrapper>
          <InfoWrapper>
            <Impossible>새벽배송 지역 중 배송 불가 장소 안내</Impossible>
            <FreshArea>관공서/학교/병원/시장/공단/도서산간지역</FreshArea>
            <Border></Border>
            <FreshArea2nd>가락동농수산물도매시장</FreshArea2nd>
            <FreshArea2nd>가천대학교</FreshArea2nd>
          </InfoWrapper>
        </MainWrapper>
      </TotalWrapper>
    }
  </>
    )
}

export default Fresh