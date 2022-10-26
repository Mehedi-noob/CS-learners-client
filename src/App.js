import './App.css';
import { RouterProvider } from 'react-router-dom';
import { routes } from './Routes/Routes';

function App() {
  return (
    <div className="App">
      <RouterProvider routers = {routes}></RouterProvider>
    </div>
  );
}

export default App;
