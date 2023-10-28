import { Box, Flex, Img, Stack, Text } from "@chakra-ui/react";
import React from "react";

const Learning = ({ datas }) => {
  return (
    <Stack className="px-20 gap-5 mt-10">
      <Text className="font-mono text-xl text-center">Learning :</Text>
      <Flex className="gap-2 flex-wrap justify-center">
        {datas &&
          datas.map((data, index) => (
            <Stack key={index} className="items-center bg-gray-700 p-5 rounded-xl">
              <Img className="w-[100px]" src={data.svg} />
              <Text>{data.titleSkill}</Text>
            </Stack>
          ))}
      </Flex>
    </Stack>
  );
};

export default Learning;
