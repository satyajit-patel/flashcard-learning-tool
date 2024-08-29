import React from 'react';
import {CardHoverEffectDemo} from './hovorEffectOnArraysOfObject/CardHoverEffectDemo';

function Flashcard({ arr }) {
    if(arr.length == 0) {
        return (
            <div className="flex flex-wrap justify-center items-center">
                <div className="bg-red-600 h-60 text-white text-xl">
                    No data found
                </div>
            </div>
        );
    }

    return (     
        <div className='bg-my_col'>
            <br />
            <br />
            <CardHoverEffectDemo projects={arr} />
        </div>
    );
}

export default Flashcard;
