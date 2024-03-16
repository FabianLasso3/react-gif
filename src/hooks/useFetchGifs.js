import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

//hook no es mas que una funcion
export const useFetchGifs = (category) => {
  // useEffect() le dice a React que realice una instruccion cuando algo sucede
    //cuando usas el modo estricto se va a ejecutar dos veces la data que traes de la api, pero solo es para el modo desarrollador
    //custom hook un hook que voy a crear de 0
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    
    const getImages = async() => {
        const newImages = await getGifs(category);
        setImages(newImages);
        setIsLoading(false);
    }
    //no se le puede poner asynck al useefect
    useEffect(() => {
        getImages();
    }, [])
  
  return {
    images: images,
    isLoading: isLoading
    // isLoading se puede dejar asi tienen el mismo nombre
  }
}


