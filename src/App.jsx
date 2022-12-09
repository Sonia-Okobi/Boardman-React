import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AboutPage from './components/modules/about/pages/AboutPage';
import ApiPage from './components/modules/api/pages/ApiPage';
import ContactPage from './components/modules/contact/pages/ContactPage';
import HomePage from './components/modules/home/pages/HomePage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<HomePage />}></Route>
        <Route exact path='apipage' element={<ApiPage />}></Route>
        <Route exact path='/aboutpage' element={<AboutPage />}></Route>
        <Route exact path='contactpage' element={<ContactPage />}></Route>
      </Routes>
    </BrowserRouter>
    // <HomePage/>
    // <AboutPage/>
  );
}

export default App;
