import "@progress/kendo-theme-default/dist/all.css";
import "./App.css";
import "./styles/comon.css";

import DrawerContainer from "./components/layout/DrawerContainer";
import { Routes, Route,  } from 'react-router-dom'
function App() {
  return (
    <div className="App">       
      <DrawerContainer>
        <Routes>
          <Route path="/" element={<div style={{width: '100%'}}>HOME</div>} />
          <Route path="/planning" element={<div>PLANNING</div>} />
          <Route path="/profile" element={<div>PROFILE</div>} />
          <Route path="/info" element={<div>INFO</div>} />
        </Routes>
      </DrawerContainer>  
    </div>
  )
}

export default App
