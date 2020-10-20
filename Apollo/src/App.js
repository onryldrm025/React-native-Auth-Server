import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import AuthStackNavigator from './navigators/AuthStackNavigator';
import {AuthContext} from './contexts/AuthContex';
import axios from 'axios';
import {sleep} from './utils/sleep';
import {createAction} from './config/createAction';
import MainStackNavigator from './navigators/MainStackNavigator';

const RootStack = createStackNavigator();

export default function () {
  const [state, dispatch] = React.useReducer(
    (state, action) => {
      switch (action.type) {
        case 'SET_USER':
          return {
            ...state,
            user: {...action.payload},
          };
        case 'REMOVE_USER':
          return {
            ...state,
            user: undefined,
          };
        default:
          return state;
      }
    },
    {
      user: undefined,
    },
  );
  const auth = React.useMemo(
    () => ({
      login: async (email, password) => {
        await sleep(2000);
        const {data} = await axios.post('http://localhost:1337/auth/local', {
          identifier: email,
          password: password,
        });

        const user = {
          email: data.user.email,
          token: data.jwt,
        };
        dispatch(createAction('SET_USER', user));
      },
      logout: async () => {
        await sleep(2000);
        console.log('Logout');
        dispatch(createAction('REMOVE_USER'));
      },
      register: async (email, password) => {
        await sleep(2000);
        await axios.post('http://localhost:1337/auth/local/register', {
          username: email,
          email: email,
          password: password,
        });
      },
    }),
    [],
  );

  return (
    <AuthContext.Provider value={auth}>
      <NavigationContainer>
        <RootStack.Navigator screenOptions={{headerShown: false}}>
          {state.user ? (
            <RootStack.Screen
              name={'MainStack'}
              component={MainStackNavigator}
            />
          ) : (
            <RootStack.Screen
              name={'RootStack'}
              component={AuthStackNavigator}
            />
          )}
        </RootStack.Navigator>
      </NavigationContainer>
    </AuthContext.Provider>
  );
}
