import React, { useState } from "react"
import List from "./List"
import Tab from "./Tab"

const Content = () => {
  const [counter, setCounter] = useState(0)
  return (
    <div className="content">
      {/*
    <button
        onClick={() => {
          setCounter(counter - 1)
        }}
      >
        -
      </button>
      <div>{counter}</div>
      <button
        onClick={() => {
          setCounter(counter + 1)
        }}
      >
        +
      </button>
    */}
      <Tab>
        <Tab.Panel>1ci Tab</Tab.Panel>
        <Tab.Panel>2ci tab</Tab.Panel>
        <Tab.Panel>3ci tab</Tab.Panel>
      </Tab>
    </div>
  )
}

export default Content
