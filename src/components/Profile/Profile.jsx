import React from 'react'
import ProfileInfo from './ProfileInfo/ProfileInfo'
import classes from './Profile.module.css'
import MyPostsContainer from './MyPosts/MyPostsContainer'
import { Redirect } from 'react-router-dom'

const Profile = (props) => {

  if (!props.isAuth) return <Redirect to={"/login"} />

  return (
    <div>
      <ProfileInfo isOwner={props.isOwner}
        profile={props.profile}
        status={props.status}
        updateStatus={props.updateStatus}
        savePhoto={props.savePhoto}
        saveProfile={props.saveProfile}
      />
      <MyPostsContainer />
    </div>
  )
}

export default Profile