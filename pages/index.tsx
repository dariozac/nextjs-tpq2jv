import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { nameState } from '../state/atoms/name';
import { nameLength } from '../state/selectors/name';
import { useRecoilState, useRecoilValue } from 'recoil';

export default function Home() {
  const [name, setName] = useRecoilState(nameState);
  const nameLengthNumber = useRecoilValue(nameLength);

  const onNameChange = (event) => {
    setName(event.target.value);
  };
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App {name}</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js! {name}</a>
        </h1>
        <div style={{ fontSize: 'large' }}>
          <input onChange={onNameChange} />
          {nameLengthNumber}
        </div>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h3>Documentation &rarr;</h3>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h3>Learn &rarr;</h3>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h3>Examples &rarr;</h3>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h3>Deploy &rarr;</h3>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
        </a>
      </footer>
    </div>
  );
}
