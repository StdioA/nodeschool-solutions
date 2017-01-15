module.exports = {
  getAmount: function(coinType) {
    // COINS:
    // [p]enny
    // [n]ickel
    // [d]ime
    // [q]uarter
    var coinTypes = {
      'p': 1,
      'n': 5,
      'd': 10,
      'q': 25
    }
    
    var val = coinTypes[coinType];
    if (Object.is(val, undefined)) {
      throw new Error('Unrecognized coin ' + coinType); 
    }

    return val;
  },

  convertToChange: function (amount) {
    var coinTypes = {
      1: 'p',
      5: 'n',
      10: 'd',
      25: 'q',
    };
    var values = [25, 10, 5, 1];
    var ans = []

    for (value of values) {
      var count = amount/value;
      for (var i = 1; i <= count; i++)
        ans.push(coinTypes[value]);

      amount %= value;
    }

    return ans;
  },
};
