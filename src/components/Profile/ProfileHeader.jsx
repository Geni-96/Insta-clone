import { Avatar, Button, Flex, VStack, Text, AvatarGroup } from '@chakra-ui/react'
import React from 'react'

const ProfileHeader = ({posts, followers, following}) => {
  return (
    <Flex gap={{ base:4, sm:10 }} py={5} direction={{base:'column', sm:'row'}}>
        <AvatarGroup size={{ base:'xl', md:'2xl' }} justifySelf={'center'} alignSelf={'flex-start'} mx={'auto'}>
            <Avatar src='./profilepic.png' name='profile pic' alt='profile pic' />
        </AvatarGroup>
        <VStack gap={2} alignItems={'start'}>
            <Flex gap={4} direction={{base:'column', sm:'row'}} justifyContent={{base:'center', sm:'flex-start'}} alignItems={'center'} w={'full'}>
                <Text fontSize={12} fontWeight={'bold'}>asaprogrammer_</Text>
                <Button size='xs' bg={'white'} color={'black'}>Edit Profile</Button>
            </Flex>
            <Flex gap={8} fontSize={12}>
                <Text><Text as={'span'} fontWeight={'bold'}>49</Text> Posts</Text>
                <Text><Text as={'span'} fontWeight={'bold'}>456</Text> Followers</Text>
                <Text><Text as={'span'} fontWeight={'bold'}>789</Text> Following</Text>
            </Flex>
            <Flex fontWeight={'bold'} fontSize={13}>
                As a Programmer
            </Flex>
            <Flex fontSize={14}>
                To bring about change, you must not be afraid to take the first step. We will fail when we fail to try.
            </Flex>
        </VStack>
    </Flex>
  )
}

export default ProfileHeader