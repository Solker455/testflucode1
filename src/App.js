import './App.css';
import { useSelector } from 'react-redux';
import { PublicRoute } from './components/route/publicRoute';
import { PrivateRoute } from './components/route/privateRoute';

function App() {
  const auth = useSelector(state => state.tokenSlice.auth)

  return (auth) ? <PrivateRoute /> : <PublicRoute />

}

export default App;
