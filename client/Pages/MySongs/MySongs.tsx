import { useQuery } from 'react-query'
import { Link } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'

import Icon from '../../components/UI/Icon/Icon'
import { getSongs } from '../../apis/songs'

function MySongs() {
  const { getAccessTokenSilently } = useAuth0()

  const { data, isLoading } = useQuery({
    queryKey: ['getSongs'],
    queryFn: async () => {
      const token = await getAccessTokenSilently()
      return await getSongs(token)
    },
  })

  return (
    <div>
      <div className="pl-4 pr-4 mt-8">
        <h1 className="text-3xl">Brenegade</h1>
        <h2 className="text-xs">These are the tracks you have recommended</h2>
        <ul className="flex flex-col gap-4 mt-6">
          {!isLoading &&
            data &&
            data.map((track) => (
              <li key={track.id} className="flex flex-row gap-2">
                <div className="self-center flex-none">
                  <Icon>
                    <i className="fa-solid fa-play text-black" />
                  </Icon>
                </div>
                <div className="flex flex-col w-36 flex-auto">
                  <h3>{track.title}</h3>
                  <h4 className="text-xs text-lightPurple">{track.artist}</h4>
                </div>
                <div className="flex flex-row gap-2 self-center flex-none">
                  <Icon>
                    <i className="fa-solid fa-pen" />
                  </Icon>
                  <Icon className="bg-warning">
                    <i className="fa-solid fa-trash" />
                  </Icon>
                </div>
              </li>
            ))}
        </ul>
      </div>
      <div className="fixed bottom-4 right-0">
        <Link to="/add-songs">
          <i className="fa-solid fa-plus text-xl bg-primary w-8 h-8 p-2 rounded-full mr-4"></i>
        </Link>
      </div>
    </div>
  )
}

export default MySongs
