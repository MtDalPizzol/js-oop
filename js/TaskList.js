function TaskList(container) {

  this.id = container.replace('#', '');
  this.tasks = [];
  this.count = 0;

  this.eventKeys = {
    taskAdded: this.id + ':task:added',
    taskUpdated: this.id + ':task:updated',
    taskRemoved: this.id + ':task:removed'
  };

  this.events = {
    taskAdded: new Event(this.eventKeys.taskAdded),
    taskUpdated: new Event(this.eventKeys.taskUpdated),
    taskRemoved: new Event(this.eventKeys.taskRemoved)
  };

}

TaskList.prototype.addTask = function (task) {
  if (!task.validate()) {
    return;
  }
  this.tasks.push(task);
  this.count++;
  this.events.taskAdded.task = task;
  this.events.taskAdded.count = this.count;
  document.dispatchEvent(this.events.taskAdded);
  return task;
};

TaskList.prototype.updateTask = function (id, data) {
  var task = this.getTask(id);
  if (!task.validate(data)) {
    return;
  }
  Object.keys(data).forEach(function(key){
    task[key] = data[key];
  });
  this.events.taskUpdated.task = task;
  document.dispatchEvent(this.events.taskUpdated);
  return task;
};

TaskList.prototype.removeTask = function (task) {
  var idx = this.tasks.indexOf(task);
  this.tasks.splice(idx, 1);
  this.count--;
  this.events.taskRemoved.count = this.count;
  document.dispatchEvent(this.events.taskRemoved);
};

TaskList.prototype.getTasks = function () {
  return this.tasks;
};

TaskList.prototype.getTask = function (id) {
  return this.tasks.find(function(task){
    return task.id === id;
  });
};
