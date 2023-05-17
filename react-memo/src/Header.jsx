import React, { memo } from 'react'

const Header = () => {
    console.log("header render olundu")
    return (
        <div>Header</div>
    )
}

export default memo(Header)