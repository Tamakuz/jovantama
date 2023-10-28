import React from 'react'
import Layout from '../components/Layout';
import { Card, CardBody, Heading, Image, Stack, Text } from '@chakra-ui/react';

const Services = () => {
  return (
    <Layout prevPathName={"/dashboard"}>
      <Stack className="items-center justify-center px-60 w-full">
        <Text className="text-3xl font-bold font-mono">🚀 My Services 🔥</Text>
        <Card
          direction={{ base: "column", sm: "row" }}
          overflow="hidden"
          variant="elevated"
        >
          <Image
            objectFit="cover"
            maxW={{ base: "100%", sm: "200px" }}
            src="https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fEJBQ0tFTkR8ZW58MHx8MHx8fDA%3D"
            alt="Caffe Latte"
          />

          <Stack>
            <CardBody>
              <Heading size="md">💖 FRONTEND</Heading>

              <Text py="2">
                Our Frontend Services offer solutions for the design and
                development of your website's user interface. Our team creates
                attractive and responsive user interfaces using technologies
                such as HTML, CSS, and JavaScript. The result is a website that
                captures the attention of visitors and is easy to use.
              </Text>
            </CardBody>
          </Stack>
        </Card>

        <Card
          direction={{ base: "column", sm: "row" }}
          overflow="hidden"
          variant="elevated"
        >
          <Image
            objectFit="cover"
            maxW={{ base: "100%", sm: "200px" }}
            src="https://images.unsplash.com/photo-1627398242454-45a1465c2479?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Tk9ERSUyMEpTfGVufDB8fDB8fHww"
            alt="Caffe Latte"
          />

          <Stack>
            <CardBody>
              <Heading size="md">🐱‍👤 BACKEND</Heading>

              <Text py="2">
                With our Backend Services, we ensure that your website runs
                smoothly behind the scenes. Our team designs and develops
                servers, databases, and the necessary business logic to support
                your web application. This provides a strong foundation for
                efficiently running your online business.
              </Text>
            </CardBody>
          </Stack>
        </Card>
        <Card
          direction={{ base: "column", sm: "row" }}
          overflow="hidden"
          variant="elevated"
        >
          <Image
            objectFit="cover"
            maxW={{ base: "100%", sm: "200px" }}
            src="https://images.unsplash.com/photo-1696431621200-9068cdb0a1bd?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZnVsbHN0YWNrfGVufDB8fDB8fHww"
            alt="Caffe Latte"
          />

          <Stack>
            <CardBody>
              <Heading size="md">🐱‍🏍 FULLSTACK</Heading>

              <Text py="2">
                If you're looking for a comprehensive solution, our Fullstack
                Services are the right choice. Our team combines Frontend and
                Backend expertise to deliver an end-to-end solution. From
                frontend design to backend development and integrating all
                components, we transform your website into a fully operational
                machine.
              </Text>
            </CardBody>
          </Stack>
        </Card>
      </Stack>
    </Layout>
  );
}

export default Services