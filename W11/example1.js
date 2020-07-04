const w11PromExpl_1Btn = document.getElementById('w11__promise__exp-1__btn');
  const w11PromExp1_div = document.getElementById('promise__exp-1');
  
  w11PromExpl_1Btn.addEventListener('click', example1);
  
  const delay = seconds => {
    return new Promise((resolve, reject) => {
      if(typeof seconds !== 'number') {
          reject(new Error('Argument seconds must be a number'));
      }
      setTimeout(
        () => resolve(`${seconds} second delay is up`),
        seconds * 1000
      );
    });
  };
  
  function example1() {
        w11PromExp1_div.textContent ="zero seconds";
        delay('10 minutes').then(msg => msg.toUpperCase())
                .then(msg => `${msg}!!!!!`)
                .then(msg => w11PromExp1_div.textContent =msg);
        delay(2).then(msg => msg.toUpperCase())
                .then(msg => `${msg}!!!!!`)
                .then(msg => w11PromExp1_div.textContent =msg);
  }
