import '../pagination/Pagination.scss'

const Pagination = ({pageNumber, setPageNumber}) => {
    let prev = () => {
        if(pageNumber === 1) return;
        setPageNumber(page =>  page - 1 )
    };
    let next = () => {
        if(pageNumber === 3) return;
        setPageNumber(page =>  page + 1 )
    };

    return(
        <div>
            <button onClick={prev} className="btn">Prev</button>
            <button onClick={next} className="btn">Next</button>
        </div>
    )
}

export default Pagination