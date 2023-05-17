import React, { memo } from 'react'
import ListItem from './ListItem'

const List = ({ list }) => {
    console.log("list render olundu")
    return (
        <ul>
            {
                list.map((item, index) => {
                    return <ListItem key={index} item={item} />
                })
            }
        </ul>
    )
}

export default memo(List)