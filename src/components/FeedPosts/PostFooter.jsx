import { Flex, Text, Box, Input, InputGroup, InputRightElement, Button, useDisclosure } from '@chakra-ui/react'
import React, { useRef, useState } from 'react'
import { CommentLogo, NotificationsLogo, UnlikeLogo } from '../../assets/constants'
import usePostComment from '../../hooks/usePostComment';
import useAuthStore from '../../store/authStore';
import useLikePost from '../../hooks/useLikePost';
import { timeAgo } from '../../utils/timeAgo';
import CommentsModal from '../../CommentsModal';

const PostFooter = ({post, isProfilePage, creatorProfile}) => {
    const {isCommenting, handlePostComment} = usePostComment();
    const [comment,setComment] = useState('');
    const authUser = useAuthStore(state => state.user);
    const commentRef = useRef(null)
    const {isLiked, likes, handleLikePost, isUpdating} = useLikePost(post)
    const {isOpen, onOpen, onClose} = useDisclosure()

    const handleSubmitComment = async() => {
        await handlePostComment(post.id,comment)
        setComment('')
    }

  return (
    <Box mb={8} marginTop={'auto'}>
        <Flex alignItems={'center'} mb={2} w={'full'} gap={4}>
            <Box cursor={'pointer'} onClick={handleLikePost}>
                {!isLiked ? <NotificationsLogo /> : <UnlikeLogo />}
            </Box>
            <Box cursor={'pointer'} onClick={() => commentRef.current.focus()}>
                <CommentLogo />
            </Box>
        </Flex>
        <Text fontSize={14} fontWeight={'bold'}>{likes} likes</Text>
        {isProfilePage && (
            <Text fontSize={12} color={'gray'}>
                Posted {timeAgo(post.createdAt)}
            </Text>
        )}
        
        { !isProfilePage && (
        <>
            <Text fontSize={14} fontWeight={'bold'}>{creatorProfile?.username}
                <Text as={'span'} ml={2} fontWeight={'normal'}>{post.caption}</Text>
            </Text>
            {post.comments.length>0 &&
                (<Text color={'gray'} fontSize={'sm'} onClick={onOpen}>View all {post.comments.length} comments</Text>)
            }
            {/* Comments modal is visible only in home page */}
            {isOpen ? <CommentsModal isOpen={isOpen} onClose={onClose} post={post} /> : null }
        </>)}
        {authUser && (
            <Flex alignItems={'center'} gap={2} justifyContent={'space-between'}>
            <InputGroup>
                <Input variant={'flushed'} fontSize={14}
                onChange={(e) => setComment(e.target.value)}
                placeholder='Add a comment...'
                value={comment}
                ref={commentRef}/>
                <InputRightElement>
                <Button
                color={'blue.500'}
                _hover={{color:"white"}}
                cursor={'pointer'}
                fontSize={14}
                fontWeight={600}
                bg={'transparent'}
                onClick={handleSubmitComment}
                isLoading={isCommenting}>
                    Post
                </Button>
                </InputRightElement>
            </InputGroup>
            </Flex>
        )}
    </Box>
  )
}

export default PostFooter