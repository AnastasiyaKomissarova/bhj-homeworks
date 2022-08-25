const interestList = document.querySelectorAll('.interest__check');

for (let i = 0; i < interestList.length; i++) {
		const parent = interestList[i].closest('li');
        if (parent !== null) {
        interestList[i].addEventListener('change', () => {
            const interestActiveList = parent.querySelectorAll('.interest__check');

            interestActiveList.forEach(e => {
                if (interestList[i].checked == true) {
                    e.checked = true;
                } else {
                    e.checked = false;
                };
            });
        });       
    };
};
