import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import HomePage from './pages/Home/home.js';
import Topics from './pages/Topics/Topics.js';
import Quiz from './pages/Quiz/Quiz.js';
import Result from './pages/Result/Result.js';
import Instructions from './pages/Instructions/Instructions.js';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}/>
          <Route path="/topics" element={<Topics/>} />
          <Route path="/instructions" element={<Instructions/>} />
          <Route path="/quiz" element={<Quiz/>}/>
          <Route path="/result" element={<Result/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
