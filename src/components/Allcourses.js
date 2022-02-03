import React, { useEffect, useState } from "react";
import Course from "./Course";
import base_url from "../api/bootapi";
import axios from "axios";
import { toast } from "react-toastify";

const Allcourses = () =>
{
    //to change the name of page on browser..
    useEffect(()=>{
        document.title="All Course"
}, []);

// function to call server
const getAllcoursesFromServer=()=>
{
    axios.get(`${base_url}/courses`).then(
        (response)=>{
            // success
            //show data on console
            console.log(response.data);
            toast.success("courses has been loaded",
            {position:"bottom-center"});
            //display data on browser
            setCourses(response.data);
        },(error)=>
        {  // for error
            console.log(error);
            toast.error("something went wrong",
            {position:"bottom-center"}
            )
        }
    );
}
//calling loading course function
useEffect(()=>{
    getAllcoursesFromServer();
}, []);

    // usestate is hook that provides functionality to store multiple data like 
    // multiple courses..
    const [courses,setCourses] = useState([]);

    const updateCourses=(id)=>
    {
        setCourses(courses.filter((c)=> c.id != id))
    }
 return(
     <div>
         <h1 >All Courses</h1>
         <p>List of Courses are as follows</p>
         {
          courses.length > 0 ? courses.map((item)=> <Course course={item} update={updateCourses}/>)
        :"No courses"

         }
     </div>
 ) ;    
};
export default Allcourses;