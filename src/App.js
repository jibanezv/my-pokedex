import './App.css';
import Navbar from '../src/components/navbar';
import Searchbar from './components/searchbar';
import Pokedex from "./components/pokedex";

function App() {
    return (
        <div>
            <Navbar/>
            <div className="single-search-div">
                <Searchbar/>
            </div>
            <div>
                <Pokedex/>
            </div>
        </div>
    );
}

export default App;
