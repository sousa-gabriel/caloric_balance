import { useAuthStore } from '@globalState'
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth'

export function useAuth() {
  const { setUser } = useAuthStore()

  async function loginWithEmail(email: string, password: string) {
    const { user }: FirebaseAuthTypes.UserCredential =
      await auth().signInWithEmailAndPassword(email, password)
    if (user) {
      setUser({
        displayName: user.displayName,
        email: user.email,
        id: user.uid,
        photoURL: user.photoURL,
      })
    }
  }

  async function registerWithEmail(
    email: string,
    password: string,
    username: string,
  ) {
    await auth()
      .createUserWithEmailAndPassword(email, password)
      .then(async () => {
        await auth().currentUser?.updateProfile({ displayName: username })
      })
  }

  function forgotPassword(email: string) {
    return auth().sendPasswordResetEmail(email)
  }

  return { loginWithEmail, registerWithEmail, forgotPassword }
}
