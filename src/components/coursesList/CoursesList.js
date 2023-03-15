import { Link } from "react-router-dom"
import './CoursesList.scss';

function CoursesList ({courses}){
    let content ='',
    counter = 0

    function skillsList(skills){
        skills.map(skill => {
            return (
                <div>{skill}</div>
            )              
        })
    }

    if(courses){
        content = courses.map(char => {
            while(counter < 10){
                const {title, description, id, previewImageLink, rating, lessonsCount, meta } = char;
                const {skills} = meta,
                        temp = skillsList(skills)
                counter++;
                // console.log(previewImageLink)
                return (
                    <Link to = {`/${id}`} style={{textDecoration: 'none'}} key={id} className="course course__card">
                        <img src={`${previewImageLink}/cover.webp`} alt='Course prev' className="course__img"/>
                        <div className="course__info">
                            <div className="course__title">{title}</div>
                            <div className="course__description">{description}</div>
                            <div className="course__skills">Skills:</div>
                            {temp}
                            <div className="course__numbers">
                                <div className="cousre__amount">Lessons: {lessonsCount}</div>
                                <div className="cousre__rating">{rating}/5</div>
                            </div>
                            
                        </div>
                    </Link>
                    )
            }          
        })
    }else {
        content = "There is no such courses"
        }
        return (
        <div className='list__wrapper'>
            {content}
        </div>
        )

}
    
export default CoursesList