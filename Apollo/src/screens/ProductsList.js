import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import HeaderIconButton from '../components/HeaderIconButton';
import {AuthContext} from '../contexts/AuthContex';
import Loading from '../components/Loading';

function ProductsList({navigation}) {
  const [loading, setLoading] = React.useState(false);
  const {logout} = React.useContext(AuthContext);

  React.useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <HeaderIconButton
          name={'log-out'}
          color={'red'}
          style={styles.headerIcon}
          onPress={() => {
            setLoading(true);
            logout();
          }}
        />
      ),
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Loading loading={loading} />
      <Text>Home</Text>
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
  headerIcon: {
    marginHorizontal: 15,
    transform: [{rotate: '-180deg'}],
  },
});
export default ProductsList;
