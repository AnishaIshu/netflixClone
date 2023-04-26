import {IoIosArrowForward} from 'react-icons/io';


const HomeBg = () => {
   return (
    <div>
     <img className="HomeBg" src="https://cdn.wallpapersafari.com/24/74/zgeTuV.jpg" alt="" />


     <div className="heroTxt">
          <h1>Unlimited movies,<br></br> TV shows and more.</h1>
           <h2>Watch anywhere. Cancel anytime.</h2>
           <p>Ready to watch? Enter your email to create or restart your membership.</p>
     </div>


     <div className="buttons">
         <input type="text" placeholder="Email Address" className="emailBtn"></input>
         <button className="startBtn">Get Started <IoIosArrowForward className='iconD'/> </button>
     </div>
     </div>
   )
}

export default HomeBg