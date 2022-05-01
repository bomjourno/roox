import React, { useState } from "react"
import { Formik } from "formik"
import "./UserProfile.scss"
import classNames from "classnames"
import { IUser, IUserWithComment } from "../../types/types"
import { validationSchema } from "../../utils/constants"

interface UserProps {
  user: IUser
}

export const UserProfile = ({ user }: UserProps) => {
  const [isEnabled, setIsEnabled] = useState<boolean>(true)
  const initialValues: IUserWithComment = {
    id: user.id,
    name: user.name,
    username: user.username,
    email: user.email,
    address: {
      street: user.address.street,
      suite: user.address.suite,
      city: user.address.city,
      zipcode: user.address.zipcode,
      geo: {
        lat: user.address.geo.lat,
        lng: user.address.geo.lng,
      },
    },
    phone: user.phone,
    website: user.website,
    company: {
      name: user.name,
      catchPhrase: user.company.catchPhrase,
      bs: user.company.bs,
    },
    comment: "",
  }

  return (
    <div className="user-profile">
      <div className="user-profile__header">
        <h1 className="user-profile__title">Профиль пользователя</h1>
        <button onClick={() => setIsEnabled((prevState) => !prevState)} className="user-profile__edit-btn">
          Редактировать
        </button>
      </div>

      <div className="user-profile__container">
        <Formik
          initialValues={initialValues}
          onSubmit={(values: IUserWithComment) => console.log(JSON.stringify(values))}
          validateOnBlur
          validationSchema={validationSchema}
        >
          {({ values, errors, handleChange, handleBlur, isValid, handleSubmit }) => (
            <form onSubmit={handleSubmit} className="user-profile__form">
              <fieldset className="user-profile__items">
                <label className="label" htmlFor="name">
                  Name
                </label>
                <input
                  readOnly={isEnabled}
                  className={classNames("user-profile__input", { ["user-profile__input_active"]: !isEnabled, ["user-profile__input_error"]: errors.name })}
                  name="name"
                  type="text"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.name}
                />

                <label className="label" htmlFor="username">
                  User name
                </label>
                <input
                  readOnly={isEnabled}
                  className={classNames("user-profile__input", { ["user-profile__input_active"]: !isEnabled, ["user-profile__input_error"]: errors.username })}
                  name="username"
                  type="text"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.username}
                />

                <label className="label" htmlFor="email">
                  E-mail
                </label>
                <input
                  readOnly={isEnabled}
                  className={classNames("user-profile__input", { ["user-profile__input_active"]: !isEnabled, ["user-profile__input_error"]: errors.email })}
                  name="email"
                  type="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                />

                <label className="label" htmlFor="street">
                  Street
                </label>
                <input
                  readOnly={isEnabled}
                  className={classNames("user-profile__input", {
                    ["user-profile__input_active"]: !isEnabled,
                    ["user-profile__input_error"]: errors.address?.street,
                  })}
                  name="address.street"
                  type="text"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.address.street}
                />

                <label className="label" htmlFor="city">
                  City
                </label>
                <input
                  readOnly={isEnabled}
                  className={classNames("user-profile__input", {
                    ["user-profile__input_active"]: !isEnabled,
                    ["user-profile__input_error"]: errors.address?.city,
                  })}
                  name="address.city"
                  type="text"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.address.city}
                />

                <label className="label" htmlFor="zipcode">
                  Zip code
                </label>
                <input
                  readOnly={isEnabled}
                  className={classNames("user-profile__input", {
                    ["user-profile__input_active"]: !isEnabled,
                    ["user-profile__input_error"]: errors.address?.zipcode,
                  })}
                  name="address.zipcode"
                  type="text"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.address.zipcode}
                />

                <label className="label" htmlFor="phone">
                  Phone
                </label>
                <input
                  readOnly={isEnabled}
                  className={classNames("user-profile__input", { ["user-profile__input_active"]: !isEnabled, ["user-profile__input_error"]: errors.phone })}
                  name="phone"
                  type="text"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.phone}
                />

                <label className="label" htmlFor="website">
                  Website
                </label>
                <input
                  readOnly={isEnabled}
                  className={classNames("user-profile__input", { ["user-profile__input_active"]: !isEnabled, ["user-profile__input_error"]: errors.website })}
                  name="website"
                  type="text"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.website}
                />

                <label className="label" htmlFor="comment">
                  Comment
                </label>
                <textarea
                  value={values.comment}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  readOnly={isEnabled}
                  className={classNames("user-profile__textarea", {
                    ["user-profile__input_active"]: !isEnabled,
                    ["user-profile__input_error"]: errors.comment,
                  })}
                  name="comment"
                />
              </fieldset>

              <button disabled={!isValid} type="submit" className={classNames("user-profile__send-btn", { ["user-profile__send-btn_active"]: !isEnabled })}>
                Отправить
              </button>
            </form>
          )}
        </Formik>
      </div>
    </div>
  )
}
