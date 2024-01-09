import React from 'react'
import 'react-html5video/dist/styles.css';
import moodlevideo from '../../assests/moodlevideo.mp4'
import moodlefront from '../../assests/moodlefront.png'
import './Middle.css'
import { Link } from 'react-router-dom'

export default function Middle() {
  return (
    <div className='home-container'> 
          <div className='moodle-video'>
              <video loop controls  className='moodlevideo' poster ={moodlefront}>
                  <source src={moodlevideo} type="video/mp4"/>
              </video>
          </div>
          <div className='moodle-box'> 
             <div className='moodle-text'>
             Indian Institute of Information Technology Bhopal is on the verge of forging a groundbreaking collaboration with Moodle, a renowned learning platform designed to enhance educational experiences. This strategic partnership aims to revolutionize the learning facilities at the institute by leveraging Moodle's robust, secure, and integrated system. By integrating Moodle into their educational framework, IIIT Bhopal is poised to create personalized learning environments that cater to the unique needs of educators, administrators, and learners. This collaboration is set to bring about a significant enhancement in the overall quality of education, fostering a dynamic and interactive learning atmosphere for students.
             </div>
            <Link to='./moodle-services' className='moodle-start'>Get Started</Link>
          </div>
      </div>
  )
}
