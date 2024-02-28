import React, { useState, useEffect } from "react";
import axios from "axios";
import "./RandomQuote.scss";
const RandomQuote = () => {
  const [quote, setQuote] = useState("");

  useEffect(() => {
    const fetchQuote = async () => {
      try {
        const response = await axios.get("https://type.fit/api/quotes");
        const data = response.data;
        const randomIndex = Math.floor(Math.random() * data.length);
        setQuote(data[randomIndex]);
      } catch (error) {
        console.error("Error fetching quote:", error);
      }
    };

    fetchQuote();
  }, []);

  return (
    <>
      <h2 className="quotes__title">Do not forget 😉!</h2>
      {quote ? (
        <div className="random__quote">
          <p className="random__quote__text">{quote.text}</p>
          {quote.author && (
            <p className="random__quote__author">- {quote.author}</p>
          )}
        </div>
      ) : (
        <div className="random__quote">
          <h3>Loading.... 😉!</h3>
        </div>
      )}
    </>
  );
};

export default RandomQuote;
