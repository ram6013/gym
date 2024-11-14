const Ejercicios = ({ cantidadEjercicios, colors }) => {
    const camposTexto = new Array(cantidadEjercicios).fill(""); 
    return (
        
        <div>
            <div className="flex justify-around">
                <label className={`${colors}`}  htmlFor="ejercicio">Exercise:</label>
                <label className={`${colors}`} htmlFor="rpe">RPE:</label>
                <label className={`${colors}`} htmlFor="sets">Sets:</label>
            </div>
            {camposTexto.map((_, index) => (
                <div key={index} className="mb-2 flex">
                    <textarea 
                        placeholder={`Ejercicio ${index + 1}`} 
                        id="ejercicio"
                        className="w-full p-2 border rounded-lg"
                    />
  
                    <textarea id="rpe" inputMode="numeric" className="w-full p-2 border rounded-lg" />
                    <textarea id="sets" inputMode="numeric" className="w-full p-2 border rounded-lg" />
                </div>
        ))}
    </div>
    )
}

export default Ejercicios