let buttons = document.getElementById('buttons');
let Successbtn = document.getElementById('Successbtn');
let Errorbtn = document.getElementById('Errorbtn');
let Invalidbtn = document.getElementById('Invalidbtn');
let toastContainer  = document.getElementById('toastContainer');

buttons.addEventListener('click',function(e){
    console.log(e.target.innerText);
    if(e.target.innerText == "Success"){
        let successdiv = document.createElement('div');
        successdiv.classList.add('successdiv');
        let successImg = document.createElement('img');
        successImg.src = "https://static-00.iconduck.com/assets.00/success-icon-512x512-qdg1isa0.png";
        successImg.classList.add('successImg');
        let p = document.createElement('p');
        p.innerHTML = "Task Successfully Done.";
        p.classList.add('successText');
        console.log("Success button clicked");
        successdiv.appendChild(successImg);
        successdiv.appendChild(p);
        toastContainer.appendChild(successdiv);
        setTimeout(()=>{
            successdiv.remove();
        },5000)      
    }
    else if(e.target.innerText == "Error"){
        let Errordiv = document.createElement('div');
        Errordiv.classList.add('Errordiv');
        let ErrorImg = document.createElement('img');
        ErrorImg.src = "https://www.freeiconspng.com/thumbs/error-icon/orange-error-icon-0.png";
        ErrorImg.classList.add('successImg');
        let p = document.createElement('p');
        p.innerHTML = "Error Occurs.";
        p.classList.add('ErrorText');
        Errordiv.appendChild(ErrorImg);
        Errordiv.appendChild(p);
        toastContainer.appendChild(Errordiv);
        console.log("Error button clicked");
        setTimeout(()=>{
            Errordiv.remove();
        },5000)
    }
    else{
        let Invaliddiv = document.createElement('div');
        Invaliddiv.classList.add('Invaliddiv');
        let InvalidImg = document.createElement('img');
        InvalidImg.src = "https://www.freeiconspng.com/uploads/error-icon-4.png";
        InvalidImg.classList.add('InvalidImg');
        let p = document.createElement('p');
        p.innerHTML = "Invalid Task Done.";
        p.classList.add('InvalidText');
        console.log("Success button clicked");
        Invaliddiv.appendChild(InvalidImg);
        Invaliddiv.appendChild(p);
        toastContainer.appendChild(Invaliddiv);
        console.log("Invaild button clicked");
        setTimeout(()=>{
            Invaliddiv.remove();
        },5000)
    }
},false)
