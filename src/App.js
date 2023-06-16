import Header from './components/Header';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Footer from './components/Footer';
import Detail from './pages/Detail';
import New from './components/New';
import { Route, Routes, Navigate } from 'react-router-dom';
import './style/index.css';

function App() {
  const url = 'https://valorant-api.com/v1/agents';
  return (
    <div>
      <Header />
      <Routes>
        <Route exact path='/valorant-agents' element={<Home url={url} />} />
        <Route exact path='/' element={<Navigate to='/valorant-agents' />} />
        <Route path='/valorant-agents/details/:id' element={<Detail url={url} />} />
        <Route exact path='/valorant-agents/new' element={<New />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
