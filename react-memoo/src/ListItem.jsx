import React, { memo } from 'react'

const ListItem = ({ item }) => {
    console.log("list item render olundu")
    return (
        <li>{item}</li>
    )
}

export default memo(ListItem)