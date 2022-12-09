import { useToast } from '@chakra-ui/react';
const styles = {
  container: {
    minHeight: 'calc(100vh - 50px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 500,
    fontSize: 48,
    textAlign: 'center',
  },
};

//

const Success = () => {
  const toast = useToast();
  toast({
    title: 'Account created.',
    description: "We've created your account for you.",
    status: 'success',
    duration: 2000,
    isClosable: true,
  });
};

const Home = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>
        You'r contacts welcome page{' '}
        <span role="img" aria-label="Greeting icon">
          💁‍♀️
        </span>
      </h1>
      <Success />
    </div>
  );
};
export default Home;
