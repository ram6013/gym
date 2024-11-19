import Header from "../Componentes/header";
import { IoAddCircleSharp } from "react-icons/io5";
import { useState } from "react";
import Marco from "../Componentes/Marco";
import CreacionPopUp from "../Componentes/CreacionPopUp";
import { ReactSortable } from "react-sortablejs";

const Home = () => {
  const [marcos, setMarcos] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [modifyMarco, setModifyMarco] = useState(false);

  const agregarMarco = () => {
    setShowPopup(true);
    setModifyMarco(false);
  };

  const eliminarMarco = (id) => {
    setMarcos((prevMarcos) => prevMarcos.filter((marco) => marco.id !== id));
  };

  const handleFormSubmit = (nombreRutina, ejercicios) => {
    setMarcos((prevMarcos) => [
      ...prevMarcos,
      { id: Date.now(), nombreRutina, ejercicios },
    ]);
    setShowPopup(false);
  };

  return (
    <div>
      <Header />
      <div className="flex flex-col items-center mt-6">
        <div className="flex flex-row w-full">
          <div className="flex justify-start ml-4 z-0">
            <button className="z-30" onClick={agregarMarco}>
              <IoAddCircleSharp size={32} />
            </button>
          </div>
          <div className="flex absolute w-full justify-center items-center pointer-events-none">
            <h1 className="text-4xl text-center font-bold">Workouts:</h1>
          </div>
        </div>

        {showPopup && (
          <CreacionPopUp
            setShowPopup={setShowPopup}
            agregarRutina={handleFormSubmit}
          />
        )}

        {marcos.length === 0 ? (
          <div className="flex items-center justify-center w-full h-96">
            <h1 className="text-black text-xl">
              You will see your Workouts here when you create them...
            </h1>
          </div>
        ) : (
          <ReactSortable
            list={marcos}
            setList={setMarcos}
            className="relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 m-9"
          >
            {marcos.map((marco, index) => (
              <Marco
                key={marco.id}
                nombreRutina={marco.nombreRutina}
                ejercicios={marco.ejercicios}
                eliminarMarco={eliminarMarco}
                id={marco.id}
                setModifyMarco={setModifyMarco}
                modifyMarco={modifyMarco}
              />
            ))}
          </ReactSortable>
        )}
      </div>
    </div>
  );
};

export default Home;
