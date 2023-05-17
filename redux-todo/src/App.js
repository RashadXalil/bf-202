import React from 'react';
import './App.css';
import Content from './components/Content';
import Header from './components/Header';

function App() {
    return (
        <React.Fragment>
            <section className='todoapp'>
                <Header />
                <Content />
            </section>

        </React.Fragment>

    );
}

export default App;
