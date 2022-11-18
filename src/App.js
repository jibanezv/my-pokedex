import './App.css';
import Navbar from '../src/components/navbar';
import Searchbar from './components/searchbar';

function App() {
  return (
    <div >
      <Navbar />
      <div className="body-pkdex">
        <Searchbar />
      </div>
    </div>
  );
}

export default App;
