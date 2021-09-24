import { useState } from 'react'
import Header from './components/Header';
import Quotes from './components/Quotes';


function App() {

const[quotes,setQuotes] = useState(
  [
    {
      quote:"Get busy living or get busy dying",
      author:"Stephen King",
      publisher:"Clark James"
    },
    {
      quote:"Many of life’s failures are people who did not realize how close they were to success when they gave up.",
      author:"Thomas A. Edison",
      publisher:"Tamminga Budds",
    }
  ]
)

  return (
    <div>
      <Header />
      <Quotes />
    </div>
  );
}

export default App;
