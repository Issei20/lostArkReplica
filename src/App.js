import React from "react"
import NavBar from "./components/navbarComp/NavBar"
import "./style.css";
import assassin from "./assassin.jpg"
import smoke from "./smokeCenter.jpg"
import smokeSide from "./smoke.png"
import exclu from "./exclu.jpg"
import logo from "./logo.png"
import arkweek from "./arkweek.png"
import arena from "./arena.jpg"
import boule from "./boule.jpg"
import island from "./island.jpg"
import twitch from "./twitch.jpg"
import prime from "./prime.jpg"
import hero from "./hero.jpg"
import mob from "./mobs.jpg"
import sgLogo from "./smLogo.png"
import pegi from "./18pegi.png"
import cash from "./cash.png"
import violence from "./violence.png"


function App() {

  const scrollToTop = () =>{
    window.scrollTo({
      top: 0, 
      behavior: 'auto'
      /* you can also use 'smootj' behaviour
         in place of 'auto' */
    });
  };

  return (
    <div className="App">
    <NavBar/>
    <img className="smoke" src={smoke} alt="smoke"></img>  
    <img className="smoke" src={smokeSide} alt="smoke"></img>
    <div className="divIntroImg">
      <div className="logoTextImg">
        <img className="logoText" src={logo} alt="logo"></img></div>
    <div className="line"></div>
    <p className="odyssey">YOUR ODYSSEY AWAITS</p>
    <div className="lineBot"></div>
    <p className="playText">PLAY FREE FEBRUARY 11, 2022</p>
   <div className="containerSubBecome"><button className="becomeBtn">BECOME A FOUNDER</button><p className="watchTrailer">WATCH TRAILER</p></div> 
   </div>
   <div className="lineSection"></div>
    <div className="divAssassinImg"><div className="containerAssassin">
    <div className="lineSection"></div>
      <div className="containerAllArkweek">
      <img className="arkweek" src={arkweek} alt="arkweek"></img>
      <div className="containerArkweek">
      <h1 className="titleArkweek">Ark Week sponsored by LG</h1> <p className="paraArkweek">Celebrate the Western Launch of Lost Ark with an exciting week of original programing packed with fan favorite streamers, prizes, and Drops. Begins February 7th at 5 p.m. PST (1 a.m. UTC). <a className="weekLink" href="">Learn more</a></p>
      </div>
      </div>
      <div className="lineSection"></div>
      </div>
      </div>
    <div className="lineSectionTop"></div>
    <div className="divNew">
      <div className="containerDivNew">
        <h1 className="bigTitleNews">NEWS</h1>
        <div className="containerBox">
          <div className="boxNews">
          <p className="titleBoxNews">UPDATES</p>
          <div className="lineSectionBox"></div>
          <div className="subBox">
            <img className="imgBoxNews" src={island} alt="island"></img>
            <h2 className="titleSubBoxNews">Lost Ark Community Spaces</h2>
            <p className="paraBoxNews">Find the best way to get involved with the Lost Ark community at launch!</p>
            <p className="readMore">Read more</p>
            </div>
            <div className="lineSectionBox"></div>
          </div>
          <div className="boxNews">
          <p className="titleBoxNews">UPDATES</p>
          <div className="lineSectionBox"></div>
          <div className="subBox">
            <img className="imgBoxNews" src={boule} alt="boule"></img>
            <h2 className="titleSubBoxNews">Launch Release Notes</h2>
            <p className="paraBoxNews">For existing fans of Lost Ark and participants in our Closed Beta test, we wanted to compile a full list of changes and updates we’ve made since the last time you were able play.</p>
            <p className="readMore">Read more</p>
            </div>
            <div className="lineSectionBox"></div>
          </div>
          <div className="boxNews">
          <p className="titleBoxNews">UPDATES</p>
          <div className="lineSectionBox"></div>
          <div className="subBox">
            <img className="imgBoxNews" src={arena} alt="arena"></img>
            <h2 className="titleSubBoxNews">Ark Week</h2>
            <p className="paraBoxNews">Celebrate the Launch of Lost Ark with an exciting week of week of incredible shows packed with some of your favorite streamers, prizes, and drops.</p>
            <p className="readMore">Read more</p>
            </div>
            <div className="lineSectionBox"></div>
          </div>
          </div>
      </div>
    </div>
    <div className="lineSection"></div>
    <div className="divApropos">
      <div className="containerApropos">
        <h1 className="aboutLost">ABOUT LOST ARK</h1>
        <div className="lineSectionBox"></div>
        <div className="learnMoreApropos">
          <p className="paraAbout">Dive into the epic lore of Arkesia. Test yourself in thrilling action combat and learn how to customize your fighting style with diverse character classes as you fight dark forces seeking the power of the Ark.</p>
          <button className="aproposBtn">LEARN MORE</button>
        </div>
      </div>
    </div>
    <div className="lineSectionPlus"></div>
    <div className="divBlue">
       <h2 className="blueTitle">IN-GAME REWARDS</h2>
       <div className="lineSectionBox"></div>
      <div className="containerTwoRewards">
        <div className="rewardBox">
        <div className="lineSectionBox"></div>
        <img className="rewardImg" src={prime} alt="imgReward" ></img>
        <h2 className="titleReward">REWARDS FOR PRIME GAMING</h2>
        <p className="paraReward">This month's rewards include a Battle Item Chest, Crystalline Aura, and more! Prime Gaming gives members monthly free games, exclusive in-game loot, a free subscription on Twitch.tv, and everything included with Amazon Prime.</p>
        <button className="aproposBtnBlue">LEARN MORE</button>
        <div className="lineSectionBox"></div>
        </div>
        <div className="rewardBox">
        <div className="lineSectionBox"></div>
        <img className="rewardImg" src={twitch} alt="imgReward" ></img>
        <h2 className="titleReward">TWITCH DROPS</h2>
        <p className="paraReward">Legends of Lost Ark: February 8 - March 1, 2022
         Claim four exclusive rewards by watching teams compete in the Legends of Lost Ark race to unlock Twitch Drops.
         Saphia Pet Selection Chest: February 7 - March 7, 2022
         Watch Lost Ark 'Drops Enabled' streams to earn one of six unique Saphia Pets. Chests unlock one color per player.</p>
        <button className="aproposBtnBlue">LEARN MORE</button>
        <div className="lineSectionBox"></div>
        </div>
      </div>
      </div>
    <div className="lineSectionTop"></div>
    <div className="divMedia">
      <h2 className="mediaTitle">MEDIA</h2>
      <div className="lineSectionBox"></div>
      <div className="containerMediaImg">
      <img className="mediaImg" src={hero} alt="heroesOfArkesia"></img>
      <img className="mediaImg" src={mob} alt="heroesOfArkesia"></img>
      </div>
    </div>
    <div className="lineSection"></div>
    <div className="divExclu">
      <p className="getExclu">GET EXCLUSIVE OFFERS, TIPS, AND MORE!</p>
      <p className="paraExclu"><span className="signUp">Sign up</span> for the Lost Ark Newsletter.</p>
    </div>
    <div className="footer">
    <div className="lineSection"></div>
      <div className="container-footer">
        <div className="logos-footer">
        <img className="footer-icons" src={sgLogo} alt="pegi18"></img>
        <img className="footer-icons" src={logo} alt="pegi18"></img>
        </div>
      <button className="backBtn" onClick={() => scrollToTop()}>BACK TO TOP</button>
      <div className="otherIcons">
        <img className="pegi" src={pegi} alt="pegi18"></img>
        <img className="pegi" src={violence} alt="pegi18"></img>
        <img className="pegi" src={cash} alt="pegi18"></img>
      </div>
        </div>
        <p className="note">Published by Amazon Games under license. © 2021-2022 Smilegate RPG, Inc. All rights reserved. Lost Ark and the Lost Ark logo are trademarks of Smilegate RPG, Inc. Used by Amazon Games under license.
          </p>
         <p className="noteE">This is a project from the Odin Project, PROJECT: JAVASCRIPT FINAL PROJECT "Replicate your favorite website as close as possible"</p>
      </div>
    </div>
  );
}

export default App;
