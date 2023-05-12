import React, { useState } from "react"
import classnames from "classnames"
import "./Item.css"
const Item = ({ isActive, setIsActive, index, todo }) => {
  return (
    <li
      className={classnames({
        active: index == isActive
      })}
      onClick={() => {
        setIsActive(index)
      }}
    >
      {todo}
    </li>
  )
}

export default Item
