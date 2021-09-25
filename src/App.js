import { useState } from 'react'
import Header from './components/Header';
import Quotes from './components/Quotes';


function App() {

  const[quotes,setQuotes] = useState(
    [
      {
        quote:"Get busy living or get busy dying",
        author:"Stephen King",
        publisher:"Clark James",
      },
      {
        quote:"Many of life’s failures are people who did not realize how close they were to success when they gave up.",
        author:"Thomas A. Edison",
        publisher:"Tamminga Budds",
      },
      {
        quote:"Your time is limited, so don’t waste it living someone else’s life. Don’t be trapped by dogma – which is living with the results of other people’s thinking.",
        author:"Steve Jobs",
        publisher:"Mcloud James",

      },
      {
        quote:"The whole secret of a successful life is to find out what is one’s destiny to do, and then do it.",
        author:"Henry Ford",
        publisher:"Mabel Karani"
      },
      {
        quote:"Everything negative – pressure, challenges – is all an opportunity for me to rise.",
        author:"Watch your thoughts; they become words. Watch your words; they become actions. Watch your actions; they become habits. Watch your habits; they become character. Watch your character; it becomes your destiny.",
        author:"Lao-Tze",
        publisher:"Curtis Carson"
      }
    ]
  );
  const addQuote = (newQuote) =>{
    console.log(newQuote)
    const newQuotes = [...quotes,newQuote];
    setQuotes(newQuotes)
  }

  const deleteQuote = index =>{
     const newQuotes = [...quotes];
     newQuotes.splice(index,1);
     setQuotes(newQuotes)
  }

  return (
    <div>
      <Header />
      <Quotes quotes={quotes} addQuote={addQuote} onDelete={deleteQuote}/>
    </div>
  );
}

export default App;
