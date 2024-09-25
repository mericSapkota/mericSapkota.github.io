import React, { useState, useEffect } from 'react';
import axios from 'axios';

let url = "https://api.quotable.io/random";

const GetQuoteComponent = () => {
  const [quotes, setQuotes] = useState(null);
  const [count, setCount] = useState(0);

  const likeHandler = async () => {
    setCount(count + 1);
    const newQuote = await generateQuote();
    if (newQuote) {
      setQuotes(newQuote);
    }
  };

  const generateQuote = async () => {
    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      console.log("Error message says: " + error);
      return null;
    }
  };

  useEffect(() => {
    const fetchQuote = async () => {
      const data = await generateQuote();
      if (data) {
        setQuotes(data);
      }
    };
    fetchQuote();
  }, []); 

  return (
    <div className='flex flex-col items-center justify-center p-20'>
      <button className='p-2 w-max rounded-xl bg-green-500 text-white' onClick={likeHandler}>Like</button>
      <p>Likes: {count}</p>
      {quotes ? (
        <>
          <p>{quotes.content}</p>
          <p>{quotes.author}</p>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default GetQuoteComponent;
