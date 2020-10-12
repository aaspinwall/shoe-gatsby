import styled from "styled-components"
export const Wrapper = styled.main`
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  .gradient {
    color: inherit;
    background-image: radial-gradient(circle at 18% 2%, #f14867, #e684bf 97%);
    :hover {
      background-image: radial-gradient(circle at 18% 2%, #f14867, #b58ba8 97%);
    }
  }

  .imgContainer {
    width: 200px;
    height: 300px;
    > img {
      height: 100%;
      width: 100%;
      object-fit: contain;
      background: #ebeeef;
    }
  }

  .resizeable {
    padding: 2rem;
    resize: both;
    overflow: auto;
  }

  .product-wrapper {
    position: relative;
    display: grid;
    border: solid transparent 2px;
    padding: 0 0 0.5rem;
    :hover {
      border: solid black 2px;
    }
  }

  .imgBox {
    width: 200px;
    height: 300px;
  }
  .center {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .products {
    display: flex;
    justify-content: start;
    flex-wrap: wrap;
  }
  .badge {
    position: absolute;
    top: 0;
    left: 0;
    padding: 0.5rem;
    background-color: white;
    transform: translate(0%, 40%) rotate(-90deg);
  }
  .box {
    border: red solid 2px;
    width: 100%;
    height: 100%;
  }
`
