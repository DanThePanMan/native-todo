import { View, Text, TouchableNativeFeedback } from "react-native";
import tw from "twrnc";

function ModalComponent(props: any) {
    function toggleHandler() {
        const dataArray = props.data;
        const itemIndex = props.index;
        const filePath = props.filePath;

        if (dataArray[itemIndex].state === "incomplete") {
            dataArray[itemIndex].state = "complete";
        } else {
            dataArray[itemIndex].state = "incomplete";
        }
        props.setData(dataArray);

        props.setFileFunction(filePath, dataArray);

        props.closeModal();
    }

    function delteHandler() {
        const dataArray = props.data;
        const itemIndex = props.index;
        const filePath = props.filePath;

        if (itemIndex < 0) {
            dataArray.splice(1, itemIndex);
        } else {
            dataArray.splice(0, 1);
        }

        props.setData(dataArray);

        props.setFileFunction(filePath, dataArray);

        props.closeModal();
    }

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
                style={tw`bg-white flex flex-col justify-between opacity-100 w-84 ml-5 mt-[50%] absolute p-5 rounded-md`}
            >
                <Text style={tw``}>ModalComponent</Text>
                <View style={tw`flex flex-row justify-end gap-6 mt-4`}>
                    <TouchableNativeFeedback onPress={props.closeModal}>
                        <View
                            style={tw`bg-white text-blue-500 flex justify-end items-end`}
                        >
                            <Text style={tw`bg-white text-blue-500 h-6`}>
                                Close
                            </Text>
                        </View>
                    </TouchableNativeFeedback>
                    <TouchableNativeFeedback onPress={toggleHandler}>
                        <View
                            style={tw`bg-white text-blue-500 flex justify-end items-end`}
                        >
                            <Text style={tw`bg-white text-blue-500 h-6`}>
                                toggle done/undone
                            </Text>
                        </View>
                    </TouchableNativeFeedback>
                    <TouchableNativeFeedback onPress={delteHandler}>
                        <View
                            style={tw`bg-white text-blue-500 flex justify-end items-end`}
                        >
                            <Text style={tw`bg-white text-blue-500 h-6`}>
                                delete
                            </Text>
                        </View>
                    </TouchableNativeFeedback>
                </View>
            </View>
        </View>
    );
}

export default ModalComponent;
