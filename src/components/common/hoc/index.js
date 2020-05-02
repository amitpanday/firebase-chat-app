import { Container, Header, Drawer, Title, Content, Button, Icon, Left, Body, Text } from 'native-base';

const hoc = () => {
  <Drawer
    ref={(ref) => { this._drawer = ref; }}
    content={<SideBar />} >
    <Container>
      <Header style={{ backgroundColor: '#C0C0C0' }}>
        <Left>
          <Button transparent onPress={this.openDrawer.bind(this)}>
            <Icon style={styles.icon} name='menu' />
          </Button>
        </Left>
        <Body style={styles.body}>
          <Title style={{ color: '#FFF' }}> title </Title>
        </Body>
      </Header>
      <Content>
        <View style={styles.inputContainer}>
          {/* <Input /> */}
        </View>
      </Content>
    </Container>
  </Drawer>
}

export default hoc;