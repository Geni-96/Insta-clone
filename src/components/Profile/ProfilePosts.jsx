import { Grid, Skeleton } from '@chakra-ui/react'

import { useState,useEffect } from 'react';
import ProfilePost from './ProfilePost';

const ProfilePosts = () => {
  const [isLoaded, setIsLoaded] = useState(false)
  
  useEffect(() => {
    setTimeout(()=> {
    setIsLoaded(true)
  },2000);
  // return() => clearTimeout(timeout);
},[]);

  return (
    <>
      {isLoaded ? (
      <Grid templateColumns={{base:'repeat(1, 1fr)', md:'repeat(3, 1fr)'}} gap={1}>
        <ProfilePost img='img1.png' />
        <ProfilePost img='img2.png' />
        <ProfilePost img='img3.png' />
        <ProfilePost img='img4.png' />
      </Grid>) : 
      (
        <Grid templateColumns={{base:'repeat(1, 1fr)', md:'repeat(3, 1fr)'}} gap={1}>
          {[0,1,2,3,4,5].map((_,idx) => (<Skeleton key={idx} aspectRatio={1/1} />))}
        </Grid>
      )}
    </>
    
  )
}

export default ProfilePosts