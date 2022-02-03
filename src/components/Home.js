import React, { useEffect } from "react";
import { Container,Button } from "reactstrap";

const Home = () =>
{
    useEffect(() =>
    {
        document.title="Home"
    })
    return(
        <div>            
                <h1  style={{background:"yellow" }}className="text-center">This is the CourseApp</h1>  
                <Container>
                    <div className="text-center">
                    <Button color="primary" outline>Start Using</Button> 
                    </div>
                   
                </Container>             
        </div>
    )
}
export default Home;