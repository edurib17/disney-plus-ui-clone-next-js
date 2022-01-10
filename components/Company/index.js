import { Container, ImageCompany, ItemCompany } from "./styles"

const Company = () => {
  return (
    <Container>
      <ItemCompany>
        <ImageCompany src="/images/viewers-disney.png" />
      </ItemCompany>
      <ItemCompany>
        <ImageCompany src="/images/viewers-pixar.png" />
      </ItemCompany>
      <ItemCompany>
        <ImageCompany src="/images/viewers-marvel.png" />
      </ItemCompany>
      <ItemCompany>
        <ImageCompany src="/images/viewers-starwars.png" />
      </ItemCompany>
      <ItemCompany>
        <ImageCompany src="/images/viewers-national.png" />
      </ItemCompany>
    </Container>
  )
}

export default Company
