import React, {createContext, useContext, useState} from 'react';
import BatteryContainer from './components/BatteryContainer/BatteryContainer';
import BatteryHookContainer from './components/BatteryHookContainer/BatteryHookContainer';

import BatteryOne from './components/BatteryOne/BatteryOne'

export const UserContext = createContext()

function App() {

  const [user, setUser] = useState({
    name: 'Alex',
    email: 'alex@gmail.com'
  })


  return (
    <>
    
     {/*Will provide data to all other components  */}
    <UserContext.Provider value={user}>
    
    <BatteryOne />

    </UserContext.Provider>



      {/* <BatteryContainer />
      <BatteryHookContainer /> */}
    </>
  );
}

export default App;
