import Colaborador from "../Colaborador"
import "./Equipo.css"
import hexToRgba from "hex-to-rgba"

const Equipo = (props) => {
    //Destructuración, crea variables para guardar esa información extraida a traves de datos
    const { colorPrimario, titulo, id } = props.datos
    const { colaboradores, eliminarColaborador, actualizarColor, like } = props
    const cfondo = {
        backgroundColor: hexToRgba(colorPrimario, 0.4)
    }
    //onChange: Cuando modificamos un atributo value tenemos que indicar que es lo que va a pasar cuando el usuario interactue con el elemento
    return <> 
        { colaboradores.length > 0 && 
            <section className="equipo" style={cfondo}>
                <input
                    type="color"
                    className="input-color"
                    value={colorPrimario}
                    onChange={(e) => {
                        actualizarColor(e.target.value, id)
                    }}
                />
                <h3 style={{ borderColor: colorPrimario }}>{titulo}</h3>
                <div className="colaboradores">
                    {
                        colaboradores.map((colaborador, index) => <Colaborador 
                            datos={colaborador} 
                            key={index} 
                            colorPrimario={colorPrimario}
                            eliminarColaborador={eliminarColaborador}
                            like={like}
                        />)
                    }
                </div>
            </section>
        }
    </>
}

export default Equipo