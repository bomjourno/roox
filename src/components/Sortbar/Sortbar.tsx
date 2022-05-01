import React from "react"
import "./Sortbar.scss"
import { SortType } from "../../types/types"

interface SortBarProps {
  sortType: SortType
  setSortType: (sortType: SortType) => void
}

export const Sortbar = ({ sortType, setSortType }: SortBarProps) => {
  return (
    <div className="sort">
      <h2 className="sort__title">Сортировка</h2>
      <button onClick={() => setSortType("Address")} className="sort__button">
        По городу
      </button>
      <button onClick={() => setSortType("Company")} className="sort__button">
        По компании
      </button>
    </div>
  )
}
