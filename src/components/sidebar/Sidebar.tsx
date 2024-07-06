import React from 'react';
import "./Sidebar.scss"

const Sidebar = () => {
    return (
        <div className='sidebar'>
            {/* sidebarLeft */}
            <div className='sidebarLeft'>
                <div className='serverIcon'>
                    <img src="./wechat.png" alt="" />
                </div>
                <div className='serverIcon'>
                    <img src="./wechat.png" alt="" />
                </div>
            </div>
            {/* sidebarRight */}
            <div className='sidebarRight'>
                <div className='siderbarTop'>
                    <h3>ReactChat</h3>
                </div>
            </div>
        </div>
    )
}

export default Sidebar