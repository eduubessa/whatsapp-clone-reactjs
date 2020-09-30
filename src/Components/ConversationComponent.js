import React from 'react'
import './ConversationComponent.css'

export default ({item, onClick, active}) => {
    return (
        <div
            className={`conversation-item ${ active ? `active` : `` }`}
            onClick={onClick}
        >
            <img className="conversation-item-avatar" src={item.avatar} alt={item.username} />
            <div className="conversation-item-lines">
                <div className="conversation-item-line">
                    <div className="conversation-item-username">
                        { item.username }
                    </div>
                    <div className="conversation-item-date">
                        22:20
                    </div>
                </div>
                <div className="conversation-item-line conversation-item-lastmessage">
                    <p>
                        {item.message}
                    </p>
                </div>
            </div>
        </div>
    )
}
