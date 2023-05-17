import React, { useState } from 'react'

const HOC = (OriginalComponent) => {
    const NewComponent = (props) => {
        const [money, setMoney] = useState(20)
        const increaseHandler = () => {
            setMoney(money * 2)
        }
        return <OriginalComponent
            money={money}
            {...props}
            increaseHandler={increaseHandler} />
    }
    return NewComponent
}

export default HOC