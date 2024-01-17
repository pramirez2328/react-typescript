import Header from './components/Header';
import Users from './components/Users';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <>
      <Header />
      <div className='container mt-4'>
        <Users />
      </div>
      <Footer />
    </>
  );
}

export default App;
