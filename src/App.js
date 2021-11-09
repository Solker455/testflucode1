import './App.css';
import { Login } from './components/login';
import { Register } from './components/register';
import { ListUsers } from './components/listUsers';
import { Header } from './components/header';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <Router>
        <Header />
        <Route path="/register" ><Register /></Route>
        <Route path="/login"><Login /></Route>
        <Route path="/listusers" ><ListUsers /></Route>
      </Router>
    </div>
  )

}

export default App;
