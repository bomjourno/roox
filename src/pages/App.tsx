import { BrowserRouter, Routes, Route } from "react-router-dom"
import React, { useState } from "react"
import "./App.scss"
import { Sortbar } from "../components/Sortbar/Sortbar"
import { UsersList } from "../components/UsersList/UsersList"
import { IUser, SortType } from "../types/types"
import { UserProfile } from "../components/UserProfile/UserProfile"
import { useGetUsers } from "../utils/hooks"

const App = () => {
  const [user, setUser] = useState<IUser>({
    id: "string",
    name: "string",
    username: "string",
    email: "string",
    address: {
      street: "string",
      suite: "string",
      city: "string",
      zipcode: "string",
      geo: {
        lat: "string",
        lng: "string",
      },
    },
    phone: "string",
    website: "string",
    company: {
      name: "string",
      catchPhrase: "string",
      bs: "string",
    },
  })
  const [sortType, setSortType] = useState<SortType>("None")
  const [data, isLoading] = useGetUsers()

  function getUserData(user: IUser) {
    setUser(user)
  }

  return (
    <BrowserRouter>
      <div className="content">
        <Sortbar sortType={sortType} setSortType={setSortType} />
        <Routes>
          <Route path="/" element={<UsersList loading={isLoading} sortType={sortType} getUserData={getUserData} users={data} />} />
          <Route path="/userprofile" element={<UserProfile user={user} />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
