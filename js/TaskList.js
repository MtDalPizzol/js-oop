function TaskList() {
  this.tasks = [];
  this.count = 0;
}

TaskList.prototype.addTask = function (task) {
  if (!task.validate()) {
    return;
  }
  this.tasks.push(task);
  this.count++;
  return task;
};

/*
TaskList.prototype.updateTask = function (task) {
  if (!task.validate()) {
    return;
  }
  var record = this.getTask(task.id);
  var idx = this.tasks.indexOf(record);
  this.tasks[idx] = task;
  return task;
};
*/

TaskList.prototype.removeTask = function (task) {
  var idx = this.tasks.indexOf(task);
  this.tasks.splice(idx, 1);
  this.count--;
};

TaskList.prototype.getTasks = function () {
  return this.tasks;
};

TaskList.prototype.getTask = function (id) {
  return this.tasks.find(function(task){
    return task.id === id;
  });
};
