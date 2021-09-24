import Quote from "./Quote";
import QuoteForm from "./QuoteForm";

const Quotes = ({ quotes }) =>{
    console.log(quotes)
    return(
    <div className="display">
        <div className="container">
            {quotes.map((quoteItem,index)=> <Quote key={index} quoteItem={quoteItem} />)}
        </div>
        <QuoteForm />
    </div>
    );
}

export default Quotes