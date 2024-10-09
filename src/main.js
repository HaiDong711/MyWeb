document.getElementById('emailbtn').onclick = ()=>{
    document.getElementById('hidden_mess').innerHTML = "https://portal4.hcmus.edu.vn/SinhVien.aspx?pid=212";

}

let avatarImg = document.getElementById('personal-holder');
let isFLip = true;
avatarImg.onclick = ()=>{
    avatarImg.setAttribute('src',isFlip?'src');
}