function POLO() {
  let input_taker = document.querySelector('#input').value;
  document.querySelector('#duplicateField').textContent = input_taker;
  };
    
document.addEventListener('click', function(e) {
  return e.preventDefault()
});

function LOPO() {
  let subOn = document.querySelector('#duplicateField').textContent;
  console.log(subOn);
  document.querySelector('#duplicateField').textContent = "";
  document.querySelector('#input').value = "";
  };

  