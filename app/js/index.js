import { MenuComponent } from './component/menuComponent.js';
import { Button } from './component/button.js';
import { Container } from './component/container.js';
import { Component } from './component/component.js';
import { TabContainer } from './component/tabContainer.js';
import { Tab } from './component/tab.js';

var button = new Button("123", "b1");
var button2 = new Button("123", "b2");
var button3 = new Button("123", "b3");
var button4 = new Button("123", "b4");
var button5 = new Button("123", "b5");
var button6 = new Button("123", "b6");
var button7 = new Button("123", "b7");
var button8 = new Button("123", "b8");

var tabContainer = new TabContainer("helloMyTab");
var tab = new Tab("func1", "hello", true);
var tab2 = new Tab("func2", "hello2");
tab.addComponent(button);
tab.addComponent(button4);
tab.addComponent(button5);
tab.addComponent(button8);

tab2.addComponent(button2);
tab2.addComponent(button3);
tab2.addComponent(button6);
tab2.addComponent(button7);
tabContainer.addComponent(tab);
tabContainer.addComponent(tab2);
// console.log(tabContainer);
tabContainer.render();
// contaienr.addComponent(component);
// contaienr.addComponent(component);

// console.log(tab.templates[0]+tab.templates[1]);
// console.log(tab.render());
