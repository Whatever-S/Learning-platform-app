import React, { useEffect } from 'react';
import '../lessonsList/lessonsList.scss'

function LessonsList ({lessons, setLesson, lessonNumber, setLessonTitle, shortId}) {
    useEffect(() => {
        localStorage.setItem(`${shortId}-lessonNumber`, lessonNumber);
    }, [lessonNumber, shortId]);
    
    let content, itemStyle
    
    if(lessons){
        content = lessons.map((lesson, i) => {
            const {title, order, status, previewImageLink, id} = lesson
            function onLessonClick(){
                if (status !== 'locked'){
                    setLesson(order)
                    setLessonTitle(title)
                }
                
            }

            (i+1 === lessonNumber) && (status !== 'locked') ? itemStyle ='lesson__item--selected' : itemStyle ='lesson__item'

            if(status === 'locked')
            itemStyle +=' lesson__item--locked'

            return(
                    <div key={id} className={itemStyle} onClick={onLessonClick}>
                        <div className="lesson__img">
                            <img src={`${previewImageLink}/lesson-${order}.webp`} alt='Lesson preview'/>
                        </div>
                        <div className="lesson__info">
                            <div className="lesson__title">{title}</div>
                            <div className='lesson__status'>Status: <span>{status}</span></div>
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