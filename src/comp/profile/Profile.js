import axios from 'axios'
import React, { useEffect } from 'react'
import { BodyProfile } from './BodyProfile'
import { HeaderProfile } from './HeaderProfile'

export const Profile = () => {
  return (
    <div>  
        <HeaderProfile/>
        <BodyProfile />
    </div>
  )
}
