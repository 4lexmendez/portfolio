import Footer from '../Parts/Footer'
import { motion } from "framer-motion"
import {FaReact, FaSass, FaCss3, FaHtml5, FaPython, FaBootstrap} from "react-icons/fa"
import { SiDjango, SiTailwindcss, SiBlender, SiCinema4D, SiJavascript, SiMongodb, SiFirebase } from "react-icons/si";
import { DiNodejs, DiGit, } from "react-icons/di";
import { useState} from 'react'
import Spinner from '../Parts/Spinner.jsx'



export const About = () => {

  const [loading] = useState(false)


  if (loading) {
    return <Spinner />
  }
  return (
    <>
    
      <main className="main">
        <section className="content">
         <br/><br/><br/>
        
<br/><br/><br/><br/><br/><br/>


          <motion.div animate={{ x: 100, y: 0, rotate:360 }}
transition={{ duration: 3 }} >Pushing</motion.div>

          <h5>my creative boundaries</h5>
               <motion.div
                drag
                dragTransition=
                {{
                min: 0,
                max: 300,
                bounceStiffness: 100
                }}
                >
                Otherwise, life is a drag 
                </motion.div>
          <br/>

          
          <p>
            lorem ipsum
          </p>
           </section>




           <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
           <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
           
           <h1 className="boxes">SKILLSET</h1>
          
   \
  <div className="boxes">
  <div className="box"><FaReact className="h-6 w-6"/></div>
  <div className="box"><SiDjango className="h-6 w-6"/></div>
  <div className="box"><SiJavascript className="h-6 w-6"/></div>
  <div className="box"><FaPython className="h-6 w-6"/></div>
  <div className="box"><FaHtml5 className="h-6 w-6"/></div>

  </div>
  <br/>
  <div className="boxes">
  <div className="box"><FaSass className="h-6 w-6"/></div>
  <div className="box"><SiTailwindcss className="h-6 w-6"/></div>
  <div className="box">< FaCss3 className="h-6 w-6"/></div>
  <div className="box"><SiBlender className="h-6 w-6"/></div>
  <div className="box"><SiCinema4D className="h-6 w-6"/></div>
  </div>
  <br/>
  <div className="boxes">
  <div className="box"><DiGit className="h-6 w-6"/></div>
  <div className="box"><FaBootstrap className="h-6 w-6"/></div>
  <div className="box"><DiNodejs className="h-6 w-6"/></div>
  <div className="box"><SiMongodb className="h-6 w-6"/></div>
  <div className="box"><SiFirebase className="h-6 w-6"/></div>

  </div>
<br/><br/><br/>
<div className="bottom"> 
      <Footer />
   </div>


      </main>
      
      </>

  )
}

export default About
