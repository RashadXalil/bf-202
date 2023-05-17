import React from 'react';
import './App.css';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';
import { useSelector } from 'react-redux';

function App() {
    const items = useSelector(state => state.todos.items)
    console.log(items)
    return (
        <React.Fragment>
            <section className='todoapp'>
                <Header />
                <Content />
            </section>
            <Footer />
        </React.Fragment>
    );
}

export default App;
