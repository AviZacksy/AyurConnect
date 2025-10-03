document.addEventListener('click', function(e){
  const target = e.target;
  if(target.matches('.menu-toggle')){
    const nav = document.getElementById('primary-nav');
    const isOpen = nav.classList.toggle('open');
    target.setAttribute('aria-expanded', String(isOpen));
    return;
  }
  if(target.matches('.btn') && target.dataset.item){
    const item = target.dataset.item;
    alert('Added to cart: ' + item + '\nDelivery: 30 min (serviceable areas).');
  }
});

document.getElementById('consult-form')?.addEventListener('submit', function(e){
  e.preventDefault();
  const form = new FormData(e.target);
  alert('Consultation booked for ' + form.get('name') + ' on ' + form.get('date') + '\nWe will contact: ' + form.get('phone'));
  e.target.reset();
});

document.getElementById('center-form')?.addEventListener('submit', function(e){
  e.preventDefault();
  const form = new FormData(e.target);
  alert('Centre appointment booked at ' + form.get('centre') + ' on ' + form.get('date'));
  e.target.reset();
});


