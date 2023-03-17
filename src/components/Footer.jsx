import { Facebook, Instagram, MailOutline, Phone, Pinterest, Room, Twitter } from "@material-ui/icons";
import styled from "styled-components"
import { mobile } from "../responsive";

const Component= styled.div`
display: flex;
${mobile({ flexDirection: "column" })}
`;
const Left= styled.div`
flex: 1;
display: flex;
flex-direction: column;
padding: 20px;
`;
const Center= styled.div`
flex: 1;
padding: 20px;
${mobile({ display: "none" })}
`;
const Title = styled.h3`
margin-bottom: 30px;
`;
const List = styled.ul`
margin: 0;
padding: 0;
list-style: none;
display: flex;
flex-wrap: wrap;
`;
const ListItem = styled.li`
width: 50%;
margin-bottom: 10px;
`;
const Right= styled.div`
flex: 1;
${mobile({ backgroundColor: "#fff8f8" })}
`;
const SocialContainer= styled.div`
display: flex;
`;
const SocialIcon = styled.div`
width: 40px;
height: 40px;
border-radius: 50%;
color: white;
background-color: #${props => props.color};
display: flex;
justify-content: center;
align-items: center;
margin-right: 20px;
`;
const Logo= styled.h1`

`;
const Desc = styled.p`
margin: 20px 0px ;

`;
const ContactItem = styled.div`
  margin-bottom  : 20px;
  display: flex;
  align-items: center;
`;
const Payment  = styled.img`

`;

const Footer = () => {
  return (
    <Component>
        <Left>
            <Logo>VASTRA.</Logo>
            <Desc>Sorry you cannot shop in this website. But it has all you need to power your ecommerce website
Whether you’re just getting started or are an established brand, our powerful platform helps your business grow. </Desc>
            <SocialContainer>
                <SocialIcon color="3B5999">
                    <Facebook/>
                </SocialIcon>
                <SocialIcon color="E4405F">
                    <Instagram/>
                </SocialIcon >
                <SocialIcon color="55ACEE">
                    <Twitter/>
                </SocialIcon>
                <SocialIcon color="E60023">
                    <Pinterest/>
                </SocialIcon>
            </SocialContainer>
            </Left>
<Center>
    <Title>Useful Links</Title>
    <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Woman Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
        </List>
</Center>
<Right>
    <Title>Contact</Title>
    <ContactItem>
    <Room style={{marginRight:"10px"}}/> 123 No Man Rd, Searchester 98366
    </ContactItem> 
    <ContactItem>
        <Phone style={{marginRight:"10px"}}/> +1 234 56 78
    </ContactItem>
    <ContactItem>
        <MailOutline style={{marginRight:"10px"}}/> vastra@contact.com
    </ContactItem>
    <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
</Right>
    </Component>
  )
}

export default Footer