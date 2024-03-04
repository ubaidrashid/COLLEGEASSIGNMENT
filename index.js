var names = [202, 203, 204, 205, 206, 207, 208, 209]
var games = [202, 203, 204, 205, 206, 207, 208, 209]
var fames = [202, 203, 204, 205, 206, 207, 208, 209]
var student = document.querySelector(".student")
var department = document.querySelector(".department")
var university = document.querySelector(".university")
var lisStudent = "";
var lisDepartment = "";
var lisUniversity = "";

// for (i = 0; i < names.length; i++) {
//     lis += `<li class="li${i}">${names[i]}</li>`;
// }
// lis+=`<li class=${studentone}></li>`
// student.innerHTML = lis;

//     lis+=`<li class=${studenttwo}></li>`
//     for (j = 0; j < games.length; j++) {
//         lis += `<li class="li${j}">${games[j]}</li>`;
//     }
// department.innerHTML = lis;
    
//     lis+=`<li class=${studentthree}></li>`
// for (k = 0; k < fames.length; k++){
//     lis += `<li class="li${k}">${fames[k]}</li>`;
// }
// university.innerHTML = lis;
for (i = 0; i < names.length; i++) {
    lisStudent += `<li class="li${i}">${names[i]}</li>`;
    lisDepartment += `<li class="li${i}">${games[i]}</li>`;
    lisUniversity += `<li class="li${i}">${fames[i]}</li>`;
}

student.innerHTML = lisStudent
department.innerHTML = lisDepartment
university.innerHTML = lisUniversity