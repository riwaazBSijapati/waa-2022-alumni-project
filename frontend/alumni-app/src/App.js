import './styles/App.css';
import { BrowserRouter } from 'react-router-dom';
import Dashboard from './components/dashboard/Dashboard';

function App() {
  return (
    <div className="App">
          {/* <Provider store={store}>*/}
      <BrowserRouter>
        <Dashboard>

        </Dashboard>
      </BrowserRouter>
          {/* </Provider> */}
    </div>
  );
}

export default App;
