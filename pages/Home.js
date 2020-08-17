// Example: Example of SQLite Database in React Native
// https://aboutreact.com/example-of-sqlite-database-in-react-native
// Screen to view all the user*/

import React from 'react';
import { Text, View } from 'react-native';
import Mybutton from './components/Mybutton';

const Home = ({ navigation }) => {


    return (
      <View>
        <Text>สวัสดี</Text>
        <Mybutton
            title="View All"
            customClick={() => navigation.navigate('ViewAll')}
        />
      </View>
    );
};

export default Home;

