import '../pagination/Pagination.scss'
import ReactPaginate from 'react-paginate';

const Pagination = ({pageNumber, setPageNumber}) => {

    return(
        <ReactPaginate 
        className='pagination'
        nextLabel='>>'
        previousLabel='<<'
        previousClassName ='btn'
        nextClassName='btn'
        pageClassName='btn'
        previousLinkClassName='link'
        nextLinkClassName = 'link'
        activeClassName='active'
        disabledPrevClassName='disabled'
        disabledNextClassName='disabled'
        onPageChange={(data) => setPageNumber(data.selected +1)}
        pageCount={3}/>
    )
}

export default Pagination