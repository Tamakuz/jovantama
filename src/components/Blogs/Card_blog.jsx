import { Box, Flex, Img, Link, Stack, Tag, Text } from '@chakra-ui/react'
import { formatDistanceToNow } from 'date-fns';
import React from 'react'

const CardBlog = ({data}) => {
  const timePublished = new Date(data.published_at);
  const distanceNow = formatDistanceToNow(timePublished)
  return (
    <Stack className="bg-gray-700 max-w-2xl rounded-xl p-5">
      <Flex className="gap-3">
        <Box>
          <Img
            src={data.user.profile_image}
            className="aspect-square w-[35px] rounded-full"
          />
        </Box>
        <Stack className="w-full">
          <Stack className="leading-3 w-fit">
            <Link
              isExternal
              href={`https://dev.to/${data.user.username}`}
              className="text-gray-300 font-semibold hover:text-purple-400 cursor-pointer"
            >
              {data.user.name}
            </Link>
            <Text className="text-gray-300 text-[12px]">{distanceNow}</Text>
          </Stack>
          <Text
            as={"a"}
            target="_blank"
            href={data.url}
            className="hover:text-purple-400 no-underline text-[25px] font-bold"
          >
            {data.title}
          </Text>
          <Flex className='gap-3'>
            {data.tag_list.map((tag, index) => (
              <Tag key={index}>{tag}</Tag>
            ))}
          </Flex>
        </Stack>
      </Flex>
    </Stack>
  );
}

export default CardBlog