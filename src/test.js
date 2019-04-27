import React from 'react'
import './test.css'

export class Collapsible extends React.Component {
    state = {collapsed: false};

    toggle = () => {
        this.setState((state) => ({
            collapsed: !state.collapsed
        }))
    };

    render() {
        console.log(this.state.collapsed);
        let children = this.state.collapsed ? "" : this.props.children;
        return <div>
            <button onClick={this.toggle} className="collapseButton">
                {this.props.name}
            </button>
            {children}
        </div>
    }
}

export class TestComponent extends React.Component {
    getTasks() {
        switch (this.props.name) {
            case "Health":
                return [
                    {name: "Prepare meals over the weekend", duration: "weekly"},
                    {name: "No skips on workout", duration: "weekly"},
                    {name: "Stick to the dietary plan", duration: "weekly"},
                ];

            case "Career":
                return [
                    {name: "Do computrain homework", duration: "weekly"},
                    {name: "Finish last 3 practices", duration: "weekly"},
                    {name: "Practice certification", duration: "weekly"},
                ];

            case "Finances":
                return [
                    {name: "Stay under 5€ for lunch", duration: "weekly"},
                    {name: "40€ groceries", duration: "weekly"},
                    {name: "Investigate rent lowering options", duration: "weekly"},
                ];

            default:
                return []
        }
    }

    render() {
        return <div className="component">
            <p className="title">{this.props.name}</p>
            {this.getTasks().map(task =>
                <div key={task.name} className="task">
                    <label className="task-text">
                        <input type="checkbox" className="checkbox"/>
                        {task.name}
                    </label>
                    <p className="task-duration">
                        {task.duration}
                    </p>
                </div>
            )}
            <hr className="dotted-line"/>
            <div key="grandGoal" className="task">
                <label className="task-text">
                    <input type="checkbox" disabled="disabled" className="checkbox"/>
                    Grand Goal
                </label>
            </div>
        </div>
    }
}
