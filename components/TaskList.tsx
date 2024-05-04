import React from "react";
import TaskItem from "./TaskItem";
import { ScrollView, Text, View } from "react-native";
import tw from "twrnc";

type item = {
    name: string;
    description: string;
    state: string;
};

const TaskList = (props: any) => {
    const { data } = props;

    return (
        <ScrollView style={tw`flex flex-col h-[100%] bg-slate-300`}>
            {data.map((item: any, index: number) =>
                item.state == "incomplete" ? (
                    <React.Fragment key={index}>
                        <TaskItem
                            index={index}
                            content={item.description}
                            title={item.name}
                            stateChanger={props.stateChanger}
                            indexChanger={props.indexChanger}
                            state="incomplete"
                        />
                    </React.Fragment>
                ) : null
            )}

            {data.map((item: any, index: number) =>
                item.state == "complete" ? (
                    <React.Fragment key={index}>
                        <TaskItem
                            index={index}
                            content={item.description}
                            title={item.name}
                            stateChanger={props.stateChanger}
                            indexChanger={props.indexChanger}
                            state="complete"
                        />
                    </React.Fragment>
                ) : null
            )}
        </ScrollView>
    );
};

export default TaskList;
