import { Avatar, Flex, Box, Text } from "@chakra-ui/react"


const PostHeader = ({avatar,username}) => {
  return (
    <Flex alignItems={"center"} justifyContent={"space-between"} my={2}>
        <Flex alignItems={"center"} gap={2}>
            <Avatar src={avatar} alt={username} size={"sm"} />
            <Flex fontSize={12} fontWeight={"bold"} gap={2}>
                {username}
                <Box color={"gray.500"}>
                    •1w
                </Box>
            </Flex>
        </Flex>
        <Box cursor={"pointer"}>
            <Text color={'blue.500'}
            fontSize={12}
            fontWeight={'bold'}
            _hover={{color:'white'}}
            transition={'0.2s ease-in-out'}>
                Unfollow
            </Text>
        </Box>
    </Flex>
  )
}

export default PostHeader