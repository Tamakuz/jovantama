
import React from "react";
import Layout from "../components/Layout";
import { Stack, Text } from "@chakra-ui/react";
import { useCombineData } from "../hooks/useFetch";
import UsingNow from "../components/Skills/UsingNow";
import Learning from "../components/Skills/Learning";

const Skills = () => {
  const apiUrls = [
    "https://api-jovantama.vercel.app/api/using-now",
    "https://api-jovantama.vercel.app/api/learning",
  ];

  const keyCombine = ["using_now", "learning"];

  const { combinedData, error, isLoading, refetchData } = useCombineData(
    apiUrls,
    keyCombine
  );
  const learning  = !isLoading && combinedData?.learning?.data?.learning;
  const using_now = !isLoading && combinedData?.using_now?.data?.using_now;

  return (
    <Layout prevPathName={"/dashboard"}>
      {error ? (
        <Text className="text-3xl font-bold font-mono">
          Tidak bisa memuat data...
        </Text>
      ) : isLoading ? (
        <Text className="text-3xl font-bold font-mono">Loading...</Text>
      ) : (
        <Stack className="items-center gap-20">
          <Text className="text-3xl font-bold font-mono">My Skills</Text>
          <UsingNow datas={using_now && using_now} />
          <Learning datas={learning && learning} />
        </Stack>
      )}
    </Layout>
  );
};

export default Skills;
