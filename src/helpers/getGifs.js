// Uso de fetch para obtener info de una api 
// se utiliza si hay un parametro"?" 
// si hay mas de un parametro & para decirle los parametros en este caso q=la cateria que queremos &limit el limite de imagenes
// si la funcion es async toca usar await
// fetch siempre devuelve una promesa

export const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=9ABnl3y5ZrolQlqDWCe8QGFlIFegBHqJ&q=${category}&limit=10`
    //obtiene los datos del servidor y devuelve una promesa con la respuesta
    const resp = await fetch(url);
    //convierte la respuesta del servidor en formato JSON.
    const {data} = await resp.json(url);
    // data es una variable que representa los datos obtenidos, es un arreglo
    // img - Representa cada elemento del arreglo, osea con map lo recorro y con img puede acceder a propiedades especificas
    const gifs = data.map( img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }));

    return gifs;
}

// promesas Las promesas son objetos que representan el resultado eventual (éxito o fracaso) de una operación asincrónica
// Se pueden encadenar usando el método .then() para manejar el resultado exitoso y .catch() para manejar errores. 

// asincrono es que la aplicacion no detiene su funcionamiento y que la petencion al servidor se ejecuta en segundo plano 

// async: Es una palabra clave que se usa antes de una función para declararla como asincrónica. Una función async siempre devuelve una promesa.

// await: Se utiliza dentro de funciones declaradas con async para esperar a que una promesa se resuelva. La ejecución de la función se pausa hasta que la promesa se complete.

// Juntos, async y await hacen que el código asincrónico se vea y se sienta como código síncrono, lo que lo hace más fácil de entender y mantener.

// await solo se puede usar dentro de funciones declaradas con async.

// Async/Await es una forma más moderna y limpia de manejar código asíncrono en JavaScript en comparación con las devoluciones de llamada (callbacks) o las promesas.

// La razón principal por la que convertimos los datos recibidos del servidor en formato JSON es porque es un formato de datos muy comúnmente utilizado en el desarrollo de aplicaciones web para transmitir datos entre el cliente y el servidor.
