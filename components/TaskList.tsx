import React from "react";
import TaskItem from "./TaskItem";
import { ScrollView, Text, View } from "react-native";
import tw from "twrnc";

type item = {
    name: string;
    description: string;
};

const TaskList = (props: any) => {
    const { data } = props;

    return (
        <ScrollView style={tw`flex flex-col h-[100%] bg-slate-300`}>
            {data.map((item: any, index: number) => (
                <React.Fragment key={index}>
                    <TaskItem content={item.description} title={item.name} />
                </React.Fragment>
            ))}
        </ScrollView>
    );
};

export default TaskList;
