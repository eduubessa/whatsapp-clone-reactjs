import React from 'react';
import './ConversationContentComponent.css'

// Icons components
import EmojiPicker from "emoji-picker-react";
import MicIcon from '@material-ui/icons/Mic';
import GifIcon from '@material-ui/icons/Gif';
import { Grid } from '@giphy/react-components';
import SendIcon from '@material-ui/icons/Send';
import { GiphyFetch } from '@giphy/js-fetch-api';
import CloseIcon from '@material-ui/icons/Close';
import SearchIcon from '@material-ui/icons/Search';
import ExpandMore from '@material-ui/icons/ExpandMore';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';

export default ({conversation}) => {

    let recognition = null;
    let speechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

    if(speechRecognition !== undefined)
    {
        recognition = new speechRecognition();
    }

    const giphyFetch = new GiphyFetch("k18eUSkWh7JVQEoGI3bYfbQKleW7yyph");

    const [emojiOpen, setEmojiOpen] = React.useState(false);
    const [gifsOpen, setGifsOpen] = React.useState(false);
    const [text, setText] = React.useState('')
    const [listening, setListenning] = React.useState(false);

    const handleEmojiClick = (e, emojiObject) => {
        setText(text + emojiObject.emoji);
    };

    const giphyFetchTrending = (offset: number) => giphyFetch.trending({offset, limit: 10});

    const handleGifClick = (e, giphyObject) => {
        console.log(giphyObject);
    }

    const handleOpenEmojiPicker = () => {
        setEmojiOpen(true);
        setGifsOpen(false);
    };

    const handleCloseEmojiPicker = () => {
        setEmojiOpen(false);
    };

    const handleClickGifsPicker = () => {
        setEmojiOpen(false);
        setGifsOpen(true);
    };

    const handleSendMessageClick = () => {

    };

    const handleMicClick = () => {
        if(recognition !== null) {
            recognition.onstart = () => {
                setListenning(true);
            };

            recognition.onend = () => {
              setListenning(false);
            };

            recognition.onresult = (e) => {
                setText(e.results[0][0].transcript);
            };

            recognition.start();
        }
    };

    return (
            <div className="conversation-content">
                <header className="conversation-content-header">
                    <div className="conversation-content-header-info">
                        <img src={conversation.avatar} alt={conversation.username} className="conversation-content-avatar"/>
                        <div className="conversation-content-name">{conversation.username}</div>
                    </div>

                    <section className="conversation-content-header-buttons">
                        <div className="conversation-content-button">
                            <SearchIcon style={{ color: '#919191'}} />
                        </div>
                        <div className="conversation-content-button">
                            <ExpandMore style={{ color: '#919191'}} />
                        </div>
                    </section>
                </header>
                <div className="conversation-content-body">
                    hello
                </div>
                <div className="conversation-content-emojis"
                     style={{height: emojiOpen ? '200px' : '0px'}}
                >
                    <EmojiPicker
                        onEmojiClick={handleEmojiClick}
                        disableSearchBar
                        disableSkinTonePicker
                    />
                </div>
                <div className="conversation-content-gifs"
                     style={{height: gifsOpen ? '400px' : '0px'}}
                >
                    <Grid
                        width="90%"
                        fetchGifs={giphyFetchTrending}
                        columns={6}
                        gutter={6}
                    />
                </div>
                <footer className="conversation-content-footer">
                    <div className="conversation-content-footer-pre">
                        <div
                            className="conversation-content-button"
                            onClick={handleCloseEmojiPicker}
                            style={{ width: emojiOpen || gifsOpen ? '40px' : '0' }}
                        >
                            <CloseIcon style={{color: '#919191'}} />
                        </div>
                        <div
                            className="conversation-content-button"
                            onClick={handleOpenEmojiPicker}
                        >
                            <InsertEmoticonIcon
                                style={{color: emojiOpen ? '#009688' : '#919191'}}
                            />
                        </div>
                        {
                            (emojiOpen || gifsOpen) &&
                            <div className="conversation-content-button">
                                <GifIcon
                                    style={{color: gifsOpen ? '#009688' : '#919191'}}
                                    onClick={handleClickGifsPicker}
                                />
                            </div>
                        }
                        <div className="conversation-content-button">
                            <AttachFileIcon style={{color: '#919191'}} />
                        </div>
                    </div>

                    <div className="conversation-content-footer-inputarea">
                        <input
                            type="text"
                            value={text}
                            onChange={e=>setText(e.target.value)}
                            className="conversation-content-input"
                            placeholder="Digite uma mensagem..."
                        />
                    </div>

                    <div className="conversation-content-footer-pos">

                        {
                            text !== '' &&
                            <SendIcon
                                style={{color: '#919191'}}
                                onClick={handleSendMessageClick}
                            />
                        }
                        {
                            text === '' &&
                            <MicIcon
                                style={{color: listening ? '#126ece' : '#919191'}}
                                onClick={handleMicClick}
                            />
                        }
                    </div>
                </footer>
            </div>
    )
}
