import Image from "next/image"
import {
  Container,
  Avatar,
  ContainerIcons,
  Wrapper,
  ItemIcon,
  TextIcon,
  ContainerUser,
  TextName,
} from "./styles"

//Icons
import {
  AiFillHome,
  AiOutlineSearch,
  AiOutlinePlus,
  AiFillStar,
} from "react-icons/ai"
import { FiFilm } from "react-icons/fi"
import { RiComputerFill } from "react-icons/ri"

const Header = () => {
  return (
    <Container>
      <Wrapper>
        <Image src="/images/logo.svg" width={80} height={48} />

        <ContainerIcons>
          <ItemIcon>
            <AiFillHome />
            <TextIcon>Início</TextIcon>
          </ItemIcon>
          <ItemIcon>
            <AiOutlineSearch />
            <TextIcon>Pesquisa</TextIcon>
          </ItemIcon>
          <ItemIcon>
            <AiOutlinePlus />
            <TextIcon>Minha lista</TextIcon>
          </ItemIcon>
          <ItemIcon>
            <AiFillStar />
            <TextIcon>Originais</TextIcon>
          </ItemIcon>
          <ItemIcon>
            <FiFilm />
            <TextIcon>Filmes</TextIcon>
          </ItemIcon>
          <ItemIcon>
            <RiComputerFill />
            <TextIcon>Series</TextIcon>
          </ItemIcon>
        </ContainerIcons>
      </Wrapper>
      <ContainerUser>
        <TextName>Eduardo</TextName>
        <Avatar src="/images/profile.png" width={48} height={48} />
      </ContainerUser>
    </Container>
  )
}

export default Header
