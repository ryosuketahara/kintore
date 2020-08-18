'use script'
{
  const munemenu = document.getElementById('munemenu');
  const mune = document.getElementById('mune');

  const katamenu = document.getElementById('katamenu');
  const kata = document.getElementById('kata');

  const udemenu = document.getElementById('udemenu');
  const ude = document.getElementById('ude');

  const senakamenu = document.getElementById('senakamenu');
  const senaka = document.getElementById('senaka');

  const asimenu = document.getElementById('asimenu');
  const asi = document.getElementById('asi');


  

  mune.addEventListener('click', () => {
    munemenu.classList.remove('hazusu');
  });
  munemenu.addEventListener('click', () => {
    munemenu.classList.add('hazusu');
  });

  kata.addEventListener('click', () => {
    katamenu.classList.remove('hazusu');
  });
  katamenu.addEventListener('click', () => {
    katamenu.classList.add('hazusu');
  });

  ude.addEventListener('click', () => {
    udemenu.classList.remove('hazusu');
  });
  udemenu.addEventListener('click', () => {
    udemenu.classList.add('hazusu');
  });

  senaka.addEventListener('click', () => {
    senakamenu.classList.remove('hazusu');
  });
  senakamenu.addEventListener('click', () => {
    senakamenu.classList.add('hazusu');
  });

  asi.addEventListener('click', () => {
    asimenu.classList.remove('hazusu');
  });
  asimenu.addEventListener('click', () => {
    asimenu.classList.add('hazusu');
  });
































}