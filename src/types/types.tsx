export interface IAddress {
  street: string
  suite: string
  city: string
  zipcode: string
  geo: {
    lat: string
    lng: string
  }
}

export interface ICompany {
  name: string
  catchPhrase: string
  bs: string
}

export interface IUser {
  id: string
  name: string
  username: string
  email: string
  address: IAddress
  phone: string
  website: string
  company: ICompany
}

export interface IUserWithComment extends IUser {
  comment: string
}

export interface UsersProps {
  users: IUser[]
  getUserData: (user: IUser) => void
  sortType: string
  loading?: boolean
}

export interface LabelProps {
  label: string
  labelValue: string
}

export type SortType = "Address" | "Company" | "None"
