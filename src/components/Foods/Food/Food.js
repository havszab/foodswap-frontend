import React from "react";
import Aux from "../../../hoc/Aux"
import classes from "./Food.css"


const Food = (props) => {
    const head =
        <div className={classes.Head}>
            <p>{props.owner} offers {props.title}</p>
            <p>Expiration date: {props.date}</p>
        </div>
    let foodElement =
        <div className={classes.Food} onClick={props.clicked}>
            <img src="//:0" alt=""/>
            {head}
        </div>;
    ;

    if (props.isActive) {
        foodElement =
            <div className={classes.Food} onClick={props.clicked}>
                <img src="//:0" alt=""/>
                {head}
                <div className={classes.DetailBody}>
                    <p>{props.description}</p>
                    <p>Swap request to: {props.request}</p>
                    <button className={classes.Button}><span>Complete swap</span></button>
                </div>
            </div>;
    }
    return (
        <Aux>
            {foodElement}
        </Aux>
    )
}

export default Food;
