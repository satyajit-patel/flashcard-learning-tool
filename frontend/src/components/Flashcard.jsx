import React, { useState, useEffect, useCallback } from 'react';

const Flashcard = () => {
  let [arr, setArr] = useState([]);
  let [index, setIndex] = useState(0);
  let [isFlip, setIsFlip] = useState(false);

  const getArr = useCallback(() => {
    // let ans = getCards();
    let ans = [
      { id: 'EG', que: 'How are you ?', ans: 'Fine' },
      { id: 'US', que: 'How do you do ?', ans: 'How do you do' },
      { id: 'US', que: 'Best Captain of Cricket ?', ans: 'MSD' },
      { id: 'CI', que: 'How has hit 6 sixes in an over ?', ans: 'Yuvi' },
      { id: 'GB', que: 'What is the best place to visit ?', ans: 'Home' },
      { id: 'ES', que: 'Toby', ans: 'Tatnell' },
      { id: 'LY', que: 'Emelia', ans: 'Aronowitz' },
      { id: 'CO', que: 'Clare', ans: 'Faherty' },
      { id: 'US', que: 'Ibby', ans: 'Broughton' }
    ]
    setArr(ans);
    setIsFlip(false);
    setIndex(0);
  }, [arr, index, isFlip, setIsFlip, setArr]);


  useEffect(() => {getArr()}, [setIndex, setIndex]);

  if(arr.length === 0) {
    return <div className='flex flex-wrap justify-center h-80 items-center'>
      <div className='h-max w-max bg-red-500 text-xl text-center'>No Flashcards...</div>  
    </div>;
  }
  let item = arr[index];

  const handleNext = () => {
    setIsFlip(false);
    setIndex((prevIndex) => (prevIndex + 1) % arr.length);
  };

  const handleFlip = () => {
    setIsFlip((prev) => !prev);
  };

  return (
    <div className='flex justify-center'>

      <div className="card bg-primary text-primary-content w-96">
          <div className="card-body">
              {(!isFlip) ? (<><h2 className="card-title">Question</h2><p>{item.que}</p></>) : (<><h2 className="card-title">Answar</h2><p>{item.ans}</p></>)}
              <br />
              <div className="card-actions justify-end">
                  <button className="btn">Prev</button>
                  <button className="btn" onClick={handleFlip}>Flip</button>
                  <button className="btn" onClick={handleNext}>Next</button>
              </div>
          </div>
      </div>

    </div>
  )
}

export default Flashcard
