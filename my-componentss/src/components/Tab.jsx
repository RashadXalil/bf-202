import React, { Children } from "react"
import Panel from "./Panel"
const Tab = (props) => {
  return props.children.map((panel, index) => {
    return <Panel key={index} />
  })
}

export default Tab
