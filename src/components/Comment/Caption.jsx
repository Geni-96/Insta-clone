import React from 'react'
import { Flex, Avatar, VStack, Text } from '@chakra-ui/react'
import {Link} from 'react-router-dom'
import { timeAgo } from '../../utils/timeAgo'
import useUserProfileStore from '../../store/userProfileStore'

const Caption = ({post}) => {
    const userProfile = useUserProfileStore(state => state.userProfile)
  return (
    <Flex>
        <Link to={`${userProfile.username}`}>
          <Avatar src={userProfile.profilePicURL} size={'sm'} alt='profilepic' marginRight={2}></Avatar>
        </Link>
        <VStack alignItems={'start'} gap={1}>
            <Flex alignItems={'center'} gap={1}>
              <Link to={`${userProfile.username}`}>
                <Text fontWeight={'bold'} fontSize={12}>{userProfile.username}</Text>
              </Link>
              <Text fontSize={12} ml={2}>{post.caption}</Text>
            </Flex>
            <Text color={'whiteAlpha.700'} fontSize={12}>{timeAgo(post.createdAt)}</Text>
        </VStack>
    </Flex>
  )
}

export default Caption