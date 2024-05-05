import { View, Text } from "react-native";
import tw from "twrnc";
import NewTask from "./NewTask";

export default function TopSection(props: any) {
    return (
        <View
            style={tw`p-2 pt-12 bg-blue-600 flex flex-row items-center justify-between`}
        >
            <Text style={tw`font-bold p-4 text-2xl text-white`}>Tasks</Text>
            <NewTask modalChanger={props.modalChanger}></NewTask>
        </View>
    );
}
