$(document).ready(function(){
  $('.parallax').parallax();
});

var list1 = new TaskListUI('#tasks');
var list1Counter = new TaskCounterUI('#tasks-counter', list1);

var list2 = new TaskListUI('#tasks2');
// var list2Counter = new TaskCounterUI('#tasks2-counter', list2);

var list3 = new TaskListUI('#tasks3');
var list3Counter = new TaskCounterUI('#tasks3-counter', list3);

var list4 = new TaskListUI('#tasks4');
var list4Counter = new TaskCounterUI('#tasks4-counter', list4);

new TaskTotalUI('#total', [list1, list2]);
new TaskTotalUI('#total2', [list3, list4]);
new TaskTotalUI('#total-master', [list1, list2, list3, list4]);
