import { useEffect, useState } from 'react'

interface SiteInfo {
  updated_at: string
  views: number
  followers: number
}

interface SiteDisplay {
  updated: string
  views: number
  followers: number
}

const SiteStats: React.FC = () => {
  const [site, setSite] = useState<SiteDisplay | null>(null)

  useEffect(() => {
    const domain = 'lucksiyo.nekoweb.org'

    const fetchSiteInfo = async () => {
      try {
        const request = await fetch(`https://nekoweb.org/api/site/info/${domain}`)
        const json = await request.json() as SiteInfo

        const formattedData: SiteDisplay = {
          updated: new Date(json.updated_at).toLocaleDateString('en-US', {
            timeZone: 'America/Los_Angeles',
            dateStyle: 'medium'
          }),
          views: json.views,
          followers: json.followers
        }

        setSite(formattedData)
      } catch (error) {
        console.error(error)
      }
    }

    fetchSiteInfo()
  }, [])

  return (
    <div>
      <h4 className="font-[500] uppercase">Last Updated</h4>
      <p>{site?.updated ?? 'Unknown'}</p>
      <hr className='my-1' />
      <h4 className="font-[500] uppercase">Views</h4>
      <p>{site?.views ?? 'Unavailable'}</p>
      <hr className='my-1' />
      <h4 className="font-[500] uppercase">Followers</h4>
      <p>{site?.followers ?? 'Unavailable'}</p>
    </div>
  )
}

export default SiteStats
