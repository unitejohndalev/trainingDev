import React, { useContext } from "react";
import { StoreContext } from "../store/Store";
import styled from "styled-components";

const ProductsContainer = styled.div({
  minWidth: "1080px",
  display: "flex",

  justifyContent: "space-evenly",
});

const PerProductContainer = styled.div({
  maxWidth: "500px",
  maxHeight: "500px",
});

const ProductImage = styled.img({
  width: "100px",
  height: "100px",
});
const FakeStore = () => {
  const { fakeStore } = useContext(StoreContext);
  console.log(fakeStore);
  return (
    <div>
      <ProductsContainer>
        {fakeStore.map((product, idx) => {
          const { title, price, description, image } = product;
          return (
            <PerProductContainer key={idx}>
              <div>
                <ProductImage src={image} alt="" />
              </div>
              {/* <div>
                <p>{title}</p>
                <p>{description}</p>
                <p>{price}</p>
              </div> */}
            </PerProductContainer>
          );
        })}
      </ProductsContainer>
    </div>
  );
};

export default FakeStore;
