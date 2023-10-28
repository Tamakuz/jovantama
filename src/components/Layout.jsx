import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button, Flex, Stack } from "@chakra-ui/react";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { IoIosArrowBack } from "react-icons/io";

const Layout = ({ children, prevPathName }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [previousPath, setPreviousPath] = useState(null);

  useEffect(() => {
    setPreviousPath(location.pathname);
  }, [location.pathname]);

  const handleBackClick = () => {
    if (previousPath) {
      navigate(previousPath);
    }
  };

  return (
    <Stack className="py-5">
      <Flex className="items-center justify-around">
        {location.pathname !== "/dashboard" && (
          <Link to={prevPathName}>
            <Button
              leftIcon={<IoIosArrowBack />}
              onClick={handleBackClick}
              colorScheme="gray"
            >
              Back
            </Button>
          </Link>
        )}
        <Flex className="justify-end p-5 text-3xl gap-5">
          <Link>
            <AiFillInstagram />
          </Link>
          <Link>
            <AiFillLinkedin />
          </Link>
          <Link>
            <AiFillGithub />
          </Link>
        </Flex>
      </Flex>
      <Stack className="justify-center items-center">{children}</Stack>
    </Stack>
  );
};

export default Layout;
