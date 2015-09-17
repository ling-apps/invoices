import React from 'react';

class App extends React.Component {
  render() {
    return (
      <Layout>
        <Navigation />
        <Header title="This page">
          <HeaderAction>
            <Button onClick={doSomething}>Primary</Button>
          </HeaderAction>
        </Header>
        <Content>
          <List items={contacts} format={ContactListItem} />
        </Content>
      </Layout>
    );
  }
}

export default App;
