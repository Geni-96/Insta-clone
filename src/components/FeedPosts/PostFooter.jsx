import { Flex, Text, Box, Input, InputGroup, InputRightElement } from '@chakra-ui/react'
import React, { useState } from 'react'
import { CommentLogo, NotificationsLogo, UnlikeLogo } from '../../assets/constants'

const PostFooter = ({username}) => {
    const [liked,setLiked] = useState(false);
    const [likes,setLikes] = useState(1000);

    const handleChange = () => {
        if(liked) {
            setLiked(false);
            setLikes(likes-1);
        }
        else{
        setLiked(true);
        setLikes(likes+1)
        }
    }

  return (
    <Box mb={8}>
        <Flex alignItems={'center'} mb={2} w={'full'} gap={4}>
            <Box cursor={'pointer'} onClick={handleChange}>
                {!liked ? <NotificationsLogo /> : <UnlikeLogo />}
            </Box>
            <Box cursor={'pointer'}>
                <CommentLogo />
            </Box>
        </Flex>
        <Text fontSize={14} fontWeight={'bold'}>{likes} likes</Text>
        <Text fontSize={14} fontWeight={'bold'}>
            {username}
            <Text as={'span'} ml={2} fontWeight={'normal'}>Feeling good</Text>
        </Text>
        <Text color={'gray'} fontSize={'sm'}>View all 1000 comments</Text>
        <Flex alignItems={'center'} gap={2} justifyContent={'space-between'}>
            <InputGroup>
                <Input variant={'flushed'} placeholder='Add a comment...'/>
                <InputRightElement
                color={'blue.500'}
                _hover={{color:"white"}}
                cursor={'pointer'}>
                Post
                </InputRightElement>
            </InputGroup>
        </Flex>
    </Box>
  )
}

export default PostFooter