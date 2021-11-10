import './App.css';
import { useSelector } from 'react-redux';
import { Public } from './components/route/public';
import { Private } from './components/route/private';

function App() {
  const token = useSelector(state => state.tokenReducer.token)

  if (token) { return (<div><Private /></div>) } else { return (<div><Public /></div>) }

}

export default App;
