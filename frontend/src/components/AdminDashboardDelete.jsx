// AdminDashboardDelete.jsx
import React, { useState } from 'react';
import { deleteFlashcard } from '../apis/Api';

function AdminDashboardDelete({ flashcards=[], setFlashcards }) {
    const handleDelete = async (id) => {
        await deleteFlashcard(id);
        setFlashcards(prevFlashcards => prevFlashcards.filter(fc => fc._id !== id));
    };
    const [password, setPassword] = useState("");

    return (
        <div>

            <div className='check flex flex-wrap justify-center items-center'>
                <div className='h-max w-max'>
                    <label>Password:</label>
                    <input 
                    q   className='bg-green-300'
                        type="password" 
                        required 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                        placeholder="Enter admin password"
                    />
                </div>
            </div>

            {password === `${import.meta.env.VITE_PASS}` ? (
                <div className="admin-dashboard">
                    <h2>Delete Flashcard</h2>
                    <div className="flashcard-list">
                        {flashcards.map(fc => (
                            <div key={fc._id} className="flashcard bg-green-500">
                                <p><strong>Question:</strong> {fc.quote}</p>
                                <p><strong>Answer:</strong> {fc.poet}</p>
                                <button 
                                    onClick={() => handleDelete(fc._id)} 
                                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
                                >
                                    Delete
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            ) : (
                <div className='flex flex-wrap justify-center items-center p-4'>
                    <h1 className='text-xl bg-red-600 text-center h-max w-max'>You are not the main admin.</h1>
                </div>
            )}
            

        </div>
        
    );
}

export default AdminDashboardDelete;
