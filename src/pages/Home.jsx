import { Helmet } from 'react-helmet';

const styles = {
  container: {
    minHeight: 'calc(100vh - 50px)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 500,
    fontSize: 48,
    textAlign: 'center',
  },
};

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Welcome</title>
      </Helmet>
      <div style={styles.container}>
        <h1 style={styles.title}>Phonebook welcome page</h1>
        <img
          style={styles.img}
          src="https://www.iconpacks.net/icons/2/free-opened-book-icon-3163-thumb.png"
          alt="number book"
          width={300}
        />
      </div>
    </>
  );
}
