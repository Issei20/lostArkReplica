import React, { useEffect, useState, Fragment} from "react";
import "./navBar.css"
import logo from "./logo.png"
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function NavBar() {
        const icon = <FontAwesomeIcon icon={faAngleDown}/>
        const iconUp = <FontAwesomeIcon icon={faAngleUp}/>
        const [openGame, setOpenGame] = useState(false)
        const [openCom, setOpenCom] = useState(false)
        const [openSupp, setOpenSupp] = useState(false)
        const [angleG, setAngleG] = useState(<FontAwesomeIcon icon={faAngleDown}/>)
        const [angleC, setAngleC] = useState(<FontAwesomeIcon icon={faAngleDown}/>)
        const [angleS, setAngleS] = useState(<FontAwesomeIcon icon={faAngleDown}/>)
 

    useEffect(() => {
        function handleClick() {
            if(openGame) {
                setOpenGame(false)
                setAngleG(<FontAwesomeIcon icon={faAngleDown}/>)
            } else if(openCom) {
                setOpenCom(false)
                setAngleC(<FontAwesomeIcon icon={faAngleDown}/>)
            } else if(openSupp) {
                setOpenSupp(false)
                setAngleS(<FontAwesomeIcon icon={faAngleDown}/>)
            }
         }

        document.addEventListener("click", handleClick)
        return function cleanupListener() {
            document.removeEventListener('click', handleClick)
          }
        
    },[openGame, openCom, openSupp])

        function dropDownSupp(e) {
            setOpenSupp(!openSupp)
            setAngleS(<FontAwesomeIcon icon={faAngleUp}/>)
        }

        function dropDownGame() {
            setOpenGame(!openGame)
            setAngleG(<FontAwesomeIcon icon={faAngleUp}/>)
        }

        function dropDownCom() {
            setOpenCom(!openCom)
            setAngleC(<FontAwesomeIcon icon={faAngleUp}/>)
        }


        function menuDdGame() {    
            return (<div className="container-dd">
                <li className="dd-li">ABOUT</li>
                <li className="dd-li">STORY</li>
                <li className="dd-li">CLASSES</li>
                <li className="dd-li">MEDIA</li>
                <li className="dd-li">FAQ</li>
            </div>)
        }
      
      function menuDdCom()  {
            return (<div className="container-ddCom">
                <li className="dd-li">SOCIAL FEED</li>
                <li className="dd-li">CREATOR OF PROGRAM</li>
                <li className="dd-li">LEGENDS OF LOST ARK</li>
                <li className="dd-li">ARMORY EXTENSION</li>
                <li className="dd-li">FORUM</li>
            </div>)
        }

      function menuDdSupport() {
            return (<div className="container-ddSupp">
                <li className="dd-li">SERVER STATUS</li>
                <li className="dd-li">SUPPORT</li>
            </div>)
      }
        

    return (
        <div className="sectionNav">
        <div className="navBarContainer">
            <ul className="navBar">
            <div className="logo"><img className="logoImg" src={logo} alt="logo"></img></div>
                <li className="navLi" id="game"><button className="liBtn" onClick={(e) => dropDownGame(e)}>GAME {angleG} </button>{openGame ? menuDdGame() : null }</li>
                <li className="navLi"><button className="liBtn" >NEWS</button></li>
                <li className="navLi" id="community"><button className="liBtn" onClick={(e) => dropDownCom(e)}>COMMUNITY {angleC} </button>{openCom ? menuDdCom() : null}</li>
                <li className="navLi"id="support"><button className="liBtn" onClick={(e) => dropDownSupp(e)}>SUPPORT {angleS} </button>{openSupp ? menuDdSupport() : null}</li>
            </ul>
            <button className="packBtn">BUY FOUNDER'S PACK</button>
        </div>
        </div>
    )
}

export default NavBar;