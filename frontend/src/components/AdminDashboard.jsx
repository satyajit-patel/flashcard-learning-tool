import React, { useState } from 'react';
import { createFlashcard } from '../apis/Api';

function AdminDashboard({ setFlashcards }) {
    const [quote, setQuestion] = useState('');
    const [poet, setAnswer] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newFlashcard = await createFlashcard({ quote, poet });
        console.log(newFlashcard.data);
        if(newFlashcard.quote == quote) {
            alert("data created");
        }
        setFlashcards(prevFlashcards => [...prevFlashcards, newFlashcard]);
        setQuestion('');
        setAnswer('');
    };

    return (
        <div className='bg-moonNight flex flex-wrap justify-center items-center'>
            <div className="admin-dashboard bg-moonGlow">
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        value={quote}
                        onChange={(e) => setQuestion(e.target.value)}
                        placeholder="Question"
                        required
                    />
                    <input
                        type="text"
                        value={poet}
                        onChange={(e) => setAnswer(e.target.value)}
                        placeholder="Answer"
                        required
                    />
                    <button 
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" 
                        type="submit"
                    >
                        Add Flashcard
                    </button>
                </form>
            </div>
        </div>
    );
}

export default AdminDashboard;
