import React from 'react';
import { SafeAreaView, StatusBar, Text, View } from 'react-native';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <View>
          <Text>Hello there,</Text>
          <Text>Welcome NativeApp</Text>
        </View>
      </SafeAreaView>
    </>
  );
};

export default App;
