interface UserProviderProps {
  children: React.ReactNode;
}

const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  return <UserContext.Provider>{children}</UserContext.Provider>;
};

export default UserProvider;
