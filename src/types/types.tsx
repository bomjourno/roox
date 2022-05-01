export interface IUser {
  id: number | string,
  name: string,
  username: string,
  email: string,
  address: {
    street: string,
    suite: string,
    city: string,
    zipcode: string,
    geo: {
      lat: string
      lng: string
    }
  },
  phone: string,
  website: string,
  company: {
    name: string
    catchPhrase: string
    bs: string
  }
}

export interface IUserWithComment extends IUser {
  comment: string
}

export interface UsersProps {
  users: IUser[],
  getUserData: (user: IUser) => void,
  sortType: string,
  loading?: boolean
}

export interface LabelProps {
  label: string
  labelValue: string
}

export type SortType = "Address" | "Company" | "None"


