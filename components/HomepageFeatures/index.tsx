import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import Translate from '@docusaurus/Translate';

type FeatureItem = {
  title: JSX.Element;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: (<Translate>Easy to Use</Translate>),
    Svg: require('@site/static/img/Easy to Use.svg').default,
    description: (
        <Translate id='textDesc1'>
          The use of the module is extremely easy, since it is widely available in pip package managers. 
          Thus, its installation and execution are simplified, making the process much more accessible for any user.
        </Translate>
    ),
  },
  {
    title: (<Translate>Developed in python</Translate>),
    Svg: require('@site/static/img/python-AISP.svg').default,
    description: (
        <Translate id='textDesc2'>
          AISP is developed in Python, a widely used language in the machine learning community. 
          This provides excellent availability and familiarity to users and collaborators, as they are accustomed to working with this programming language.
        </Translate>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--6')}>
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
