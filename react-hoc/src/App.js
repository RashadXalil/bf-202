import logo from './logo.svg';
import './App.css';
import ClickIncrease from './ClickIncrease';
import HoverIncrease from './HoverIncrease';

function App() {
    return (
        <div className="App">
            <ClickIncrease name="rashad click" />
            <HoverIncrease name="rashad mouse over" />
        </div>
    );
}

export default App;
