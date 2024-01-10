import { Container, Flex } from '@chakra-ui/react'
import React from 'react'
import ProfileHeader from './ProfileHeader'
import ProfileTabs from './ProfileTabs'
import ProfilePosts from './ProfilePosts'

const ProfilePage = () => {
  return (
    <Container maxW='container.lg' py={5}>
        <Flex 
        px={4}
        py={10}
        pl={{base:4, md:10}}
        w={'full'}>
            <ProfileHeader />
        </Flex>
        <Flex
        px={4}
        py={4}
        pl={{base:2, sm:4}}
        direction={'column'}
        >
            <ProfileTabs />
            <ProfilePosts />
        </Flex>
    </Container>
  )
}

export default ProfilePage