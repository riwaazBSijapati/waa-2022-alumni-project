import './App.css';
import Dashboard from './components/dashboard/Dashboard';
import {BrowserRouter} from 'react-router-dom';

function App() {
  return (
      <BrowserRouter>
        <Dashboard>
        </Dashboard>
      </BrowserRouter>
  );
}

export default App;
