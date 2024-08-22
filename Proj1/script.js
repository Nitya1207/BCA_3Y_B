let student = {
    id: 101,
    sname: "Palak",
    age: 19,
    isWorking: false,
    img:"https://media.istockphoto.com/id/1369754239/photo/university-student-in-white-background-stock-photo.jpg?s=612x612&w=0&k=20&c=LjFVDfjusWBjYTNliHV9DyXfApPGc8DmgBGEtfVgQ0Q="
}

let {id, sname, age, isWorking, img} = student

let info = `

<h1>Welcome</h1>
<img src="${img}" alt="No image" height="100px" width="100px">
<h2>ID: ${id}</h2>
<h2>Name: ${sname}</h2>
<h3>Age: ${age} yr old </h3>
<h3>working/Student : ${isWorking ? "Working Professsion": "Student"}

`
document.write(info)