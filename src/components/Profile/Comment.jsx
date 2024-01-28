import { Flex, Avatar, VStack, Text } from '@chakra-ui/react'

const Comment = ({profilePic, comment, username, createdAt}) => {
  return (
    <Flex gap={4} alignItems={'center'}>
        <Avatar src={profilePic} size={'sm'} alt='profilepic'></Avatar>
        <VStack alignItems={'start'} py={2}>
            <Flex>
                <Text fontWeight={'bold'} fontSize={12}>{username}</Text>
                <Text fontSize={12} ml={2}>{comment}</Text>
            </Flex>
            <Text color={'whiteAlpha.700'} fontSize={12}>{createdAt}</Text>
        </VStack>
    </Flex>
  )
}

export default Comment