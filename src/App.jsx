import { Outlet } from 'react-router-dom';
import './App.css'
import Navigation from './components/Navigation'
import Footer from './components/Footer'

//Parent section
function App() {
  return (
    <div id="content" className="app-wrapper d-flex flex-column min-vh-100">
      <Navigation />
      <Outlet />
      {/* <Footer /> */}
    </div>
  );
}

export default App