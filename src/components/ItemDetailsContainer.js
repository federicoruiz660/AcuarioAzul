import React from 'react'
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ItemDetails from './ItemDetails'
import { getProductById } from "./Selector"

function ItemDetailsContainer() {

    const [item, setItems] = useState([])

    const { elementId } = useParams()

    useEffect(() => {
        getProductById(elementId)
            .then(res => {
                setItems(res)
            })
            .catch(err => {
                console.log(err)
            })
    }, [elementId])

    return (
        <>
            {item.length == 0 ? <p>Cargando...</p> : <ItemDetails item={item} /> }
        </>

    )
}
export default ItemDetailsContainer
