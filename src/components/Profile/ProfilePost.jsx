import { Flex, Image, Text } from "@chakra-ui/react"
import { Modal, ModalOverlay, ModalContent, ModalBody, ModalCloseButton } from '@chakra-ui/react'

const ProfilePost = ({img}) => {
  function openPost(){
    return (
      <Modal>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody>
            <Flex>
              <Image src={img} h={600} w={400}></Image>
              <Text>Comments</Text>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    )
  }
  return (
    <Image src={img} 
      boxSize={{base:'300px', md:'250px',lg:'350px'}} 
      objectFit={'cover'} 
      cursor={'pointer'}
      onClick={openPost}
    ></Image>
  )
}

export default ProfilePost