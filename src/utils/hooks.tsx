import { useState } from "react"
import { IUser } from "../types/types"
import React from "react"

interface UsersProps {
  setIsLoading: (load: boolean) => void
  setData: (users: IUser[]) => void
}

export function useGetUsers(): [IUser[], boolean] {
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [data, setData] = useState<IUser[]>([])

  const serverResponse = ({ setIsLoading, setData }: UsersProps) => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setTimeout(() => {
          setData(data)
          setIsLoading(false)
        }, 500)
      })
      .catch((err) => console.log(err.status))
  }

  serverResponse({ setIsLoading, setData })

  return [data, isLoading]
}
