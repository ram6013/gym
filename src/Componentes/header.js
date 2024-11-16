import React from 'react';
import { FaUser, FaCalendar, FaHome } from "react-icons/fa";
import { VscGraph } from "react-icons/vsc";
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import InicioSesion from './InicioSesion';
const Header = () => {
    const navigate = useNavigate(); 
    const [showModal, setShowModal] = useState(false);

    return (
        <div className=' relative flex w-auto h-auto bg-black items-center justify-between'>
            <button onClick={()=> setShowModal(!showModal)} className='p-4 z-30'><FaUser size={30} color='white' /></button>
            <div className='flex absolute w-full justify-center'>
                <h1 className='text-6xl text-center font-bold text-white'>GYM Notes</h1>
            </div>
            <div className='flex justify-around gap-10 mr-10'>
                <button className='z-30' onClick={() => navigate('/calendar')}>
                    <FaCalendar size={28} color='white' />
                </button>
                <button className='z-30' onClick={() => navigate('/stats')}><VscGraph size={32} color='white' /></button>
                <button className='z-30' onClick={() => navigate('/')}><FaHome size={32} color='white' /></button>
            </div>
            {showModal && <InicioSesion setShowModal={setShowModal} />}
        </div>
    );
}

export default Header;
