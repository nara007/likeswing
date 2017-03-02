import { Container } from "./container.js"
import $ from 'jquery';

class TabContainer extends Container {

    constructor(id) {
        super(id);
        // this._bindID = this._bindID.bind(this);
        this.templates = ["<ul id='mytab' class='nav nav-tabs'></ul>", "<div id='myTabContent' class='tab-content'></div>"];
        this._bindID();
    }

    _bindID() {
        this.templates[0] = this.templates[0].replace(/id='(\w)+'/, "id='" + this.ID + "'");
        this.templates[1] = this.templates[1].replace(/id='(\w)+'/, "id='" + this.ID + "-content'");
    }

    render() {
        var $tabContainer = $(this.templates[0]);
        var $tabContent = $(this.templates[1]);

        // console.log(this.components);
        for(let tab in this.components){
        	let templates = this.components[tab].render();
        	$tabContainer.append(templates[0]);
        	$tabContent.append(templates[1]);
        }
        $("body").append($tabContainer);
        $("body").append($tabContent);
    }
}

export { TabContainer };
