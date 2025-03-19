import { Outlet } from 'react-router-dom';
import './App.css'
import Navigation from './components/Navigation'
import Footer from './components/Footer'

//Parent section
function App() {
  return (
    <div id="content">
      <div id="nf-wrap">
        <div id="non-footer">
          <Navigation />
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App