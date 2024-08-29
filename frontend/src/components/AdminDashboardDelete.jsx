// AdminDashboardDelete.jsx
import React, { useState } from 'react';
import { deleteFlashcard } from '../apis/Api';
import {CardSpotlightDemo} from './infoCard/CardSpotlightDemo';
import {InfiniteMovingCardsDemo} from './infiniteLoopCard/InfiniteMovingCardsDemo';



function AdminDashboardDelete({ flashcards=[], setFlashcards }) {

    // const handleDelete = async (id) => {
    //     await deleteFlashcard(id);
    //     setFlashcards(prevFlashcards => prevFlashcards.filter(fc => fc._id !== id));
    // };
    
    return (
        // <div className='bg-moonGlow h-screen w-screen flex flex-wrap flex-col gap-4 justify-center items-center'>

        //     <div className='h-max w-max bg-moonNight'>
        //         <label className='bg-slate-400'>Password:</label>
        //         <input 
        //             className='bg-black'
        //             type="password" 
        //             required 
        //             value={password} 
        //             onChange={(e) => setPassword(e.target.value)} 
        //             placeholder="Enter admin password"
        //         />
        //     </div>

        //     {password === `${import.meta.env.VITE_PASS}` ? (
        //         <div className="admin-dashboard">
        //             <h2>Delete Flashcard</h2>
        //             <div className="flashcard-list">
        //                 {flashcards.map(fc => (
        //                     <div key={fc._id} className="flashcard bg-green-500">
        //                         <p><strong>Question:</strong> {fc.quote}</p>
        //                         <p><strong>Answer:</strong> {fc.poet}</p>
        //                         <button 
        //                             onClick={() => handleDelete(fc._id)} 
        //                             className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
        //                         >
        //                             Delete
        //                         </button>
        //                     </div>
        //                 ))}
        //             </div>
        //         </div>
        //     ) : (
        //         <div className='h-max w-max bg-moonNight'>
        //             <CardSpotlightDemo />
        //         </div>
        //     )}
        // </div>
        <div>
            <InfiniteMovingCardsDemo flashcards={flashcards} setFlashcards={setFlashcards} />
        </div>

    );
}

export default AdminDashboardDelete;
