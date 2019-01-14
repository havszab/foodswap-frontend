import React from "react";
import Food from "./Food/Food"

const Foods = (props) => {
    return props.groups.map((group, groupIdx) => {
        if (group.isActive) {
            return (
                group.foods.map((food, foodIdx) => {
                        return (<Food
                            title={food.title}
                            img={food.img}
                            owner={food.owner}
                            description={food.description}
                            request={food.request}
                            key={food.id}
                            date={food.date}
                            isActive={food.isActive}
                            clicked={() => props.click(foodIdx, groupIdx)}
                        />)

                    }
                ))
        }
    })
};

export default Foods;
