import { useState } from "react"
import { AddCategory, GifGrid } from "./components"

export const GifExpertApp = () => {

const [categorias, setCategorias] = useState(['one punch'])

const addCategory = ( newCategory ) => {
    //No usar push de momento en react porque es usado para mutar un objeto
    //El operador spread ... sirve para agregar elementos aun array que ya existe
    // setCategorias(cat => [...categorias, 'valorant'])
    //otra forma seria con concat - crea un array nuevo
    //Si el nuevo valor que vamos agregar ya se encuentra en el array no lo agrega, aunque diferencia entre como lo escribes ejempko si escribes one piece a One Piece son diferentes
    if(categorias.includes(newCategory)) return;
    setCategorias([newCategory, ...categorias])
    
}

return (
    <>
        <h1>GifExpertApp</h1>
        {/* envia ese setcategorias  */}
        <AddCategory 
            // setCategorias={setCategorias}
            onNewCategory={addCategory} 
        />
        


      {
        categorias.map((category) =>(
        <GifGrid key={category} category={category}/>
        ))
      }
      
    </>
  )
}

