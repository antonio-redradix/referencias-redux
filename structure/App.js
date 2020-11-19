import './App.css';
import { Provider } from 'react-redux'
import Counters from './components/counters'
import store from './store'

function App() {
  return (
    <Provider store={store}>
      <Counters/>
    </Provider>
  );
}


export default App
