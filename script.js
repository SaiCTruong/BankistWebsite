'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data (đơn vị: VNĐ)
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [
    5000000, 11250000, -10000000, 75000000, -16250000, -3250000, 1750000,
    32500000, 25000000, -18525000, 33750000,
  ],
  interestRate: 1.2, // %
  pin: 1111,
  movementsDates: [
    '2023-12-20T09:15:30.123Z',
    '2024-02-10T11:30:00.456Z',
    '2024-04-30T17:05:10.789Z',
    '2024-09-02T08:00:00.000Z',
    '2025-01-01T14:20:45.321Z',
    '2025-03-08T19:00:15.654Z',
    '2025-05-12T10:00:00.000Z',
    '2025-07-20T12:00:00.000Z',
    '2025-09-15T15:30:00.000Z',
    '2025-10-28T08:45:00.000Z',
    '2025-11-05T18:20:00.000Z',
  ],
  currency: 'VND',
  locale: 'vi-VN',
};

const account2 = {
  owner: 'Phạm Công Trường',
  movements: [
    125000000, 85000000, -3750000, -19750000, -80250000, -25000000, 212500000,
    -750000, 17500000, -23850000, 31250000,
  ],
  interestRate: 1.5,
  pin: 1208,
  movementsDates: [
    '2024-01-15T10:00:00.555Z',
    '2024-03-22T16:45:12.666Z',
    '2024-06-01T12:10:30.777Z',
    '2024-10-20T20:30:00.888Z',
    '2025-02-14T09:05:00.999Z',
    '2025-04-01T07:15:00.000Z',
    '2025-05-10T11:20:00.000Z',
    '2025-06-25T14:30:00.000Z',
    '2025-08-11T17:40:00.000Z',
    '2025-10-01T20:50:00.000Z',
    '2025-11-01T22:00:00.000Z',
  ],
  currency: 'VND',
  locale: 'vi-VN',
};

const account3 = {
  owner: 'Nguyễn Nhật Thiên',
  movements: [
    5000000, -5000000, 8500000, -7500000, -500000, 1250000, 10000000, -11500000,
    175000000, 50000000, -8900000,
  ],
  interestRate: 0.7,
  pin: 2105,
  movementsDates: [
    '2023-11-20T07:30:45.111Z',
    '2024-05-19T14:15:00.222Z',
    '2024-09-15T18:00:20.333Z',
    '2025-04-10T11:55:50.444Z',
    '2025-01-20T09:10:00.000Z',
    '2025-02-28T13:20:00.000Z',
    '2025-03-30T16:30:00.000Z',
    '2025-05-15T19:40:00.000Z',
    '2025-07-22T22:50:00.000Z',
    '2025-09-05T06:00:00.000Z',
    '2025-10-18T08:10:00.000Z',
  ],
  currency: 'VND',
  locale: 'vi-VN',
};

const account4 = {
  owner: 'Lê Quốc Khánh',
  movements: [
    10750000, 25000000, 17500000, 1250000, 2250000, 20000000, 25000000, 1500000,
    -2475000, 2650000, -5000000,
  ],
  interestRate: 1,
  pin: 3004,
  movementsDates: [
    '2024-07-27T10:10:10.101Z',
    '2024-08-15T15:20:20.202Z',
    '2024-12-24T21:00:00.303Z',
    '2025-01-29T09:30:30.404Z',
    '2025-05-01T13:40:40.505Z',
    '2025-08-30T16:50:50.606Z',
    '2025-10-31T23:00:00.707Z',
    '2025-01-05T12:00:00.000Z',
    '2025-02-18T14:10:00.000Z',
    '2025-04-20T16:20:00.000Z',
    '2025-06-30T18:30:00.000Z',
  ],
  currency: 'VND',
  locale: 'vi-VN',
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

//format number in VND
const formatVND = value => {
  return new Intl.NumberFormat('vi-VN').format(value) + ' VND';
};

//function to display movements
const displayMovements = function (acc, sort = false) {
  containerMovements.innerHTML = '';

  //sorting array: ascending order
  const moves = sort
    ? acc.movements.slice().sort((a, b) => a - b)
    : acc.movements;

  moves.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const date = new Date(acc.movementsDates[i]);
    const day = `${date.getDate()}`.padStart(2, '0');
    const month = `${date.getMonth() + 1}`.padStart(2, '0');
    const year = date.getFullYear();
    const displayDate = `${day}/${month}/${year}`;

    const formattedMov = formatVND(mov);
    const html = `
    <div class="movements__row">
          <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
          <div class="movements__date">${displayDate}</div>
          <div class="movements__value">${formattedMov}</div>
        </div>
    `;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

//function to calculate and display balance
const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = formatVND(acc.balance);
};

//function to calculate and display summary
const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov >= 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = formatVND(incomes);

  const outcomes = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = formatVND(Math.abs(outcomes));

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter(int => int > 1)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumInterest.textContent = formatVND(interest);
};

//function to create usernames
const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUsernames(accounts);

//function to update UI
const updateUI = function (acc) {
  //display movements
  displayMovements(acc);

  //display balance
  calcDisplayBalance(acc);

  //display summary
  calcDisplaySummary(acc);
};

//event handler
let currentAccount;

//login
btnLogin.addEventListener('click', function (e) {
  e.preventDefault();
  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    //display UI and message
    labelWelcome.textContent = `Welcome back, ${currentAccount.owner}`;
    containerApp.style.opacity = 100;

    //create current date and time
    const now = new Date();
    const day = `${now.getDate()}`.padStart(2, '0');
    const month = `${now.getMonth() + 1}`.padStart(2, '0');
    const year = now.getFullYear();
    const hours = `${now.getHours()}`.padStart(2, '0');
    const minutes = `${now.getMinutes()}`.padStart(2, '0');
    labelDate.textContent = `${day}/${month}/${year}, ${hours}:${minutes}`;

    //clear input infields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    //Update UI
    updateUI(currentAccount);
  }
});

//transfer money
btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiveAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );

  //clear input infields
  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    receiveAcc &&
    currentAccount.balance >= amount &&
    receiveAcc?.username !== currentAccount.username
  ) {
    //doing the transfer
    currentAccount.movements.push(-amount);
    receiveAcc.movements.push(amount);

    //add transfer date
    currentAccount.movementsDates.push(new Date().toISOString());
    receiveAcc.movementsDates.push(new Date().toISOString());

    //update UI
    updateUI(currentAccount);
  }
});

//close account
btnClose.addEventListener('click', function (e) {
  e.preventDefault();
  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    console.log(index);

    //delete account
    accounts.splice(index, 1);

    //hide UI
    containerApp.style.opacity = 0;
  }
  //clear input infields
  inputCloseUsername.value = inputClosePin.value = '';
});

//request loan
btnLoan.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    //add movement
    currentAccount.movements.push(amount);

    //add loan date
    currentAccount.movementsDates.push(new Date()).toISOString();

    //update UI
    updateUI(currentAccount);
  }
  //clear input infield
  inputLoanAmount.value = '';
});

//sort movements
let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount, !sorted);
  sorted = !sorted;
});
/////////////////////////////////////////////////
