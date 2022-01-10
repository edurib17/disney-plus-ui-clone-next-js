import styled from "styled-components"
import Company from "../components/Company"
import Header from "../components/Header"
import { Main } from "../components/Main"
import Movies from "../components/Movies"
import SliderImages from "../components/SliderImages"

export default function Home() {
  return (
    <Main>
      <Header />
      <SliderImages />
      <Company />
      <Movies />
    </Main>
  )
}
