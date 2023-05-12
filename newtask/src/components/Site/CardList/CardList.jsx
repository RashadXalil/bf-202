import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import Card from '../Card/Card'
import { MainContext } from '../../../context/context'

const CardList = () => {
    const { datas, setDatas } = useContext(MainContext)
    return (
        <React.Fragment>
            <div className="custom__cards" style={{ display: "flex" }}>
                {
                    datas.map((item, index) => {
                        return <Card item={item} key={index} />
                    })
                }
            </div>
        </React.Fragment>
    )
}

export default CardList