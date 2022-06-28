import React from 'react'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure
} from '@chakra-ui/react'

export default function SignUpPage() {
  const { isOpen, onOpen, onClose } = useDisclosure()
    return (
      <>
        <button onClick={onOpen} className='bg-blue-500 text-white w-24 rounded-2xl border-2 border-blue-500 p-[2px] font-semibold hover:bg-blue-400'>Sign Up</button>
  
        <Modal isOpen={isOpen} onClose={onClose}  options={{}}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Modal Title</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <p>Bla bla</p>
            </ModalBody>
  
            <ModalFooter>
              <Button colorScheme='blue' mr={3} onClick={onClose}>
                Close
              </Button>
              <Button variant='ghost'>Secondary Action</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
}
