import React, { useState, useEffect } from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Wrapper } from "./elements"
import fake from "faker"

const getImages = () => {
  const arr = []
  let cnt = 0
  const err = {}
  while (!err.length && cnt < 17) {
    const im = `/imgs/shoes/shoe_${cnt}.jpg`
    cnt++
    arr.push(<img loading='lazy' src={im}></img>)
  }
  return arr
}

const Description = ({ content }) => {
  const { top, middle, price } = content
  return (
    <div>
      <div>{top || "Top"}</div>
      <div>{middle || "Middle"}</div>
      <div>{price || "price"}</div>
    </div>
  )
}

const ImagePlaceholder = ({ img }) => {
  return (
    <div className="imgContainer">
      {img ? img : <div className="imgBox gradient"></div>}
    </div>
  )
}

const Badge = () => <span className="badge">New</span>

const Main = () => {
  const [shoeImgs, setShoeImgs] = useState([])
  useEffect(() => {
    setShoeImgs(getImages())
  }, [])
  return (
    <Wrapper>
      <h1>Shoes</h1>
      <div className="products">
        {shoeImgs.map((el, i) => {
          const top = `${fake.commerce.productName().slice(0, 20)}`
          const middle = fake.commerce.productMaterial()
          const price = `$ ${fake.commerce.price()}`
          return (
            <div key={`product_${i}`} className="product-wrapper">
              <Badge />
              <ImagePlaceholder img={el} />
              <Description content={{ top, middle, price }} />
            </div>
          )
        })}
      </div>
    </Wrapper>
  )
}

export default Main
