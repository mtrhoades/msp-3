import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import InventoryOrdering from './components/inventory/InventoryOrdering';
import Login from './components/Login';
import CurrentUserProvider from './components/context/CurrentUser';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">

    <CurrentUserProvider>
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        {/* <Route path="/signup" element={<SignUp />} /> */}
        <Route path='/inventory' element={<InventoryOrdering/>}/>
        {/* <Route path='*' element={<ErrorPage/>}/> */}
        {/* <Route path='/construction' element={< Construction/>} /> */}
      </Routes>
    </Router>
    </CurrentUserProvider>

    </div>
  );
}

export default App;
