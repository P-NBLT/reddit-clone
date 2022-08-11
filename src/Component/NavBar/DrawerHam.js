import React from "react";
import {
  useDisclosure,
  Button,
  DrawerHeader,
  Input,
  DrawerFooter,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  Drawer,
} from "@chakra-ui/react";
import { Divider } from "@chakra-ui/react";
import { actionsCategory } from "../categoriesSlice";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

export default function DrawerHam() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const dispatch = useDispatch();

  const handleClick = (e) => {
    let word = e.target.innerText.toLowerCase();

    switch (word) {
      case "fun":
        word = "funny";
        break;
      case "world news":
        word = "worldnews";
        break;
      case "cute pics":
        word = "aww";
        break;
      default:
        word = word;
        break;
    }
    dispatch(actionsCategory.updateCategory(word));
  };

  return (
    <div>
      <Button ref={btnRef} colorScheme="gray" onClick={onOpen} variant="ghost">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>
            <p className="font-bold text-2xl">Reddit Catogories</p>
          </DrawerHeader>

          <DrawerBody>
            <p
              className="px-2 font-semibold text-lg py-2"
              onClick={handleClick}
            >
              <Link to="r/home/" className="link">
                Home
              </Link>
            </p>
            <p
              className="px-2 font-semibold text-lg py-2"
              onClick={handleClick}
            >
              <Link to="r/funny/" className="link">
                Funny
              </Link>
            </p>
            <p
              className="px-2 font-semibold text-lg py-2"
              onClick={handleClick}
            >
              <Link to="r/worldnews/" className="link">
                World News
              </Link>
            </p>
            <p
              className="px-2 font-semibold text-lg py-2"
              onClick={handleClick}
            >
              <Link to="r/gaming/" className="link">
                Gaming
              </Link>
            </p>
            <p
              className="px-2 font-semibold  text-lg py-2"
              onClick={handleClick}
            >
              <Link to="r/aww/" className="link">
                Cute Pics
              </Link>
            </p>
            <p
              className="px-2 font-semibold text-lg py-2"
              onClick={handleClick}
            >
              <Link to="r/memes/" className="link">
                Memes
              </Link>
            </p>
            <p
              className="px-2 font-semibold text-lg py-2"
              onClick={handleClick}
            >
              <Link to="r/movies/" className="link">
                Movies
              </Link>
            </p>
            <p
              className="px-2 font-semibold text-lg py-2"
              onClick={handleClick}
            >
              <Link to="r/science/" className="link">
                Science
              </Link>
            </p>
            <p
              className="px-2 font-semibold  text-lg py-2"
              onClick={handleClick}
            >
              <Link to="r/space/" className="link">
                Space
              </Link>
            </p>
            <p
              className="px-2 font-semibold  text-lg py-2"
              onClick={handleClick}
            >
              <Link to="r/technology/" className="link">
                Technology
              </Link>
            </p>
            <p
              className="px-2 font-semibold  text-lg py-2"
              onClick={handleClick}
            >
              <Link to="r/sports/" className="link">
                Sports
              </Link>
            </p>
            <p
              className="px-2 font-semibold text-lg py-2"
              onClick={handleClick}
            >
              <Link to="r/food" className="link">
                Food
              </Link>
            </p>
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
  );
}
