import './App.css';
import { Login } from './components/login';
import { Register } from './components/register';
import { ListUsers } from './components/listUsers';
import { Header } from './components/header';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { api } from './api/api';

function App() {
  const token = useSelector(state => state.tokenReducer.token)
  const PrivateRoute = ({ component: Component }) => (
    <Route
      render={props => (
        !token)
        ? <Redirect to="/login" />
        : <Component {...props} />
      }

    />
  )
  console.log(api('https://reqres.in/api/users?page=2', 'GET'));
  
  return (
    <div className="App">
      <Router>
        <Header />
        <Route path="/register"><Register /></Route>
        <Route path="/login"><Login /></Route>
        <PrivateRoute path="/listusers" component={() => (<ListUsers />)} />
      </Router>
    </div>
  )

}

export default App;
