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

export default function LoginPage() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <div >
      <button onClick={onOpen} className=' font-semibold border-2 border-blue-500 rounded-2xl w-24 text-blue-500 p-[2px] mx-1 hover:bg-blue-100'>Log In</button>

      <Modal isOpen={isOpen} onClose={onClose} size='3xl'>
        <ModalOverlay />
        <ModalContent>
          {/* <ModalHeader>Modal Title</ModalHeader> */}
          <ModalCloseButton />
          <ModalBody>
            <div>
              <div className='flex h-[600px]'>
                <div className='img'>
                  <img src='https://www.redditstatic.com/accountmanager/bbb584033aa89e39bad69436c504c9bd.png' className='h-full w-[140px] bg-cover -ml-6'/>
                </div>
                <div className='content'>
                  <div className='flex flex-col'>
                    <p className='font-semibold'>Log in</p>
                    <p className='text-sm'>By continuing, you agree to our User Agreement and Privacy Policy.</p>
                    <button>Continue with Google</button>
                    <button>Continue with Apple</button>
                    <p>OR</p>
                    <input />
                    <input />
                    <button>Log In</button>
                    <p>Forgot your username or password ?</p>
                    <p>New to Reddit? SIGN UP</p>
                  </div>
                </div>
              </div>
            </div>
          </ModalBody>

          {/* <ModalFooter>
              <Button colorScheme='blue' mr={3} onClick={onClose}>
                Close
              </Button>
              <Button variant='ghost'>Secondary Action</Button>
            </ModalFooter> */}
        </ModalContent>
      </Modal>
    </div>
  )
}
