const Quote = ({ quoteItem }) =>{
    console.log(quoteItem)
    return(
        <blockquote>
            <i class="fas fa-quote-left quote-1"></i>
            <p>{quoteItem.quote}</p>
            <i class="fas fa-quote-right quote-2"></i>
            <footer>{quoteItem.author}</footer>
        </blockquote>
    )
}

export default Quote