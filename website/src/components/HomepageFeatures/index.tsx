import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: '简单易用',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        项目使用简单，开源发布到npm，<br/>使用时通过<code>npm install</code>安装即可使用
      </>
    ),
  },
  {
    title: '场景实用',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        项目针对开发日常基础场景，提供丰富的css片段、React组件、工具函数、react hooks等<br/>
      </>
    ),
  },
  {
    title: '质量保证',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        项目使用 TypeScript 构建，提供完整的类型定义，确保项目质量；
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
