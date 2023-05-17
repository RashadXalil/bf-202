import { useEffect, useState } from 'react';
import './App.css';
import Footer from './Footer';
import Header from './Header';
import { MainContext } from './context';

function App() {
    const [theme, setTheme] = useState("light")
    useEffect(() => {
        document.body.className = theme
    }, [theme])
    const data = {
        theme,
        setTheme
    }
    return (
        <MainContext.Provider value={data}>
            <Header />
            <Footer />
        </MainContext.Provider>
    );
}

export default App;
