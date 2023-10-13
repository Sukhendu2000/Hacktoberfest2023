// Here i have taken array of objects
const data = [
    {
        name: "Raj", 
        Profession: "SDE"
    }, 
    {
        name: "Anuj", 
        Profession: "SDE"
    }, 
    {
        name: "Ajay", 
        Profession: "SDE"
    }
];

function getDatas() {
    setTimeout(() => {
        let output = "";
        data.forEach((data, index) => {
            output += `<li>${data.name}</li>`;
        })
        document.body.innerHTML = output;
    }, 1000)
}


function createData(newData, callback) {
    setTimeout(() => {
        data.push(newData);
        callback();  // getDatas function called after pushing the value in an array
    }, 2000)
}


createData({name: "Vivek", Profession: "Analyst"}, getDatas);
// getDatas();
