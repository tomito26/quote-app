const Quote = ({ quoteItem }) =>{
    console.log(quoteItem)
    return(
        <blockquote>
            <i class="fas fa-quote-left quote-1"></i>
            <p>{quoteItem.quote}</p>
            <i class="fas fa-quote-right quote-2"></i>
            <footer><span style={{marginRight:"5px"}}>&#8765;</span>{quoteItem.author}<span style={{marginLeft:"5px"}}>&#8765;</span></footer>
        </blockquote>
    )
}

export default Quote