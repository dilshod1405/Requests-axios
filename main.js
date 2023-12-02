const ols = document.getElementById('olx')

const getting = () => {
    axios
.get('https://jsonplaceholder.typicode.com/todos?_limit=20')
.then((res) => {
    console.log(res);
    res.data.forEach(element => {
        const list = document.createElement('li');
            list.innerHTML = `<button class='btn btn-danger' onclick="deleting()"><i class="fa-solid fa-trash fa-xs" style="color: #ffffff;"></i></button> Title: ${element.title} -- userId: ${element.userId} -- completed: <span id='complete' onload="comp_style()" style = 'font-weight: bold;'>${element.completed}</span>`
            list.style.padding = '10px'
            list.style.margin = '10px'
            list.style.borderRadius = '5px'
            list.style.boxShadow = 'rgba(0, 0, 0, 0.24) 0px 3px 8px'
            list.style.backgroundColor = 'rgb(156, 156, 156)'
            if (element.completed == true){
            list.style.color = 'blue';
        }else if (element.completed == false){
            list.style.color = 'black';
        }
        ols.appendChild(list);
        
    });
}).catch (error=>console.log(error));
}


const deleting = () => {
    axios
    .delete(`https://jsonplaceholder.typicode.com/todos/1`)
    .then((res) => {
        console.log(res);
    })
};

const posting = () => {
    const choose = document.getElementById('object').value
    axios
    .post(`https://jsonplaceholder.typicode.com/todos`, {choose})
    .then((res) => {
        console.log(res);
    })
}