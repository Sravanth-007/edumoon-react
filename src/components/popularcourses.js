import React, { Component } from 'react'



export default class Popularcourses extends Component {
    render() {
        return (
         <div>
  <i><h1  style={{textAlign: "center" ,color: "black" ,margin:"5%" ,marginBottom: "20px"}}>POPULAR ONLINE COURSES</h1></i>
<h5>expert team teaches all the popular courses like Web development, app development and EAMCET</h5>
                


 <div id="cards_landscape_wrap-2">
    <div className="container">
        <div className="row">
            <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                <a href="">
                    <div className="card-flyer">
                        <div className="text-box">
                            <div className="image-box">
                                <img src="./images/vidyaLakshmi.jpeg" alt="" />
                            </div>
                            <div className="text-container">
                              <h6>Database Management System</h6>
                                <p style={{marginBottom: "30px"}}>Palisetty vidyaLakshmi</p>
                                <b style={{float: "left",marginBottom: "10px"}}><i style={{color: "gold "}} className='fas fa-eye'></i>1,903 views</b><b style={{width:"20px" ,marginBottom: "10px" ,color:"rgb(12, 195, 250)" , float: "right" ,marginRight: "10px"}}>Free</b>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                <a href="">
                    <div className="card-flyer">
                        <div className="text-box">
                            <div className="image-box">
                                <img src="./images/samuelSusan.jpeg" alt="" />
                            </div>
                            <div className="text-container">                                    
                              <h6>
                                Formal Language & Automata Theory
                              </h6>
                              <p style={{marginBottom: "30px"}}>Samuel Susan</p>
                              <b style={{float: "left" ,marginBottom: "10px"}}><i style={{color: "gold"}} className='fas fa-eye'></i>1,184 views</b><b style={{width:"20px" ,marginBottom: "10px" ,color:"rgb(12, 195, 250)", float: "right" ,marginRight: "10px"}}>Free</b>
                              </div>
                        </div>
                    </div>
                </a>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                <a href="">
                    <div className="card-flyer">
                        <div className="text-box">
                            <div className="image-box">
                                <img src="./images/sohana.jpeg" alt="" />
                            </div>

                            <div className="text-container">
                              <h6>
                                Digital Logic Design
                              </h6>
                              <p style={{marginBottom: "43px" ,marginTop: "20px"}}>Sohana</p>
                              <b style={{float: "left" ,marginBottom: "10px"}}><i style={{color: "gold "}} className='fas fa-eye'></i>1,000 views</b><b style={{width:"20px" ,marginBottom: "10px" ,color:"rgb(12, 195, 250)", float: "right" ,marginRight: "10px"}}>Free</b>
                              </div>
                        </div>
                    </div>
                </a>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                <a href="">
                    <div className="card-flyer">
                        <div className="text-box">
                            <div className="image-box">
                                <img src="./images/karthik.png" alt="" />
                            </div>
                            <div className="text-container">
                              <h6>
                                Object Oriented Programming
                              </h6>
                              <p style={{marginBottom: "30px"}}>Karun Karthik</p>
                              <b style={{float: "left" , marginBottom: "10px"}}><i style={{color: "gold"}} className='fas fa-eye'></i>1,500 views</b><b style={{width:"20px" ,marginBottom: "10px" ,color:"rgb(12, 195, 250)", float: "right" ,marginRight: "10px"}}>Free</b>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    </div>
</div>


<button style={{marginLeft: "48%" ,marginTop: "10px",display: "block" , borderRadius: "14px" ,backgroundColor: "rgb(0, 47, 255)" ,padding: "10px" ,color: "white" ,fontWeight: "800" ,margin:"auto"}}>View All Courses</button>
         </div>
        );
    }
}
