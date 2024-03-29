import React from "react";
import {
  Input,
  InputGroup,
  InputLeftElement,
  Form,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";
import { PhoneIcon } from "@chakra-ui/icons";
import DrawerHam from "./DrawerHam";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ModalLogin from "../ModalLogin";
import logo from "../../Media/logo.png";

export default function NavBar() {
  const [text, setText] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const [linkf, setLinkf] = useState("");
  const [load, setload] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  let navigate = useNavigate();

  const keyDownHandler = (e) => {
    e.preventDefault();
    setSearchParams(`q=${text}`);

    setload(true);
    navigate(`/search/?q=${text}`);
  };
  const handleSearch = (e) => {
    setText(e.target.value);
  };

  if (!isOpen) {
    return (
      <div>
        <div className="flex items-center space-x-2 py-1 justify-between">
          <div className="flex items-center space-x-2 sm:space-x-1">
            <div className="hamIcon hidden lg:block">
              <DrawerHam />
            </div>
            <Link to="/">
              <div className="reddit-logo  ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  className="_1O4jTk-dZ-VIxsCuYB6OR8 w-9 sm:w-7"
                >
                  <g>
                    <circle fill="#FF4500" cx="10" cy="10" r="10"></circle>
                    <path
                      fill="#FFF"
                      d="M16.67,10A1.46,1.46,0,0,0,14.2,9a7.12,7.12,0,0,0-3.85-1.23L11,4.65,13.14,5.1a1,1,0,1,0,.13-0.61L10.82,4a0.31,0.31,0,0,0-.37.24L9.71,7.71a7.14,7.14,0,0,0-3.9,1.23A1.46,1.46,0,1,0,4.2,11.33a2.87,2.87,0,0,0,0,.44c0,2.24,2.61,4.06,5.83,4.06s5.83-1.82,5.83-4.06a2.87,2.87,0,0,0,0-.44A1.46,1.46,0,0,0,16.67,10Zm-10,1a1,1,0,1,1,1,1A1,1,0,0,1,6.67,11Zm5.81,2.75a3.84,3.84,0,0,1-2.47.77,3.84,3.84,0,0,1-2.47-.77,0.27,0.27,0,0,1,.38-0.38A3.27,3.27,0,0,0,10,14a3.28,3.28,0,0,0,2.09-.61A0.27,0.27,0,1,1,12.48,13.79Zm-0.18-1.71a1,1,0,1,1,1-1A1,1,0,0,1,12.29,12.08Z"
                    ></path>
                  </g>
                </svg>
              </div>
            </Link>
            <Link to="/">
              <div className="reddit-name lg:hidden">
                <img src={logo} className="w-20" />
              </div>
            </Link>
          </div>
          <div className="flex items-center justify-between w-[1500px]">
            <div className=" m-auto ">
              <form
                onSubmit={keyDownHandler}
                className="pt-1 w-[900px] 2xl:w-[800px] xl:w-[600px] lg:w-[400px] md:w-[280px] sm:w-[200px] xsm:w-[180px]"
              >
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    children={
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-8 "
                        fill="none"
                        viewBox="0 0 28 28"
                        stroke="currentColor"
                        strokeWidth={1}
                        color="gray"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                      </svg>
                    }
                  />
                  <Input
                    type="text"
                    placeholder="Search Reddit"
                    width={"full"}
                    variant="filled"
                    value={text}
                    onChange={handleSearch}
                  />
                </InputGroup>
              </form>
            </div>
            <div className="flex items-center">
              <div className="mx-5">
                <button
                  onClick={() => {
                    setIsOpen(true);
                  }}
                  className=" font-semibold border-2 border-blue-500 rounded-2xl w-24 text-blue-500 p-[2px] mx-1 hover:bg-blue-100 xl:w-16 xl:text-sm sm:hidden"
                >
                  Log In
                </button>
                <button
                  onClick={() => {
                    setIsOpen(true);
                  }}
                  className="bg-blue-500 text-white w-24 rounded-2xl border-2 border-blue-500 p-[2px] font-semibold hover:bg-blue-400 xl:w-16 xl:text-sm sm:hidden"
                >
                  Sign Up
                </button>
              </div>
              <div className=" flex mr-2 xsm:mr-2">
                <Menu>
                  <MenuButton>
                    <div className="flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="#606060"
                        strokeWidth={1}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 30 24"
                        stroke="#606060"
                        strokeWidth={1}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>
                  </MenuButton>
                  <MenuList>
                    <MenuItem
                      onClick={() => {
                        setIsOpen(true);
                      }}
                    >
                      {" "}
                      Log In
                    </MenuItem>
                    <MenuItem
                      onClick={() => {
                        setIsOpen(true);
                      }}
                    >
                      Sign Up
                    </MenuItem>
                  </MenuList>
                </Menu>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <>
        <div>
          <div className="flex items-center space-x-2 py-1 justify-between">
            <div className="flex items-center space-x-2 sm:space-x-1">
              <div className="hamIcon ">
                <DrawerHam />
              </div>
              <Link to="/">
                <div className="reddit-logo ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    className="_1O4jTk-dZ-VIxsCuYB6OR8 w-9 sm:w-7"
                  >
                    <g>
                      <circle fill="#FF4500" cx="10" cy="10" r="10"></circle>
                      <path
                        fill="#FFF"
                        d="M16.67,10A1.46,1.46,0,0,0,14.2,9a7.12,7.12,0,0,0-3.85-1.23L11,4.65,13.14,5.1a1,1,0,1,0,.13-0.61L10.82,4a0.31,0.31,0,0,0-.37.24L9.71,7.71a7.14,7.14,0,0,0-3.9,1.23A1.46,1.46,0,1,0,4.2,11.33a2.87,2.87,0,0,0,0,.44c0,2.24,2.61,4.06,5.83,4.06s5.83-1.82,5.83-4.06a2.87,2.87,0,0,0,0-.44A1.46,1.46,0,0,0,16.67,10Zm-10,1a1,1,0,1,1,1,1A1,1,0,0,1,6.67,11Zm5.81,2.75a3.84,3.84,0,0,1-2.47.77,3.84,3.84,0,0,1-2.47-.77,0.27,0.27,0,0,1,.38-0.38A3.27,3.27,0,0,0,10,14a3.28,3.28,0,0,0,2.09-.61A0.27,0.27,0,1,1,12.48,13.79Zm-0.18-1.71a1,1,0,1,1,1-1A1,1,0,0,1,12.29,12.08Z"
                      ></path>
                    </g>
                  </svg>
                </div>
              </Link>
              <Link to="/">
                <div className="reddit-name lg:hidden">
                  <svg
                    className="_1bWuGs_1sq4Pqy099x_yy- w-14"
                    viewBox="0 0 57 18"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g fill="#1c1c1c">
                      <path d="M54.63,16.52V7.68h1a1,1,0,0,0,1.09-1V6.65a1,1,0,0,0-.93-1.12H54.63V3.88a1.23,1.23,0,0,0-1.12-1.23,1.2,1.2,0,0,0-1.27,1.11V5.55h-1a1,1,0,0,0-1.09,1v.07a1,1,0,0,0,.93,1.12h1.13v8.81a1.19,1.19,0,0,0,1.19,1.19h0a1.19,1.19,0,0,0,1.25-1.12A.17.17,0,0,0,54.63,16.52Z"></path>
                      <circle
                        fill="#FF4500"
                        cx="47.26"
                        cy="3.44"
                        r="2.12"
                      ></circle>
                      <path d="M48.44,7.81a1.19,1.19,0,1,0-2.38,0h0v8.71a1.19,1.19,0,0,0,2.38,0Z"></path>
                      <path d="M30.84,1.19A1.19,1.19,0,0,0,29.65,0h0a1.19,1.19,0,0,0-1.19,1.19V6.51a4.11,4.11,0,0,0-3-1.21c-3.1,0-5.69,2.85-5.69,6.35S22.28,18,25.42,18a4.26,4.26,0,0,0,3.1-1.23,1.17,1.17,0,0,0,1.47.8,1.2,1.2,0,0,0,.85-1.05ZM25.41,15.64c-1.83,0-3.32-1.77-3.32-4s1.48-4,3.32-4,3.31,1.78,3.31,4-1.47,3.95-3.3,3.95Z"></path>
                      <path d="M43.28,1.19A1.19,1.19,0,0,0,42.09,0h0a1.18,1.18,0,0,0-1.18,1.19h0V6.51a4.15,4.15,0,0,0-3-1.21c-3.1,0-5.69,2.85-5.69,6.35S34.72,18,37.86,18A4.26,4.26,0,0,0,41,16.77a1.17,1.17,0,0,0,1.47.8,1.19,1.19,0,0,0,.85-1.05ZM37.85,15.64c-1.83,0-3.31-1.77-3.31-4s1.47-4,3.31-4,3.31,1.78,3.31,4-1.47,3.95-3.3,3.95Z"></path>
                      <path d="M17.27,12.44a1.49,1.49,0,0,0,1.59-1.38v-.15a4.81,4.81,0,0,0-.1-.85A5.83,5.83,0,0,0,13.25,5.3c-3.1,0-5.69,2.85-5.69,6.35S10.11,18,13.25,18a5.66,5.66,0,0,0,4.39-1.84,1.23,1.23,0,0,0-.08-1.74l-.11-.09a1.29,1.29,0,0,0-1.58.17,3.91,3.91,0,0,1-2.62,1.12A3.54,3.54,0,0,1,10,12.44h7.27Zm-4-4.76a3.41,3.41,0,0,1,3.09,2.64H10.14A3.41,3.41,0,0,1,13.24,7.68Z"></path>
                      <path d="M7.68,6.53a1.19,1.19,0,0,0-1-1.18A4.56,4.56,0,0,0,2.39,6.91V6.75A1.2,1.2,0,0,0,0,6.75v9.77a1.23,1.23,0,0,0,1.12,1.24,1.19,1.19,0,0,0,1.26-1.1.66.66,0,0,0,0-.14v-5A3.62,3.62,0,0,1,5.81,7.7a4.87,4.87,0,0,1,.54,0h.24A1.18,1.18,0,0,0,7.68,6.53Z"></path>
                    </g>
                  </svg>
                </div>
              </Link>
            </div>
            <div className="flex items-center justify-between w-[1500px]">
              <div className=" m-auto ">
                <form
                  onSubmit={keyDownHandler}
                  className="pt-1 w-[900px] 2xl:w-[800px] xl:w-[600px] lg:w-[400px] md:w-[280px] sm:w-[200px] xsm:w-[180px]"
                >
                  <InputGroup>
                    <InputLeftElement
                      pointerEvents="none"
                      children={
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-8 "
                          fill="none"
                          viewBox="0 0 28 28"
                          stroke="currentColor"
                          strokeWidth={1}
                          color="gray"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                          />
                        </svg>
                      }
                    />
                    <Input
                      type="text"
                      placeholder="Search Reddit"
                      width={"full"}
                      variant="filled"
                      value={text}
                      onChange={handleSearch}
                    />
                  </InputGroup>
                </form>
              </div>
              <div className="flex items-center">
                <div className="mx-5">
                  <button
                    onClick={() => {
                      setIsOpen(true);
                    }}
                    className=" font-semibold border-2 border-blue-500 rounded-2xl w-24 text-blue-500 p-[2px] mx-1 hover:bg-blue-100 xl:w-16 xl:text-sm sm:hidden"
                  >
                    Log In
                  </button>
                  <button
                    onClick={() => {
                      setIsOpen(true);
                    }}
                    className="bg-blue-500 text-white w-24 rounded-2xl border-2 border-blue-500 p-[2px] font-semibold hover:bg-blue-400 xl:w-16 xl:text-sm sm:hidden"
                  >
                    Sign Up
                  </button>
                </div>
                <div className=" flex mr-2 xsm:mr-2">
                  <Menu>
                    <MenuButton>
                      <div className="flex ">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="#606060"
                          strokeWidth={1}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                          />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6"
                          fill="none"
                          viewBox="0 0 30 24"
                          stroke="#606060"
                          strokeWidth={1}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </div>
                    </MenuButton>
                    <MenuList>
                      <MenuItem> Log In</MenuItem>
                      <MenuItem>Sign Up</MenuItem>
                    </MenuList>
                  </Menu>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ModalLogin open={isOpen} onClose={() => setIsOpen(false)} />
      </>
    );
  }
}
