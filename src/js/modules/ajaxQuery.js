/**
 * Created by User on 019 19.08.21.
 */

export default () => {


    let formBtn = document.querySelector(".btn-submit");

    formBtn.addEventListener("click", () => {
        let name = document.querySelector(".name").value.trim();
        let email = document.querySelector(".email").value.trim();
        let subject = document.querySelector(".subject").value.trim();
        let message = document.querySelector(".message").value.trim();
        let errorField = document.querySelector(".errorMessage");
        let contactForm = document.querySelector("#send-message");

        if (name == "") {
            errorField.innerText = "Type a name"
            return false;
        }
        else if (email == "") {
            errorField.innerText = "Type Email"
            return false;
        }
        else if (subject == "") {
            errorField.innerText = "Type subject"
            return false;
        }
        else if (message.length < 5) {
            errorField.innerText = "Type not less than 5 symbols in a message area";
            return false;
        }

        errorField.innerText = "";

        let data = {
            'name': name,
            'email': email,
            'subject': subject,
            'message': message
        }

        ajax('contact.php', "post", showData, data);

        contactForm.reset();
    });


    function ajax(url, method, functionName, dataArray) {
        let xhttp = new XMLHttpRequest();
        xhttp.open(method, url, true);
        xhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        xhttp.send(requestData(dataArray));

        xhttp.onreadystatechange = function () {
            if(this.readyState == 4 && this.status == 200){
                functionName(this);
            }
        }


    }

    function requestData(dataArr) {
        let out = "";
        for (let key in dataArr){
            out += `${key}=${dataArr[key]}&`;
        }
        return out;

    }

    function showData(dataAtrr) {
        let fieldValue = document.querySelector('.errorMessage');
        fieldValue.innerText = dataAtrr.response;
    }

}