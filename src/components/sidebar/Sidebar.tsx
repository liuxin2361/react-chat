import React from 'react';
import "./Sidebar.scss";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddIcon from '@mui/icons-material/Add';
import SidebarChannel from '../sidebar-channel/SidebarChannel';
import MicIcon from '@mui/icons-material/Mic';
import SettingsIcon from '@mui/icons-material/Settings';
import Headphones from '@mui/icons-material/Headphones';

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
                    <h3>ReactChat</h3>
                    <ExpandMoreIcon />
                </div>
                {/* sidebarChannels */}
                <div className='sidebarChannels'>
                    <div className='sidebarChannelHeader'>
                        <div className='sidebarHeader'>
                            <ExpandMoreIcon />
                            <h4>ReactChatChannel</h4>
                        </div>
                        <AddIcon className='sidebarAddIcon' />
                    </div>

                    <div className='sidebarChannelList'>
                        <SidebarChannel />
                        <SidebarChannel />
                        <SidebarChannel />
                        <SidebarChannel />
                    </div>
                </div>
                <div className='sidebarFooter'>
                    <div className='sidebarUser'>
                        <img src="./user-icon.jpg" alt="" />
                        <div className='userName'>
                            <h4>XinXinXin</h4>
                            <span>#8162</span>
                        </div>
                    </div>
                    <div className='sidebarVoice'>
                        <MicIcon />
                        <Headphones />
                        <SettingsIcon />
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Sidebar