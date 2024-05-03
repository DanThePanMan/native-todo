import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, ScrollView, Text, View } from 'react-native';
import tw from 'twrnc';
import NewTask from './components/newTask';
import TaskItem from './components/TaskItem';
import TopSection from './components/TopSection';


export default function App() {
  return (
    <>
    <TopSection></TopSection>
    <SafeAreaView style={tw`flex-1 bg-slate-300`}>
      <ScrollView style={tw`bg-red-200 flex flex-auto`}>
        <TaskItem content="Hi"></TaskItem>
        <Text>Open up App.tsx to start working on your app!</Text>
        <StatusBar style="auto" />
      
      </ScrollView>
    </SafeAreaView>
    </>
  );
}
