const API="http://127.0.0.1:8000/api/students/";

async function loadStudents(){
    const res=await fetch(API);
    const data=await res.json();
    const list=document.getElementById("studentList");
    list.innerHTML="";
    data.forEach(s=>{
        list.innerHTML+=`
        <tr>
        <td>${s.id}</td>
        <td>${s.name}</td>
        <td>${s.department}</td>
        <td>${s.email}</td>
        <td>${s.phone}</td>
        <td>
        <button class="edit" onclick="editStudent(${s.id})">Edit</button>
        <button class="delete" onclick="deleteStudent(${s.id})">Delete</button>
        </td>
        </tr>`;
    });
}

document.getElementById("studentForm").addEventListener("submit",async e=>{
    e.preventDefault();

    const student={
        name:document.getElementById("name").value,
        department:document.getElementById("department").value,
        email:document.getElementById("email").value,
        phone:document.getElementById("phone").value
    };

    await fetch(API,{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(student)
    });

    e.target.reset();
    loadStudents();
});

async function deleteStudent(id){
    await fetch(API+id+"/",{method:"DELETE"});
    loadStudents();
}

async function editStudent(id){
    const name=prompt("Enter new name:");
    if(!name)return;

    await fetch(API+id+"/",{
        method:"PATCH",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({name:name})
    });

    loadStudents();
}

loadStudents();
document.getElementById("search").addEventListener("input",function(){
    const text=this.value.toLowerCase();
    document.querySelectorAll("#studentList tr").forEach(row=>{
        row.style.display=row.innerText.toLowerCase().includes(text)?"":"none";
    });
});