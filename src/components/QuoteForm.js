import { useState }  from 'react';

const QuoteForm = ({ addQuote }) =>{

    const[quoteValue,setQuoteValue] = useState({quote:"",author:"",publisher:""})

    const handleSubmit = e =>{
        e.preventDefault();
        if(!quoteValue) return;
        addQuote(quoteValue);
        setQuoteValue({quote:"",author:"",publisher:""});
    }

    return(    
    <form onSubmit={handleSubmit}>
        <div className="form-group">
            <textarea name="quote" id="quote" cols="30" rows="10" placeholder="Enter Quote..." value={quoteValue.quote} onChange={e=>setQuoteValue({...quoteValue,quote:e.target.value})}></textarea>
        </div>
        <div className="form-group">
            <input type="text" className="form-control" id="author" name="author" placeholder="author" value={quoteValue.author} onChange={e=>setQuoteValue({...quoteValue,author:e.target.value})} />
        </div>
        <div className="form-group">
            <input type="text" className="form-control" id="publisher" name="publisher" placeholder="Publisher" value={quoteValue.publisher}  onChange={e=>setQuoteValue({...quoteValue,publisher:e.target.value})}/>
        </div>
        <button>Submit</button>
    </form>

    );
};

export default QuoteForm