import { useCallback, useRef, useState } from 'react';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import Counter from './Counter';
import Form from './Form';
import List from './List';

function App() {
    const [counter, setCounter] = useState(0)
    const [list, setList] = useState([])
    const inputRef = useRef()
    const increaseHandler = useCallback(function () {
        setCounter(counter + 1)
    }, [counter])
    const submitHandler = useCallback(function () {
        setList([...list, inputRef.current.value])
    }, [list])
    return (
        <div className="App">
            <Header />
            <Counter counter={counter} increaseHandler={increaseHandler} />
            <Form ref={inputRef} setLizst={setList} submitHandler={submitHandler} />
            <List list={list} />
            <Footer />

        </div>
    );
}

export default App;
