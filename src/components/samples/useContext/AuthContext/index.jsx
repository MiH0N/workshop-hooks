import { createContext, useContext, useState } from 'react';

const CurrentUserContext = createContext(null);

export default function AuthContext() {
  const [currentUser, setCurrentUser] = useState(null);
  return (
    <CurrentUserContext.Provider
      value={{
        currentUser,
        setCurrentUser,
      }}>
      <Form />
    </CurrentUserContext.Provider>
  );
}

function Form({ children }) {
  return (
    <Panel title='Welcome'>
      <LoginButton />
    </Panel>
  );
}

function LoginButton() {
  const { currentUser, setCurrentUser } = useContext(CurrentUserContext);

  if (currentUser !== null) {
    return (
      <div>
        <p>You logged in as {currentUser.name}.</p>
        <LogOutButton />
      </div>
    );
  }

  return (
    <Button
      onClick={() => {
        setCurrentUser({ name: 'Advika' });
      }}>
      Log in as Advika
    </Button>
  );
}

function LogOutButton() {
  const { setCurrentUser } = useContext(CurrentUserContext);

  return (
    <Button
      onClick={() => {
        setCurrentUser(null);
      }}>
      Logout
    </Button>
  );
}

function Panel({ title, children }) {
  return (
    <section className='panel'>
      <h1>{title}</h1>
      {children}
    </section>
  );
}

function Button({ children, onClick }) {
  return (
    <button className='button' onClick={onClick}>
      {children}
    </button>
  );
}
