import React from 'react';
import Main from './src/Components/Main';
import { SafeAreaView, View } from 'react-native';
import Login from './src/Components/Login/Login';


const App = () => {
  return (
    <SafeAreaView>
      {/* <Main></Main> */}
      <Login></Login>  
    </SafeAreaView>
  );
};

export default App;
