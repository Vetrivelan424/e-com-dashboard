import './assets/index.css';
import './assets/Animations/animations.css';
import './assets/icons/style.css';
import { RouterProvider } from 'react-router-dom';
import AuthRoutes from './routes/AuthRoutes';
function App() {
  return (
    <>
    <RouterProvider router={AuthRoutes} />
    </>
  );
}

export default App;
