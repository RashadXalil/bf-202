import React, { useState } from "react"
import Item from "./Item"

const List = () => {
  const [isActive, setIsActive] = useState(0)
  const todos = [
    {
      id: 1,
      title: "todo 1"
    },
    {
      id: 2,
      title: "todo 2"
    },
    {
      id: 3,
      title: "todo 3"
    }
  ]
  return (
    <ul className="todos">
      {todos.map((todo, index) => {
        return (
          <Item
            key={index}
            todo={todo.title}
            isActive={isActive}
            setIsActive={setIsActive}
            index={index}
          />
        )
      })}
    </ul>
  )
}

export default List
