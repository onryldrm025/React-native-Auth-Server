import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Heading from '../components/Heading';
import Input from '../components/Input';
import BottomButton from '../components/BottomButton';
import TextButton from '../components/TextButton';
import Error from '../components/Error';
import {AuthContext} from '../contexts/AuthContex';
import Loading from '../components/Loading';

function LoginScreen({navigation}) {
  const {login} = React.useContext(AuthContext);
  const [email, setEmail] = React.useState('Onr@hotmail.com');
  const [password, setPassword] = React.useState('Onur123');
  const [error, setError] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  return (
    <View style={styles.container}>
      <Heading>Login</Heading>
      <Error error={error} />
      <Input
        keyboardType={'email-address'}
        style={styles.input}
        placeholder={'Email'}
        value={email}
        onChangeText={setEmail}
      />
      <Input
        secureTextEntry={true}
        style={styles.input}
        placeholder={'Password'}
        value={password}
        onChangeText={setPassword}
      />
      <BottomButton
        title={'Sing up'}
        style={styles.bottomButton}
        onPress={async () => {
          try {
            setLoading(true);
            await login(email, password);
          } catch (e) {
            setLoading(false);
            setError(e.message);
          }
        }}
      />
      <TextButton
        onPress={() => navigation.navigate('Register')}
        style={styles.textButton}>
        Do you haven't account
      </TextButton>
      <Loading loading={loading} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 100,
    alignItems: 'center',
    padding: 20,
  },
  input: {
    marginVertical: 10,
  },
  bottomButton: {
    marginVertical: 20,
  },
  textButton: {
    marginVertical: 10,
  },
});
export default LoginScreen;
