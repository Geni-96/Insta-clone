import { Avatar, Flex, GridItem, Image, Text, VStack, useDisclosure, Box, Divider, InputGroup, InputRightElement, Input, Button } from "@chakra-ui/react"
import { Modal, ModalOverlay, ModalContent, ModalBody, ModalCloseButton } from '@chakra-ui/react'
import { FaHeart, FaComment } from 'react-icons/fa'
import {MdDelete} from 'react-icons/md'
import Comment from '../Comment/Comment'
import PostFooter from '../FeedPosts/PostFooter'
import useUserProfileStore from "../../store/userProfileStore"
import useAuthStore from "../../store/authStore"
import useShowToast from "../../hooks/useShowToast"
import { deleteObject, ref } from "firebase/storage"
import { firestore, storage } from "../../firebase/firebase"
import { arrayRemove, deleteDoc, doc, updateDoc } from "firebase/firestore"
import usePostStore from "../../store/postStore"
import { useState } from "react"
import Caption from "../Comment/Caption"

const ProfilePost = ({post}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const userProfile = useUserProfileStore((state) => state.userProfile)
  const authUser = useAuthStore((state)=>state.user);
  const showToast = useShowToast();
  const [isDeleting, setIsDeleting] = useState(false)
  const deletePost = usePostStore((state) => state.deletePost)
  const decrementPostCount = useUserProfileStore((state) => state.deletePost)
  // console.log(post.likes.length)

  const handleDeletePost = async() =>{
    if(!window.confirm("Are you sure you want to delete the post?")) return;
    if(isDeleting) return;

    try {
      const imageRef = ref(storage, `posts/${post.id}`);
      await deleteObject(imageRef)
      const userRef = doc(firestore, "users", authUser.uid);
      await deleteDoc(doc(firestore,"posts", post.id));

      await updateDoc(userRef,{
        posts: arrayRemove(post.id),
      })

      deletePost(post.id);
      decrementPostCount(post.id);
      showToast('Success',"Post deleted successfully",'success')
      
    } catch (error) {
        showToast("Error",error.message,'error')
    }
    finally{
      setIsDeleting(false);
    }
  }

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
            <Text fontWeight={'bold'} fontSize={16} ml={2}>{post.likes.length}</Text>
          </Flex>
          <Flex>
            <FaComment />
            <Text fontWeight={'bold'} fontSize={16} ml={2}>{post.comments.length}</Text>
          </Flex>
        </Flex>
        <Image src={post.imageURL} alt='profile post' w={'100%'} h={'100%'} objectFit={'cover'} ></Image>
      </GridItem>
      <Modal isOpen={isOpen} onClose={onClose} isCentered={true} size={{base:"3xl", md:'5xl'}}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody bg={'black'} pb={5}>
            <Flex gap={4} w = {{base:"90%", sm:"70%", md:"full"}} mx={'auto'} maxH={'90vh'} minH={'50vh'}>
              <Flex flex={1.5} overflow={'hidden'} border={'1px solid'} borderRadius={4} borderColor={'whiteAlpha.300'} justifyContent={'center'} alignItems={'center'}>
                <Image src={post.imageURL} alt="profile post" />
              </Flex>
              <Flex direction={'column'} display={{base:'none', md:'flex'}} flex={1} px={10}>
                <Flex alignItems={'center'} justifyContent={'space-between'}>
                  <Flex gap={4} alignItems={'center'}>
                    <Avatar src={userProfile.profilePicURL} size={'sm'} alt='profilepic'></Avatar>
                    <Text fontWeight={'bold'} fontSize={12}>{userProfile.username}</Text>
                  </Flex>
                  {authUser?.uid == userProfile.uid && (
                    <Button size={'sm'} bg={'transparent'} borderRadius={4} p={1} 
                    _hover={{color:'red.600', bg:'whiteAlpha.300'}}
                    overflow={'hidden'}
                    onClick={handleDeletePost}
                    isLoading={isDeleting}>
                      <MdDelete size={20} cursor={'pointer'}/>
                    </Button>
                  )}
                </Flex>
                <Divider bg={'white'} my={4}/>
                <VStack maxH={'350px'} overflowY={'auto'} alignItems={'start'} h={'full'}>
                  {/* Caption */}
                  {post.caption && <Caption post={post} />}
                  {/* Comments */}
                  {post.comments.map(comment=> (
                    <Comment key={comment.id} comment={comment} />
                  ))}
                </VStack>
                <PostFooter isProfilePage={true} post={post} />
              </Flex>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
    
  )
}

export default ProfilePost