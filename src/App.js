import './App.css';
import { Header } from './components/page/header';
import { useSelector } from 'react-redux';
import { Public } from './components/route/public';
import { Private } from './components/route/private';

function App() {
  const token = useSelector(state => state.tokenReducer.token)

  if (token) { return (<div><Header/><Private /></div>) } else { return (<div><Header/><Public /></div>) }

}

export default App;
