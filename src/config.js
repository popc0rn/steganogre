module.exports = {
  t: 3,
  threshold: 1,
  codeUnitSize: 16,

  args: function(i) {
    return i + 1;
  },

  messageDelimiter: function(modMessage,threshold) {
    var delimiter = new Array(threshold * 3);
    var i;

    for(i = 0; i < delimiter.length; i += 1) {
      delimiter[i] = 255;
    }

    return delimiter;
  },

  messageCompleted: function(data, i, threshold) {
    var done = true;
    var j;

    for(j = 0; j < 16 && done; j += 1) {
      done = done && (data[i + j * 4] === 255);
    }

    return done;
  }
};