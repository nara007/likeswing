import { Component } from "./component.js";

class Container extends Component {
    constructor(id) {
        super(id);
        this.components = [];
        // this.addComponent = this.addComponent.bind(this);
        // this.removeComponent = this.removeComponent.bind(this);
        // this.removeComponentByID = this.removeComponentByID.bind(this);
        // this.render = this.render.bind(this);
    }


    addComponent(component) {
        var id = component.getID();
        if (this.components[id] == undefined) {
            this.components[id] = component;
        } else {
            throw "component already exists";
        }
    }

    removeComponent(component) {
        this.removeComponentByID(component.getID());
    }

    removeComponentByID(id) {
        var component = this.components[id];
        if (component == undefined) {
            throw "component doesn't exist";
        } else {
            delete this.components[id];
        }
    }
    render() {}


}

export { Container };
