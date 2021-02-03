import React from "react";
import { Link as GatsbyLink } from "gatsby";
import { Box, Flex, HStack, Text, Link, StackDivider } from "@chakra-ui/react";

const Footer = (props) => {
  return (
    <Flex
      as="footer"
      align="center"
      justify="center"
      w="full"
      p={4}
      bg="dimGray.500"
      color="white"
      {...props}
    >
      <Box>
        <HStack spacing={2} divider={<StackDivider />} fontSize="xs">
          <Text>
            &copy; {new Date().getFullYear()} {props.title}
          </Text>
          <Link
            to="/politica-de-privadesa"
            title="Política de privadesa"
            as={GatsbyLink}
          >
            Política de privadesa
          </Link>
        </HStack>
      </Box>
    </Flex>
  );
};

export default Footer;
