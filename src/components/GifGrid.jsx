import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({category}) => {
    //desestructurar un objeto
    const {images, isLoading} = useFetchGifs(category);

    //No colocar funciones dentro del componente, o hacerlo en otro archivo 
    
    return (
        <>
            <h3>{category}</h3>
            {
                isLoading && (<h2>Cargando...</h2>)
            }

            <div className="card-grid">
            {
                images.map( (image) => (
                    <GifItem 
                    key={image.id}
                    // esto se utiliza para pasar propiedades del objeto  cuando son muchas
                    {...image}
                    />
                ))
            }   
            </div>
        </>

        
    )
}


