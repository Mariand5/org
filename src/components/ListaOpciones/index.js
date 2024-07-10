import "./ListaOpciones.css"

const ListaOpciones = (props) => {
    //Método map(usado para recorrer arreglos): arreglo.map( () => {} ) 
    const manejarCambio = (e) => {
        props.actualizarEquipo(e.target.value)
    }
    //poniendo option primero dentro del select hacemos que Sellecionar equipo aparezca como primero opcion por defecto pero al hacer click no nos aparece entre las opciones por lo que cumple la función del placeholder
    return <div className="lista-opciones">
        <label>Equipos</label>
        <select value={props.valor} onChange={manejarCambio}>
            <option value="" disabled defaultValue="" hidden>Seleccionar equipo</option>
            {props.equipos.map((equipo, index) =>  <option key={index}>{equipo}</option>)}
        </select>
    </div>
}

export default ListaOpciones