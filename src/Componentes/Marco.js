import { FaPlus, FaMinus } from "react-icons/fa";
import { useState } from "react";
import { IoColorPalette } from "react-icons/io5";
import Color from "./Color";
import Ejercicios from "./Ejercicios";

const Marco = ({ nombreRutina, ejercicios }) => {
    const cantidadEjercicios = parseInt(ejercicios) || 0; 
    const camposTexto = new Array(cantidadEjercicios).fill("");

    const [isAdd, setIsAdd] = useState(true);

    const toggleIcon = () => {
        setIsAdd(!isAdd);
    }

    const [showModal, setShowModal] = useState(false);
    const [backgroundColor, setBackgroundColor] = useState("#FFFFFF");
    const [textColor, setTextColor] = useState("#000000");

    // Lista de colores disponibles
    const colores = [
        "#0000FF", "#00FF00", "#FF0000", "#000000", "#FFFFFF", "#FFFF00",
        "#800080", "#ff5733 ", "#00FFFF"
    ];

    const closeModal = () => setShowModal(false);

    // Cambiar el color de fondo y el color de texto
    const cambiarColor = (fondo, texto) => {
        setBackgroundColor(fondo);  // Cambiar fondo
        setTextColor(texto);  // Cambiar color del texto
        closeModal(); 
    };

    return (
        <div
            className="border p-4 rounded-lg shadow-md"
            style={{ backgroundColor: backgroundColor }} // Aplicar el color de fondo aquí
        >
            <header className="flex w-full justify-between">
                <button onClick={toggleIcon} className="text-4xl">
                    {isAdd ? <FaMinus size={25} /> : <FaPlus size={25} />}
                </button>
                <button onClick={() => setShowModal(true)}>
                    <IoColorPalette size={25} />
                </button>
            </header>
            <div className="flex justify-center">
            <h2 className="text-xl font-bold" style={{ color: textColor }}>
                {nombreRutina}
            </h2>
            </div>
            <div className="mt-4">
                {isAdd && (
                    <Ejercicios cantidadEjercicios={cantidadEjercicios} />
                )}
            </div>
            {showModal && (
                <Color
                    colores={colores}
                    cambiarColor={cambiarColor}
                    closeModal={closeModal}
                />
            )}
        </div>
    );
};

export default Marco;
