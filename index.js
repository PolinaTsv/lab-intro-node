class SortedList {
  constructor(items) {
    this.items = items.sort(compareNumbers);
    this.length = this.items.length;
  }
  add(item) {
    this.items.push(item);
    this.items.sort(compareNumbers);
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
      console.log(Math.max(...this.items));
    }
  }

  min() {
    if (this.items.length <= 0) {
      throw new Error("EmptySortedList");
    } else {
      console.log(Math.min(...this.items));
    }
  }

  sum() {
    const sum = sumNumbers(this.items);
    console.log(sum);
  }

  avg() {
    const avr = sumNumbers(this.items)/this.items.length;
    console.log(avr);
  }
}

function compareNumbers(a, b) {
  return a - b;
}
function sumNumbers(arr){
  const sum = arr.reduce(function (acc, val) {
    return acc + val;
  }, 0);
  return sum;
}

const newList = new SortedList([2, 1, 9, 7]);
newList.add(3);
newList.max();
newList.min();
newList.sum();
newList.avg();

module.exports = SortedList;
