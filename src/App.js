import React from 'react';
import './App.css'

import ChatIcon from '@material-ui/icons/Chat';
import SearchIcon from '@material-ui/icons/Search'
import ExpandMore from '@material-ui/icons/ExpandMore';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';

//Components
import ConversationComponent from './Components/ConversationComponent';
import ConversationContentComponent from './Components/ConversationContentComponent';
import ConversationWindowComponent from './Components/ConversationWindowComponent';

export default () => {

    const  [conversations] = React.useState([
            { id : 1, username: 'Raquel Rodrigues', 'avatar': 'https://picsum.photos/id/237/300/300', message: 'Olá tudo bem? Olha quando é que vou ter as vozes?'},
            { id : 2, username: 'Carolina Dias', 'avatar': 'https://picsum.photos/id/237/300/300', message: 'Vou dormir, até amanhã dorme bem'},
            { id : 3, username: 'Thaislayne Rodrigues', 'avatar': 'https://picsum.photos/id/237/300/300', message: 'Estou a trabalhar ainda, já voltei para o escritório'},
        ]);

    const  [conversationActive, setConversationActive] = React.useState({})

    return (
        <div className="app">
            <aside className="sidebar">
                <header>
                    <img className="header--avatar" src="https://picsum.photos/id/237/300/300" alt=""/>
                    <nav className="header-navigation">
                        <div className="header-navigation-item">
                            <DonutLargeIcon style={{ color: '#919191' }} />
                        </div>
                        <div className="header-navigation-item">
                            <ChatIcon style={{ color: '#919191' }} />
                        </div>
                        <div className="header-navigation-item">
                            <ExpandMore style={{ color: '#919191' }} />
                        </div>
                    </nav>
                </header>

                <section className="search">
                    <div className="search-input">
                        <SearchIcon fontSize="small" style={{ color: '#919191' }} />
                        <input type="search" placeholder="Pesquise ou crie uma conversa" />
                    </div>
                </section>

                <section className="conversations">
                    {conversations.map((item, key) => (
                        <ConversationComponent
                            key={key}
                            item={item}
                            active={conversationActive.id === conversations[key].id }
                            onClick={() => setConversationActive(conversations[key])}
                        />
                    ))}
                </section>
            </aside>
            <main className="conversation-content">
                {
                    conversationActive.id !== undefined &&
                        <ConversationContentComponent
                            conversation={conversationActive}
                        />
                }
                {
                    conversationActive.id === undefined &&
                        <ConversationWindowComponent />
                }
            </main>
        </div>
    )
};
