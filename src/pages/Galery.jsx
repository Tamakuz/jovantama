import React from 'react'
import Layout from '../components/Layout'
import { Flex, Image, Stack, Text } from '@chakra-ui/react'

const Galery = () => {
  return (
    <Layout prevPathName={"/dashboard"}>
      <Stack spacing={5} className="items-center justify-center px-60 w-full">
        <Text className="text-3xl font-bold font-mono">📸 My Gallery 🔥</Text>
        <Flex className='flex-wrap gap-3 justify-center'>
          <Image className='rounded-xl object-cover w-[400px]' src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZGV2ZWxvcGVyJTIwdGVhbXxlbnwwfHwwfHx8MA%3D%3D" />
          <Image className='rounded-xl object-cover w-[400px]' src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZGV2ZWxvcGVyJTIwdGVhbXxlbnwwfHwwfHx8MA%3D%3D" />
          <Image className='rounded-xl object-cover w-[400px]' src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZGV2ZWxvcGVyJTIwdGVhbXxlbnwwfHwwfHx8MA%3D%3D" />
          <Image className='rounded-xl object-cover w-[400px]' src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZGV2ZWxvcGVyJTIwdGVhbXxlbnwwfHwwfHx8MA%3D%3D" />
          <Image className='rounded-xl object-cover w-[400px]' src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZGV2ZWxvcGVyJTIwdGVhbXxlbnwwfHwwfHx8MA%3D%3D" />
        </Flex>
      </Stack>
    </Layout>
  );
}

export default Galery