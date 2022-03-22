import React from 'react'

export type Children = { children: React.ReactNode }

type AuthContextT = {
  authToken: string | null;
  setAuthToken: React.Dispatch<React.SetStateAction<string | null>>;
}
const defaultToken: AuthContextT = {
  authToken: '' || null,
  setAuthToken: () => { },
}

const AuthContext = React.createContext<AuthContextT>(defaultToken)

const AuthProvider = ({ children }: Children) => {
  const [
    authToken, setAuthToken,
  ] = React.useState<string | null>('')

  return (
    <AuthContext.Provider value={{
      authToken,
      setAuthToken
    }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export { AuthProvider, AuthContext }