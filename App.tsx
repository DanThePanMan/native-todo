import { StatusBar } from "expo-status-bar";
import { Modal, SafeAreaView } from "react-native";
import tw from "twrnc";
import ModalComponent from "./components/ModalComponent";
import TopSection from "./components/TopSection";
import TaskList from "./components/TaskList";
import data from "./data.json";
import { useState } from "react";
import * as FileSystem from "expo-file-system";
import NewTaskModal from "./components/NewTaskModal";

type item = {
    name: string;
    description: string;
};

const file = `${FileSystem.documentDirectory}/data.json`;

const writeArrayToJsonFile = async (filePath: any, dataArray: any) => {
    try {
        // Convert the array of objects to JSON string
        const jsonData = JSON.stringify(dataArray);

        // Write the JSON string to the file
        await FileSystem.writeAsStringAsync(filePath, jsonData);

        console.log("Array of objects written to JSON file successfully!");
    } catch (error) {
        console.error("Error writing array to JSON file:", error);
    }
};

export default function App() {
    const [modalState, setModalState] = useState(false);
    const [newTaskState, setNewTaskState] = useState(false);
    const [index, setIndex] = useState(0);
    const [storedData, setStoredData] = useState(data);
    return (
        <>
            <TopSection modalChanger={setNewTaskState} />
            <SafeAreaView style={tw`flex  justify-center items-stretch grow`}>
                <TaskList
                    data={storedData}
                    stateChanger={setModalState}
                    indexChanger={setIndex}
                />
                <StatusBar style="auto" />

                <Modal
                    animationType="none"
                    transparent={true}
                    visible={modalState}
                    onRequestClose={() => {
                        setModalState(!modalState);
                    }}
                >
                    <ModalComponent
                        data={storedData}
                        setData={setStoredData}
                        index={index}
                        filePath={file}
                        setFileFunction={writeArrayToJsonFile}
                        closeModal={() => setModalState(false)}
                    />
                </Modal>

                <Modal
                    animationType="none"
                    transparent={true}
                    visible={newTaskState}
                    onRequestClose={() => {
                        setNewTaskState(!newTaskState);
                    }}
                >
                    <NewTaskModal
                        data={storedData}
                        setData={setStoredData}
                        filePath={file}
                        setFileFunction={writeArrayToJsonFile}
                        closeModal={() => setNewTaskState(false)}
                    />
                </Modal>
            </SafeAreaView>
        </>
    );
}
