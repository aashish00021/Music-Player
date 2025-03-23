import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ 
      tabBarActiveTintColor: 'blue', 
      tabBarStyle: { 
        backgroundColor: 'black',
        borderTopWidth: 0,  // This removes the white line
        elevation: 0,  // For Android
        shadowOpacity: 0,  // For iOS
      } 
    }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'index',
          headerShown: false,
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
        }}
      />
      <Tabs.Screen
        name="library"
        options={{
          title: 'Library',
          headerShown: false,
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="folder" color={color} />,
        }}
      />
    </Tabs>
  );
}
