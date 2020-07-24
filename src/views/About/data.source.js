import React from 'react';

export const Banner30DataSource = {
  wrapper: { className: 'banner3' },
  textWrapper: {
    className: 'banner3-text-wrapper',
    children: [
      {
        name: 'nameEn',
        className: 'banner3-name-en',
        children: 'Seeking Experience & Engineering Conference',
      },
      {
        name: 'slogan',
        className: 'banner3-slogan',
        children: '首届蚂蚁金服体验科技大会',
        texty: true,
      },
      {
        name: 'name',
        className: 'banner3-name',
        children: '探索极致用户体验与最佳工程实践探索',
      },
      {
        name: 'button',
        className: 'banner3-button',
        children: (
          <span>
            加入我们
          </span>
        ),
      },
      {
        name: 'time',
        className: 'banner3-time',
        children: (
          <span>
            <p>2020.07.06 / 中国·广州</p>
          </span>
        ),
      },
    ],
  },
};
export const Teams00DataSource = {
  wrapper: { className: 'home-page-wrapper teams0-wrapper' },
  OverPack: { playScale: 0.3, className: 'home-page teams0' },
  BannerAnim: {
    className: 'banner-anim',
    children: [
      {
        name: 'elem0',
        className: 'teams0-banner-user-elem',
        titleWrapper: {
          className: 'teams0-content-wrapper',
          children: [
            {
              name: 'image',
              children:
                'https://gw.alipayobjects.com/mdn/rms_ae7ad9/afts/img/A*njqxS5Ky7CQAAAAAAAAAAABjARQnAQ',
              className: 'teams0-image',
            },
            {
              name: 'content',
              children:
                'SEE = Seeking Experience & Engineering，意为探索用户体验与工程实践，由蚂蚁金服集团每年举办 1-2 次，包括专业分享、产品展台、Workshop 等内容。',
              className: 'teams0-content',
            },
            { name: 'title', children: '韩勇', className: 'teams0-h1' },
            {
              name: 'content2',
              children: '公司+职位 信息暂缺',
              className: 'teams0-content',
            },
          ],
        },
      },
      {
        name: 'elem1',
        className: 'teams0-banner-user-elem',
        titleWrapper: {
          className: 'teams0-content-wrapper',
          children: [
            {
              name: 'image',
              children:
                'https://gw.alipayobjects.com/mdn/rms_ae7ad9/afts/img/A*--rVR4hclJYAAAAAAAAAAABjARQnAQ',
              className: 'teams0-image',
            },
            {
              name: 'content',
              children:
                'SEE = Seeking Experience & Engineering，意为探索用户体验与工程实践，由蚂蚁金服集团每年举办 1-2 次，包括专业分享、产品展台、Workshop 等内容。',
              className: 'teams0-content',
            },
            { name: 'title', children: '叶秀英', className: 'teams0-h1' },
            {
              name: 'content2',
              children: '公司+职位 信息暂缺',
              className: 'teams0-content',
            },
          ],
        },
      },
    ],
  },
};
export const Teams20DataSource = {
  wrapper: { className: 'home-page-wrapper teams2-wrapper' },
  page: { className: 'home-page teams2' },
  OverPack: { playScale: 0.3, className: '' },
  titleWrapper: {
    className: 'title-wrapper',
    children: [{ name: 'title', children: '团队成员' }],
  },
  block: {
    className: 'block-wrapper',
    gutter: 72,
    children: [
      {
        name: 'block0',
        className: 'block',
        md: 8,
        xs: 24,
        image: {
          name: 'image',
          className: 'teams2-image',
          children:
            'https://gw.alipayobjects.com/mdn/rms_ae7ad9/afts/img/A*--rVR4hclJYAAAAAAAAAAABjARQnAQ',
        },
        titleWrapper: {
          className: 'teams2-textWrapper',
          children: [
            { name: 'title', className: 'teams2-title', children: '叶秀英' },
            {
              name: 'content',
              className: 'teams2-job',
              children: '公司+职位 信息暂缺',
            },
            {
              name: 'content1',
              className: 'teams2-content',
              children: 'AntV 是蚂蚁金服全新一代数据可视化解决方案。',
            },
          ],
        },
      },
      {
        name: 'block1',
        className: 'block',
        md: 8,
        xs: 24,
        image: {
          name: 'image',
          className: 'teams2-image',
          children:
            'https://gw.alipayobjects.com/mdn/rms_ae7ad9/afts/img/A*njqxS5Ky7CQAAAAAAAAAAABjARQnAQ',
        },
        titleWrapper: {
          className: 'teams2-textWrapper',
          children: [
            { name: 'title', className: 'teams2-title', children: '韩勇' },
            {
              name: 'content',
              className: 'teams2-job',
              children: '公司+职位 信息暂缺',
            },
            {
              name: 'content1',
              className: 'teams2-content',
              children: '语雀是一款优雅高效的在线文档编辑与协同工具。',
            },
          ],
        },
      },
      {
        name: 'block2',
        className: 'block',
        md: 8,
        xs: 24,
        image: {
          name: 'image',
          className: 'teams2-image',
          children:
            'https://gw.alipayobjects.com/mdn/rms_ae7ad9/afts/img/A*--rVR4hclJYAAAAAAAAAAABjARQnAQ',
        },
        titleWrapper: {
          className: 'teams2-textWrapper',
          children: [
            { name: 'title', className: 'teams2-title', children: '叶秀英' },
            {
              name: 'content',
              className: 'teams2-job',
              children: '公司+职位 信息暂缺',
            },
            {
              name: 'content1',
              className: 'teams2-content',
              children: 'AntV 是蚂蚁金服全新一代数据可视化解决方案。',
            },
          ],
        },
      },
      {
        name: 'block3',
        className: 'block',
        md: 8,
        xs: 24,
        image: {
          name: 'image',
          className: 'teams2-image',
          children:
            'https://gw.alipayobjects.com/mdn/rms_ae7ad9/afts/img/A*--rVR4hclJYAAAAAAAAAAABjARQnAQ',
        },
        titleWrapper: {
          className: 'teams2-textWrapper',
          children: [
            { name: 'title', className: 'teams2-title', children: '叶秀英' },
            {
              name: 'content',
              className: 'teams2-job',
              children: '公司+职位 信息暂缺',
            },
            {
              name: 'content1',
              className: 'teams2-content',
              children: 'AntV 是蚂蚁金服全新一代数据可视化解决方案。',
            },
          ],
        },
      },
      {
        name: 'block4',
        className: 'block',
        md: 8,
        xs: 24,
        image: {
          name: 'image',
          className: 'teams2-image',
          children:
            'https://gw.alipayobjects.com/mdn/rms_ae7ad9/afts/img/A*njqxS5Ky7CQAAAAAAAAAAABjARQnAQ',
        },
        titleWrapper: {
          className: 'teams2-textWrapper',
          children: [
            { name: 'title', className: 'teams2-title', children: '韩勇' },
            {
              name: 'content',
              className: 'teams2-job',
              children: '公司+职位 信息暂缺',
            },
            {
              name: 'content1',
              className: 'teams2-content',
              children: '语雀是一款优雅高效的在线文档编辑与协同工具。',
            },
          ],
        },
      },
      {
        name: 'block5',
        className: 'block',
        md: 8,
        xs: 24,
        image: {
          name: 'image',
          className: 'teams2-image',
          children:
            'https://gw.alipayobjects.com/mdn/rms_ae7ad9/afts/img/A*--rVR4hclJYAAAAAAAAAAABjARQnAQ',
        },
        titleWrapper: {
          className: 'teams2-textWrapper',
          children: [
            { name: 'title', className: 'teams2-title', children: '叶秀英' },
            {
              name: 'content',
              className: 'teams2-job',
              children: '公司+职位 信息暂缺',
            },
            {
              name: 'content1',
              className: 'teams2-content',
              children: 'AntV 是蚂蚁金服全新一代数据可视化解决方案。',
            },
          ],
        },
      },
      {
        name: 'block6',
        className: 'block',
        md: 8,
        xs: 24,
        image: {
          name: 'image',
          className: 'teams2-image',
          children:
            'https://gw.alipayobjects.com/mdn/rms_ae7ad9/afts/img/A*--rVR4hclJYAAAAAAAAAAABjARQnAQ',
        },
        titleWrapper: {
          className: 'teams2-textWrapper',
          children: [
            { name: 'title', className: 'teams2-title', children: '叶秀英' },
            {
              name: 'content',
              className: 'teams2-job',
              children: '公司+职位 信息暂缺',
            },
            {
              name: 'content1',
              className: 'teams2-content',
              children: 'AntV 是蚂蚁金服全新一代数据可视化解决方案。',
            },
          ],
        },
      },
      {
        name: 'block7',
        className: 'block',
        md: 8,
        xs: 24,
        image: {
          name: 'image',
          className: 'teams2-image',
          children:
            'https://gw.alipayobjects.com/mdn/rms_ae7ad9/afts/img/A*njqxS5Ky7CQAAAAAAAAAAABjARQnAQ',
        },
        titleWrapper: {
          className: 'teams2-textWrapper',
          children: [
            { name: 'title', className: 'teams2-title', children: '韩勇' },
            {
              name: 'content',
              className: 'teams2-job',
              children: '公司+职位 信息暂缺',
            },
            {
              name: 'content1',
              className: 'teams2-content',
              children: '语雀是一款优雅高效的在线文档编辑与协同工具。',
            },
          ],
        },
      },
      {
        name: 'block8',
        className: 'block',
        md: 8,
        xs: 24,
        image: {
          name: 'image',
          className: 'teams2-image',
          children:
            'https://gw.alipayobjects.com/mdn/rms_ae7ad9/afts/img/A*--rVR4hclJYAAAAAAAAAAABjARQnAQ',
        },
        titleWrapper: {
          className: 'teams2-textWrapper',
          children: [
            { name: 'title', className: 'teams2-title', children: '叶秀英' },
            {
              name: 'content',
              className: 'teams2-job',
              children: '公司+职位 信息暂缺',
            },
            {
              name: 'content1',
              className: 'teams2-content',
              children: 'AntV 是蚂蚁金服全新一代数据可视化解决方案。',
            },
          ],
        },
      },
    ],
  },
};
export const Contact00DataSource = {
  wrapper: {
    className: 'home-page-wrapper content10-wrapper kcydx4h769m-editor_css',
  },
  Content: {
    className: 'icon-wrapper',
    children: {
      icon: {
        className: 'icon',
        children:
          'https://gw.alipayobjects.com/zos/rmsportal/zIUVomgdcKEKcnnQdOzw.svg',
        name: '主要图标',
      },
      iconShadow: {
        className: 'icon-shadow',
        children:
          'https://gw.alipayobjects.com/zos/rmsportal/WIePwurYppfVvDNASZRN.svg',
        name: '图标影阴',
      },
      url: { children: 'https://gaode.com/place/B0FFH3KPBX', name: '跳转地址' },
      title: { children: '大会地址', name: '弹框标题' },
      content: {
        children: '蚂蚁 Z 空间  浙江省杭州市西湖区西溪路556号',
        name: '弹框内容',
      },
    },
  },
};