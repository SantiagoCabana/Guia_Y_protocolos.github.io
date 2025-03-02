import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

// Importar imágenes PNG correctamente
import mountainImg from '@site/static/img/logo-practis.png';
import treeImg from '@site/static/img/logoCrapticaWeb.png';
import jnvlogoImg from '@site/static/img/jnvlogo.png';

const FeatureList = [
  {
    title: 'Practis Sac',
    imgSrc: mountainImg, // Usar la imagen PNG importada
    description: (
      <>
        Docusaurus was designed from the ground up to be easily installed and
        used to get your website up and running quickly.
      </>
    ),
  },
  {
    title: 'Craptica',
    imgSrc: treeImg,
    description: (
      <>
        Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
        ahead and move your docs into the <code>docs</code> directory.
      </>
    ),
  },
  {
    title: 'JNV CONSULTORES SAC',
    imgSrc: jnvlogoImg,
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
      </>
    ),
  },
];

// Componente modificado para usar <img> en lugar de un componente SVG
function Feature({ imgSrc, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img src={imgSrc} alt={title} className={styles.featureImg} />
      </div>
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
