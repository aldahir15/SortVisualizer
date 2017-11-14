let currentState = {
  algorithm: 'bubble-sort',
  size: 50,
  delay: null
};

buildBars(currentState.size, randomSet(currentState.size));

// Selectors
const algo = document.getElementById('algo');
const size = document.getElementById('size');


function algoPick(e) {
  e.preventDefault();
  currentState.algorithm = e.target.value;
}

function sizePick(e) {
  e.preventDefault();
  currentState.size = parseInt(e.target.value);
  const randNums = randomSet(currentState.size);
  buildBars(currentState.size, randNums);
}

//Event Listeners
algo.addEventListener('change', algoPick);
size.addEventListener('change', sizePick);

// Button Selectors
const sortBtn = document.getElementById('sort');
const pauseBtn = document.getElementById('pause');
const resetBtn = document.getElementById('reset');
const algoForm = document.getElementById('algo-form');

function sortFun(e) {
  e.preventDefault();
  // const randNums = randomSet(currentState.size);
  // buildBars(currentState.size, randNums);
}

function buildBars(s, nums) {
  if (document.getElementById('sort-bars')) {
    console.log("YES");
    document.getElementById('sort-bars').remove();
  }
  const barContainer = document.getElementById('bar-container');
  const sortContainer = document.createElement("DIV");
  sortContainer.classList.add('sort-bars');
  sortContainer.setAttribute("id", "sort-bars");
  for (let i = 0; i < s; i ++) {
    const div = document.createElement("div");
    div.appendChild(document.createTextNode(`-${nums[i]}-`));
    div.style.height = `${nums[i]}px`;
    div.classList.add('barIndiv');
    sortContainer.appendChild(div);
  }
  barContainer.appendChild(sortContainer);

}

function randomSet(s) {
  const finalArr = [];
  for (let i = 0; i < s; i ++) {
    finalArr.push(parseInt(Math.random() * (s * 2)));
  }
  return finalArr;
}

sortBtn.addEventListener('click', sortFun);