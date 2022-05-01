import React from "react"
import "./LabelOfCard.scss"
import { LabelProps } from "../../types/types"

export const LabelOfCard = ({ label, labelValue }: LabelProps) => {
  return (
    <p className="label-key">
      {label}: <span className="label-key__text">{labelValue}</span>
    </p>
  )
}
