
import Home from './containers/Home';
import React from 'react';
import  {AppContext}  from './context/App';
import useInitialState from './hooks/useInitialState';
function App() {
  const initialState = useInitialState();
  console.log(initialState);
  return (
    <>
    <AppContext.Provider value={initialState}>
       <Home/>
    </AppContext.Provider>
    
    </>
  );
}


export default App;
