import { Avatar, Button, Flex, VStack, Text, AvatarGroup } from '@chakra-ui/react'
import React from 'react'
import useUserProfileStore from '../../store/userProfileStore'
import useAuthStore from '../../store/authStore';

const ProfileHeader = () => {
  const {userProfile} = useUserProfileStore();
  const authUser = useAuthStore(state => state.user);
  const visitingOwnProfileAndAuth = authUser && authUser.username === userProfile.username;
  const visitingAnotherProfileAndAuth = authUser && authUser.username !== userProfile.username;


  return (
    <Flex gap={{ base:4, sm:10 }} py={5} direction={{base:'column', sm:'row'}}>
        <AvatarGroup size={{ base:'xl', md:'2xl' }} justifySelf={'center'} alignSelf={'flex-start'} mx={'auto'}>
            <Avatar src={userProfile.profilePicURL} name='profile pic' alt='profile pic' />
        </AvatarGroup>
        <VStack gap={2} alignItems={'start'}>
            <Flex gap={4} direction={{base:'column', sm:'row'}} justifyContent={{base:'center', sm:'flex-start'}} alignItems={'center'} w={'full'}>
                <Text fontSize={12} fontWeight={'bold'}>{userProfile.username}</Text>
                {visitingOwnProfileAndAuth && (<Button size='xs' bg={'white'} color={'black'} _hover={{bg: 'whiteAlpha.800'}}>Edit Profile</Button>)}
                {visitingAnotherProfileAndAuth && (<Button size='xs' bg={'blue.500'} color={'white'} _hover={{bg: 'blue.600'}}>Follow</Button>)}
                
            </Flex>
            <Flex gap={8} fontSize={12}>
                <Text><Text as={'span'} fontWeight={'bold'}>{userProfile.posts.length}</Text> Posts</Text>
                <Text><Text as={'span'} fontWeight={'bold'}>{userProfile.followers.length}</Text> Followers</Text>
                <Text><Text as={'span'} fontWeight={'bold'}>{userProfile.following.length}</Text> Following</Text>
            </Flex>
            <Flex fontWeight={'bold'} fontSize={13}>
            {userProfile.fullname}
            </Flex>
            <Flex fontSize={14}>
                {userProfile.bio}
            </Flex>
        </VStack>
    </Flex>
  )
}

export default ProfileHeader