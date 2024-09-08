import { useState, useContext, createContext, type PropsWithChildren } from 'react';
import { useStorageState } from './useStorageState';

// interface IContext {
//   signIn: (user: string) => void;
//   signOut: () => void;
//   session?: string | null;
//   isLoading: boolean;
// }

const AuthContext = createContext<any>({
  signIn: () => null,
  signOut: () => null,
  session: null,
  isLoading: false,
});

// This hook can be used to access the user info.
export function useSession() {
  const value = useContext(AuthContext);
  if (process.env.NODE_ENV !== 'production') {
    if (!value) {
      throw new Error('useSession must be wrapped in a <SessionProvider />');
    }
  }

  return value;
}

export function SessionProvider({ children }: PropsWithChildren) {
  const [[isLoading, session], setSession] = useStorageState('session');
  // const [session, setSession] = useState('');
  // const [isLoading, setLoading] = useState(false);

  return (
    <AuthContext.Provider
      value={{
        signIn: (user: any) => {
          setSession(user);
        },
        signOut: () => {
          setSession('');
        },
        session,
        setSession,
        isLoading
      }}>
      {children}
    </AuthContext.Provider>
  );
}
