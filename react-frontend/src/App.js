import './App.css';
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import ListEmployeeComponent from './components/ListEmployeeComponent';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'

function App() {
  return (
    <div>
      <Router>
          <HeaderComponent/>
            <div className="container">
              <Routes>
                <Route path="/" element={<ListEmployeeComponent />} />
                <Route path="/employees" element={<ListEmployeeComponent />} />
                {/* <ListEmployeeComponent/> */}
              </Routes>
            </div>
          <FooterComponent/>
      </Router>
    </div>
  );
}

export default App;
