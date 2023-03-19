import { useParams, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react";
import Spinner from "../../components/Spinner";
import VideoPlayer from "../../components/videoPlayer/videoPlayer";
import LessonsList from "../../components/lessonsList/lessonsList";
import '../CoursePage/coursePage.scss'

function CoursePage(){
    const {id} = useParams();
    let navigete = useNavigate();
    let shortId = id.slice(0, 8)
    console.log(shortId)
    
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
        {loading ? <Spinner/> : 
        <View receivedData={receivedData} navigete={navigete} shortId={shortId} />}
        </>
    )
}

const View = ({receivedData, navigete, shortId}) => {
    let [lessonNumber, setLesson] = useState(parseInt(localStorage.getItem(`${shortId}-lessonNumber`)) || 1);
    let [lessonTitle, setLessonTitle] = useState(receivedData.lessons[0].title)
    const {title, description, lessons} = receivedData;
    let videoLink = lessons[lessonNumber-1]?.link

    return (
        <>
        <div onClick={() => navigete(-1)} className="page__link-back">GO BACK</div>
        <div className='page__wrapper '>
            <div className="page__info">
                <h1 className="page__title">{title}</h1>
                <div className="page__description">{description}</div>
                <div className="page__lesson-amount">Lesson <span>{lessonNumber}</span> / {lessons?.length}</div>
                <h3 className="page__lesson-title">{lessonTitle}</h3>
                <VideoPlayer link={videoLink} lesson={lessonNumber} shortId={shortId}/>
                
            </div>
            <div className="page__lessons-list">
                <LessonsList lessons={lessons} lessonNumber={lessonNumber} setLesson={setLesson} setLessonTitle={setLessonTitle} shortId={shortId}/>
            </div>
        </div>
        
        </>
    )

}

export default CoursePage