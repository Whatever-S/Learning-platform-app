import { useState, useEffect} from "react";
import CoursesList from "../../components/coursesList/CoursesList";

const MainPage = () =>{
    let [receivedData, updateReceivedData] = useState([]);

    let _apiBase = `/api/core/preview-courses`;

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
        })();
    }, [_apiBase]);

    console.log(receivedData);

    return(
        <>
        <h1>My learning platform</h1>
        <CoursesList courses={receivedData.courses}/>
        </>
    )
}

export default MainPage