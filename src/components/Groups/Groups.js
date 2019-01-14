import React from "react";
import Group from "./Group/Group"

const groups = (props) => {
    return props.groups.map((group, index) => {
        return (
                <Group name={group.name} key={index} isActive={group.isActive} click={() => props.clicked(index)}
                />
        )
    })
}

export default groups;
