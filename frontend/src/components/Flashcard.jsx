import React, { useState } from 'react';

function Flashcard({ arr }) {
    if(arr.length == 0) {
        return (
            <div className="flex flex-wrap justify-center items-center">
                <div className="bg-red-600 h-60 text-white">
                    No data found
                </div>
            </div>
        );
    }

    const [index, setIndex] = useState(0);
    const [isFlip, setIsFlip] = useState(false);
    const nextCard = () => {
        setIsFlip(false);
        setIndex((i) => (i+1) % arr.length);
    };
    const prevCard = () => {
        setIsFlip(false);
        setIndex((i) => ((i-1)+arr.length) % arr.length);
    };

    return (
        <div className='h-screen w-screen flex flex-wrap justify-center items-center bg-moonNight'>
            <div className='flex flex-wrap justify-center items-center flex-col'>
                <div className={`flashcard ${isFlip ? 'isFlip' : ''}`}>
                    <div className="front">{arr[index].quote}</div>
                    <div className="back">{arr[index].poet}</div>
                </div>
                <div className='flex justify-evenly p-2'>
                    <button onClick={prevCard} className="btn mx-2">Previous</button>
                    <button onClick={() => setIsFlip(!isFlip)} className="btn mx-2">Flip</button>
                    <button onClick={nextCard} className="btn mx-2">Next</button>
                </div>
            </div>
        </div>
    );
}

export default Flashcard;
