import './App.css';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Language from './childComponents/language';
import Genre from './childComponents/genre';
import Director from './childComponents/director';
import Actor from './childComponents/actor';
import Carousel from './childComponents/carousel';
import { DataProvider } from './contextFolder/dataContext';
import ChildGenre from './subComponents/genreChild';
import Navbar from './navbar';
import ChildLanguage from './subComponents/languageChild';
import ChildDirector from './subComponents/directorChild';
import ChildActor from './subComponents/actorChild';
function App() {
  return (
    <div className="App">
      <DataProvider>
      <Router>
      <div >
    <Navbar/>
      </div>
      <Routes>
        <Route exact path='/' element={<Carousel/>}/>
        <Route exact path='/language' element={<Language/>} />
        <Route exact path='/genre' element={<Genre/>}/>
        <Route exact path='/director' element={<Director/>}/>
        <Route exact path='/actor' element={<Actor/>}/>
        <Route exact path='/childlanguage' element={<ChildLanguage/>}/>
        <Route exact path='/childgenre' element={<ChildGenre/>}/>
        <Route exact path='/childirector' element={<ChildDirector/>}/>
        <Route exact path='/childactor' element={<ChildActor/>}/>
      </Routes>
      </Router>
      
      </DataProvider>
    </div>
  );
}

export default App;
