function TaskTotalUI(container, lists) {

  this.lists = lists;
  this.total = 0;

  this.cacheElements(container);
  this.bindEvents();
  this.update();

}

TaskTotalUI.prototype.cacheElements = function (container) {

  this.container = document.querySelector(container);

};

TaskTotalUI.prototype.bindEvents = function () {

  this.lists.forEach(function(list){
    document.addEventListener(list.eventKeys.taskAdded, this.update.bind(this));
    document.addEventListener(list.eventKeys.taskRemoved, this.update.bind(this));
  }.bind(this));

};

TaskTotalUI.prototype.update = function (event) {

  this.total = 0;

  this.lists.forEach(function(list){
    this.total += list.model.count;
  }.bind(this));

  this.render();

};

TaskTotalUI.prototype.render = function () {

  this.container.textContent = this.total;

};
