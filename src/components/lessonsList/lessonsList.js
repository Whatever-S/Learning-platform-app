import '../lessonsList/lessonsList.scss'

function LessonsList ({lessons, setLesson, lessonNumber}) {
    let content, itemStyle
    
    if(lessons){
        content = lessons.map((lesson, i) => {
            const {title, order, status, previewImageLink, id} = lesson

            function onLessonClick(){
                if (status !== 'locked')
                setLesson(order)
            }

            i+1 === lessonNumber ? itemStyle ='lesson__item--selected' : itemStyle ='lesson__item'
            if(status === 'locked')
            itemStyle +=' lesson__item--locked'

            return(
                    <div key={id} className={itemStyle} onClick={onLessonClick}>
                        <img className="lesson__img" src={`${previewImageLink}/${order}.webp`} alt='Lesson preview'/>
                        <div className="lesson__info">
                            <div className="lesson__title">{title}</div>
                            <div className='lesson__status'>Status: {status}</div>
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