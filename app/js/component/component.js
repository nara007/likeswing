import { GISObject } from './object.js';

class Component extends GISObject {
    constructor(id) {
        super();
        this.ID = id;
        // this.getID = this.getID.bind(this);
        // this.render = this.render.bind(this);
        this.templates = [];
    }

    getID() {
        return this.ID;
    }
    render() {}
}

export { Component };
