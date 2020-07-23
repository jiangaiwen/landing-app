import React from 'react';
import { Link } from 'react-router-dom';

// nav
export const NavDataSource = {
    wrapper: { className: 'header3 home-page-wrapper' },
    page: { className: 'home-page' },
    logo: {
        className: 'header3-logo',
        children:
            'https://gw.alipayobjects.com/zos/basement_prod/b30cdc2a-d91c-4c78-be9c-7c63b308d4b3.svg',
    },
    Menu: {
        className: 'header3-menu',
        children: [{
            name: 'item0',
            className: 'header3-item',
            children: {
                href: '#',
                children: [{
                    children: (
                        <span>
                            <p>
                                <Link to="/">首页</Link>
                            </p>
                        </span>
                    ),
                    name: 'text'
                }]
            },
            // subItem: [{
            //     name: 'sub0',
            //     className: 'item-sub',
            //     children: {
            //         className: 'item-sub-item',
            //         children: [{
            //             name: 'image0',
            //             className: 'item-image',
            //             children:
            //             'https://gw.alipayobjects.com/zos/rmsportal/ruHbkzzMKShUpDYMEmHM.svg',
            //         }, {
            //             name: 'title',
            //             className: 'item-title',
            //             children: 'Ant Design'
            //         }, {
            //             name: 'content',
            //             className: 'item-content',
            //             children: '企业级 UI 设计体系'
            //         }]
            //     }
            // }, {
            //     name: 'sub1',
            //     className: 'item-sub',
            //     children: {
            //         className: 'item-sub-item',
            //         children: [{
            //             name: 'image0',
            //             className: 'item-image',
            //             children:
            //             'https://gw.alipayobjects.com/zos/rmsportal/ruHbkzzMKShUpDYMEmHM.svg',
            //         }, {
            //             name: 'title',
            //             className: 'item-title',
            //             children: 'Ant Design'
            //         }, {
            //             name: 'content',
            //             className: 'item-content',
            //             children: '企业级 UI 设计体系'
            //         }]
            //     }
            // }]
        }, {
            name: 'item1',
            className: 'header3-item',
            children: {
                href: '#',
                children: [{
                    children: (
                        <span>
                            <p>
                                <Link to="/product">产品展示</Link>
                            </p>
                        </span>
                    ),
                    name: 'text'
                }]
            }
        }, {
            name: 'item2',
            className: 'header3-item',
            children: {
                href: '#',
                children: [{
                    children: (
                        <span>
                            <p>
                                {/* <span style={navStyle}>
                                    技术支持
                                </span>
                                <br /> */}
                                <Link to="/support">技术支持</Link>
                            </p>
                        </span>
                    ),
                    name: 'text'
                }]
            }
        }, {
            name: 'item3',
            className: 'header3-item',
            children: {
                href: '#',
                children: [{
                    children: (
                    <span>
                        <p>
                            <Link to="/about">关于我们</Link>
                        </p>
                    </span>
                    ),
                    name: 'text',
                }]
            }
        }]
    },
    mobileMenu: { className: 'header3-mobile-menu' },
};

// footer
export const FooterDataSource = {
    wrapper: { className: 'home-page-wrapper footer1-wrapper' },
    OverPack: { className: 'footer1', playScale: 0.2 },
    block: {
        className: 'home-page',
        gutter: 0,
        children: [{
            name: 'block0',
            xs: 24,
            md: 6,
            className: 'block',
            title: {
            className: 'logo',
            children:
                'https://zos.alipayobjects.com/rmsportal/qqaimmXZVSwAhpL.svg',
            },
            childWrapper: {
                className: 'slogan',
                children: [{
                    name: 'content0',
                    children: 'Animation specification and components of Ant Design.',
                }]
            }
        }, {
            name: 'block1',
            xs: 24,
            md: 6,
            className: 'block',
            title: { children: '产品' },
            childWrapper: {
                children: [
                    { name: 'link0', href: '#', children: '产品更新记录' },
                    { name: 'link1', href: '#', children: 'API文档' },
                    { name: 'link2', href: '#', children: '快速入门' },
                    { name: 'link3', href: '#', children: '参考指南' },
                ]
            }
        }, {
            name: 'block2',
            xs: 24,
            md: 6,
            className: 'block',
            title: { children: '关于' },
            childWrapper: {
                children: [
                    { href: '#', name: 'link0', children: 'FAQ' },
                    { href: '#', name: 'link1', children: '联系我们' },
                ]
            }
        }, {
            name: 'block3',
            xs: 24,
            md: 6,
            className: 'block',
            title: { children: '资源' },
            childWrapper: {
                children: [
                    { href: '#', name: 'link0', children: 'Ant Design' },
                    { href: '#', name: 'link1', children: 'Ant Motion' },
                ]
            }
        }]
    },
    copyrightWrapper: { className: 'copyright-wrapper' },
    copyrightPage: { className: 'home-page' },
    copyright: {
        className: 'copyright',
        children: (
            <span>
                ©2020 by <a href="https://motion.ant.design">Ant Motion</a> All Rights
                Reserved
            </span>
        ),
    }
}