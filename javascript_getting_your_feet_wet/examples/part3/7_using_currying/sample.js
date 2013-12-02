var log = function(date, level, message) {
  console.log(date + " --- " + level + " --- " + message);
}

log('Dec 2, 2013', 'warning', 'starting...');
log('Dec 2, 2013', 'warning', 'running...');
log('Dec 2, 2013', 'warning', 'stopping...');

var curryDateAndLevel = function(date, level) {
  return function(message) {
    log(date, level, message)
  }
}

var logWarningToday = curryDateAndLevel('Dec 2, 2013', 'warning');


logWarningToday('starting...');
logWarningToday('running...');
logWarningToday('stopping...');