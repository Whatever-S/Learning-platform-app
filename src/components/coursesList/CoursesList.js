import { Link } from "react-router-dom"
import './CoursesList.scss';

function CoursesList ({courses}){
    let content ='',
    counter = 0

    if(courses){
        content = courses.map(char => {
            while(counter < 10){
                const {title, description, id, previewImageLink, rating, lessonsCount, meta } = char;
                const {skills} = meta
                counter++;
                console.log(previewImageLink)
                return (
                    <Link to = {`/${id}`} style={{textDecoration: 'none'}} key={id} className="course">
                        <img src={`${previewImageLink}/cover.webp`} alt='Course prev' className="course__img"/>
                        <div className="course__info">
                            <div className="course__name">{title}</div>
                            <div className="course__specie">{description}</div>
                            <div>{skills}</div>
                            <div>{rating}, {lessonsCount}</div>
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