import { View, TouchableNativeFeedback, Text } from "react-native";
import tw from "twrnc";

export default function NewTask() {
    return (
        <TouchableNativeFeedback>
            <View style={tw`p-4 rounded-md`}>
                <Text style={tw`text-lg text-white`}>New Task</Text>
            </View>
        </TouchableNativeFeedback>
    );
}
