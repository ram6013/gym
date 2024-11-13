import React from 'react';
import { FaUser, FaCalendar, FaHome } from "react-icons/fa";
import { VscGraph } from "react-icons/vsc";
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate(); 

    return (
        <div className='flex w-auto h-auto bg-black items-center justify-between'>
            <button className='p-4'><FaUser size={30} color='white' /></button>
            <div className='flex absolute w-full justify-center'>
                <h1 className='text-6xl text-center font-bold text-white'>GYM Notes</h1>
            </div>
            <div className='flex justify-around gap-10 mr-10'>
                <button onClick={() => navigate('/calendar')}>
                    <FaCalendar size={28} color='white' />
                </button>
                <button onClick={() => navigate('/stats')}><VscGraph size={32} color='white' /></button>
                <button onClick={() => navigate('/')}><FaHome size={32} color='white' /></button>
            </div>
        </div>
    );
}

export default Header;
