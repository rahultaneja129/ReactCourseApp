import React, { Fragment, lazy, useEffect, useState } from "react";
import { Button, Container, Form, Label, Input } from "reactstrap";
import { FormGroup } from "reactstrap";
import axios from "axios";
import base_url from "../api/bootapi";
import { toast } from "react-toastify";

const AddCourse = () => {

    useEffect(()=>{
        document.title="Add Course"
    })

    const [course,setCourse]=useState({})

    const handleForm=(e)=>
    {
        console.log(course);
        postDatatoServer(course);
        e.preventDefault();
    }

    //creating function to post data on server
    const postDatatoServer=(data)=>
    {
        axios.post(`${base_url}/addData`,data).then(
            (response)=>{
                console.log(response);
               console.log("success");
                toast.success("Course has been added",{position:"bottom-center"})
                //clear the page detailsthat user entered.. 
                setCourse({id:"",title:"",description:""});
            },(error)=>
            {
                console.log(error)
                console.log("error");
                toast.error("Error ! Something went wrong",{position:"bottom-center"});
            }
        )
    }
    return(
        <Fragment>
            <h1 className="text-center my-3">Fill Course Detail</h1>
            <Form onSubmit={handleForm}>
                <FormGroup>
                    <Label for="userId">Course Id</Label>
                    <Input type ="text" placeholder="Enter here" id="userId"
                    onChange={(e)=>{
                        setCourse({...course, id:e.target.value})
                    }}/>
                </FormGroup>
                <FormGroup>
                    <Label for ="title">Course Title</Label>
                    <Input type ="text" placeholder="Enter title here" id="title"
                    onChange={(e)=>
                    {
                        setCourse({...course, title: e.target.value})
                    }}/>
                </FormGroup>
                <FormGroup>
                    <Label for="description">Course Description</Label>
                    <Input type="textarea" placeholder="Enter description here" id="description"
                     style={{height:100}}
                     onChange={(e)=>
                     {
                        setCourse({...course, description: e.target.value})
                     }}/>
                </FormGroup>
                <Container className="text-center">
                    <Button type="submit" color="success">Add course</Button>
                    <Button type="reset"color="warning"style={{ marginLeft: '.5rem' }}>Clear</Button>
                </Container>
            </Form>
        </Fragment>
    )
}
export default AddCourse;