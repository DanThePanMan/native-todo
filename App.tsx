import { StatusBar } from "expo-status-bar";
import { Pressable, SafeAreaView, ScrollView, Text, View } from "react-native";
import tw from "twrnc";
import NewTask from "./components/newTask";
import TaskItem from "./components/TaskItem";
import TopSection from "./components/TopSection";
import TaskList from "./components/TaskList";
import data from "./data.json";

type item = {
    name: string;
    description: string;
};
const storedData: item[] = data;

export default function App() {
    return (
        <>
            <TopSection></TopSection>
            <SafeAreaView style={tw`flex-1 bg-slate-300`}>
                <TaskList data={storedData}></TaskList>
                <StatusBar style="auto" />
            </SafeAreaView>
        </>
    );
}
