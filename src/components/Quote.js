const Quote = ({ quoteItem }) =>{
    console.log(quoteItem)
    return(
        <blockquote>
            {/* <i class="fas fa-quote-left"></i> */}
            <p>{quoteItem.quote}</p>
            {/* <i class="fas fa-quote-right"></i> */}
            <footer>{quoteItem.author}</footer>
        </blockquote>
    )
}

export default Quote