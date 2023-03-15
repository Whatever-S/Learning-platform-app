import { Link } from "react-router-dom"
import './CoursesList.scss';
import Spinner from "../Spinner";

function CoursesList ({loading, pageNumber, courses}){
    let content ='';
    //let [coursList, setcoursList] = useState(courses)
    const startIndex = (pageNumber - 1) * 10;
    const endIndex = pageNumber !== 3 ? startIndex + 10: startIndex + 9;
    let coursList
    


    if(courses){
        coursList = courses.slice(startIndex, endIndex);
        content = coursList.map(char => {
                const {title, description, id, previewImageLink, rating, lessonsCount, meta } = char;
                const {skills} = meta;
                // console.log(previewImageLink)
                return (
                    <Link to = {`/${id}`} style={{textDecoration: 'none'}} key={id} className="course course__card">
                        <img src={`${previewImageLink}/cover.webp`} alt='Course prev' className="course__img"/>
                        <div className="course__info">
                            <div className="course__title">{title}</div>
                            <div className="course__description">{description}</div>
                            <div className="course__skills">Skills:</div>
                            {skills?.length !== 1 ? skills?.map(skill =>{return <div key={skill}>{skill}</div>}) : <div>{skills[0]}</div> }
                            <div className="course__numbers">
                                <div className="cousre__amount">Lessons: {lessonsCount}</div>
                                <div className="cousre__rating">{rating}/5</div>
                            </div>
                            
                        </div>
                    </Link>
                    )       
        })
    }else {
        content = "There is no such courses"
        }
        return (
        <div className='list__wrapper'>
            {loading ? <Spinner/> : content}
        </div>
        )

}
    
export default CoursesList