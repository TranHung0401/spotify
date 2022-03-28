import React, { useContext, useEffect, useState } from 'react'
import { Songs } from '../Context'

export default function ListSong() {

    const { DataSongs, handleIdSong, song } = useContext(Songs);
    const [idSong, setIdSong] = useState(0)

    const handleSongClick = (id) => {
        setIdSong(id)
        handleIdSong(id)
    }

    useEffect(() => {
        setIdSong(song.id)
    }, [song])

    return (
        <div className='col-span-2 bg-slate-800 overflow-hidden  overflow-y-scroll'>
            <table className='table-auto w-full'>
                <thead className='text-white h-12 bg-slate-700' >
                    <tr>
                        <th className='w-[10%] text-center'>#</th>
                        <th className='text-left w-[60%]'>Title</th>
                        <th className='w-[20%]'>Author</th>
                        <th className='w-[10%]'><i className='fas fa-download'></i></th>
                    </tr>
                </thead>
                <tbody className='mt-4 h-full'>
                    {
                        DataSongs.map((song, index) => (
                            <tr
                                key={index}
                                className={`hover:bg-slate-600 h-12 ${song.id == idSong && 'bg-slate-600 text-teal-300'}`}
                                onClick={() => handleSongClick(song.id)}
                            >
                                <td className='text-center'>{index + 1}</td>
                                <td>{song.name}</td>
                                <td className='text-center'>{song.author}</td>
                                <td className='text-center'><a href={song.url}><i class="fas fa-download"></i></a></td>
                            </tr>
                        ))
                    }

                </tbody>
            </table>
        </div >
    )
}
