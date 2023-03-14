import { useState, useEffect} from "react";
import CoursesList from "../../components/coursesList/CoursesList";
import CoursesObj from "../../components/objCourses";

const MainPage = () =>{
    let [receivedData, updateReceivedData] = useState([]);
    let obj = CoursesObj()

    //let _apiBase = `http://api.wisey.app/api/v1/core/preview-courses`;
    //let _apiBase = 'https://rickandmortyapi.com/api/character'
    
    /*useEffect(()=>{
        (async function(){
        let data = await fetch(_apiBase,{
            headers: {
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIzYmQzMWQxZi1mMmUxLTQyYmEtOWNlNC1iYzUzZDk2ZTFlMGYiLCJwbGF0Zm9ybSI6InN1YnNjcmlwdGlvbnMiLCJpYXQiOjE2Nzg3ODg2MTIsImV4cCI6MTY3OTY4ODYxMn0.LExwrK5_kmnzQ2cwiFEqPcegBGiGMwDMhpftamwAtAE'
              }
        }).then(res => res.json())
        updateReceivedData(data)
        })();
    },[_apiBase]);
    
    console.log(receivedData)*/

    return(
        <CoursesList courses={obj.courses}/>
    )
}

export default MainPage