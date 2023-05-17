import logo from './logo.svg';
import './App.css';
import Header from './Header';
import { useCallback, useRef, useState } from 'react';
import AddTodo from './AddTodo';
import Todos from './Todos';

function App() {
    console.log("app render olundu")
    const [todos, setTodos] = useState([])
    const inputRef = useRef()
    const submitHandler = useCallback((e) => {
        e.preventDefault()
        setTodos([...todos, inputRef.current.value])
        inputRef.current.value = ""
    }, [])
    return (
        <div className="App">
            <Header />
            <AddTodo submitHandler={submitHandler} ref={inputRef} />
            <Todos todos={todos} />
        </div>
    );
}

export default App;
