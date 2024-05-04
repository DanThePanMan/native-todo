import { View, Text, TouchableNativeFeedback } from "react-native";
import tw from "twrnc";

export default function TaskItem(props: any) {
    const title: string = props.title;
    const content: string = props.content;
    const stateChanger = props.stateChanger;
    const indexChanger = props.indexChanger;
    const state: string = props.state;

    function TouchHandler() {
        stateChanger(true);
        indexChanger(props.index);
    }
    if (state === "complete") {
        return (
            <TouchableNativeFeedback onPress={TouchHandler}>
                <View style={tw`grow p-6 bg-slate-200 mb-2`}>
                    <Text style={tw`text-gray-400`}>{content}</Text>
                    <Text style={tw`text-gray-400`}>{title}</Text>
                </View>
            </TouchableNativeFeedback>
        );
    } else {
        return (
            <TouchableNativeFeedback onPress={TouchHandler}>
                <View style={tw`grow p-6 bg-slate-100 mb-2`}>
                    <Text>{content}</Text>
                    <Text>{title}</Text>
                </View>
            </TouchableNativeFeedback>
        );
    }
}
