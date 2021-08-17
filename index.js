const myName = () => {
    return "Augustine Ugbaja";
}

const span = document.createElement("span");

span.style.color = '#faca15';
span.style.fontWeight = 'bold';
span.style.fontSize = '50px';

span.innerText = myName();

document.body.append(span);



