import React, {
  ReactNode,
  createContext,
  useContext,
  useState,
  useEffect,
} from 'react'
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth'
import { IUser, storage } from '@globalState'

interface AuthProps {
  children: ReactNode
}

interface IAthContextData {
  user: IUser
  signInWithEmail: (email: string, password: string) => Promise<void>
  // signInWithGoogle(): Promise<void>
  // signInWithApple(): Promise<void>
  signOut(): Promise<void>
  userStorageLoading: boolean
  error: string
  setError: (error: string) => void
}

const AuthContext = createContext({} as IAthContextData)

function AuthProvider({ children }: AuthProps) {
  const [userState, setUserState] = useState<IUser>({} as IUser)
  const [userStorageLoading, setUserStorageLoading] = useState(true)
  const [error, setError] = useState('')

  async function signInWithEmail(email: string, password: string) {
    const { user }: FirebaseAuthTypes.UserCredential =
      await auth().signInWithEmailAndPassword(email, password)
    const userLogged = {
      displayName: user.displayName,
      email: user.email,
      id: user.uid,
      photoURL: user.photoURL,
    }

    setUserState(userLogged)
    storage.set('user', JSON.stringify(userLogged))
  }

  // async function signInWithGoogle() {
  //   try {
  //     const RESPONSE_TYPE = 'token'
  //     const SCOPE = encodeURI('profile email')

  //     const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`

  //     const { type, params } = (await AuthSession.startAsync({
  //       authUrl,
  //     })) as AutorizationResponse

  //     if (type === 'success') {
  //       const response = await fetch(
  //         `https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${params.access_token}`,
  //       )

  //       const userInfo = await response.json()
  //       const userLogged = {
  //         id: userInfo.id,
  //         email: userInfo.email,
  //         name: userInfo.name,
  //         photo: userInfo.picture,
  //       }
  //       setUser(userLogged)
  //       await AsyncStorage.setItem(userStorageKey, JSON.stringify(userLogged))
  //       createUser(userLogged)
  //     }
  //   } catch (error) {
  //     throw new Error(error)
  //   }
  // }

  // async function signInWithApple() {
  //   console.log('signInWithApple')
  //   try {
  //     const credential = await AppleAuthentication.signInAsync({
  //       requestedScopes: [
  //         AppleAuthentication.AppleAuthenticationScope.FULL_NAME,
  //         AppleAuthentication.AppleAuthenticationScope.EMAIL,
  //       ],
  //     })

  //     if (credential) {
  //       const userLogged = {
  //         id: String(credential.user),
  //         email: credential.email!,
  //         name: credential.fullName?.givenName!,
  //         photo: `https://ui-avatars.com/api/?name=${credential.fullName
  //           ?.givenName!}&length=1`,
  //       }
  //       setUser(userLogged)
  //       await AsyncStorage.setItem(userStorageKey, JSON.stringify(userLogged))
  //     }
  //   } catch (error) {
  //     throw new Error(error)
  //   }
  // }

  async function loadUserStorageDate() {
    const userStorage = await storage.getString('user')
    if (userStorage) {
      const userLogged = JSON.parse(userStorage) as IUser
      setUserState(userLogged)
    }
    setUserStorageLoading(false)
  }

  async function signOut() {
    setUserState({} as IUser)
    await storage.set('user', '')
  }

  useEffect(() => {
    loadUserStorageDate()
  }, [])

  return (
    <AuthContext.Provider
      value={{
        user: userState,
        signInWithEmail,
        // signInWithGoogle,
        // signInWithApple,
        signOut,
        userStorageLoading,
        error,
        setError,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

function useAuth() {
  const context = useContext(AuthContext)
  return context
}

export { AuthProvider, useAuth }
