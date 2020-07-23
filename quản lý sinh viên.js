
var students=[];
function them() {
    let hoten = document.getElementById("hoten").value;
    let mssv = document.getElementById("mssv").value;
    let lop = document.getElementById("lớp").value;
    let email = document.getElementById("email").value;
    let sdt = document.getElementById("sđt").value;
    let diachi = document.getElementById("diachi").value;
    let gioitinh = " ";

    if (document.getElementById("nam").checked) {
        gioitinh = document.getElementById("nam").value;
    } else if (document.getElementById("nu").checked) {
        gioitinh = document.getElementById("nu").value;
    }

              var  student={
            hoten: hoten,
                mssv: mssv,
                lop: lop,
                sdt: sdt,
                diachi: diachi,
                gioitinh: gioitinh,
                email: email,
        };
        students.push(student);
        var a=" ";
        for (let i=students.length-1; i <students.length ; i++) {
            a=a+ '<tr>'+
                '<td>'+ (i+1) +'</td>'+
                '<td>'+students[i].hoten+'</td>'+
                '<td>'+students[i].mssv+'</td>'+
                '<td>'+students[i].lop+'</td>'+
                '<td>'+students[i].email+'</td>'+
                '<td>'+students[i].sdt+'</td>'+
                '<td>'+students[i].diachi+'</td>'+
                '<td>'+students[i].gioitinh+'</td>'+
                '<th><input type="button" onclick="sua('+i+')" value="Sửa">' +
                '<input value="Xóa" onclick="xoa('+i+')" type="button"></th>'+

                '</tr>'}
        document.getElementById("n").innerHTML+=a;
        clear();

}
function sua(index) {
    document.getElementById("hoten").value=students[index].hoten;
    document.getElementById("mssv").value=students[index].mssv;
    document.getElementById("lớp").value=students[index].lop;
    document.getElementById("email").value=students[index].email;
    document.getElementById("sđt").value=students[index].sdt;
    document.getElementById("diachi").value=students[index].diachi;
let u='<input value="Thay đổi" type="button" onclick="thaydoi('+index+')">'
    document.getElementById("thaydoi").innerHTML=u;

}
function xoa(index) {
    document.getElementById("n").innerHTML="";
    students.splice(index,1);
    let b="";
    for (let i=0; i <students.length ; i++) {
        b=b+ '<tr>'+
            '<td>'+ (i+1) +'</td>'+
            '<td>'+students[i].hoten+'</td>'+
            '<td>'+students[i].mssv+'</td>'+
            '<td>'+students[i].lop+'</td>'+
            '<td>'+students[i].email+'</td>'+
            '<td>'+students[i].sdt+'</td>'+
            '<td>'+students[i].diachi+'</td>'+
            '<td>'+students[i].gioitinh+'</td>'+
            '<th><input type="button" onclick="sua('+(i)+')" value="Sửa">' +
            '<input value="Xóa" onclick="xoa('+(i)+')" type="button"></th>'+

            '</tr>'}

    document.getElementById("n").innerHTML=b;
}

function thaydoi(index) {
    students[index].hoten=document.getElementById("hoten").value;
    students[index].mssv = document.getElementById("mssv").value;
    students[index].lop= document.getElementById("lớp").value;
    students[index].email = document.getElementById("email").value;
    students[index].sdt= document.getElementById("sđt").value;
    students[index].diachi= document.getElementById("diachi").value;
    if (document.getElementById("nam").checked) {
        students[index].gioitinh = document.getElementById("nam").value;
    } else if (document.getElementById("nu").checked) {
        students[index].gioitinh = document.getElementById("nu").value;
    }

    let b="";
    for (let i=0; i <students.length ; i++) {
        b=b+ '<tr>'+
            '<td>'+ (i+1) +'</td>'+
            '<td>'+students[i].hoten+'</td>'+
            '<td>'+students[i].mssv+'</td>'+
            '<td>'+students[i].lop+'</td>'+
            '<td>'+students[i].email+'</td>'+
            '<td>'+students[i].sdt+'</td>'+
            '<td>'+students[i].diachi+'</td>'+
            '<td>'+students[i].gioitinh+'</td>'+
            '<th><input type="button" onclick="sua('+(i)+')" value="Sửa">' +
            '<input value="Xóa" onclick="xoa('+(i)+')" type="button"></th>'+

            '</tr>'}

    document.getElementById("n").innerHTML=b;
    document.getElementById("thaydoi").innerHTML="";
    clear();
}
function clear() {
    document.getElementById("hoten").value=" ";
    document.getElementById("mssv").value=" ";
    document.getElementById("lớp").value=" ";
    document.getElementById("email").value=" ";
    document.getElementById("sđt").value=" ";
    document.getElementById("diachi").value=" ";
}