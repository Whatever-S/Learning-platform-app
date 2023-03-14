import { useParams, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react";

function CoursePage(){
    const {id} = useParams();
    let navigete = useNavigate();
    let _apiBase = `http://api.wisey.app/api/v1/core/preview-courses/${id}`;
    let [receivedData, updateReceivedData] = useState([])
    
    const {title, description} = receivedData;

    useEffect(()=>{
        (async function(){
        let data = await fetch(_apiBase).then(res => res.json())
        updateReceivedData(data)
        })();
    },[_apiBase]);

    return(
        <>
        <div onClick={() => navigete(-1)} className="course__link-back">GO BACK</div>
        <div className="course">
            <img src={image} alt='course img' className="course__img"/>
            <h1 className="course__title">{name}</h1>
            <div className="course__info">
                <h3>Informations</h3>
                
            </div>
        </div>
        </>
    )
}


export default CoursePage