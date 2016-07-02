function TaskCounterUI(container, list) {

  this.list = list;
  this.cacheElements(container);
  this.bindEvents();
  this.update();

}

TaskCounterUI.prototype.cacheElements = function (container) {
  this.container = document.querySelector(container);
};

TaskCounterUI.prototype.bindEvents = function () {
  document.addEventListener(this.list.model.eventKeys.taskAdded, this.update.bind(this));
  document.addEventListener(this.list.model.eventKeys.taskRemoved, this.update.bind(this));
};

TaskCounterUI.prototype.update = function (event) {
  this.container.textContent = this.list.model.count;
};
