import React from "react";
import axios from "axios";
import base_url from "../api/bootapi";
 import {
     Card,
     CardBody,
     CardTitle,
     CardSubtitle,
     Cardtext,
     CardFooter,
     Button,
     Container,
     CardText,
 } from "reactstrap";
import { toast } from "react-toastify";
 const Course = ({course, update}) =>
 {
     const deleteCourse =(id)=>
     {
        axios.delete(`${base_url}/deleteData/${id}`).then(
            (response)=>{
                toast.success("Course deleted")
                update(id)
            },
            (error)=>
            {
                toast.error("course not deleted !! Server problem")
            }
        )
     }
return(
    <Card className="text-center">
         <hr />
        <CardBody>
            <CardSubtitle className="h4" >{course.title}</CardSubtitle>
            <CardText>{course.description}</CardText>
            <Container className="text-center">
                <Button color="danger" onClick={()=>
                {deleteCourse(course.id)}}>Delete </Button>
                <Button color="warning"style={{ marginLeft: '.5rem' }}>Update</Button>
            </Container>
        </CardBody>
    </Card>
)
 }
 export default Course;