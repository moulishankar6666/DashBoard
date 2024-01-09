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
    const [activeTab,setActiveTab]=useState("DashBoard")
    return(
        <aside className="side-bar">
            <img className="dash-board-logo" src="https://assets.website-files.com/6076eab79e12ed151f2a03f6/6076eec561cd5d0f52ca83f8_Branding.svg" alt="logo"/>
            <div className="search-bar">
                <FiSearch className="search-icon" />
                <input placeholder="Search..." type="search"/>
            </div>
            <div onClick={()=>setActiveTab("DashBoard")} className={activeTab!=="DashBoard"?"dash-board-container":"dash-board-container active"} >
                <MdDashboardCustomize  size={20} />
                <p className="dash-board">DashBoard</p>
            </div>
            <hr className="hr-line"/>
            <div className="tabs-container">
                <div onClick={()=>setActiveTab("Conversations")} className={activeTab!=="Conversations"?"navigation-tabs":"navigation-tabs active"}>
                <IoChatbubble size={20} />
                <div>Conversations</div>
                </div>
                <div onClick={()=>setActiveTab("Automations")} className={activeTab!=="Automations"?"navigation-tabs":"navigation-tabs active"}>
                <TbSettingsAutomation size={20} />
                <div>Automations</div>
                </div>
                <div onClick={()=>setActiveTab("Campaigns")} className={activeTab!=="Campaigns"?"navigation-tabs":"navigation-tabs active"}>
                <MdCampaign size={20} />
                <div>Campaigns</div>
                </div>
                <div onClick={()=>setActiveTab("Popup")} className={activeTab!=="Popup"?"navigation-tabs":"navigation-tabs active"}>
                <HiOutlineSquare2Stack size={20} />
                <div>Popup</div>
                </div>
                <div onClick={()=>setActiveTab("Live Chat")} className={activeTab!=="Live Chat"?"navigation-tabs":"navigation-tabs active"}>
                <MdOutlineLiveTv  size={20} />
                <div>Live Chat</div>
                </div>
                <div onClick={()=>setActiveTab("Segments")} className={activeTab!=="Segments"?"navigation-tabs":"navigation-tabs active"}>
                <PiLineSegmentsBold size={20} />
                <div>Segments</div>
                </div>
                <div onClick={()=>setActiveTab("Integrations")} className={activeTab!=="Integrations"?"navigation-tabs":"navigation-tabs active"}>
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