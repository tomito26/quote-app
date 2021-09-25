const Quote = ({ quoteItem,index,onDelete }) =>{
    console.log(quoteItem)
    console.log(index)
    return(
        <blockquote>
            <i class="fas fa-quote-left quote-1"></i>
            <p>{quoteItem.quote}</p>
            <i class="fas fa-quote-right quote-2"></i>
            <footer><span style={{marginRight:"5px"}}>&#8765;</span>{quoteItem.author}<span style={{marginLeft:"5px"}}>&#8765;</span></footer>
            <div style={{display:"flex",justifyContent:"space-between",marginTop:"10px"}}>
                <p>Published by <span style={{fontStyle:"italic"}}>{quoteItem.publisher}</span></p>
                <i class="fas fa-trash" style={{marginTop:"10px",cursor:"pointer"}} onClick={()=>onDelete(index)}></i>
            </div>
        </blockquote>
    )
}

export default Quote