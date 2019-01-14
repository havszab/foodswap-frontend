import React, {Component} from "react";
import Groups from "../components/Groups/Groups"
import NavBar from "../components/Navbar/Navbar"
import classes from "./ListFoods.css"
import Foods from "../components/Foods/Foods";

class ListFoods extends Component {
    state = {
        groups: [
            {
                foods: [
                    {
                        id: "1",
                        img: "",
                        title: "Spaghetti",
                        description: "Freshly made spaghetti, very tasty.",
                        owner: "John",
                        request: "Any salad or main course.",
                        date: "2019-02-12",
                        isActive: false
                    },
                    {
                        id: "2",
                        img: "",
                        title: "Chili con carne",
                        description: "Extra strong chili con carne, with rice. I cooked it on Monday.",
                        request: "Something tasty mean course, or soup.",
                        owner: "James",
                        date: "2019-02-14",
                        isActive: false
                    },
                    {
                        id: "3",
                        img: "",
                        title: "Steak",
                        description: "Medium steak with potatoes",
                        request: "Some vegetarian food",
                        owner: "Julia",
                        date: "2019-01-12",
                        isActive: false
                    }],
                name: "Codecool",
                isActive: false
            },
            {
                foods: [
                    {
                        id: "4",
                        img: "",
                        title: "Spaghetti",
                        description: "Spaghetti without meat and mushrooms",
                        request: "Any other food without meat",
                        owner: "Mark",
                        date: "2019-02-10",
                        isActive: false
                    },
                    {
                        id: "5",
                        img: "",
                        title: "Cheese burger",
                        description: "Homemade hamburger with cheddar cheese, and salad.",
                        request: "Any kind of soup.",
                        owner: "Michael",
                        date: "2019-02-12",
                        isActive: false
                    },
                    {
                        id: "6",
                        img: "",
                        title: "Built Burger",
                        description: "I ordered too much from my burgerbuilder app, pls help me out.",
                        request: "Anything",
                        owner: "Max Schwarzmueller",
                        date: "2019-02-12",
                        isActive: false
                    }],
                name: "MyOffice",
                isActive: false
            }
        ]
    };

    inactivateGroupHandler = (index) => {
        let oldState = {
            ...this.state
        }
        oldState = { ...oldState.groups[index].isActive = !oldState.groups[index].isActive}
        this.setState({oldState})
    }

    // id put this inside Food
    extendFoodContentHandler = (foodIdx, groupIdx) => {
        let oldState = {
            ...this.state
        }
        oldState = {...oldState.groups[groupIdx].foods[foodIdx].isActive = !oldState.groups[groupIdx].foods[foodIdx].isActive}
        this.setState({oldState})
    }

    render() {
        return (
            <div>
                <NavBar/>
                <div className={classes.Groups}>
                    <Groups groups={this.state.groups} clicked={this.inactivateGroupHandler} />
                </div>
                <div className={classes.Foods}>
                    <Foods groups={this.state.groups} click={this.extendFoodContentHandler}/>
                </div>
            </div>
        )
    }

}

export default ListFoods;
