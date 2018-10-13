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
  deleteUser: () => void,
  change: ('email' | 'password', string) => void,
  error: ?string,
  loading: boolean,
  email: string,
  password: string,
  credential: ?any,
|};

const { Consumer, Provider } = React.createContext(
  ({
    user: null,
    login: () => {},
    logout: () => {},
    change: () => {},
    deleteUser: () => {},
    error: null,
    credential: null,
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
      credential: null,
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
      error: null,
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
    const { email, password } = this.state;
    const credential = firebase.auth.EmailAuthProvider.credential(email, password);

    this.setState({
      error: null,
      loading: false,
      email: '',
      password: '',
      credential,
    });
  };

  handleLoginFail = err => {
    this.setState({
      error: `Authentication failed: ${err.message}`,
      loading: false,
    });
  };

  handleDeleteUser = () => {
    const user = firebase.auth().currentUser;
    const { credential } = this.state;
    if (credential) {
      user.reauthenticateWithCredential(credential).then(() => user.delete());
    }
  };

  render() {
    const { user, email, password, error, loading, credential } = this.state;
    const { children } = this.props;

    return (
      <Provider
        value={{
          user,
          login: this.handleLogin,
          logout: this.handleLogout,
          change: this.handleChange,
          deleteUser: this.handleDeleteUser,
          error,
          loading,
          email,
          password,
          credential,
        }}
      >
        {children}
      </Provider>
    );
  }
}

export { Consumer, AuthProvider as Provider };
