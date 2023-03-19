import { useState, useEffect} from "react";
import CoursesList from "../../components/coursesList/CoursesList";
import Pagination from "../../components/pagination/Pagination";
import Spinner from "../../components/Spinner";
import '../MainPage/MainPage.scss'

const MainPage = () =>{
    let [receivedData, updateReceivedData] = useState([]);
    let [pageNumber, setPageNumber] = useState(1);
    let [loading, updateLoading] = useState(true);
    let _apiBase = `https://api.wisey.app/api/v1/core/preview-courses`;

    useEffect(() => {
        const header = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9'
        const body = 'eyJzdWIiOiJkOTRlNjg4NS1kM2U5LTQwY2EtYTVjYy01MDRkNjZlZDVlN2QiLCJwbGF0Zm9ybSI6InN1YnNjcmlwdGlvbnMiLCJpYXQiOjE2Nzg3MDQ3NjIsImV4cCI6MTY3OTYwNDc2Mn0'
        const signature = 'Qw3LF39CDp27ZxoGzt5rikJM_OTx0eNaoyFFLxxrXUM'
        const token = [header, body, signature].join('.');
        (async function() {
            let data = await fetch(_apiBase, {
                mode: "cors",
                headers: new Headers({
                    Authorization: `Bearer ${token}`
                })
            }).then((res) => res.json());
            updateReceivedData(data);
            updateLoading(false)
        })();
    }, [_apiBase]);

    return(
        <>
        <h1 className="title">My learning platform</h1>
        {loading ? <Spinner/> : <View pageNumber={pageNumber} courses={receivedData?.courses} setPageNumber={setPageNumber}/>}
        </>
    )
}

const View = ({pageNumber, courses, setPageNumber}) =>{
    return(
        <>
        <CoursesList pageNumber={pageNumber} courses={courses}/>
        <Pagination pageNumber={pageNumber} setPageNumber={setPageNumber} />
        </>
    )
}

export default MainPage