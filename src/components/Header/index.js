import Popup from 'reactjs-popup';

import Sidebar from '../sidebar';

import { IoCalendar } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";
import { MdDashboardCustomize } from "react-icons/md";


import "./index.css"


const Header =()=>{
    return(
        <header >
            <div className="dash-board-header-profile-container">
                <div className="dash-board-header-img-container">
                    <img  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSq_I0JFO2DxoAV3J-sI7ajtx0qW0Q5neaY_A&usqp=CAU" alt="profile"/>
                    <p>5</p>
                </div>
                <div className="dash-board-header-content-container">
                    <h1>Good Morning Mouli</h1>
                    <p>{`Here are your stats for Today,  ${new Date().getDate()} ${new Date().getMonth()+1} ${new Date().getFullYear()}`}</p>
                </div>
                <Popup 
                modal
                trigger={
                    <button className="Hammburger-icon">
                        <GiHamburgerMenu/>
                    </button>
                }
                >
                    {close=>(
                        <div className="popup-container">
                            <RxCross1 className='cross' onClick={()=>close()}/>
                            <div  className={false ?"dash-board-container":"dash-board-container active"} >
                            <MdDashboardCustomize  size={20} />
                            <p className="dash-board">DashBoard</p>
            </div>
                        <Sidebar/>
                     </div>
                    )}
                </Popup>
            </div>
            <div className="dash-board-date-selector-constainer">
                <div className="date-seletor">
                    <IoCalendar color="Blue"/>
                    <p>Today</p>
                </div>
                <p>compared to</p>
                <select className="date-seletor">
                    <option selected>previous period</option>
                    <option >now</option>
                </select>
            </div>
            
        </header>
    )
   
}
export default Header