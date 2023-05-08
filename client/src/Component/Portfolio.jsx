import React from 'react'
import styles from './Portfolio.module.css'
import Cooking from "../videos/myCookbook.mp4"
import Gaming from "../videos/videoGameWeb.mp4"
import Sidewalk from "../videos/sidewalksale.mp4"
const Portfolio = (props) => {
  return (
    <>
    <div className={styles.background} id="portfolio" ref={props.portfolio}><h1 className={styles.head}>My Portfolio</h1>
      <div >
        <h2 className={styles.subhead}>Digital Cookbook</h2>
          <div className={styles.dflex}>
            <div >
              <p>This project focused on creating recipe database.  Users can add recipes for others to see and provide their thoughts.  It also utilizes the Spoonacular API to generate recipes based on ingredients you have in your pantry.  This search can be left blank and you will recieve 5 recipes you may be interested in to try.</p>
              <p>Technologies used include: Python, MySQL Database, Restful API Spoonacular, AJAX, BCrypt </p>
              <a  href="https://github.com/tlarram/Never-forget-a-recipe-again"><button className={styles.portbutton}>Check Out on GitHub</button> </a>
            </div>
            <video width="50%" height="auto" controls>
            <source src={Cooking} type="video/mp4"/>
              Your browser does not support the video tag.
            </video>
            
            
          </div>
      </div>
      <div>
        <h2 className={styles.subhead}>One Stop Video Game Shop</h2>
          <div className={styles.dflex}>
            <div>
              <p>This project focused on creating a video game website that mimics a storefront.  Users can browse different games, see screenshots of the game, 
                and choose to see the game action through youtube.  It also utilizes the RAWG.io API to generate information about various video games. Users can register and log in with full authentication in MERN.  
                </p>
              <p>Technologies used include: REACT, MongoDB, Restful API RAWG.io, AXIOS</p>
              <a href="https://github.com/tlarram/Gaming-Website-Project"><button className={styles.portbutton}>Check Out on GitHub</button> </a>
            </div>
            <video width="50%" height="auto" controls>
              <source src={Gaming} type="video/mp4"/>
              Your browser does not support the video tag.
            </video>
          </div>
      </div>
      <div>
        <h2 className={styles.subhead}>Sidewalk Sale</h2>
          <div className={styles.dflex}>
            <div>
              <p>This project created a web application that caters to those who are looking for good deals in their neighborhood. 
                Inspired by the stooping phenomenon in Brooklyn, we were able to digitize the process of looking for a good sidewalk sale.
                Users can view, post, and save items that are listed in their neighborhood. Grabbing the geolocation from the users IP address, 
                with their permission, the home page will render a list of items that are available in their neighborhood.
                Streamlines the process of endless hours driving around your neighborhood looking for a good find.
                Users can contact the seller via javaMailSender about their item.
                We know that gathering User's information can feel invasive: We've provided extra security measures by implementing Spring Security.
                Gives new life to items that would otherwise be discarded!</p>
              <p>Technologies used include: JAVA, MySQL Database, GeoLocation, SpringBoot, JavaMailSender</p>
              <a  href="https://github.com/tlarram/Sidewalk-Sale"><button className={styles.portbutton}>Check Out on GitHub</button> </a>
            </div>
            <video width="50%" height="auto" controls>
              <source src={Sidewalk} type="video/mp4"/>
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </>
  )
}

export default Portfolio