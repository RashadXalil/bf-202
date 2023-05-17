import { useDispatch } from 'react-redux';
import './App.css';
import Counter from './Counter';
import { decreaseByAmount, decrement, increment, incrementByAmount } from './redux/counterSlice/counterSlice';
import { useRef } from 'react';

function App() {
    const dispatch = useDispatch()
    const inputRef = useRef()
    return (
        <div className="App">
            <Counter />
            <button onClick={() => {
                dispatch(increment())
            }}>Increase</button>
            <button onClick={() => {
                dispatch(decrement())
            }}>Decrease</button>
            <input ref={inputRef} type="number" />
            <button onClick={() => {
                dispatch(incrementByAmount(inputRef.current.value))
            }}>Increment by Amount</button>
            <button onClick={() => {
                dispatch(decreaseByAmount(inputRef.current.value))
            }}>Decrease By Amount</button>
        </div>
    );
}

export default App;
