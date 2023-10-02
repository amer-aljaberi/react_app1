//
import logo from './logo.svg';
import './App.css';
import Header from './header';
import Main from './main';
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Products from './Products';

function App() {
  return (
    <>

 <Header/>
 <Router>
 <Routes>
  <Route path="/"Component={Main}></Route>
 <Route  path="/Products"Component={Products}></Route>
 </Routes>
 </Router>

 </>
  );
}

export default App;
