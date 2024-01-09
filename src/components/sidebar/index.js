import React,{useState} from "react";
import { FiSearch } from "react-icons/fi";
import { MdDashboardCustomize,MdCampaign ,MdOutlineLiveTv } from "react-icons/md";
import { IoChatbubble } from "react-icons/io5";
import { TbSettingsAutomation } from "react-icons/tb";
import { HiOutlineSquare2Stack } from "react-icons/hi2";
import { PiLineSegmentsBold } from "react-icons/pi";
import { GrIntegration } from "react-icons/gr";




import "./index.css"


const Sidebar =()=>{
    const [activeTab,setActiveTab]=useState("")
    return(
        <aside className="side-bar">
            <img className="dash-board-logo" src="https://assets.website-files.com/6076eab79e12ed151f2a03f6/6076eec561cd5d0f52ca83f8_Branding.svg" alt="logo"/>
            <div className="search-bar">
                <FiSearch className="search-icon" />
                <input placeholder="Search..." type="search"/>
            </div>
            <div className="dash-board-container" >
                <MdDashboardCustomize  size={20} />
                <p className="dash-board">DashBoard</p>
            </div>
            <hr className="hr-line"/>
            <div className="tabs-container">
                <div className={true?"navigation-tabs":"navigation-tabs active"}>
                <IoChatbubble size={20} />
                <div>Conversations</div>
                </div>
                <div className="navigation-tabs">
                <TbSettingsAutomation size={20} />
                <div>Automations</div>
                </div>
                <div className="navigation-tabs">
                <MdCampaign size={20} />
                <div>Campaigns</div>
                </div>
                <div className="navigation-tabs">
                <HiOutlineSquare2Stack size={20} />
                <div>Popup</div>
                </div>
                <div className="navigation-tabs">
                <MdOutlineLiveTv  size={20} />
                <div>Live Chat</div>
                </div>
                <div className="navigation-tabs">
                <PiLineSegmentsBold size={20} />
                <div>Segments</div>
                </div>
                <div className="navigation-tabs">
                <GrIntegration size={20} />
                <div>Integrations</div>
                </div>
            </div>
            <div className="profile-container">
                <img className="profile-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSq_I0JFO2DxoAV3J-sI7ajtx0qW0Q5neaY_A&usqp=CAU" alt="profile"/>
                <div>
                    <p className="profile-name">Mouli Shankar</p>
                    <p className="store-name">Store Name</p>
                </div>
            </div>
            
        </aside>
    )
}
export default Sidebar