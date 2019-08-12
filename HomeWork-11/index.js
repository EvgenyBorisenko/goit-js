const buttonStart = document.querySelector('[data-action="start"]');
const buttonStop = document.querySelector('[data-action="stop"]');

const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const randomIntegerInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

let idInterval;

buttonStart.onclick = function() {
  idInterval = setInterval(() => {
    document.body.style.backgroundColor = colors[randomIntegerInterval(0, 6)];
    buttonStart.disabled = true;
  }, 1000);
}

buttonStop.onclick = function() {
  clearInterval(idInterval);
  buttonStart.disabled = false;
};

//-----------------------------------------------task 2

const delay = ms => {
  const promise = new Promise((resolve)=>{
 setTimeout(()=>{
  resolve(ms);
 },ms);
  
  })
  return promise;
};

const logger = time => console.log(`Resolved after ${time}ms`);

// Вызовы функции для проверки
delay(2000).then(logger); // Resolved after 2000ms
delay(1000).then(logger); // Resolved after 1000ms
delay(1500).then(logger); // Resolved after 1500ms




//----------------------------------





const users = [
  { name: 'Mango', active: true },
  { name: 'Poly', active: false },
  { name: 'Ajax', active: true },
  { name: 'Lux', active: false },
];

const toggleUserState = (allUsers, userName) => {


return new Promise((resolve)=>{


  const updatedUsers = allUsers.map(user =>
    user.name === userName ? { ...user, active: !user.active } : user,
  );

  resolve(updatedUsers);
  });
};

const newLogger = updatedUsers => console.table(updatedUsers);


toggleUserState(users, 'Mango').then(newLogger);
toggleUserState(users, 'Lux').then(newLogger);





//-------------------------------




const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const makeTransaction = ({id}) => {
  const delay = randomIntegerFromInterval(200, 500);

  return new Promise((resolve, reject)=>{

    setTimeout(() => {
      const canProcess = Math.random() > 0.3;
  
      if (canProcess) {
        resolve({id, time: delay});
      } else {
        reject(id);
      }
    }, delay);
  })
};

const logSuccess = ({id, time}) => {
  console.log(`Transaction ${id} processed in ${time}ms`);
};

const logError = id => {
  console.warn(`Error processing transaction ${id}. Please try again later.`);
};



makeTransaction({ id: 70, amount: 150 })
  .then(logSuccess)
  .catch(logError);

makeTransaction({ id: 71, amount: 230 })
  .then(logSuccess)
  .catch(logError);

makeTransaction({ id: 72, amount: 75 })
  .then(logSuccess)
  .catch(logError);

makeTransaction({ id: 73, amount: 100 })
  .then(logSuccess)
  .catch(logError);



//-----------------------------------------------task 3 


const refs = {
  timer: document.querySelector('#timer-1'),
   days: document.querySelector('[data-value="days"]'),
   hours: document.querySelector('[data-value="hours"]'),
   mins: document.querySelector('[data-value="mins"]'),
   secs: document.querySelector('[data-value="secs"]'),

}

// new CountdownTimer({
//   selector: '#timer-1',
//   targetDate: new Date('Jul 17, 2019'),
// });




let TimeInterval = setInterval(() => {
  
  const currentTime = Date.now();
  const targetDate = new Date('Sep 10, 2019');
  
  const time = targetDate - currentTime;
  
  
  const days = Math.floor(time / (1000 * 60 * 60 * 24));
  const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
  const secs = Math.floor((time % (1000 * 60)) / 1000);
  
  
  
  refs.days.textContent = days;
  refs.hours.textContent = hours;
  refs.mins.textContent = mins;
  refs.secs.textContent = secs;
}, 1); 

