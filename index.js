class SortedList {
  constructor(items, length) {
    this.items = [];
    this.length = this.items.length;
  }
  add(item) {
    this.items.push(item);
    this.items.sort(compareNumbers);
    this.length = this.items.length;
  }

  get(pos) {
    if (pos < 0 || this.length <= pos) {
      throw new Error("OutOfBounds");
    } else {
      return this.items[pos];
    }
  }

  max() {
    if (this.items.length <= 0) {
      throw new Error("EmptySortedList");
    } else {
      return Math.max(...this.items);
    }
  }

  min() {
    if (this.items.length <= 0) {
      throw new Error("EmptySortedList");
    } else {
      return Math.min(...this.items);
    }
  }

  sum() {
    const sum = sumNumbers(this.items);
    return sum;
  }

  avg() {
    if (this.items.length <= 0) {
      throw new Error("EmptySortedList");
    } else {
      const avr = sumNumbers(this.items) / this.items.length;
      return avr;
    }
  }
}

function compareNumbers(a, b) {
  return a - b;
}
function sumNumbers(arr) {
  const sum = arr.reduce(function (acc, val) {
    return acc + val;
  }, 0);
  return sum;
}

const newList = new SortedList();
console.log(newList.length);
newList.add(1);
console.log(newList.length);
// newList.add(3);
// newList.max();
// newList.min();
// newList.sum();
// newList.avg();

module.exports = SortedList;
