import React from 'react'
import { useDisclosure, Button, DrawerHeader, Input, DrawerFooter, DrawerBody, DrawerCloseButton, DrawerContent, DrawerOverlay, Drawer } from '@chakra-ui/react'
import { Divider } from '@chakra-ui/react'

export default function DrawerHam() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()

    return (
        <div>
            <Button ref={btnRef} colorScheme='gray' onClick={onOpen} variant='ghost'>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </Button>
            <Drawer
                isOpen={isOpen}
                placement='left'
                onClose={onClose}
                finalFocusRef={btnRef}
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader><p className='font-bold text-2xl'>Reddit Catogories</p></DrawerHeader>


                    <DrawerBody >
                        <p className='px-2 font-semibold text-lg py-2 '>Home</p>                 
                        <p className='px-2 font-semibold text-lg py-2'>Fun</p>
                        <p className='px-2 font-semibold text-lg py-2'>World News</p>
                        <p className='px-2 font-semibold text-lg py-2'>Gaming</p>
                        <p className='px-2 font-semibold  text-lg py-2'>Cute Pics</p>
                        <p className='px-2 font-semibold text-lg py-2'>Memes</p>
                        <p className='px-2 font-semibold text-lg py-2'>Movies</p>
                        <p className='px-2 font-semibold text-lg py-2'>Science</p>
                        <p className='px-2 font-semibold  text-lg py-2'>Space</p>
                        <p className='px-2 font-semibold  text-lg py-2'>Technology</p>
                        <p className='px-2 font-semibold  text-lg py-2'>Sports</p>
                        <p className='px-2 font-semibold text-lg py-2'>Food</p>
                    </DrawerBody>

                    {/* <DrawerFooter>
              <Button variant='outline' mr={3} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme='blue'>Save</Button>
            </DrawerFooter> */}
                </DrawerContent>
            </Drawer>

        </div>
    )
}
