import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import { Container } from 'react-bootstrap';
import HomeScreen from './screens/HomeScreen';
import {Outlet} from 'react-router-dom';
function App() {
  return (
    <div className="App">
     <Header/>
     <main className='py-3'>
      <Container>
        <Outlet/>
      </Container>
     </main>
     <Footer/>
    </div>
  );
}

export default App;
