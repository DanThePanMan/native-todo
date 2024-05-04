import { View, Text } from "react-native";
import tw from "twrnc";

export default function TaskItem(props: any) {
    const title: string = props.title;
    const content: string = props.content;

    return (
        <View style={tw`grow p-6 bg-slate-100 mb-2`}>
            <Text>{content}</Text>
            <Text>{title}</Text>
        </View>
    );
}
