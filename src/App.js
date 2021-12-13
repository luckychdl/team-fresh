
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Company from "./commons/NaviMenu/company/company";
import Fresh from "./commons/NaviMenu/fresh/fresh";
import News from "./commons/NaviMenu/news/news";
import Notice from "./commons/NaviMenu/notice/notice";
import OverView from "./commons/NaviMenu/overview/overview";
import Main from "./components/main/main.container";
import Navigation from "./components/navigation/navigation.container";

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/company" element={<Company />} />
          <Route path="/overview" element={<OverView />} />
          <Route path="/notice" element={<Notice />} />
          <Route path="/news" element={<News />} />
          <Route path="/fresh" element={<Fresh />} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
