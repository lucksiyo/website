import { useEffect, useState } from 'react'
import './MusicPlayer.css'

interface LastFmTrack {
  name: string
  album: {
    '#text': string
  }
  artist: {
    '#text': string
  }
  image: Array<{'#text': string }>
  '@attr'?: {
    nowplaying: string
  }
}

interface LastFmApiResponse {
  track: LastFmTrack
}

const MusicPlayer = ({ username }: { username: string }) => {
  const [track, setTrack] = useState<LastFmTrack | null>(null)

  useEffect(() => {
    const getTrack = async () => {
      const BASE_URL = `https://lastfm-last-played.biancarosa.com.br/${username}/latest-song`
    
      try {
        const request = await fetch(BASE_URL)
        if (!request.ok) return

        const json = (await request.json()) as LastFmApiResponse
      
        if (json.track) {
          setTrack(json.track)
        }

      } catch (error) {
        console.error("Error fetching from LastFM:", error)
      }
    }

    getTrack()

    const intervalId = setInterval(() => {
      getTrack()
    }, 10000)

    return () => clearInterval(intervalId)
  }, [username])

  if (!track) return (
    <>
      <p>Loading...</p>
    </>
  )

  const isPlaying = track['@attr']?.nowplaying === 'true'

  return (
    <div className='flex flex-col-reverse lg:flex-row justify-between items-center gap-4 lg:gap-10'>  
      <div className='lg:col-span-2 flex flex-col items-center lg:items-start'>
        {isPlaying ? 
          <div className='flex items-center gap-2'>
            <p className='font-[600] uppercase'>Now Playing</p> 
            <div className='h-[0.75rem] w-[0.75rem] bg-green-800/70 rounded-full'></div>
          </div>
          :
          <div className='flex items-center gap-2'>
            <p className='font-[600] uppercase'>Last Played</p> 
            <div className='h-[0.75rem] w-[0.75rem] bg-red-800/70 rounded-full'></div>
          </div>
        }
        <div className='flex flex-col text-center lg:items-start'>
          <p>{track.name}</p>
          <p className='text-[0.875rem]'>by {track.artist['#text']}</p>
          <p className='text-[0.875rem]'>from {track.album['#text']}</p>
        </div>
        
      </div>

      <div className='lg:col-span-2 relative mt-2 h-[8rem] w-[8rem]'>
        <img 
          className='relative h-full w-full object-cover z-100'
          src={track.image[3]['#text']}
          alt={track.album['#text'] + ' cover art'}
        /> 
        <div 
          className='absolute left-0 -translate-x-1/2 top-1/2 -translate-y-1/2 h-[2.5rem] w-[2.5rem] z-10 bg-(--dark) opacity-[0.5] rounded-full flex items-center'
        />
        <img 
          className='rotate absolute left-0 -translate-x-1/2 top-1/2 -translate-y-1/2 h-[7rem] w-[7rem] object-cover blur-xs rounded-full flex items-center'
          src={track.image[3]['#text']}
          alt='disc'
        />
      </div>
    </div>
  )
}

export default MusicPlayer
