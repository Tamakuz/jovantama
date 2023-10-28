import React, { useEffect } from "react";
import { useAppContext } from "../context/store";
import { Link } from "react-router-dom";
import {
  Box,
  Button,
  Flex,
  Image,
  Img,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import {} from "react-icons/";
import { LuGalleryThumbnails } from "react-icons/lu";
import { FaCode } from "react-icons/fa";
import { GoCodeReview } from "react-icons/go";
import { RiServiceFill } from "react-icons/ri";
import {
  SiAboutdotme,
  SiBlogger,
  SiFlathub,
  SiSkillshare,
} from "react-icons/si";
import Layout from "../components/Layout";
import Typed from "react-typed";

const Dashboard = () => {
  const { state } = useAppContext();

  // useEffect(() => {
  //   state.namaPengunjung === null && navigate("/");
  // }, []);

  const menus = [
    {
      title: ["My Skills"],
      icon: <SiSkillshare className="text-[60px] text-[#176B87]" />,
      link: "/skills",
    },
    {
      title: ["About Me"],
      icon: <SiAboutdotme className="text-[60px] text-[#176B87]" />,
    },
    {
      title: ["Portfolio / Works"],
      icon: <SiFlathub className="text-[50px] text-[#176B87]" />,
    },
    {
      title: ["Blog / Articles"],
      icon: <SiBlogger className="text-[50px] text-[#176B87]" />,
      link: "/blogs",
    },
    {
      title: ["Services"],
      icon: <RiServiceFill className="text-[50px] text-[#176B87]" />,
      link: "/services",
    },
    {
      title: ["Testimonials / Reviews"],
      icon: <GoCodeReview className="text-[50px] text-[#176B87]" />,
    },
    {
      title: ["Contact"],
      icon: <GoCodeReview className="text-[50px] text-[#176B87]" />,
    },
    {
      title: ["Resume / CV"],
      icon: <FaCode className="text-[50px] text-[#176B87]" />,
    },
    {
      title: ["Gallery / Photos"],
      icon: <LuGalleryThumbnails className="text-[50px] text-[#176B87]" />,
      link: "/galerry",
    },
  ];

  return (
    <Layout>
      <Stack className="items-center">
        <Box className="rounded-full border-4 p-1">
          <Image
            className="rounded-full w-[200px]"
            src="https://bit.ly/dan-abramov"
          />
        </Box>
        <Text className="text-xl font-mono text-gray-300">
          Jovan Panji Pratama | Fullstack Developer
        </Text>
      </Stack>
      <SimpleGrid columns={3} spacing={3} mt={5}>
        {menus.map((menu, index) => (
          <Box
          key={index}
            h={100}
            w={250}
            shadow="base"
            className="bg-gray-700 rounded-xl p-3 hover:border-2 cursor-pointer"
          >
            <Link to={menu.link}>
              <Flex className="gap-2">
                <Stack flex={1}>
                  <Text className="text-xl font-mono text-gray-300">
                    <Typed strings={menu.title} typeSpeed={100} />
                  </Text>
                </Stack>
                <Box>{menu.icon}</Box>
              </Flex>
            </Link>
          </Box>
        ))}
      </SimpleGrid>
    </Layout>
  );
};

export default Dashboard;
