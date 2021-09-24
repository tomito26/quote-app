const QuoteForm = () =>{
    return(
    
    <form>
        <div className="form-group">
            <label htmlFor="quote"></label>
            <textarea name="quote" id="quote" cols="30" rows="10" placeholder="Enter Quote..."></textarea>
        </div>
        <div className="form-group">
            <label htmlFor="author">Author</label>
            <input type="text" className="form-control" id="author" name="author" />
        </div>
        <div className="form-group">
            <label htmlFor="publisher">Publisher</label>
            <input type="text" className="form-control" id="publisher" name="publisher" />
        </div>
        
    </form>

    );
};

export default QuoteForm