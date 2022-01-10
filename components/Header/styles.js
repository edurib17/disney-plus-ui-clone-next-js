import styled from "styled-components"
import Image from "next/image"

export const Container = styled.div`
  display: flex;
  height: 100px;
  justify-content: space-between;
  align-items: center;
  padding: 0 36px;
  background: #090b13;
  z-index: 3;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
`

export const Avatar = styled(Image)`
  border-radius: 50%;
`

export const Wrapper = styled.div`
  display: flex;
`

export const ContainerIcons = styled.div`
  display: flex;
  margin-left: 32px;
`

export const ItemIcon = styled.a`
  display: flex;
  cursor: pointer;
  padding: 16px 18px;
  align-items: center;
  color: white;
`
export const TextIcon = styled.p`
  font-size: 13px;
  margin-left: 8px;
  text-transform: uppercase;
  letter-spacing: 1.42px;

  background-image: linear-gradient(white, white);
  background-size: 0% 2px;
  background-repeat: no-repeat;
  transition: background-size 0.3s;
  background-position: 0 calc(100% - -1px);

  :hover {
    background-size: 100% 2px;
  }
`

export const ContainerUser = styled.div`
  display: flex;
`
export const TextName = styled.p`
  margin-right: 15px;
`
