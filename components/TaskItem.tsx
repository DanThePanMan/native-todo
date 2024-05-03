import { View, Text } from 'react-native';
import tw from 'twrnc';

export default function TaskItem(props:any){
    let content:string = props.content;


    return(
    <View style={tw`grow p-6 bg-slate-100`}>
        <Text>{content}</Text>
    </View>
    );
}