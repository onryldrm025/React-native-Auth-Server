import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Heading from '../components/Heading';
import Input from '../components/Input';
import BottomButton from '../components/BottomButton';
import Error from '../components/Error';
import IconButton from '../components/IconButton';
import {AuthContext} from '../contexts/AuthContex';
import Loading from '../components/Loading';

function RegisterScreen({navigation}) {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [error, setError] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  const {register} = React.useContext(AuthContext);
  return (
    <View style={styles.container}>
      <Error error={error} />
      <Heading>Register</Heading>
      <IconButton
        name={'close-circle-outline'}
        style={styles.closeIcon}
        onPress={() => {
          navigation.pop();
        }}
      />
      <Error error={''} />
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
        title={'Register'}
        style={styles.bottomButton}
        onPress={async () => {
          try {
            setLoading(true);
            await register(email, password);
            navigation.pop();
          } catch (e) {
            setError(e.message);
            setLoading(false);
          }
        }}
      />
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
  closeIcon: {
    position: 'absolute',
    top: 40,
    right: 20,
  },
});
export default RegisterScreen;
