import React from 'react'
import { Link, useParams } from 'react-router-dom'

function Item({ item }) {
    
    
    const urlDetalles = "../item/" + item.id
    
    
    return (
        <div className='ContenedorDeTarjeta'>
            <div className='ImagenProducto'>
                <img src={item.urlPicture} alt="Imagen del producto" className='prd_img'></img>
            </div>
            <div className='TituloProducto'>
                <span > {item.title} </span>
            </div>
            <div className='PrecioProducto'>
                <span > ${item.price} </span>
            </div>
            

            <div className='BtnDetalles'>
                <Link to={urlDetalles} >
                    <button >
                        Detalles
                    </button>
                </Link>
            </div>

        </div>
    )
}

export default Item
