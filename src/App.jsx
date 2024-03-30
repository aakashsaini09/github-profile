import Navbar from './components/Navbar'
import Home from './components/Home'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Repo from './components/SingleUser';
import { SearchProvider } from './components/SearchContext';

function App() {

  return (
    <>
    <SearchProvider>
      <Router>
        <Navbar/>
        <Routes>
          <Route ecact path='/' element={<Home/>}/>
          <Route ecact path='/repopage/:id' element={<Repo/>}/>
        </Routes>
      </Router>
      </SearchProvider>
    </>
  )
}
export default App
