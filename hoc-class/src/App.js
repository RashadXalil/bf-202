import logo from './logo.svg';
import './App.css';
import ClickCounter from './ClickCounter';
import HoverCounter from './HoverCounter';
import Person1 from './Person1';
import Person2 from './Person2';

function App() {
    return (
        <div className="App">
            <h1>Toyota Prius 2000$</h1>
            <Person1 name="Cemsid" />
            <Person2 name="Melik" />
        </div>
    );
}

export default App;
