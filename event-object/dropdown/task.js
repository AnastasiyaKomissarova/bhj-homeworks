const dropdownValue = document.querySelector('.dropdown__value');
const dropdownList = document.querySelector('.dropdown__list');
const dropdownItems = Array.from(document.querySelectorAll('.dropdown__item'));

dropdownValue.addEventListener('click', (event) => {
    event.preventDefault();
    dropdownList.classList.toggle('dropdown__list_active');
});

dropdownItems.forEach(item => {
  item.addEventListener('click', (event) => {
    event.preventDefault();    
    dropdownValue.textContent = item.textContent;
    dropdownList.classList.remove('dropdown__list_active');
  })

})