import React from 'react'
import "./Sidebar.css"
import SidebarChat from "./SidebarChat"
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import { IconButton, Avatar } from '@material-ui/core';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { SearchOutlined } from '@material-ui/icons';
function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <Avatar src="https://scontent.fmel5-1.fna.fbcdn.net/v/t1.0-9/99299483_10216720485350873_2265342923606327296_n.jpg?_nc_cat=103&_nc_sid=110474&_nc_ohc=_1-vOV6XNR4AX9vKFLu&_nc_ht=scontent.fmel5-1.fna&oh=cec9a63a233d7924be96ee8952cb3b06&oe=5FABED71"/>
                <div className="sidebar__headerRight">
                    <IconButton>
                    <DonutLargeIcon/>
                    </IconButton>
                    <IconButton>
                    <ChatIcon/>
                    </IconButton>
                    <IconButton>
                    <MoreVertIcon/>
                    </IconButton>
                </div>
            </div>
            <div className="sidebar__search">
                <div className="sidebar__searchContainer">
                    <SearchOutlined/>
                    <input placeholder="Search or start new chat" type="text"/>
                </div>
            </div>
            <div className="sidebar__chats">
                <SidebarChat/>
                <SidebarChat/>
                <SidebarChat/>
            </div>
        </div>
    )
}

export default Sidebar
