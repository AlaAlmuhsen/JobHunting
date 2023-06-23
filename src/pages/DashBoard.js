import { useState } from "react";
import DashboardHeader from "../components/DashboardHeader";
import AllAplications from "../components/AllAplications";
import CompanyProfile from "../components/CompanyProfile";
import { useNavigate } from "react-router-dom";
import DashboardHome from "./DashboardHome";
const DashBoard = () => {
    const [activeItem , setActiveItem] = useState('item1');
    const navigate=useNavigate(); 

    function handleItemClicked(item) {
        setActiveItem(item)
    }
    function logOutbtn() {
        window.sessionStorage.clear();
        navigate('/login');
    }
    return (
        <div className='dash-board'>
            <div className='side-nav'>
                <div className="logo">JobHunter</div>
                <ul>
                    <li className={activeItem === 'item1'? 'active':''} onClick={() => handleItemClicked('item1')}>DashBoard</li>
                    <li className={activeItem === 'item2'? 'active':''} onClick={() => handleItemClicked('item2')}>Messages</li>
                    <li className={activeItem === 'item3'? 'active':''} onClick={() => handleItemClicked('item3')}>Company Profile</li>
                    <li className={activeItem === 'item4'? 'active':''} onClick={() => handleItemClicked('item4')}>All Aplications</li>
                </ul>
                <button className="sign-out" onClick={logOutbtn}>Log Out</button>
            </div>
            <div className="dash-board-body">
                <DashboardHeader />
                {activeItem === 'item1' && <DashboardHome />}
                {activeItem === 'item2' && <h1>messages</h1>}
                {activeItem === 'item3' && <CompanyProfile/>}
                {activeItem === 'item4' && <AllAplications />}
            </div>
        </div>
    )
}
export default DashBoard