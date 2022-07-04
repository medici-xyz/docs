import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '751'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', 'f8a'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'fdc'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'fb1'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', 'cb9'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '3f1'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '08a'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog', '44d'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', 'f92'),
    exact: true
  },
  {
    path: '/blog/first-blog-post',
    component: ComponentCreator('/blog/first-blog-post', 'b5f'),
    exact: true
  },
  {
    path: '/blog/long-blog-post',
    component: ComponentCreator('/blog/long-blog-post', 'a22'),
    exact: true
  },
  {
    path: '/blog/mdx-blog-post',
    component: ComponentCreator('/blog/mdx-blog-post', '9ea'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', '488'),
    exact: true
  },
  {
    path: '/blog/tags/docusaurus',
    component: ComponentCreator('/blog/tags/docusaurus', 'e51'),
    exact: true
  },
  {
    path: '/blog/tags/facebook',
    component: ComponentCreator('/blog/tags/facebook', '70f'),
    exact: true
  },
  {
    path: '/blog/tags/hello',
    component: ComponentCreator('/blog/tags/hello', 'c0c'),
    exact: true
  },
  {
    path: '/blog/tags/hola',
    component: ComponentCreator('/blog/tags/hola', '9f1'),
    exact: true
  },
  {
    path: '/blog/welcome',
    component: ComponentCreator('/blog/welcome', '3fa'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '1bb'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', 'efe'),
    routes: [
      {
        path: '/docs/category/designing-a-launch-',
        component: ComponentCreator('/docs/category/designing-a-launch-', '0b8'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/distribution-',
        component: ComponentCreator('/docs/category/distribution-', 'e38'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/minting-️',
        component: ComponentCreator('/docs/category/minting-️', '086'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Distribution/create-claim-page',
        component: ComponentCreator('/docs/Distribution/create-claim-page', '07c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/How-To-Design-Your-Launch/allow-lists',
        component: ComponentCreator('/docs/How-To-Design-Your-Launch/allow-lists', 'b01'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/How-To-Design-Your-Launch/overview',
        component: ComponentCreator('/docs/How-To-Design-Your-Launch/overview', 'ed1'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/intro',
        component: ComponentCreator('/docs/intro', 'aed'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Minting/collection-tutorial',
        component: ComponentCreator('/docs/Minting/collection-tutorial', 'f30'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Minting/overview',
        component: ComponentCreator('/docs/Minting/overview', '11d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Minting/pfp-tutorial',
        component: ComponentCreator('/docs/Minting/pfp-tutorial', '250'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '8b1'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
