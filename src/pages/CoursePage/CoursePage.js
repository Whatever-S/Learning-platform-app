import { useParams, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react";
import Spinner from "../../components/Spinner";

function CoursePage(){
    const {id} = useParams();
    
    let _apiBase = `/api/core/preview-courses/${id}`;
    let [receivedData, updateReceivedData] = useState([])
    let [loading, updateLoading] = useState(true);
    
    

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
            updateLoading(false);
        })();
    }, [_apiBase]);

    return(
        <>
        {loading ? <Spinner/> : <View receivedData={receivedData}/>}
        </>
    )
}

const View = ({receivedData}) => {
    let navigete = useNavigate();
    const {title, description, previewImageLink} = receivedData;
    return (
        <>
        <div onClick={() => navigete(-1)} className="__link-back">GO BACK</div>
        <div className="">
            <img src={previewImageLink} alt='course img' className="__img"/>
            <h1 className="__title">{title}</h1>
            <div className="__info">
                <h3>Informations</h3>
                
            </div>
        </div>
        </>
    )
}

export default CoursePage