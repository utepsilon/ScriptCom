
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Header from './components/Header';
import Category from './components/category/Category';
import ScriptPage from './components/Script/ScriptPage';

function App() {
  return (
    <BrowserRouter>
    <Header></Header>
    <Routes>
      <Route path='/' element={<Category></Category>}></Route>
      <Route path='/script' element={<ScriptPage></ScriptPage>}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
