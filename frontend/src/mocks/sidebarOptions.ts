import {ISidebarItem} from "app/(main)/_components/Sidebar"

const options: ISidebarItem[] = [
  {
    id: 1,
    name: 'Games',
    sub: [
      {
        id: 11,
        name: 'Dota',
        link: 'https://dota.com/',
      },
      {
        id: 12,
        name: 'CS:GO',
        link: 'https://csgo.com/',
      },
      {
        id: 13,
        name: 'Valorant',
        link: 'https://valorant.net/',
      },
    ],
  },
  {
    id: 2,
    name: 'News',
    sub: [
      {
        id: 21,
        name: 'Hot',
        link: 'https://hot.com/',
      },
      {
        id: 22,
        name: 'Politics',
        link: 'https://politic.com/',
      },
      {
        id: 23,
        name: 'Games',
        link: 'https://games.com/',
      },
    ],
  },
]

export default options