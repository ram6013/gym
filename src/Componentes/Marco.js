import { FaPlus, FaMinus } from "react-icons/fa";
import { useState } from "react";
import { IoColorPalette } from "react-icons/io5";
import Color from "./Color";
import Ejercicios from "./Ejercicios";

const colors = {
  azul: {
    className: "bg-blue-500 text-white",
    color: "#0000FF",
    text: "text-white font-bold",
    icon: "white",
  },
  verde: {
    className: "bg-green-500 text-white",
    color: "#00FF00",
    text: "text-black font-bold",
    icon: "black",
  },
  rojo: {
    className: "bg-red-500 text-white",
    color: "#FF0000",
    text: "text-white font-bold",
    icon: "white",
  },
  negro: {
    className: "bg-black text-white",
    color: "#000000",
    text: "text-white font-bold",
    icon: "white",
  },
  blanco: {
    className: "bg-white text-black",
    color: "#FFFFFF",
    text: "text-black font-bold",
    icon: "black",
  },
  amarillo: {
    className: "bg-yellow-500 text-black",
    color: "#FFFF00",
    text: "text-black font-bold",
    icon: "black",
  },
  morado: {
    className: "bg-purple-500 text-white",
    color: "#800080",
    text: "text-white font-bold",
    icon: "white",
  },
  naranja: {
    className: "bg-orange-500 text-white",
    color: "#ff5733",
    text: "text-white font-bold",
    icon: "white",
  },
  cian: {
    className: "bg-cyan-500 text-black",
    color: "#00FFFF",
    text: "text-black font-bold",
    icon: "black",
  },
};

const Marco = ({ nombreRutina, ejercicios }) => {
    const cantidadEjercicios = parseInt(ejercicios) || 0; 
    const camposTexto = new Array(cantidadEjercicios).fill("");

    const [isAdd, setIsAdd] = useState(true);


    const toggleIcon = () => {
      setIsAdd(!isAdd);
    };

    const [showModal, setShowModal] = useState(false);
    const [backgroundColor, setBackgroundColor] = useState("#FFFFFF");
    const [textColor, setTextColor] = useState("#000000");
    const [iconColor, setIconColor] = useState(null);

    const closeModal = () => setShowModal(false);

    const cambiarColor = (fondo, texto, icon) => {
      setBackgroundColor(fondo);
      setTextColor(texto);
      setIconColor(icon);
      closeModal();
    };
    


    return (
      <div
        className="border p-4 rounded-lg shadow-md"
        style={{ backgroundColor: backgroundColor }}
      >
        <header className="flex w-full justify-between">
          <button onClick={toggleIcon} className="text-4xl">
            {isAdd ? (
              <FaMinus color={iconColor} size={25} />
            ) : (
              <FaPlus color={iconColor} size={25} />
            )}
          </button>
          <button onClick={() => setShowModal(true)}>
            <IoColorPalette color={iconColor} size={25} />
          </button>
        </header>
        <div className="flex justify-center">
          <h2 className={`text-xl font-bold ${textColor}`}>{nombreRutina}</h2>
        </div>
        <div className="mt-4">
          {isAdd && (
            <Ejercicios
              colors={textColor}
              cantidadEjercicios={cantidadEjercicios}
            />
          )}
        </div>
        {showModal && (
          <Color
            colores={colors}
            cambiarColor={cambiarColor}
            closeModal={closeModal}
          />
        )}
      </div>
    );
};

export default Marco;
