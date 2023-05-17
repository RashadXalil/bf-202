import React, { useState } from 'react'

const UpdatedComponent = (OriginalComponent) => {
    const NewComponent = (props) => {
        const [money, setMoney] = useState(10)
        const handleIncrease = () => {
            setMoney(money => money * 2)
        }
        return <OriginalComponent money={money} handleIncrease={handleIncrease} />
    }
    return NewComponent
}

export default UpdatedComponent