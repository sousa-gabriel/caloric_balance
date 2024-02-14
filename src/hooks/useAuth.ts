import auth from '@react-native-firebase/auth'

export function useAuth() {
  function loginWithEmail(email: string, password: string) {
    return auth().signInWithEmailAndPassword(email, password)
  }

  function registerWithEmail(email: string, password: string) {
    return auth().createUserWithEmailAndPassword(email, password)
  }

  function forgotPassword(email: string) {
    return auth().sendPasswordResetEmail(email)
  }

  return { loginWithEmail, registerWithEmail, forgotPassword }
}
