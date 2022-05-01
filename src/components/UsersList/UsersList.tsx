import React from "react"
import "./UsersList.scss"
import { UsersProps } from "../../types/types"
import { Loader } from "../Loader/Loader"
import { User } from "../User/User"

export const UsersList = ({ sortType, getUserData, users, loading }: UsersProps) => {
  if (loading) {
    return <Loader />
  }

  return (
    <div className="user-list">
      <h1 className="user-list__title">Список пользователей</h1>
      <div className="user-list__container">
        <User users={users} getUserData={getUserData} sortType={sortType} />
        <p className="user-list__users-count">Найдено {users.length} пользователей</p>
      </div>
    </div>
  )
}
