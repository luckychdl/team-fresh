
import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Company from "./commons/NaviMenu/company/company";
import Fresh from "./commons/NaviMenu/fresh/fresh";
import News from "./commons/NaviMenu/news/news";
import Notice from "./commons/NaviMenu/notice/notice";
import OverView from "./commons/NaviMenu/overview/overview";
import Main from "./components/main/main.container";
import Navigation from "./components/navigation/navigation.container";

export const GlobalContext = createContext([])
function App() {
  const [postCode, setPostCode] = useState()
  const [address, setAddress] = useState()
  const [detail, setDetail] = useState()
  const [fresh, setFresh] = useState([])
  const value = {
    fresh: fresh,
    postCode:postCode,
    detail:detail,
    address:address,
    setFresh: setFresh,
    setPostCode:setPostCode,
    setAddress:setAddress,
    setDetail: setDetail
  }
  
  useEffect(()=>{
    const getData = async() => {
      const res = await axios.post("https://tmsapidev.teamfresh.co.kr/api/delivery/searchDeliveryAreaForTest")
      setFresh(res)
    }
    getData()
  },[])
  // console.log(address)
  const PostData = async() => {
    try {
      await axios.post("https://tmsapidev.teamfresh.co.kr/api/delivery/searchDeliveryAreaForTest", {
        addrBasic: address
      })
    }
    catch (err) {
      console.log(err)
    }
  }
  console.log(fresh)
  
  return (
    <GlobalContext.Provider value={value}>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/company" element={<Company />} />
          <Route path="/overview" element={<OverView />} />
          <Route path="/notice" element={<Notice />} />
          <Route path="/news" element={<News />} />
          <Route path="/fresh" element={<Fresh PostData={PostData}/>} />
        </Routes>
      </BrowserRouter>
    </GlobalContext.Provider>

  );
}

export default App;
