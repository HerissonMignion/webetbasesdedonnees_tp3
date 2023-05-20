import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import MainNavBar from './shared/navigation/MainNavBar';
import Home from "./home/Home";
import HomeFAQ from './home/HomeFAQ';
import StudentsHome from './students/StudentsHome';
import StudentsCreate from './students/StudentsCreate';
import InternshipsHome from './internships/InternshipsHome';
import InternshipsCreate from './internships/InternshipsCreate';
import HomeProfils from './home/HomeProfils';
import HomeDeroulement from './home/HomeDeroulement';



function App() {
  return (
    <Router>
      <MainNavBar />
      <main>
        <Routes>
          <Route exact path="/" element={<Navigate to="/home" />} />
          <Route exact path="/home" element={
            <Home />
          } />
          <Route exact path="/home/faq" element={
            <HomeFAQ />
          } />
          <Route exact path="/home/profils" element={
            <HomeProfils />
          } />
          <Route exact path="/home/deroulement" element={
            <HomeDeroulement />
          } />
          {/* <Route exact path="/home" element={
            <Home />
          } /> */}
          <Route exact path="/students/home" element={
            <StudentsHome />
          } />
          <Route exact path="/students/create" element={
            <StudentsCreate />
          } />
          <Route exact path="/internships/home" element={
            <InternshipsHome />
          } />
          <Route exact path="/internships/create" element={
            <InternshipsCreate />
          } />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
