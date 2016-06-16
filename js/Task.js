function Task(text) {

  this.id = new Date().getTime().toString();
  this.text = text;

}

Task.prototype.validate = function(newData) {
    var data = newData || this;
    if (!data.text || typeof data.text !== "string" || data.text === "") {
      return false;
    }
    return true;
};

Task.prototype.update = function (data) {
  if (!this.validate(data)) {
    return false;
  }
  Object.keys(data).forEach(function(key){
    this[key] = data[key];
  }.bind(this));
  return this;
};
