import { FaPlus, FaMinus } from "react-icons/fa";
import { useRef, useState } from "react";
import { IoColorPalette } from "react-icons/io5";
import Color from "./Color";
import Ejercicios from "./Ejercicios";
import { RiExpandDiagonalFill } from "react-icons/ri";
import { GrContract } from "react-icons/gr";
import { useOutsideClick } from "../hooks/UseOutsideClick";

const NewClassName =
  "fixed inset-0 z-50 col-span-4 border p-4 rounded-lg shadow-md grid grid-rows-[auto,auto,1fr,auto]";

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

const Marco = ({
  nombreRutina,
  ejercicios,
  eliminarMarco,
  id,
  modifyMarco,
  setModifyMarco,
}) => {
  const cantidadEjercicios = parseInt(ejercicios) || 0;
  const camposTexto = new Array(cantidadEjercicios).fill("");

  const [isAdd, setIsAdd] = useState(true);
  const [showModal, setShowModal] = useState(false);

  const objectRef = useRef(colors.blanco); 
  const containerRef = useRef(null);

  const [color, setColor] = useState(colors.blanco);

  useOutsideClick(containerRef, () => setModifyMarco(false));

  const toggleIcon = () => {
    setIsAdd(!isAdd);
  };

  const closeModal = () => setShowModal(false);

  const cambiarColor = (colorName) => {
    setColor(colorName);
    closeModal();
  };

  const ChangeMarco = () => {
    setModifyMarco(!modifyMarco);
  };

  return (
    <div
      className={
        modifyMarco
          ? NewClassName
          : "min-w-[300px] min-h-[300px] border p-4 rounded-lg shadow-md grid grid-rows-[auto,auto,1fr,auto]"
      }
      style={{ backgroundColor: color.color }} // Accede al color de fondo desde la referencia.
    >
      <header className="flex w-full justify-between">
        <button onClick={toggleIcon} className="text-4xl">
          {isAdd ? (
            <FaMinus color={objectRef.current.icon} size={25} /> // Accede al color del icono.
          ) : (
            <FaPlus color={objectRef.current.icon} size={25} />
          )}
        </button>
        <div className="flex gap-4">
          <button onClick={() => setShowModal(true)}>
            <IoColorPalette color={objectRef.current.icon} size={25} />
          </button>
          <button onClick={() => ChangeMarco()}>
            {modifyMarco ? (
              <GrContract color={objectRef.current.icon} size={25} />
            ) : (
              <RiExpandDiagonalFill color={objectRef.current.icon} size={25} />
            )}
          </button>
        </div>
      </header>
      <div className="flex justify-center">
        <h2 className={`text-xl ${objectRef.current.text}`}>{nombreRutina}</h2>
      </div>
      <div className="mt-4">
        {isAdd && (
          <Ejercicios colors={colors} cantidadEjercicios={cantidadEjercicios} />
        )}
      </div>
      {showModal && (
        <Color
          colores={colors}
          cambiarColor={cambiarColor}
          closeModal={closeModal}
        />
      )}
      <div className="mt-auto flex justify-around ">
        <button className={`${objectRef.current.text}`}>Save</button>
        <button
          onClick={() => eliminarMarco(id)}
          className={`${objectRef.current.text}`}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Marco;
