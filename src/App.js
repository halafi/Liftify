// @flow strict
import React from 'react';
import firebase from 'react-native-firebase';
import styled from 'styled-components';
import { Text, View } from 'react-native';
import RequireAuth from './components/RequireAuth/index';
import Button from './components/Button/index';

const Flex = styled(View)`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const StyledView = styled(View)`
  flex: 1;
  background-color: #fff;
`;

const Title = styled(View)`
  justify-content: center;
  align-items: center;
  padding: 12px 0;
  background-color: #001f3f;
`;

const TitleText = styled(Text)`
  color: white;
  font-size: 24px;
`;

const SubTitleText = styled(Text)`
  color: white;
  font-size: 14px;
`;

const Body = styled(View)`
  margin-bottom: 20px;
  padding: 10px;
`;

// const Messages = styled(ScrollView).attrs({
//   contentContainerStyle: {
//     paddingVertical: 20,
//   },
//   bounces: true,
// })`
//   max-height: 200px;
//   margin: 10px 0;
// `;

type State = {
  email: string,
  password: string,
  user: ?any,
  error: ?string,
  loading: boolean,
};

export default class App extends React.Component<{}, State> {
  constructor() {
    super();
    this.unsubscriber = null;
    this.state = {
      user: null,
      email: '',
      password: '',
      error: null,
      loading: false,
    };
  }

  componentDidMount() {
    this.unsubscriber = firebase.auth().onAuthStateChanged(user => {
      this.setState({ user });
    });
  }

  componentWillUnmount() {
    if (this.unsubscriber) {
      this.unsubscriber();
    }
  }

  handleChange = (field: 'email' | 'password', value: string): void => {
    this.setState({
      [field]: value,
    });
  };

  handleLogin = () => {
    const { email, password } = this.state;
    this.setState({
      error: '',
      loading: true,
    });

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(this.handleLoginSuccess)
      .catch(() => {
        firebase
          .auth()
          .createUserWithEmailAndPassword(email, password)
          .then(this.handleLoginSuccess)
          .catch(this.handleLoginFail);
      });
  };

  handleLogout = () => firebase.auth().signOut();

  handleLoginSuccess = () => {
    this.setState({
      error: '',
      loading: false,
      email: '',
      password: '',
    });
  };

  handleLoginFail = err => {
    this.setState({
      error: `Authentication failed: ${err.message}`,
      loading: false,
    });
  };

  render() {
    const { user, email, password, error, loading } = this.state;
    const disabled = loading || !email.length || !password.length;

    return (
      <StyledView>
        <Title>
          <TitleText>Liftify 🏋️‍♂️</TitleText>
          <Flex>
            <SubTitleText>Simple progress tracker</SubTitleText>
          </Flex>
        </Title>
        <Body>
          {!user && (
            <RequireAuth
              user={user}
              email={email}
              password={password}
              error={error}
              disabled={disabled}
              onChange={this.handleChange}
              onLogin={this.handleLogin}
            />
          )}
          {user && (
            <View>
              <Button onPress={this.handleLogout}>Logout</Button>
            </View>
          )}
        </Body>
      </StyledView>
    );
  }
}
