import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout/Layout';
import Home from './components/Home/Home';
import Blog from './components/Blog/Blog';
import About from './components/About/About';
import Article from './components/Article/Article';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='blog' element={<Blog />}>
            <Route path='article' element={<Article />} />
          </Route>
          <Route path='about' element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
