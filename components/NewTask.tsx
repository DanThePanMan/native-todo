import { View, TouchableNativeFeedback, Text } from "react-native";
import tw from "twrnc";

export default function NewTask(props: any) {
    const modalChanger = props.modalChanger;

    function PressHandler() {
        modalChanger(true);
    }

    return (
        <TouchableNativeFeedback onPress={PressHandler}>
            <View style={tw`p-4 rounded-lg`}>
                <Text style={tw`text-lg text-white`}>New Task</Text>
            </View>
        </TouchableNativeFeedback>
    );
}
