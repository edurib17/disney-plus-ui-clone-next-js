import { Container, ContainerImage, SliderMovie, Title } from "./styles"

import movies from "../../data/movies.json"

const Movies = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
  }
  return (
    <>
      <Container>
        <Title>{movies.recomendacao.titulo}</Title>
        <SliderMovie {...settings}>
          {movies.recomendacao.filmes.map(item => (
            <ContainerImage>
              <a>
                <img src={item.card} />
              </a>
            </ContainerImage>
          ))}
        </SliderMovie>
      </Container>
      <Container>
        <Title>{movies.novos.titulo}</Title>
        <SliderMovie {...settings}>
          {movies.novos.filmes.map(item => (
            <ContainerImage>
              <a>
                <img src={item.card} />
              </a>
            </ContainerImage>
          ))}
        </SliderMovie>
      </Container>
      <Container>
        <Title>{movies.originals.titulo}</Title>
        <SliderMovie {...settings}>
          {movies.originals.filmes.map(item => (
            <ContainerImage>
              <a>
                <img src={item.card} />
              </a>
            </ContainerImage>
          ))}
        </SliderMovie>
      </Container>
    </>
  )
}

export default Movies
