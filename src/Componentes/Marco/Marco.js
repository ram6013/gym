import { FaPlus, FaMinus } from "react-icons/fa";
import { useRef, useState } from "react";
import { IoColorPalette } from "react-icons/io5";
import Color from "./Color";
import Ejercicios from "./Ejercicios";
import { RiExpandDiagonalFill } from "react-icons/ri";
import { GrContract } from "react-icons/gr";
import { useOutsideClick } from "../../hooks/UseOutsideClick";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const NewClassName =
  "fixed inset-0 z-50 col-span-4 border p-4 rounded-lg shadow-md grid grid-rows-[auto,auto,1fr,auto] ";

const colors = {
  azul: {
    className: "bg-blue-500 text-white",
    color: "#0000FF",
    text: "text-white font-bold",
    icon: "white",
  },
  verde: {
    className: "border-4 border-custom-darkgreen",
    color: "rgb(128, 237, 153)",
    text: "text-black font-bold",
    icon: "black",
    icon2: "white",
  },
  verde1: {
    className: "border-4 border-custom-darkgreen",
    color: "rgb(8, 28, 21)",
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

  const [TurnMarco, setTurnMarco] = useState(true);
  const [showModal, setShowModal] = useState(false);

  const containerRef = useRef(null);

  const [color, setColor] = useState(colors.blanco);

  const navigate = useNavigate();

  useOutsideClick(containerRef, () => setModifyMarco(false));

  const toggleIcon = () => {
    setTurnMarco(!TurnMarco);
  };

  const closeModal = () => setShowModal(false);

  const cambiarColor = (colorName) => {
    setColor(colorName);
    closeModal();
  };

  const ChangeMarco = () => {
    setModifyMarco(!modifyMarco);
  };

  const data = {
    "id":id,
    "texto":nombreRutina,
    "color": color.color
  };

  const SendToCalendar = () => {
    try {
      navigate("/calendar", { state: { data } });
      toast("Routine sent to calendar successfully!", { duration: 3000, icon:"😙" });
    } catch (error) {
      console.error(error);
      toast("Failed to send routine to calendar.", { duration: 3000, icon:"😢" });
    }
  };
  
  return (
    <div
      className={
        modifyMarco
          ? NewClassName
          : `h-fit  min-w-[300px] min-h-[300px] border p-4 rounded-lg shadow-md grid grid-rows-[auto,auto,1fr,auto] hover:scale-110 transition-all duration-300 ease-in-out ${color.className}`
      }
      style={{ backgroundColor: color.color }}
    >
      <header className="flex w-full justify-between">
        <button onClick={toggleIcon} className="text-4xl">
          {TurnMarco ? (
            <FaMinus color={color.icon} size={25} />
          ) : (
            <FaPlus color={color.icon} size={25} />
          )}
        </button>
        <div className="flex justify-center">
          <h2 className={`text-xl ${color.text}`}>{nombreRutina}</h2>
        </div>
        <div className="flex gap-4">
          <button onClick={() => setShowModal(true)}>
            <IoColorPalette color={color.icon} size={25} />
          </button>
          <button onClick={() => ChangeMarco()}>
            {modifyMarco ? (
              <GrContract color={color.icon} size={25} />
            ) : (
              <RiExpandDiagonalFill color={color.icon} size={25} />
            )}
          </button>
        </div>
      </header>
      <hr className="mt-3"></hr>

      <div className="mt-4">
        {TurnMarco ? (
          <Ejercicios colors={color} cantidadEjercicios={cantidadEjercicios} />
        ) : (
          <div className="flex justify-center">
            <button onClick={SendToCalendar} className="text-white border-2 bg-black  rounded-lg p-2">
              Send to calendar
            </button>
          </div>
        )}
      </div>
      {showModal && (
        <Color
          colores={colors}
          cambiarColor={cambiarColor}
          closeModal={closeModal}
        />
      )}
      <hr className="w-full mb-3"></hr>
      <div className="mt-auto flex justify-around ">
        <button className={`${color.text}`}>Save</button>
        <button onClick={() => eliminarMarco(id)} className={`${color.text}`}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default Marco;
