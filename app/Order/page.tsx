import { Container, Paper } from "@mantine/core";
import HeaderFooter from "../../Components/HeaderFooterWrapper/HeaderFooterWrapper";
import { VisitUs } from "../../Components/Menu/VisitUs/VisitUs";
import WelcomePagewithImagebg from "../../Components/WelcomeBGImg/WelcomePagewithImagebg";
import { PlaceOrder } from "../../Components/Order/PlaceOrder/PlaceOrder";
import { FAQ } from "../../Components/Order/FAQs/FAQ";
import { ReadyToOrder } from "../../Components/Order/ReadyToOrder/ReadyToOrder";

function Order() {
    return ( 
        <HeaderFooter>
        <WelcomePagewithImagebg/>
        <Paper bg="#fff5e8">
        <PlaceOrder />
      </Paper>
      <FAQ/>
      <ReadyToOrder/>
      <Container size="xl">
        <VisitUs/>
      </Container>  
    </HeaderFooter>
     );
}

export default Order;