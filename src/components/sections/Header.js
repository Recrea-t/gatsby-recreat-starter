import React from "react"
import { Link as GatsbyLink } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { Flex, Link } from "@chakra-ui/react"

import NavLink from "../ui/NavLink"
import ToggleMenu from "../ui/ToggleMenu"

const Header = () => {
  const [show, setShow] = React.useState(false)
  const toggleMenu = () => setShow(!show)

  const MenuItems = ({ onClick }) => {
    return (
      <>
        <NavLink to="/qui-som/" onClick={onClick}>
          Qui Som
        </NavLink>
        <NavLink to="/serveis/" onClick={onClick}>
          Serveis
        </NavLink>
        <NavLink to="/#contacte" onClick={onClick} isLast>
          Contacte
        </NavLink>
      </>
    )
  }

  return (
    <Flex
      as="nav"
      h={show ? "auto" : "100px"}
      w="full"
      pos="fixed"
      top="0"
      right="0"
      left="0"
      zIndex="1"
      align="center"
      justify="space-between"
      p={4}
      mx="auto"
      bg="white"
      color="mangoTango.500"
      borderBottom="1px"
      borderBottomColor="mangoTango.500"
      wrap="wrap"
    >
      <Link to="/" title="Inici" as={GatsbyLink}>
        <StaticImage
          src="../../images/LogoRecreat.png"
          alt="Logotip Recrea't"
          loading="eager"
          layout="fixed"
          placeholder="tracedSVG"
          width={200}
        />
      </Link>

      <ToggleMenu show={show} toggleMenu={toggleMenu}>
        <MenuItems onClick={toggleMenu} />
      </ToggleMenu>

      <Flex
        display={{ base: "none", md: "inherit" }}
        align="center"
        direction="row"
        justify={{ md: "space-between", lg: "flex-end" }}
      >
        <MenuItems />
      </Flex>
    </Flex>
  )
}

export default Header
