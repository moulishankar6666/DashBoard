
import { useState } from "react"
import { MdShoppingCartCheckout } from "react-icons/md";

import "./index.css"

const history=[
    {ambendonedCart:"7 Days",sent:4024,clicks:124,amount:"$5,231",orders:41,aov:"$150"},
    {ambendonedCart:"15 min",sent:4024,clicks:124,amount:"$24,521",orders:41,aov:"$150"},
    {ambendonedCart:"15 min",sent:4024,clicks:124,amount:"$24,521",orders:41,aov:"$150"}
]

const History=()=>{
    
    const [activeTab,setActiveTab]=useState("Automations")

    const onclickTab=(value)=>setActiveTab(value)

    const item=(data)=>{
        const {ambendonedCart,sent,clicks,amount,orders,aov} = data
        return(
            <li className="history-item" >
                <div className="history-item-left">
                    <MdShoppingCartCheckout size={30}/>
                    <div className="history-item-left-info">
                        <div className="top">
                            <p>{`Ambendoned Cart ${ambendonedCart}`}</p>
                            {/* arrow */}
                        </div>
                        <div className="bottom">
                            <p>{`${sent} Sent`}</p>
                            <hr className="horizontal-line"/>
                            <p>{`${clicks} Clicks`}</p>
                        </div>
                    </div>
                </div>
                <div className="history-item-right-info">
                    <p>{amount}</p>
                    <div className="bottom">
                        <p>{`${orders} Orders`}</p>
                        <hr className="horizontal-line"/>
                        <p>{`${aov} Aov`}</p>
                    </div>
                </div>
            </li>

        )
    }
    return(
        <div className="history-container">
            <ul className="history-section-tabs-list">
                <li className={activeTab==="Automations"?"active-tab":null}>
                    <button onClick={()=>onclickTab("Automations")} className="tab-button">Automations</button>
                </li>
                <li className={activeTab==="Campaingns"?"active-tab":null}>
                    <button onClick={()=>onclickTab("Campaingns")} className="tab-button">Campaingns</button>
                </li>
                <li className={activeTab==="Segments"?"active-tab":null}>
                    <button onClick={()=>onclickTab("Segments")} className="tab-button">Segments</button>
                </li >
                <li>
                    <select className="month-selection">
                        <option>Last Month</option>
                        <option>This Month</option>
                    </select>
                </li>
            </ul>
            <ul className="history-items-list">
                {history.map(each=>item(each))}
            </ul>
        </div>
    )
}

export default History