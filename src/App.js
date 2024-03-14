import './App.css';
import RandomUser from './components/carousel/user_carousel';
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RandomUser />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
