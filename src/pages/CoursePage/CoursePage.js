import { useParams, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react";
import Spinner from "../../components/Spinner";
import VideoPlayer from "../../components/videoPlayer/videoPlayer";
import LessonsList from "../../components/lessonsList/lessonsList";
import '../CoursePage/coursePage.scss'

function CoursePage(){
    const {id} = useParams();
    let navigete = useNavigate();
    
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
            }).then((res) => res.json())
            .catch((err) => alert(`Opps..${err}`));
            updateReceivedData(data);
            updateLoading(false);
        })();
    }, [_apiBase]);

    return(
        <>
        {loading ? <Spinner/> : <View receivedData={receivedData} navigete={navigete} />}
        </>
    )
}

const View = ({receivedData, navigete}) => {
    let [lessonNumber, setLesson] = useState(1)

    const {title, description, lessons} = receivedData;
    const videoLink = lessons[lessonNumber-1]?.link
    return (
        <>
        <div onClick={() => navigete(-1)} className="page__link-back">GO BACK</div>
        <div className='page__wrapper '>
            <div className="page__info">
                <h3>Lesson {lessonNumber} / {lessons?.length}</h3>
                <VideoPlayer link={videoLink}/>
                <h1 className="page__title">{title}</h1>
                <div className="page__description">{description}</div>
            </div>
            <div className="page__lessons-list">
                <LessonsList lessons={lessons} lessonNumber={lessonNumber} setLesson={setLesson}/>
            </div>
        </div>
        
        </>
    )
}

export default CoursePage