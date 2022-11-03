import ItemListContainer from "./ItemListContainer";
import { Routes, Route } from "react-router-dom";
import ItemDetailsContainer from './ItemDetailsContainer';

function Main() {
    return (
        <main>
            <Routes>
                {/* Todos los productos */}
                <Route path='/' element={<ItemListContainer greeting="Todos nuestros productos" />}/>
                {/* Producto por categoria  */}
                <Route path='category/:categoryId' element={<ItemListContainer greeting="" />}/>
                {/* Producto pot id */}
                <Route path='item/:elementId' element={<ItemDetailsContainer/>}/>
                

            </Routes>
            
        </main>
    )
}

export default Main
