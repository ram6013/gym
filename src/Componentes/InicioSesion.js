import React from "react";
import { useOutsideClick } from "../hooks/UseOutsideClick";
import { useNavigate } from "react-router-dom";

const InicioSesion = ({ setShowModal }) => {

  const ref = React.useRef(null);
  useOutsideClick(ref, () => {
    setShowModal(false);
  });

  const navigate = useNavigate();

  return (
    <div
      ref={ref}
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
      }}
      className="absolute top-5 left-12 bg-white border rounded-lg shadow-lg w-40 "
    >
      <ul className="py-2">
        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
          <button onClick={() => navigate("/login")}>Iniciar Sesión</button>
        </li>
        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
          <button>Crear Cuenta</button>
        </li>
        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
          <button>Cerrar Sesión</button>
        </li>
      </ul>
    </div>
  );
};

export default InicioSesion;
