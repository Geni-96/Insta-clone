import { Avatar, Flex, GridItem, Image, Text, VStack, useDisclosure, Box, Divider, InputGroup, InputRightElement, Input, Button } from "@chakra-ui/react"
import { Modal, ModalOverlay, ModalContent, ModalBody, ModalCloseButton } from '@chakra-ui/react'
import { FaHeart, FaComment, FaRegComment } from 'react-icons/fa'
import {MdDelete} from 'react-icons/md'
import Comment from './Comment'
import PostFooter from '../FeedPosts/PostFooter'

const ProfilePost = ({post}) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <GridItem cursor={"pointer"}
      position={'relative'}
      border={'1px solid'}
      borderColor={'whiteAlpha.300'}
      overflow={'hidden'}
      borderRadius={4}
      aspectRatio={1/1}
      onClick={onOpen}
      >
        <Flex
        opacity={0}
        _hover={{opacity:1}}
        position={'absolute'}
        top={0}
        bottom={0}
        right={0}
        left={0}
        transition={'all 0.3s ease'}
        bg={'blackAlpha.700'}
        justifyContent={'center'}
        alignItems={'center'}
        gap={4}
        zIndex={1}
        >
          <Flex>
            <FaHeart />
            <Text fontWeight={'bold'} fontSize={16} ml={2}>46</Text>
          </Flex>
          <Flex>
            <FaComment />
            <Text fontWeight={'bold'} fontSize={16} ml={2}>8</Text>
          </Flex>
        </Flex>
        <Image src={post.imageURL} alt='profile post' w={'100%'} h={'100%'} objectFit={'cover'} ></Image>
      </GridItem>
      <Modal isOpen={isOpen} onClose={onClose} isCentered={true} size={{base:"3xl", md:'5xl'}}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody bg={'black'} pb={5}>
            <Flex gap={4} w = {{base:"90%", sm:"70%", md:"full"}} mx={'auto'}>
              <Box flex={1.5} overflow={'hidden'} border={'1px solid'} borderRadius={4} borderColor={'whiteAlpha.300'}><Image src={post.imageURL} alt="profile post" /></Box>
              <Flex direction={'column'} display={{base:'none', md:'flex'}} flex={1} px={10}>
                <Flex alignItems={'center'} justifyContent={'space-between'}>
                  <Flex gap={4} alignItems={'center'}>
                    <Avatar src='profilepic.png' size={'sm'} alt='profilepic'></Avatar>
                    <Text fontWeight={'bold'} fontSize={12}>asaprogrammer_</Text>
                  </Flex>
                  <Box borderRadius={4} p={1} _hover={{color:'red.600', bg:'whiteAlpha.300'}} overflow={'hidden'}><MdDelete size={20} cursor={'pointer'}/></Box>
                </Flex>
                <Divider bg={'white'} my={4}/>
                <VStack maxH={'350px'} overflowY={'auto'} alignItems={'start'} h={'full'}>
                  <Comment
                    profilePic = 'profilepic.png'
                    comment="Dummy images from newssplash"
                    username="asaprogrammer_"
                    createdAt='1d ago'
                  />
                  <Comment 
                    profilePic = 'https://bit.ly/dan-abramov'
                    comment="Nice pic"
                    username="callmeDan"
                    createdAt='36h ago'
                  />
                  <Comment
                    profilePic = 'https://bit.ly/kent-c-dodds'
                    comment="Looking killer"
                    username="kingKent"
                    createdAt='4d ago'
                  />
                </VStack>
                <PostFooter isProfilePage={true}/>
              </Flex>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
    
  )
}

export default ProfilePost