import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Stats from './Pages/Stats';
import CalendarPage from './Pages/CalendarPage';
import Running from "./Pages/Running";
import LogIn from "./Pages/LogIn";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Calendar" element={<CalendarPage />} />
        <Route path="/stats" element={<Stats />} />
        <Route path="/run" element={<Running />} />
        <Route path="LogIn" element={<LogIn />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
