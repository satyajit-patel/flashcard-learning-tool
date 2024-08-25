import React, { useState } from 'react';
import { updateFlashcard } from '../apis/Api';

function AdminDashboardUpdate({ flashcards=[], setFlashcards }) {
    const [quote, setQuestion] = useState('');
    const [poet, setAnswer] = useState('');
    const [selectedId, setSelectedId] = useState(null);

    const handleUpdate = async (e) => {
        e.preventDefault();
        // console.log("Selected ID:", selectedId); // debug
        if (selectedId) {
            try {
                const updatedFlashcard = await updateFlashcard(selectedId, { quote, poet });
                // console.log("***data***", updatedFlashcard);
                // Update flashcards state
                setFlashcards(flashcards =>
                    flashcards.map(fc =>
                        fc._id === selectedId ? updatedFlashcard : fc
                    )
                );
                alert("Data updated successfully!");
                setSelectedId(null);
                setQuestion('');
                setAnswer('');
            } catch (error) {
                console.error("Failed to update flashcard:", error.message);
                alert("Failed to update flashcard. Please check the console for details.");
            }
        }
    };

    const handleEdit = (id, quote, poet) => {
        setSelectedId(id);
        setQuestion(quote);
        setAnswer(poet);
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
                    <h2>Update Flashcard</h2>
                    <form onSubmit={handleUpdate}>
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
                        <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded" type="submit">Update Flashcard</button>
                    </form>
                    <div className="flashcard-list mt-4">
                        {flashcards.map(fc => (
                            <div key={fc._id} className="flashcard bg-green-500 p-4 mb-2 rounded">
                                <p><strong>Question:</strong> {fc.quote}</p>
                                <p><strong>Answer:</strong> {fc.poet}</p>
                                <button onClick={() => handleEdit(fc._id, fc.quote, fc.poet)} className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-1 px-2 rounded">
                                    Edit
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

export default AdminDashboardUpdate;
