const boxes = ["a", "b", "c", "d", "e"];

function pairs(arr) {
  for (let i = 0; i < boxes.length; i++) {
    for (let j = 0; j < boxes.length; j++) {
      console.log(arr[i], arr[j]);
    }
  }
}

pairs(boxes);
