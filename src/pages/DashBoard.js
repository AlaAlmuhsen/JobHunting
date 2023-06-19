import { useState } from "react";

const DashBoard = () => {

    const [activeItem , setActiveItem] = useState('item1');
    function handleItemClicked(item) {
        setActiveItem(item)
    }

    
    return (
        <div className='dash-board'>
            <div className='side-nav'>
                <div className="logo">JubHunter</div>
                <ul>
                    <li className={activeItem === 'item1'? 'active':''} onClick={() => handleItemClicked('item1')}>DashBoard</li>
                    <li className={activeItem === 'item2'? 'active':''} onClick={() => handleItemClicked('item2')}>Messages</li>
                    <li className={activeItem === 'item3'? 'active':''} onClick={() => handleItemClicked('item3')}>Company Profile</li>
                    <li className={activeItem === 'item4'? 'active':''} onClick={() => handleItemClicked('item4')}>All Aplications</li>
                </ul>
                <button className="sign-out">Log Out</button>
            </div>
            <div className="dash-board-body">
                {activeItem === 'item1' && <h1>home</h1>}
                {activeItem === 'item2' && <h1>messages</h1>}
                {activeItem === 'item3' && <h1>Company Profile</h1>}
                {activeItem === 'item4' && <h1>All Aplications</h1>}
            </div>
        </div>
    )
}

export default DashBoard