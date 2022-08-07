const count = document.getElementById("clicker__counter");
const cookieImg = document.getElementById("cookie");

cookie.onclick = function() {      
   count.textContent++;
if (cookieImg.width == 200) {
        cookieImg.width = 230;
    } else {
        cookieImg.width = 200;
    }
   
};