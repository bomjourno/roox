import React from "react"
import "./User.scss"
import { NavLink } from "react-router-dom"
import { IUser, UsersProps } from "../../types/types"
import { LabelOfCard } from "../LabelOfCard/LabelOfCard"

export const User = ({ users, getUserData, sortType }: UsersProps) => {
  function handlerClick(user: IUser) {
    getUserData(user)
  }

  const sortedByAddress = () => {
    users.sort((a: IUser, b: IUser) => a.address.city.localeCompare(b.address.city))
  }

  const sortedByCompany = () => {
    users.sort((a: IUser, b: IUser) => a.company.name.localeCompare(b.company.name))
  }

  switch (sortType) {
    case "Address":
      sortedByAddress()
      break
    case "Company":
      sortedByCompany()
      break
    default:
      break
  }

  return (
    <>
      {users.map((user) => {
        return (
          <div className="user" key={user.id}>
            <div className="user__info">
              <LabelOfCard label="ФИО" labelValue={user.name} />
              <LabelOfCard label="Город" labelValue={user.address.city} />
              <LabelOfCard label="Компания" labelValue={user.company.name} />
            </div>
            <NavLink onClick={() => handlerClick(user)} className="user__about" to="/userprofile">
              Подробнее
            </NavLink>
          </div>
        )
      })}
    </>
  )
}
