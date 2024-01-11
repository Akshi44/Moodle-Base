import React from 'react'
import './Moodle.css'
export default function Moodle() {
  return (
    <div className='moodle-container'>
        <div class="col-md-12 mb-30">
            <h3 style={{fontSize:"30px",textDecoration:'none'}}>Moodle</h3>           
            <div class="double-line-bottom-theme-colored-2"></div>
            <p>The IIIT Bhopal has configured <a href="http://moodle.org/" style={{textDecoration:'none',color:'#102DA2 ',fontWeight:'bold'}}>Moodle</a>, a public domain course management software, for use by students for the courses running in the current semester. Apart from online dissemination of course material, Moodle supports a host of other features for every course like news, blogs, discussion forums and facility for online submission of assignments and quizzes. Moodle@IIITBhopal can be accessed at 
            <a class="text-theme-colored2" href="https://shiksha.iiitbhopal.ac.in/login/index.php"  style={{textDecoration:'none',color:'#102DA2',fontWeight:'bold'}}> https://shiksha.iiitbhopal.ac.in/ login/index.php</a></p>
            <p>All students are pre-enrolled in various courses according to the course registration data for the current semester provided by the academic sections. Guest logins for all courses are enabled by default, but the the course coordinators may disable them for their specific courses if they so choose. Course coordinators have full editing rights for their courses.</p>
            <p>The system is fully integrated with the IIITBhopal systems, and the course mailing lists for the current semester.</p>
            <p>Some tutorials for using Moodle can be found at <a class="text-theme-colored2" href="http://docs.moodle.org/en/Student_tutorials" style={{textDecoration:'none',color:'#102DA2 ',fontWeight:'bold'}}>Student_tutorials</a>.</p>
        </div>
    </div>
  )
}
