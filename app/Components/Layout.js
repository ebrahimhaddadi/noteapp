import React from 'react';
import {
  Container,
  Header,
  Footer,
  FooterTab,
  Left,
  Right,
  Body,
  Title,
  StyleProvider,
} from 'native-base';
import getTheme from '../../native-base-theme/components';
import commonColor from '../../native-base-theme/variables/commonColor';

const Layout = ({children, left, right, title, footer}) => {
  return (
    <StyleProvider style={getTheme(commonColor)}>
      <Container>
        <Header>
          <Left>{left}</Left>
          <Body>
            <Title>{title}</Title>
          </Body>
          <Right>{right}</Right>
        </Header>
        {children}
        <Footer>
          <FooterTab>{footer}</FooterTab>
        </Footer>
      </Container>
    </StyleProvider>
  );
};

export default Layout;
