export type AvailableCategoriesType =
  'facebook'
  | 'github'
  | 'instagram'
  | 'script'
  | 'telegram'
  | 'tiktok'
  | 'vk'
  | 'website'
  | 'youtube'

export type CategoryType = {
  id: number
  icon: AvailableCategoriesType
  name: string
}

const categories: CategoryType[] = [
  {
    id: 1,
    name: 'Facebook',
    icon: 'facebook'
  },
  {
    id: 2,
    name: 'GitHub',
    icon: 'github'
  },
  {
    id: 3,
    name: 'Instagram',
    icon: 'instagram'
  },
  {
    id: 4,
    name: 'Парсер',
    icon: 'script'
  },
  {
    id: 5,
    name: 'Telegram',
    icon: 'telegram'
  },
  {
    id: 6,
    name: 'Tiktok',
    icon: 'tiktok'
  },
  {
    id: 7,
    name: 'Вконтакте',
    icon: 'vk'
  },
  {
    id: 8,
    name: 'Скрипт / другое',
    icon: 'website'
  },
  {
    id: 9,
    name: 'Youtube',
    icon: 'youtube'
  }
]

export default categories