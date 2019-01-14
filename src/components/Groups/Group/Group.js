import React from "react";
import classes from "./Group.css"
import Aux from "../../../hoc/Aux"


const group = (props) => {
    let activeClasses = [classes.Group];
    if (props.isActive) {
        activeClasses.push(classes.Active)
    } else {
        activeClasses = [classes.Group];
    }
console.log(props.isActive)
    return(
    <Aux>
        <div className={activeClasses.join(" ")} onClick={props.click}>
            {props.name}
        </div>
    </Aux>)
};

export default group;
