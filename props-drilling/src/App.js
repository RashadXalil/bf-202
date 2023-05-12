import { useState } from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import { MainContext, useContext } from './components/context';

function App() {
    const [theme, setTheme] = useState("light")
    const [counter, setCounter] = useState(0)
    const data = {
        theme,
        setTheme,
        counter,
        setCounter
    }
    return (
        <MainContext.Provider value={data}>
            <div className="App">
                <Header />
                <Footer />
            </div>
        </MainContext.Provider>
    );
}

export default App;
