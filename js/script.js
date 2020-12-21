function signup() {
  var firstName = document.getElementById("firstName").value;
  if (!verifyLength(firstName, 5)) {
    document.getElementById("firstNameMsg").innerHTML =
      "First Name must have at least 5 characters";
  } else {
    document.getElementById("firstNameMsg").innerHTML = "";
  }
  var lastName = document.getElementById("lastName").value;
  if (!verifyLength(lastName, 5)) {
    document.getElementById("lastNameMsg").innerHTML =
      "Last Name must have at least 5 characters";
  } else {
    document.getElementById("lastNameMsg").innerHTML = "";
  }
  var email = document.getElementById("inputEmail").value;
  if (!validateEmail(email) || checkIfStExists(email)) {
    document.getElementById("emailMsg").innerHTML =
      "PLEASE check Email Format or Email exixts";
  } else {
    document.getElementById("emailMsg").innerHTML = "";
  }

  var pwd = document.getElementById("inputPassword").value;

  if (!verifyPwdFormat(pwd)) {
    document.getElementById("pwdMsg").innerHTML = "Please check Password !!";
  } else {
    document.getElementById("pwdMsg").innerHTML = "";
  }
  var confirmPwd = document.getElementById("confirmPwd").value;
  if (!verifyPwd(pwd, confirmPwd)) {
    document.getElementById("confirmPwdMsg").innerHTML =
      "Confirm Pwd does not match to Pwd";
  } else {
    document.getElementById("confirmPwdMsg").innerHTML = "";
  }
  var ville = document.getElementById("ville");
  var selectedVille = ville.options[ville.selectedIndex].value;
  var cin = document.getElementById("cin").value;

  if (!verifyLength(cin, 8)) {
    document.getElementById("cinMsg").innerHTML = "Please check C.I.N !!";
  } else {
    document.getElementById("cinMsg").innerHTML = "";
  }
  var tel = document.getElementById("tel").value;

  if (!verifyLength(tel, 8) || checkIfTelSExists(tel)) {
    document.getElementById("telMsg").innerHTML =
      "Please check phone-number !!";
  } else {
    document.getElementById("telMsg").innerHTML = "";
  }

  var classe = document.getElementById("classe");
  var selectedClasse = classe.options[classe.selectedIndex].value;

  var idLocal = JSON.parse(localStorage.getItem("idS") || "1");
 var bDate = (document.getElementById("bday"));
 
 if (!verifybDate(bDate) ) {
    document.getElementById("bdayMsg").innerHTML =
      "Please check birth day !!";
  } else {
    document.getElementById("bdayMsg").innerHTML = "";
  }

  var student = {
    id: idLocal,
    fName: firstName,
    lName: lastName,
    email: email,
    pwd: pwd,
    ville: selectedVille,
    cin: cin,
    tel: tel,
    classe: selectedClasse,
    bDate:bDate,
  };

  if (
    verifyLength(firstName, 5) &&
    verifyLength(lastName, 5) &&
    verifyPwd(pwd, confirmPwd) &&
    verifyPwdFormat(pwd) &&
    validateEmail(email) &&
    !checkIfStExists(email) &&
    verifyLength(tel, 8) &&
    verifyLength(cin, 8) &&
    !checkIfTelSExists(tel)
  ) {
    var T = JSON.parse(localStorage.getItem("students") || "[]");
    T.push(student);
    localStorage.setItem("students", JSON.stringify(T));
    localStorage.setItem("idS", idLocal + 1);
    location.reload();
  }

  //location.reload();
}
function verifyPwd(a, b) {
  return a === b;
}
function verifybDate(a) {
    return (a === 01-01-2002);
  }

function verifyLength(a, n) {
  return a.length >= n;
}
function verifyPwdFormat(x) {
  // Numbers counter
  var c = 0;
  // Loop counter
  var i = 0;
  while (c == 0 && i < x.length) {
    if (typeof Number(x[i]) == "number" && !isNaN(x[i])) {
      c++;
    }
    i++;
  }
  return c > 0 && x.length >= 8;
}

function validateEmail(x) {
  const regExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regExp.test(String(x).toLowerCase());
}
function checkIfStExists(email) {
  var T = JSON.parse(localStorage.getItem("students") || "[]");
  var i = 0;
  while (i < T.length && T[i].email != email) {
    i++;
  }
  // i = 2
  if (i == T.length) {
    return false;
  } else {
    return T[i].email == email;
  }
}
function checkIfTtExists(email) {
  var T = JSON.parse(localStorage.getItem("teachers") || "[]");
  var i = 0;
  while (i < T.length && T[i].email != email) {
    i++;
  }
  // i = 2
  if (i == T.length) {
    return false;
  } else {
    return T[i].email == email;
  }
}
function checkIfTelTExists(tel) {
  var T = JSON.parse(localStorage.getItem("teachers") || "[]");
  var i = 0;
  while (i < T.length && T[i].tel != tel) {
    i++;
  }
  // i = 2
  if (i == T.length) {
    return false;
  } else {
    return T[i].tel == tel;
  }
}
function checkIfTelSExists(tel) {
  var T = JSON.parse(localStorage.getItem("students") || "[]");
  var i = 0;
  while (i < T.length && T[i].tel != tel) {
    i++;
  }
  // i = 2
  if (i == T.length) {
    return false;
  } else {
    return T[i].tel == tel;
  }
}
function searchUserByEmail(T, email) {
  for (var i = 0; i < T.length; i++) {
    if (T[i].email == email) {
      var user = T[i];
    }
  }
  return user;
}

function resetAll() {
  document.getElementById("firstName").value="";
  document.getElementById("lastName").value="";
  document.getElementById("inputEmail").value="";
  document.getElementById("inputPassword").value="";
  document.getElementById("confirmPwd").value="";
  document.getElementById("ville").value="";
  document.getElementById("cin").value="";
  document.getElementById("classe").value="";
  document.getElementById("tel").value="";
  document.getElementById("bday").value="";
}
function resetAllT() {
    document.getElementById("firstName").value="";
    document.getElementById("lastName").value="";
    document.getElementById("inputEmail").value="";
    document.getElementById("inputPassword").value="";
    document.getElementById("confirmPwd").value="";
    document.getElementById("cin").value="";
    document.getElementById("classe").value="";
    document.getElementById("tel").value="";
  }
function goToTeacherSignPage() {
  location.replace("signupTeacher.html");
}
function goToTeacherLoginPage() {
  location.replace("loginTeacher.html");
}
function goToStudentLoginPage() {
  location.replace("loginStudent.html");
}
function goToStudentSignPage() {
  location.replace("signupStudent.html");
}

function signupTeacher() {
  var firstName = document.getElementById("firstName").value;
  if (!verifyLength(firstName, 5)) {
    document.getElementById("firstNameMsg").innerHTML =
      "First Name must have at least 5 characters";
  } else {
    document.getElementById("firstNameMsg").innerHTML = "";
  }
  var lastName = document.getElementById("lastName").value;
  if (!verifyLength(lastName, 5)) {
    document.getElementById("lastNameMsg").innerHTML =
      "Last Name must have at least 5 characters";
  } else {
    document.getElementById("lastNameMsg").innerHTML = "";
  }
  var email = document.getElementById("inputEmail").value;
  if (!validateEmail(email) || checkIfTtExists(email)) {
    document.getElementById("emailMsg").innerHTML =
      "PLEASE check Email Format or Email exixts";
  } else {
    document.getElementById("emailMsg").innerHTML = "";
  }

  var pwd = document.getElementById("inputPassword").value;

  if (!verifyPwdFormat(pwd)) {
    document.getElementById("pwdMsg").innerHTML = "Please check Password !!";
  } else {
    document.getElementById("pwdMsg").innerHTML = "";
  }
  var confirmPwd = document.getElementById("confirmPwd").value;
  if (!verifyPwd(pwd, confirmPwd)) {
    document.getElementById("confirmPwdMsg").innerHTML =
      "Confirm Pwd does not match to Pwd";
  } else {
    document.getElementById("confirmPwdMsg").innerHTML = "";
  }

  var cin = document.getElementById("cin").value;

  if (!verifyLength(cin, 8)) {
    document.getElementById("telMsg").innerHTML = "Please check C.I.N !!";
  } else {
    document.getElementById("telMsg").innerHTML = "";
  }
  var tel = document.getElementById("tel").value;

  if (!verifyLength(tel, 8) || checkIfTelTExists(tel)) {
    document.getElementById("telMsg").innerHTML =
      "Please check phone-number !!";
  } else {
    document.getElementById("telMsg").innerHTML = "";
  }

  var classe = document.getElementById("classe");
  var selectedClasse = classe.options[classe.selectedIndex].value;

  var idLocal = JSON.parse(localStorage.getItem("idT") || "1");

  var teacher = {
    id: idLocal,
    fName: firstName,
    lName: lastName,
    email: email,
    pwd: pwd,
    confirmPwd: confirmPwd,
    cin: cin,
    tel: tel,
    classe: selectedClasse,
  };

  if (
    verifyLength(firstName, 5) &&
    verifyLength(lastName, 5) &&
    verifyPwd(pwd, confirmPwd) &&
    verifyPwdFormat(pwd) &&
    validateEmail(email) &&
    !checkIfTtExists(email) &&
    verifyLength(tel, 8) &&
    verifyLength(cin, 8) &&
    !checkIfTelTExists(tel)
  ) {
    var T = JSON.parse(localStorage.getItem("teachers") || "[]");
    T.push(teacher);
    localStorage.setItem("teachers", JSON.stringify(T));
    localStorage.setItem("idT", idLocal + 1);
    location.reload();
  }

  //location.reload();
}

function searchUserByTel(T, tel) {
  for (var i = 0; i < T.length; i++) {
    if (T[i].tel == tel) {
      var user = T[i];
    }
  }
  return user;
}

function studentLogin() {
  var tel = document.getElementById("tel").value;
  var pwd = document.getElementById("pwd").value;
  var S = JSON.parse(localStorage.getItem("students"));
  var st = searchUserByTel(S, tel);
  if (st) {
    var idSt = localStorage.setItem("idSt", st.id);
    location.replace("student.html");
  }
  return st.pwd == pwd;
}
function teacherLogin() {
  var tel = document.getElementById("tel").value;
  var pwd = document.getElementById("pwd").value;
  var S = JSON.parse(localStorage.getItem("teachers"));
  var t = searchUserByTel(S, tel);
  if (t) {
      
    var id = localStorage.setItem("id", t.id);
    location.replace("teacher.html");
  }
  return t.pwd == pwd;
}
function searchById(id) {
  var T = JSON.parse(localStorage.getItem("teachers") || "[]");
  var result = T.filter((x) => {
    if (x.id == id) {
      return true;
    }
  });
  return result[0];
}
function searchStById(id) {
  var T = JSON.parse(localStorage.getItem("students") || "[]");
  var result = T.filter((x) => {
    if (x.id == id) {
      return true;
    }
  });
  return result[0];
}
function renderStudents() {
  var T = JSON.parse(localStorage.getItem("students") || "[]");
  var userNbr = T.length;
  var id = JSON.parse(localStorage.getItem("id"));
  var teacher = searchById(id);
  if (userNbr > 0) {
    var render = '<table class="table table-striped" id="divUserTable"> ';
    render +=
      "<thead><tr><th>Id</th><th> First Name</th><th>Last Name</th><th>Email</th><th>ville</th><th>cin</th><th>tel</th><th>presence</th></tr></thead>";
    render += "<tbody>";
    for (i = 0; i < userNbr; i++) {
      var student = T[i];
      if ((teacher.classe = student.classe)) {
        render +=
          "<tr>" +
          "<td>" +
          student.id +
          "</td> <td>" +
          student.fName +
          "</td><td>" +
          student.lName +
          "</td><td>" +
          student.email +
          "</td><td>" +
          student.ville +
          "</td><td>" +
          student.cin +
          "</td><td>" +
          student.tel +
          `</td>
                        <td> <button class='btn btn-success' id="btnPresent${student.id}" onclick="present(${student.id}, 0)">present  </button></td>
                        <td> <button class='btn btn-danger' id="btnAbscent${student.id}" onclick="present(${student.id}, 1)"> absent </button></td>
                        </tr>`;
      }
    }
    render += "</tbody></table>";

    var newTable = document.getElementById("divUserTable");
    newTable.innerHTML = render;
  } else {
    document.getElementById("divUserTable").innerHTML = "Aucun etudiant";
  }
}
function present(id, x) {
  var A = JSON.parse(localStorage.getItem("abscents") || "[]");
  var P = JSON.parse(localStorage.getItem("presnts") || "[]");
  var student = searchStById(id);
  var st = {
    id: student.id,
    fName: student.fName,
    lName: student.lName,
    classe: student.classe,
    tel: student.tel,
    Date: new Date(Date.now()),
  };
  if (x == 1) {
    A.push(st);
    localStorage.setItem("abscents", JSON.stringify(A));
  } else {
    P.push(st);
    localStorage.setItem("presents", JSON.stringify(P));
  }
}
function searchStudent() {
  var searchByDate = document.getElementById("searchByDate").value;

  var abscents = JSON.parse(localStorage.getItem("abscents") || "[]");
  var presents = JSON.parse(localStorage.getItem("presents") || "[]");
  var searched = abscents.filter((data) => {
    if (data.Date.substring(0, 10) == searchByDate) {
      return true;
    }
  });
  var searchedP = presents.filter((data) => {
    if (data.Date.substring(0, 10) == searchByDate) {
      return true;
    }
  });
  localStorage.setItem("allPresents", JSON.stringify(searched));
  localStorage.setItem("allabscents", JSON.stringify(searched));
  renderSearched(searched);
  renderSearchedP(searchedP);
}
function renderSearchedP(T) {
  var Nbr = T.length;
  if (Nbr > 0) {
    var render = '<table class="table table-striped" id="Table"> ';
    render +=
      "<thead><tr><th>first Name</th><th>Last Name</th><th>Date </th><th>tel</th></tr></thead>";
    render += "<tbody>";
    for (i = 0; i < Nbr; i++) {
      var abscent = T[i];
      render +=
        "<tr>" +
        "<td>" +
        abscent.fName +
        "</td> <td>" +
        abscent.lName +
        "</td><td>" +
        abscent.Date.substring(0, 10) +
        "</td><td>" +
        abscent.tel +
        "</td><td>" +
        "present" +
        `</td>
                  </tr>`;
    }
    render += "</tbody></table>";
    var newTable = document.getElementById("divPresent");
    newTable.innerHTML = render;
  } else {
    document.getElementById("divPresent").innerHTML = "Aucun present";
  }
}

function renderSearched(T) {
  var Nbr = T.length;
  if (Nbr > 0) {
    var render = '<table class="table table-striped" id="Table"> ';
    render +=
      "<thead><tr><th>first Name</th><th>Last Name</th><th>Date </th><th>tel</th></tr></thead>";
    render += "<tbody>";
    for (i = 0; i < Nbr; i++) {
      var abscent = T[i];
      render +=
        "<tr>" +
        "<td>" +
        abscent.fName +
        "</td> <td>" +
        abscent.lName +
        "</td><td>" +
        abscent.Date.substring(0, 10) +
        "</td><td>" +
        abscent.tel +
        "</td><td>" +
        "abscent" +
        `</td>
                  </tr>`;
    }
    render += "</tbody></table>";
    var newTable = document.getElementById("divSearchedTable");
    newTable.innerHTML = render;
  } else {
    document.getElementById("divSearchedTable").innerHTML = "Aucun abscents";
  }
}
function renderNote() {
  var T = JSON.parse(localStorage.getItem("students") || "[]");
  var userNbr = T.length;
  var id = JSON.parse(localStorage.getItem("id"));
  var teacher = searchById(id);
  if (userNbr > 0) {
    var render = '<table class="table table-striped" id="divUserTable"> ';
    render +=
      "<thead><tr><th>Id</th><th> First Name</th><th>Last Name</th><th>edit note</th></tr></thead>";
    render += "<tbody>";
    for (i = 0; i < userNbr; i++) {
      var student = T[i];
      if ((teacher.classe = student.classe)) {
        render +=
          "<tr>" +
          "<td>" +
          student.id +
          "</td> <td>" +
          student.fName +
          "</td><td>" +
          student.lName +
          `</td>
          <td> <button class='btn btn-success' onclick='editNote(${student.id})' > Edit </button></td>
                          </tr>`;
      }
    }
    render += "</tbody></table>";

    var newTable = document.getElementById("divNoteTable");
    newTable.innerHTML = render;
  } else {
    document.getElementById("divNoteTable").innerHTML = "Aucun etudiant";
  }
}

function editNote(id) {
  renderEditForm(id);
}
function renderEditForm(id) {
  var searchedStudent = searchStById(id);
  document.getElementById("editForm").innerHTML = `
  
    <div class="container">
              <div class="form-row">
                  <div class="form-group col-md-12">
                      <label for="noteMath">Note math</label>
                      <input type="number" class="form-control" id="noteMath" >
                      <p id="noteMathMsg" class="red"></p>
  
                  </div>
                  <div class="form-group col-md-12">
                      <label for="notePhysique">note physique</label>
                      <input type="number" class="form-control" id="notePhysique" >
                      <p id="notePhysiqueMsg" class="red"></p>
  
                  </div>
                  <div class="form-group col-md-12">
                      <label for="noteChimie">Note Chimie</label>
                      <input type="number" class="form-control" id="noteChimie" >
                      <span id="noteChimieMsg" class="red"></span>
                  </div>
                  <div class="form-group col-md-12">
                      <label for="noteInformatique">Note Informatique</label>
                      <input type="number" class="form-control" id="noteInformatique" >
                      <span id="noteInformatiqueMsg" class="red"></span>
                  </div>
                  <div class="form-group col-md-12">
                      <label for="noteElectronique">Note électronique</label>
                      <input type="number" class="form-control" id="noteElectronique" >
                      <span id="noteElectroniqueMsg" class="red"></span>
                  </div>
              </div>
  
              <div class="center">
                  <button type="submit" class="btn btn-primary" onclick="validateEditNote(${searchedStudent.id})">Edit </button>
  
              </div>
      </div>
    `;
}
function validateEditNote(id) {
    var student = searchStById(id);
    var noteMath = document.getElementById("noteMath").value;
    if (!verifyNote(noteMath)) {
      document.getElementById("noteMathMsg").innerHTML =
      "Note must be between 0 and 20";
    } else {
      document.getElementById("noteMathMsg").innerHTML = "";
    }
    var notePhysique = document.getElementById("notePhysique").value;
    if (!verifyNote(notePhysique)) {
      document.getElementById("notePhysiqueMsg").innerHTML =
      "Note must be between 0 and 20";
    } else {
      document.getElementById("notePhysiqueMsg").innerHTML = "";
    }
    var noteChimie = document.getElementById("noteChimie").value;
    if (!verifyNote(noteChimie)) {
      document.getElementById("noteChimieMsg").innerHTML =
      "Note must be between 0 and 20";
    } else {
      document.getElementById("noteChimieMsg").innerHTML = "";
    }
    var noteInformatique = document.getElementById("noteInformatique").value;
    if (!verifyNote(noteInformatique)) {
      document.getElementById("noteInformatiqueMsg").innerHTML =
      "Note must be between 0 and 20";
    } else {
      document.getElementById("noteInformatiqueMsg").innerHTML = "";
    }
    var noteElectronique = document.getElementById("noteElectronique").value;
    if (!verifyNote(noteElectronique)) {
      document.getElementById("noteElectroniqueMsg").innerHTML =
        "Note must be between 0 and 20";
    } else {
      document.getElementById("noteElectroniqueMsg").innerHTML = "";
    }
    var idLocal = JSON.parse(localStorage.getItem("idN") || "1");
  
    var note = {
      id: idLocal,
      idS:student.id,
      fName: student.fName,
      lName: student.lName,
      noteMath: noteMath,
      notePhysique: notePhysique,
      noteChimie: noteChimie,
      noteInformatique: noteInformatique,
      noteElectronique: noteElectronique,
    };
  
    if (
      verifyNote(noteMath) &&
      verifyNote(notePhysique) &&
      verifyNote(noteChimie) &&
      verifyNote(noteInformatique) &&
      verifyNote( noteElectronique) 
    ) {
      var T = JSON.parse(localStorage.getItem("notes") || "[]");
      T.push(note);
      localStorage.setItem("notes", JSON.stringify(T));
      localStorage.setItem("idN", idLocal + 1);
    }
  
    location.reload();
  }
  function verifyNote(x) {
      return(x>=0 && x<=20) 
  }

  function renderMoy() {
    var T = JSON.parse(localStorage.getItem("notes") || "[]");
   var TC= classement(T);
    var noteNbr = TC.length;
    if (noteNbr > 0) {
      var render = '<table class="table table-striped" id="divUserTable"> ';
      render +=
        "<thead><tr><th>Id</th><th> First Name</th><th>Last Name</th><th>note math</th><th>note physique</th><th>note chimie</th><th>note informatique</th><th>note electronique</th><th>moyenne</th><th>mention</th></tr></thead>";
      render += "<tbody>";
      for (i = 0; i < noteNbr; i++) {
        var note = TC[i];
          render +=
            "<tr>" +
            "<td>" +
            note.idS +
            "</td> <td>" +
            note.fName +
            "</td><td>" +
            note.lName +
            "</td><td>" +
            note.noteMath +
            "</td><td>" +
            note.notePhysique +
            "</td><td>" +
            note.noteChimie +
            "</td><td>" +
            note.noteInformatique +
            "</td><td>" +
            note.noteElectronique +
            "</td><td>" +
            calculMoy(note) +
            "</td><td>" +
            grade (calculMoy(note)) +
            `</td>
   
                          </tr>`;
        }
      
      render += "</tbody></table>";
  
      var newTable = document.getElementById("divTable");
      newTable.innerHTML = render;
    } else {
      document.getElementById("divTable").innerHTML = "Aucun etudiant";
    }
  }

  
  function calculMoy(note){
    var moy = (note.noteMath*3+note.notePhysique*2+note.noteChimie*1+note.noteInformatique*4+note.noteElectronique*2)/12;
    return moy
 }
 function grade (x){
     var ch;
     if (x>0 && x<=8){
         ch="trop faible";
     } else if(x>=9 && x<=10){
         ch="faible";
     }else if(x>=11 && x<= 13){
        ch="Moyen ";
     }else if(x>=14 && x<=15){
         ch="Assez bien";
     }else if (x>=16 && x<=18){
          ch=" bien";
     }
     else{
         ch="excellent";
     }
    return ch;
 }

function classement(T) {
    
    var noteNbr = T.length;
    for (i = 0; i < noteNbr-1; i++) {
        for (j = i; j <noteNbr ; j++)
      
        if(calculMoy(T[i])<calculMoy(T[j])){
            var m= T[i];
            T[i]=T[j];
            T[j]=m;
        }
}
return T;
}
function modifier() {
    var id = JSON.parse(localStorage.getItem("id"));
    renderModifieForm(id);
}
function renderModifieForm(id) {
    var teacher = searchById(id);
    document.getElementById("edit").innerHTML = `
  
    <div class="container">
              <div class="form-row">
                  <div class="form-group col-md-12">
                      <label for="email">email</label>
                      <input type="email" class="form-control" id="emailEdit" value= '${teacher.email}'>
                      <p id="emailEditMsg" class="red"></p>
  
                  </div>
                  <div class="form-group col-md-12">
                      <label for="password">password</label>
                      <input type="password" class="form-control" id="pwdEdit" value='${teacher.pwd}'>
                      <p id="pwdEditMsg" class="red"></p>
  
                  </div>
                  <div class="form-group col-md-12">
                      <label for="confirmPassword">confirmPassword</label>
                      <input type="password" class="form-control" id="confPwdEdit" value='${teacher.pwd}'>
                      <p id="confPwdEditMsg" class="red"></p>
  
                  </div>
                  <div class="form-group col-md-12">
                      <label for="tel">tel</label>
                      <input type="number" class="form-control" id="telEdit" value='${teacher.tel}'>
                      <span id="telMsg" class="red"></span>
                  </div>
                  <div class="form-group col-md-12">
                  <label for="classe">classe</label>
                  <input type="number" class="form-control" id="classeEdit" value='${teacher.classe}'>
                  <span id="stockMsg" class="red"></span>
              </div>
              </div>
  
              <div class="center">
                  <button type="submit" class="btn btn-primary" onclick="validateEditTeacher(${teacher.id})">Edit </button>
  
              </div>
      </div>
    `;
  }
  function validateEditTeacher(id) {
    // search product by ID
    var newEmail = document.getElementById("emailEdit").value;
    var newPwd = document.getElementById("pwdEdit").value;
    var newTel= document.getElementById("telEdit").value;
    var newClasse= document.getElementById("classeEdit").value;
    edit(id, newEmail, newPwd, newTel,newClasse);
  }
  function edit(id, newEmail, newPwd, newTel,newClasse) {
    var teacher = searchById(id);
  
    var newTeacher = {
      id: teacher.id,
      fName: teacher.fName,
      lName: teacher.lName,
      email: newEmail,
      pwd: newPwd,
      tel: newTel,
      classe:newClasse,
    };
  
    
    var teachers = JSON.parse(localStorage.getItem("teachers") || "[]");
    var index = searchIndex(id, teachers);
  
   
    teachers.splice(index, 1);
    
    teachers.splice(index, 0, newTeacher);
    localStorage.setItem("teachers", JSON.stringify(teachers));
    location.reload();
  }
  function searchIndex(id, teachers) {
    var index;
    for (var i = 0; i < teachers.length; i++) {
      if (teachers[i].id == id) {
        index = i;
      }
    }
    return index;
  }
  function calculMoyenne(note){
    var noteMath = document.getElementById("noteMaths").value;
    if (!verifyNote(noteMath)) {
      document.getElementById("noteMathsMsg").innerHTML =
      "Note must be between 0 and 20";
    } else {
      document.getElementById("noteMathsMsg").innerHTML = "";
    }
    var notePhysique = document.getElementById("notePhysiques").value;
    if (!verifyNote(notePhysique)) {
      document.getElementById("notePhysiquesMsg").innerHTML =
      "Note must be between 0 and 20";
    } else {
      document.getElementById("notePhysiquesMsg").innerHTML = "";
    }
    var noteChimie = document.getElementById("noteChimies").value;
    if (!verifyNote(noteChimie)) {
      document.getElementById("noteChimiesMsg").innerHTML =
      "Note must be between 0 and 20";
    } else {
      document.getElementById("noteChimiesMsg").innerHTML = "";
    }
    var noteInformatique = document.getElementById("noteInformatiques").value;
    if (!verifyNote(noteInformatique)) {
      document.getElementById("noteInformatiquesMsg").innerHTML =
      "Note must be between 0 and 20";
    } else {
      document.getElementById("noteInformatiquesMsg").innerHTML = "";
    }
    var noteElectronique = document.getElementById("noteElectoniques").value;
    if (!verifyNote(noteElectronique)) {
      document.getElementById("noteElectoniquesMsg").innerHTML =
        "Note must be between 0 and 20";
    } else {
      document.getElementById("noteElectoniquesMsg").innerHTML = "";
    }
    var moy = (noteMath*3+notePhysique*2+noteChimie*1+noteInformatique*4+noteElectronique*2)/12;
    document.getElementById("moy").innerHTML ="votre moyenne est"+moy;
 }
 function renderMoyenne() {
    var T = JSON.parse(localStorage.getItem("notes") || "[]");
    var id = JSON.parse(localStorage.getItem("idSt"));
    var student = searchStById(id);
    var noteNbr = T.length;
    if (noteNbr > 0) {
      var render = '<table class="table table-striped" id="divUserTable"> ';
      render +=
        "<thead><tr><th>Id</th><th> First Name</th><th>Last Name</th><th>note math</th><th>note physique</th><th>note chimie</th><th>note informatique</th><th>note electronique</th><th>moyenne</th><th>mention</th></tr></thead>";
      render += "<tbody>";
      for (i = 0; i < noteNbr; i++) {
        var note = T[i];
        if (student.id==note.idS) {
            
       
          render +=
            "<tr>" +
            "<td>" +
            note.idS +
            "</td> <td>" +
            note.fName +
            "</td><td>" +
            note.lName +
            "</td><td>" +
            note.noteMath +
            "</td><td>" +
            note.notePhysique +
            "</td><td>" +
            note.noteChimie +
            "</td><td>" +
            note.noteInformatique +
            "</td><td>" +
            note.noteElectronique +
            "</td><td>" +
            calculMoy(note) +
            "</td><td>" +
            grade (calculMoy(note)) +
            `</td>
   
                          </tr>`;
        }
    }
      render += "</tbody></table>";
  
      var newTable = document.getElementById("divTable");
      newTable.innerHTML = render;
    } else {
      document.getElementById("divTable").innerHTML = "Aucun etudiant";
    }
  }

  function renderAbscence() {
    var T = JSON.parse(localStorage.getItem("abscents") || "[]");
    var id = JSON.parse(localStorage.getItem("idSt"));
    var student = searchStById(id);
    var nb=0;
    var abNbr = T.length;
    if (abNbr > 0) {
      var render = '<table class="table table-striped" id="divUserTable"> ';
      render +=
        "<thead><tr><th>Id</th><th> First Name</th><th>Last Name</th><th>les jours </th></tr></thead>";
      render += "<tbody>";
      for (i = 0; i < abNbr; i++) {
        var abscent = T[i];
        
        if (student.id==abscent.id) {
          render +=
            "<tr>" +
            "<td>" +
            abscent.id +
            "</td> <td>" +
            abscent.fName +
            "</td><td>" +
            abscent.lName +
            "</td><td>" +
            abscent.Date +
            
            `</td>
   
                          </tr>`;
                          nb++;
                        }
       
    }
      render += "</tbody></table>";
  
      var newTable = document.getElementById("divStTable");
      newTable.innerHTML = render;
      document.getElementById("divNombre").innerHTML ="le nombre de tes abscences est  "+nb;
    } else {
      document.getElementById("divStTable").innerHTML = "Aucun etudiant";
    }
  }
  function modifierSt() {
    var id = JSON.parse(localStorage.getItem("idSt"));
    renderModifieForms(id);
}
function renderModifieForms(id) {
    var student = searchStById(id);
    document.getElementById("editST").innerHTML = `
  
    <div class="container">
              <div class="form-row">
                  <div class="form-group col-md-12">
                      <label for="email">email</label>
                      <input type="email" class="form-control" id="emailEdit" value= '${student.email}'>
                      <p id="emailEditMsg" class="red"></p>
  
                  </div>
                  <div class="form-group col-md-12">
                      <label for="password">password</label>
                      <input type="password" class="form-control" id="pwdEdit" value='${student.pwd}'>
                      <p id="pwdEditMsg" class="red"></p>
  
                  </div>
                  <div class="form-group col-md-12">
                      <label for="confirmPassword">confirmPassword</label>
                      <input type="password" class="form-control" id="confPwdEdit" value='${student.pwd}'>
                      <p id="confPwdEditMsg" class="red"></p>
  
                  </div>
                  <div class="form-group col-md-12">
                      <label for="tel">tel</label>
                      <input type="number" class="form-control" id="telEdit" value='${student.tel}'>
                      <span id="telMsg" class="red"></span>
                  </div>
                  <div class="form-group col-md-12">
                  <label for="classe">classe</label>
                  <input type="number" class="form-control" id="classeEdit" value='${student.classe}'>
                  <span id="stockMsg" class="red"></span>
              </div>
              </div>
  
              <div class="center">
                  <button type="submit" class="btn btn-primary" onclick="validateEditStudent(${student.id})">Edit </button>
  
              </div>
      </div>
    `;
  }
  function validateEditStudent(id) {
    // search product by ID
    var newEmail = document.getElementById("emailEdit").value;
    var newPwd = document.getElementById("pwdEdit").value;
    var newTel= document.getElementById("telEdit").value;
    var newClasse= document.getElementById("classeEdit").value;
    editS(id, newEmail, newPwd, newTel,newClasse);
  }
  function editS(id, newEmail, newPwd, newTel,newClasse) {
    var student = searchStById(id);
  
    var newStudent = {
      id: student.id,
      fName: student.fName,
      lName: student.lName,
      email: newEmail,
      pwd: newPwd,
      tel: newTel,
      classe:newClasse,
    };
  
    
    var students = JSON.parse(localStorage.getItem("students") || "[]");
    var index = searchIndex(id, students);
  
   
    students.splice(index, 1);
    
    students.splice(index, 0, newStudent);
    localStorage.setItem("students", JSON.stringify(students));
    location.reload();
  }
  function searchIndex(id, students) {
    var index;
    for (var i = 0; i < students.length; i++) {
      if (students[i].id == id) {
        index = i;
      }
    }
    return index;
  }