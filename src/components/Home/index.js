
import {Component} from "react"

import Sidebar from "../sidebar";
import Header from "../Header";
import LineChart from "../LineChart"
import History from "../History";

import "./index.css"

class Home extends Component{

 render(){
    return(
        <div className="dash-baord-container"> 
            <Sidebar/>
            <section className="section">
                <Header/>
                <div className="line-chart-container">
                    <div className="analysis-container">
                        <div>
                            <div className="profit-loss-container">
                               <p>Total Revenue</p>
                               <p className={12.5>0?"profit":"loss"}>+12.5%</p>
                            </div>
                            <h1>$32,621.72</h1>
                            <p>433 Orders</p>
                        </div>
                        <hr className="hr"/>
                        <div>
                            <div className="profit-loss-container">
                               <p>Subscribers</p>
                               <p className={32>0?"profit":"loss"}>+32%</p>
                            </div>
                            <h1>484,205</h1>
                            <p>$56 Average Order</p>
                        </div>
                        <hr className="hr"/>
                        <div > 
                            <div className="profit-loss-container">
                               <p>Conversions</p>
                               <p className={-3.4>0?"profit":"loss"}>-3.4%</p>
                            </div>
                            <h1>552,553</h1>
                            <p>5min Average Response Time</p>
                        </div>
                        <hr className="hr"/>
                        <div>
                            <div className="profit-loss-container">
                               <p>Popup Conversion Rate</p>
                               <p className={32.5>0?"profit":"loss"}>+32.5%</p>
                            </div>
                            <h1>25%</h1>
                            <p>5% Sales Conversion Rate</p>
                        </div>
                    </div>
                    <LineChart className="line-chart"/>
                </div>
                <History/>
            </section>
        </div>


    )
 }
}
export default Home