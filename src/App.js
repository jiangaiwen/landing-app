import React, { Component } from 'react';
import { Layout, Menu } from 'antd';
import { enquireScreen } from 'enquire-js';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './views/Home';
import Product from './views/Product';
import Support from './views/Support';
import About from './views/About';
import './App.less';

let isMobile;
enquireScreen((b) => {
  isMobile = b;
});

const { Header, Content } = Layout;
const Logo = 'https://gw.alipayobjects.com/zos/basement_prod/b30cdc2a-d91c-4c78-be9c-7c63b308d4b3.svg';

class App extends Component {
  constructor(props) {
      super(props);
      this.state = {
          isMobile,
          phoneOpen: undefined,
      };
  }
  componentDidMount() {
    // 适配手机屏幕;
    enquireScreen((b) => {
      this.setState({ isMobile: !!b });
    });
  }

  state = {
    current: '1'
  };

  handleClick = e => {
    this.setState({ current: e.key });
  };

  phoneClick = () => {
    const phoneOpen = !this.state.phoneOpen;
    this.setState({
        phoneOpen,
    });
  };

  render() {
    const { current } = this.state;
    return (
      <div className="App">
        <Router>
            <Layout>
                <Header className="App-header home-page-wrapper">
                  <div className="home-page">

                    <div className="App-header-logo">
                      <img width="100%" src={Logo} className="App-logo" alt="logo" />
                    </div>

                    {isMobile && (
                      <div
                          className="App-header-mobile-menu"
                          onClick={() => {
                              this.phoneClick();
                          }}
                          >
                          <em />
                          <em />
                          <em />
                      </div>
                    )}
                    <div className="App-header-menu" >
                      <Menu
                        onClick={this.handleClick}
                        mode="horizontal"
                        selectedKeys={[current]}>
                        <Menu.Item key="1"><Link to="/">首页</Link></Menu.Item>
                        <Menu.Item key="2"><Link to="/Product">产品展示</Link></Menu.Item>
                        <Menu.Item key="3"><Link to="/Support">技术支持</Link></Menu.Item>
                        <Menu.Item key="4"><Link to="/About">关于我们</Link></Menu.Item>
                      </Menu>
                    </div>
                  </div>
                </Header>
            </Layout>
            <Layout>
              <Content>
                  <Route exact path="/" component={Home}></Route>
                  <Route exact path="/Product" component={Product}></Route>
                  <Route exact path="/Support" component={Support}></Route>
                  <Route exact path="/About" component={About}></Route>
                </Content>
            </Layout>
        </Router> 
      </div>
    );
  }
}

export default App;
