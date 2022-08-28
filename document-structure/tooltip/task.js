const hasTooltip = document.querySelectorAll('.has-tooltip')

for (let item of hasTooltip) {
    const tooltip = document.createElement('div');
    tooltip.className = 'tooltip';
    item.after(tooltip);

    item.addEventListener('click', (e) => {
     if (tooltip.textContent === e.currentTarget.title) { 
        tooltip.classList.toggle('tooltip_active');
     } else {
        tooltip.textContent = e.currentTarget.title;
        tooltip.classList.add('tooltip_active');
     }
    e.preventDefault();
    })
}