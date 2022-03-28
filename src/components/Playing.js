import React from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { Songs } from '../Context'

export default function Playing() {
    const { song, handleIdSong } = React.useContext(Songs);

    const handleNextClick = () => {
        handleIdSong(song.id + 1)
    }

    const handlePrevClick = () => {
        handleIdSong(song.id - 1)
    }

    return (
        <div className='h-[100px] relative'>
            <AudioPlayer
                className='playing-music bg-gray-900 h-[100px] text-white sticky bottom-0'
                src={song.url}
                showSkipControls={true}
                showJumpControls={false}
                onClickNext={handleNextClick}
                onClickPrevious={handlePrevClick}
            />
        </div>
    )
}
