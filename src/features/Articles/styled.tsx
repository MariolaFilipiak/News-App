import styled from "styled-components";

export const Section = styled.section`
  width: 80%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 30px;
  margin-top: 50px;
  margin-bottom: 50px;
`;
export const Tile = styled.div`
  height: 100%;
  display: grid;
  grid-gap:30px;
  padding: 10px;
  gap: 10px;
  border-bottom: 1px solid grey;
  position: relative ;
`;

export const Title = styled.h2`
  color: #262626;
  margin: 0;
  line-height: 1.4;
  letter-spacing: 0.4;
  font-size: 25px;

//height: 200px;
`;

export const Date = styled.h3`
  color: #a9a9a9;
  margin: 0;
  line-height: 1.4;
  letter-spacing: 0.4;
  font-size: 15px;
  font-weight: normal;
`;

export const Description = styled.h4`
  color: #616161;
  margin: 0;
  line-height: 1.4;
  letter-spacing: 0.4;
  font-size: 20px;
  font-weight: normal;
`;

export const Image = styled.img`
  width: 100%;
  filter: grayscale(100%);
`;
export const Button = styled.div`
text-align: center;
margin:0 auto;
margin-bottom: 50px;
background-color:#e8e8e8;
width: 100px;
padding: 5px;
color:262626;
letter-spacing: 1.4;
`;
