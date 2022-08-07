holeDead = document.getElementById('dead');
holeLost = document.getElementById('lost');

const getHole = index => document.getElementById(`hole${index}`);
for (let i = 1; i<=9; i++) {
	getHole(i).onclick = ()=> {
        if (getHole(i).className.includes(`hole_has-mole`)) {
            holeDead.textContent++;
        } else {
            holeLost.textContent++;
        }
        if (holeDead.textContent == 10) {
            alert("Вы выиграли");
            holeDead.textContent = 0;
            holeLost.textContent = 0;

        }
        if (lost.textContent == 5) {
            alert("Вы проиграли")
            holeDead.textContent = 0;
            holeLost.textContent = 0;
        }
    }
}