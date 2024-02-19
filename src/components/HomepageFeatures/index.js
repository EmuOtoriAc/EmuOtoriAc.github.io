import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';



const FeatureList = [
  {
    title: '赋能AI',
    Png: require('@site/static/img/home_ai.png').default,
    description: (
      <>
        基于深度学习，实现自动化特征提取和模式识别，目标大规模数据的高效处理和智能分析。
      </>
    ),
  },
  {
    title: '专注当下',
    Png: require('@site/static/img/home_safety.png').default,
    description: (
      <>
        我们组织聚焦当下，致力于通过技术创新和社会责任，为改善社会问题和提升人类福祉做出贡献。
      </>
    ),
  },
  {
    title: '二次元',
    Png: require('@site/static/img/home_acg.png').default,
    description: (
      <>
        基于二次元的设计，让二次元不仅仅是二次元。
      </>
    ),
  },
];

function Feature({Png, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        {/* Update the component and className used */}
        <img src={Png} className={styles.featureImg} alt={title} width="200"/>
      </div>
      <p></p>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
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
