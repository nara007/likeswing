import { Component } from './component.js';

class MenuComponent extends Component {
    constructor(id) {
        super(id);
        this.commandInvoker;
        // this.setCommandInvoker = this.setCommandInvoker.bind(this);
    }

    setCommandInvoker(commandInvoker) {
        this.setCommandInvoker = commandInvoker;
    }
}

export { MenuComponent };
