import Quote from "./Quote";
const Quotes = ({ quotes }) =>{
    console.log(quotes)
    return(
    <div className="container">
        {quotes.map((quoteItem,index)=> <Quote key={index} quoteItem={quoteItem} />)}
    </div>
    );
}

export default Quotes