import React, { Component } from 'react';
import TweenOne from 'rc-tween-one';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import QueueAnim from 'rc-queue-anim';
import Logo from './assets/images/logo2.svg';
import Slogan from './assets/images/slogan.svg';
import { Layout, Row, Col, Menu, BackTop } from 'antd';
import { enquireScreen } from 'enquire-js';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './views/Home';
import Product from './views/Product';
import Support from './views/Support';
import About from './views/About';
import './App.less';
const dataSource = {
    page: { className: 'home-page' }
}

let isMobile;
enquireScreen((b) => {
    isMobile = b;
});

const { Content } = Layout;

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
        const { phoneOpen } = this.state;
        const moment = phoneOpen === undefined ? 300 : null;
        return (
            <div className="App">
                <Router>
                    <Layout>
                        <TweenOne
                            component="header"
                            className={`App-header home-page-wrapper${isMobile ? '' : ' h64'}`}
                            animation={{ opacity: 0, type: 'from' }}
                        >
                            <div
                                className={`${dataSource.page.className}${phoneOpen ? ' open' : ''}`}
                            >
                                <TweenOne
                                    className="App-header-logo"
                                    animation={{ x: -30, type: 'from', ease: 'easeOutQuad' }}
                                >
                                    <img width="100%" src={Logo} className="App-logo" alt="logo" />
                                </TweenOne>
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
                                <TweenOne
                                    className={`${isMobile ? '' : 'App-header-menu'}`}
                                    animation={
                                        isMobile
                                        ? {
                                            x: 0,
                                            height: 0,
                                            duration: 300,
                                            onComplete: (e) => {
                                            if (this.state.phoneOpen) {
                                                e.target.style.height = 'auto';
                                            }
                                            },
                                            ease: 'easeInOutQuad',
                                        }
                                        : null
                                    }
                                    moment={moment}
                                    reverse={!!phoneOpen}
                                >
                                    <Menu
                                        onClick={this.handleClick}
                                        mode={isMobile ? 'inline' : 'horizontal'}
                                        selectedKeys={[current]}
                                    >
                                        <Menu.Item key="1"><Link to="/">首页</Link></Menu.Item>
                                        <Menu.Item key="2"><Link to="/Product">产品展示</Link></Menu.Item>
                                        <Menu.Item key="3"><Link to="/Support">技术支持</Link></Menu.Item>
                                        <Menu.Item key="4"><Link to="/About">关于我们</Link></Menu.Item>
                                    </Menu>
                                </TweenOne>
                            </div>
                        </TweenOne>
                    </Layout>
                    <Layout>
                        <Content>
                            <Route exact path="/" component={Home}></Route>
                            <Route exact path="/Product" component={Product}></Route>
                            <Route exact path="/Support" component={Support}></Route>
                            <Route exact path="/About" component={About}></Route>
                        </Content>
                    </Layout>

                    <div className='home-page-wrapper App-footer-wrapper'>
                        <OverPack className='footer' playScale='0.2'>
                            <QueueAnim
                                className="home-page"
                                type="bottom"
                                key="ul"
                                leaveReverse
                                component={Row}
                                >
                                <Col className="block" xs={24} md={6}>
                                    <h2 className="logo">
                                        <img src={Slogan} width="100%" alt="img" />
                                    </h2>
                                    <div className="slogan">
                                        <div>Animation specification and components of Ant Design.</div>
                                    </div>
                                </Col>
                                <Col className="block" xs={24} md={6}>
                                    <h2>产品</h2>
                                    <div>
                                        <a href="/">产品更新记录</a>
                                        <a href="/">API文档</a>
                                        <a href="/">快速入门</a>
                                        <a href="/">参考指南</a>
                                    </div>
                                </Col>
                                <Col className="block" xs={24} md={6}>
                                    <h2>关于</h2>
                                    <div>
                                        <a href="/">FAQ</a>
                                        <a href="/">联系我们</a>
                                    </div>
                                </Col>
                                <Col className="block" xs={24} md={6}>
                                    <h2>资源</h2>
                                    <div>
                                        <a href="/">Ant Design</a>
                                        <a href="/">Ant Motion</a>
                                    </div>
                                </Col>
                            </QueueAnim>
                            <TweenOne
                                animation={{ y: '+=30', opacity: 0, type: 'from' }}
                                key="copyright"
                                className='copyright-wrapper'
                                >
                                <div className='home-page'>
                                    <div className="copyright">
                                        <span>
                                            ©2020 by <a href="https://motion.ant.design">Ant Motion</a> All Rights
                                            Reserved
                                        </span>
                                    </div>
                                </div>
                            </TweenOne>
                        </OverPack>
                    </div>
                </Router> 
                <BackTop />
            </div>
        );
    }
}
  
export default App;
  