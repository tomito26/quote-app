import Quote from "./Quote";
import QuoteForm from "./QuoteForm";

const Quotes = ({ quotes,addQuote,onDelete }) =>{
    console.log(quotes)
    return(
    <div className="display">
        <div className="container">
            {quotes.map((quoteItem,index)=> <Quote key={index} quoteItem={quoteItem} index={index} onDelete={onDelete} />)}
        </div>
        <QuoteForm addQuote={addQuote} />
    </div>
    );
}

export default Quotes