import { MenuComponent } from './menuComponent.js';
import $ from 'jquery';

class Button extends MenuComponent {
    constructor(iconURL, id) {
        super(id);
        this.icon = iconURL;
        this.templates = ["<button type='button' class='btn btn-default'>button</button>"];
    }

    render() {
        return [$(this.templates[0])];
    }
}

export { Button };
