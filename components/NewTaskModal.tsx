import { View, Text, TouchableNativeFeedback, TextInput } from "react-native";
import tw from "twrnc";
import { useState } from "react";

function NewTaskModal(props: any) {
    const data = props.data;
    const setData = props.setData;
    const filePath = props.filePath;
    const setFileFunction = props.setFileFunction;
    const [name, setName] = useState();
    const [description, setDescription] = useState();

    const onChangName = (text: any) => {
        setName(text);
    };
    const onChangDescription = (text: any) => {
        setDescription(text);
    };

    const submitHandler = (name: any, description: any) => {
        const AddedTask = {
            name: name,
            description: description,
            state: "incomplete",
        };

        console.table(AddedTask);

        console.table(AddedTask);
        data.push(AddedTask);

        setData(data);

        setFileFunction(filePath, data);
        props.closeModal();
    };

    return (
        <View
            style={{
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                width: "100%",
                height: "100%",
                position: "absolute",
            }}
        >
            <View
                style={tw`bg-white flex flex-col justify-between opacity-100 w-84 ml-5 mt-[50%] absolute p-5 rounded-md gap-4`}
            >
                <Text style={tw`text-lg font-bold`}>New Task</Text>
                <View>
                    <Text>Name</Text>
                    <TextInput
                        style={tw`bg-slate-200 flex rounded-xl pl-2 pr-2 pt-0.5 pb-0.5`}
                        value={name}
                        onChangeText={onChangName}
                    ></TextInput>
                </View>
                <View>
                    <Text>Description</Text>
                    <TextInput
                        style={tw`bg-slate-200 flex rounded-xl pl-2 pr-2 pt-0.5 pb-0.5`}
                        value={description}
                        onChangeText={onChangDescription}
                    ></TextInput>
                </View>
                <View
                    style={tw`bg-white text-blue-500 flex flex-row justify-end items-end gap-4`}
                >
                    <TouchableNativeFeedback onPress={props.closeModal}>
                        <Text style={tw`bg-white text-blue-500 h-6 w-12`}>
                            Cancel
                        </Text>
                    </TouchableNativeFeedback>

                    <TouchableNativeFeedback
                        onPress={() => submitHandler(name, description)}
                    >
                        <Text style={tw`bg-white text-blue-500 h-6 w-12`}>
                            Create
                        </Text>
                    </TouchableNativeFeedback>
                </View>
            </View>
        </View>
    );
}
export default NewTaskModal;
