import '../lessonsList/lessonsList.scss'

function LessonsList ({lessons, setLesson}) {
    let content
    function a(order){
        console.log(order)
    }
    if(lessons){
        content = lessons.map(lesson => {
            const {title, order, status, previewImageLink, id} = lesson

            return(
                    <div onClick={a(order)} key={id} className="lesson__item">
                        <img className="lesson__img" src={`${previewImageLink}/${order}.webp`} alt='Lesson preview'/>
                        <div className="lesson__info">
                            <div className="lesson__title">{title}</div>
                            <div className="lesson__status">{status}</div>
                        </div>
                    </div>
            )
        })
    }
    
    return(
        <div className="lesson__list">
        {content}
        </div>
    )
}

export default LessonsList