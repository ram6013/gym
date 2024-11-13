import Header from "../Componentes/header";
import { IoAddCircleSharp } from "react-icons/io5";
import { useState } from "react";
import Marco from "../Componentes/Marco";
import CreacionPopUp from "../Componentes/CreacionPopUp";

const Home = () => {
    const [marcos, setMarcos] = useState([]);
    const [showPopup, setShowPopup] = useState(false); 


    const agregarMarco = () => {
        setShowPopup(true);
    };

    const handleFormSubmit = (nombreRutina, ejercicios) => {
        setMarcos([
            ...marcos,
            { nombreRutina, ejercicios }
        ]);
        setShowPopup(false);
    };

    return (
        <div>
            <Header />
            <div className="flex flex-col items-center mt-6">
                <div className="flex flex-row w-full">
                    <div className="flex justify-start ml-4">
                        <button className="z-30" onClick={agregarMarco}>
                            <IoAddCircleSharp size={32} />
                        </button>
                    </div>
                    <div className="flex absolute w-full justify-center items-center  ">
                        <h1 className="text-4xl text-center font-bold">Workouts:</h1>
                    </div>
                </div>

                {/* Mostrar el popup si showPopup es true */}
                {showPopup && (
                   <CreacionPopUp setShowPopup={setShowPopup} agregarRutina={handleFormSubmit} />
                )}

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 m-9">
                    {marcos.map((marco, index) => (
                        <Marco key={index} nombreRutina={marco.nombreRutina} ejercicios={marco.ejercicios} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Home;
