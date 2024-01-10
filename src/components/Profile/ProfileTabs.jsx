import { Flex, Text } from '@chakra-ui/react'
import { BsGrid3X3 } from 'react-icons/bs'
import { BsBookmark } from "react-icons/bs";
import { BsHeart } from "react-icons/bs";

const ProfileTabs = () => {
  return (
    <Flex gap={{base:4, sm:10}} w={'full'} justifyContent={'center'} borderTop={'1px solid gray'}>
      <Flex gap={2} alignItems={'center'} borderTop={'1px solid white'} py={4} px={4} cursor={'pointer'}>
        <BsGrid3X3 />
        <Text fontWeight={'bold'} display={{base:'none', sm:'block'}} fontSize={14}>POSTS</Text>
      </Flex>
      <Flex gap={2} alignItems={'center'} cursor={'pointer'} py={4} px={4}>
        <BsBookmark />
        <Text fontWeight={'bold'} fontSize={14} cursor={'pointer'} display={{base:'none', sm:'block'}}>SAVED</Text>
      </Flex>
      <Flex gap={2} alignItems={'center'} cursor={'pointer'} py={4} px={4}>
        <BsHeart />
        <Text fontWeight={'bold'} fontSize={14} display={{base:'none', sm:'block'}}>LIKES</Text>
      </Flex>
    </Flex>
  )
}

export default ProfileTabs