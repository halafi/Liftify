// @flow strict
import * as React from 'react';
import firebase from 'react-native-firebase';

type Props = {|
  children: React.Node,
|};

type State = {|
  email: string,
  password: string,
  user: ?any,
  error: ?string,
  loading: boolean,
|};

type AuthContext = {|
  user: ?any,
  login: (string, string) => void,
  logout: () => void,
  change: ('email' | 'password', string) => void,
  error: ?string,
  loading: boolean,
  email: string,
  password: string,
|};

const { Consumer, Provider } = React.createContext(
  ({
    user: null,
    login: () => {},
    logout: () => {},
    change: () => {},
    error: null,
    loading: false,
    email: '',
    password: '',
  }: AuthContext),
);

class AuthProvider extends React.PureComponent<Props, State> {
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
    const { children } = this.props;

    return (
      <Provider
        value={{
          user,
          login: this.handleLogin,
          logout: this.handleLogout,
          change: this.handleChange,
          error,
          loading,
          email,
          password,
        }}
      >
        {children}
      </Provider>
    );
  }
}

export { Consumer, AuthProvider as Provider };
