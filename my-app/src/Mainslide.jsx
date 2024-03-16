import React from "react";
import styled from 'styled-components';

import { Link } from 'react-router-dom'

const Wrapper = styled.div``;
const Slider = styled.div`
     display: flex;
     
     overflow-x: auto; 
      scrollbar-width: none; // for firefox
      -ms-overflow-style: none; //for Edge
     &::-webkit-scrollbar{
       display: none;
     }
     
 
`;
const Item = styled.div`
    min-width: 325px ;
    height: 100%;
    display: flex;
   
    position:  "none";
   
`;
const ItemTitle = styled.div`
   width: 100px;
   height: 100%;
   position : relative ;
   overflow: hidden;
`;
const Title = styled.h3`
    position: absolute;
    transform: rotate(-90deg);
    transform-origin: bottom left;
    left: 100%;
    bottom: 0px;
    padding: 5px;
    width: 300px;
    color: black;
    font-size: 23px;
    font-weight: bold;
`;
const Image = styled.img`
    width: 300px;
    height: 100%;
`;




function Mainslide() {
    return(
    <div>
        <Wrapper>
            <Slider style={{  paddingBottom:'3rem'}}>
                <Link to="#">
                    <Item>
                        {/* <ItemTitle>
                            <Title>CRISP MONOCHROME</Title>
                        </ItemTitle> */}
                        <Image src="../assets/Productimgs/z1.jpg" alt='CRISP MONOCHROME' />
                    </Item>
                </Link>
                <Link to="#">
                    <Item>
                        {/* <ItemTitle>
                            <Title>ONE STEP AHEAD</Title>
                        </ItemTitle> */}
                        <Image src="../assets/Productimgs/z3.jpg" alt='ONE STEP AHEAD' />
                    </Item>
                </Link>
                <Link to="#">
                    <Item>
                        {/* <ItemTitle>
                            <Title>REFINED GLAMOUR</Title>
                        </ItemTitle> */}
                        <Image src="../assets/Productimgs/z2.jpg" alt='REFINED GLAMOUR' />
                    </Item>
                </Link>
                <Link to="#">
                    <Item>
                        {/* <ItemTitle>
                            <Title>NEW CLASSICS</Title>
                        </ItemTitle> */}
                        <Image src="../assets/Productimgs/z4.jpg" alt='NEW CLASSICS' />
                    </Item>
                </Link>
                <Link to="#">
                    <Item>
                        {/* <ItemTitle>
                            <Title>30 UNDER 300</Title>
                        </ItemTitle> */}
                        <Image src="../assets/Productimgs/z5.jpg" alt='30 UNDER 300' />
                    </Item>
                </Link>
            </Slider>
            {/* <Slider >
                <Link to="#">
                    <Item>
                        <ItemTitle>
                            <Title>ITALIST: SHOP DESIGNER BRANDS & SAVE UP TO 70%<sup>*</sup></Title>
                        </ItemTitle>
                        <Image src="../assets/Productimgs/z6.jpg" alt='ITALIST' />
                    </Item>
                </Link>
                <Link to="#">
                    <Item>
                        <ItemTitle>
                            <Title>DISCOVER THE ICONIC MYEA BAG - EMPORIO ARMANI</Title>
                        </ItemTitle>
                        <Image src="../assets/Productimgs/z7.jpg" alt="MYEA BAG" />
                    </Item>
                </Link>
                <Link to="#">
                    <Item>
                        <ItemTitle>
                            <Title>MICHAEL KORS: YOUR FAVORITE STYLES ARE WAITING AND ON SALE </Title>
                        </ItemTitle>
                        <Image src="../assets/Productimgs/z8.jpg" alt='MICHAEL KORS' />
                    </Item>
                </Link>
                <Link to="#">
                    <Item>
                        <ItemTitle>
                            <Title>THE MULBERRY SOFTIE - A BAG MADE TO BE SQUEEZED</Title>
                        </ItemTitle>
                        <Image src="../assets/Productimgs/z1.jpg" alt='MULBERRY SOFTIE' />
                    </Item>
                </Link>
                <Link to="#">
                    <Item>
                        <ItemTitle>
                            <Title>ENJOY 30% OFF SELECTED MUST-HAVE PIECES ON 24S</Title>
                        </ItemTitle>
                        <Image src="../assets/Productimgs/z4.jpg" alt='24S' />
                    </Item>
                </Link>
            </Slider> */}
        </Wrapper>

   </div>);
}
    export default Mainslide;