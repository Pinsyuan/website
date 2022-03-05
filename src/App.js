import {
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import './App.css';
import Header from './components/Header'
import Home from './components/Home'
import Portfolio from './components/Portfolio'
import About from './components/About'
import Contact from './components/Contact'
import WorkDetail from './components/WorkDetail'


function App() {
  const navigate = useNavigate();

  return (
    <div>
      <Header navigate={navigate}/>
      <Routes>
        <Route path="*" element={<Home navigate={navigate} />} />
        <Route path="/Portfolio" element={<Portfolio navigate={navigate} />} />
        <Route path="/About" element={<About navigate={navigate} />} />
        {/* <Route path="/Contact" element={<Contact navigate={navigate} />} /> */}
        <Route path="/Portfolio/:workName" element={<WorkDetail navigate={navigate} />} />
      </Routes>   
    </div>
  );
}

export default App;
