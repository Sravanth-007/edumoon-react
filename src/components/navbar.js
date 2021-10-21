import React, { Component } from 'react'



export default class Navbar extends Component {


  componentDidMount () {
 
    let sidebar = document.querySelector(".sidebar");
    let closeBtn = document.querySelector("#btn");
    let searchBtn = document.querySelector(".bx-search");
  
    closeBtn.addEventListener("click", ()=>{
     
    });
  
    closeBtn.addEventListener("click", ()=>{
        if (sidebar.style.display === 'none') {
          sidebar.classList.add("open");
          sidebar.style.display = 'block';
         
      } else {
       
          sidebar.style.display = 'none';
          
      }
    });
  

}
    render() {
        return (
         <div>

  <div className="sidebar"  style={{display:"none"}} >
    <div className="logo-details">
      <i className='bx bxs-moon icon'></i>
        <div className="logo_name"><span style={{color:"blue"}}>Edu</span>Moon</div>
        
    </div>
    <ul className="nav-list">
      <li>
        <a href="#">
          <i className='bx bxs-home'></i>
          <span className="links_name">Home</span>
        </a>
         <span className="tooltip">Home</span>
      </li>
      <li>
       <a href="#">
         <i className='bx bxs-bookmark' ></i>
         <span className="links_name">Courses</span>
       </a>
       <span className="tooltip">Courses</span>
     </li>
     <li>
       <a href="#">
         <i className='bx bxs-cloud-download' ></i>
         <span className="links_name">Resources</span>
       </a>
       <span className="tooltip">Resources</span>
     </li>
     <li>
       <a href="#">
         <i className='bx bx-pie-chart-alt-2' ></i>
         <span className="links_name">Blog</span>
       </a>
       <span className="tooltip">BLOG</span>
     </li>
     <li>
       <a href="#">
         <i className='bx bxs-calendar-event' ></i>
         <span className="links_name">Events</span>
       </a>
       <span className="tooltip">Events</span>
     </li>
     <li>
       <a href="#">
         <i className='bx bxs-camera' ></i>
         <span className="links_name">Gallery</span>
       </a>
       <span className="tooltip">Gallery</span>
     </li>
     <li>
       <a href="#">
         <i className='bx bxs-info-circle' ></i>
         <span className="links_name">About</span>
       </a>
       <span className="tooltip">About</span>
     </li>
     <li>
       <a href="#">
         <i className='bx bxs-user' ></i>
         <span className="links_name">Campus Ambassador</span>
       </a>
       <span className="tooltip">Campus Ambassador</span>
     </li>
     <li>
        <a href="#">
          <i className='bx bxs-log-in' ></i>
          <span className="links_name">Login</span>
        </a>
        <span className="tooltip">Login</span>
      </li>
     <li className="profile">
         <div className="profile-details">
           
           <div className="name_job">
             <div className="name">User Name</div>
             <div className="job"></div>
           </div>
         </div>
         <i className='bx bx-log-out' id="log_out" ></i>
     </li>
    </ul>
  </div>
         </div>
        );
    }
}
