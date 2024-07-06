import React from 'react';
import "./Sidebar.scss";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

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
                <div className='sidebarTop'>
                    <h3>Discord</h3>
                    <ExpandMoreIcon />
                </div>
                {/* sidebarChannels */}
            </div>
        </div>
    )
}

export default Sidebar