import { useState } from "react"

// export const AddCategory = ({setCategorias}) => { una forma en la que se resolvio parandole el setCategorias
export const AddCategory = ({onNewCategory}) => {
    const [inputValue, setInputValue] = useState("")

    const onInputChange = (event) => {
        setInputValue( event.target.value );
    }

    const onSubmit = (event) => {
        // Evita que se recargue la pagina
        event.preventDefault();
        //si tenemos menos de un caracter no se ejecuta
        if( inputValue.trim().length <= 1) return;
        //comunicar componentes con props
        // setCategorias( category => [...category, inputValue])
        onNewCategory( inputValue.trim());
        setInputValue("");
    }

    return (
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Buscar un Gif"
          value={inputValue}
          onChange={onInputChange}
        />
      </form>
  )
}


