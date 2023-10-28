import React from "react";
import Layout from "../components/Layout";
import { useGetData } from "../hooks/useFetch";
import { Stack, Text } from "@chakra-ui/react";
import CardBlog from "../components/Blogs/Card_blog";

const Blog = () => {
  const apiUrls = "https://dev.to/api/articles?username=madza";
  const { datas, isLoading, error, refetchData } = useGetData(apiUrls);
  console.log(datas);
  return (
    <Layout prevPathName={"/dashboard"}>
      {error ? (
        <Text className="text-3xl font-bold font-mono">
          Tidak bisa memuat data...
        </Text>
      ) : isLoading ? (
        <Text className="text-3xl font-bold font-mono">Loading...</Text>
      ) : (
        <Stack className="items-center justify-center px-20 gap-20 w-full">
          <Text className="text-3xl font-bold font-mono">🚀 My Blogs 🔥</Text>
          <Stack className="gap-5 mt-10">
            {datas?.map((blog, index) => (
              <CardBlog key={index} data={blog} />
            ))}
          </Stack>
        </Stack>
      )}
    </Layout>
  );
};

export default Blog;
