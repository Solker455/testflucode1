import './App.css';
import { useSelector } from 'react-redux';
import { Public } from './components/route/public';
import { Private } from './components/route/private';

function App() {
  const auth = useSelector(state => state.tokenReducer.auth)

  if (auth) { return (<div><Private /></div>) } else { return (<div><Public /></div>) }

}

export default App;
