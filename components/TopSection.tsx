import { View, Text } from 'react-native';
import tw from 'twrnc';

export default function TopSection(){
    return(
    <View style={tw`p-7 bg-blue-600`}>
        <Text style={tw`font-bold text-2xl pt-4 text-white`}>Tasks</Text>
    </View>
    );
}