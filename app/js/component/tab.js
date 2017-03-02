import { Container } from "./container.js";
import $ from 'jquery';

class Tab extends Container {
    constructor(id, text, isActive = false) {
        super(id);
        this.text = text;
        if (isActive) {
            this.templates = ["<li class='active'><a href='#home' data-toggle='tab'>" + this.text + "</a></li>", "<div class='tab-pane fade in active' id='home'></div>"];
        }
        else{
            this.templates = ["<li><a href='#home' data-toggle='tab'>" + this.text + "</a></li>", "<div class='tab-pane fade' id='home'></div>"];
        }
        this._bindID();
    }

    _bindID() {

        this.templates[0] = this.templates[0].replace(/href='#(\w)+'/, "href='#" + this.ID + "'");
        this.templates[1] = this.templates[1].replace(/id='(\w)+'/, "id='" + this.ID + "'");
    }

    render() {

        var $tabContent = $(this.templates[1]);
        for (let index in this.components) {
            let templates = this.components[index].render();
            $tabContent.append(templates[0]);

        }

        return [$(this.templates[0]), $tabContent];
    }
}

export { Tab };
