const showBtn = document.querySelector('.navBtn');
const topNav = document.querySelector('.top-nav');

let fnameNode=document.getElementById("fname");
let emailNode=document.getElementById("mail");
let subNode=document.getElementById("sub");
let msgNode=document.getElementById("msg");

let errorNode1=document.getElementById("error1");
let errorNode4=document.getElementById("error4");
let errorNode2=document.getElementById("error2");
let errorNode3=document.getElementById("error3");

showBtn.addEventListener('click', function()
    {
        if(topNav.classList.contains('showNav'))
            {
                topNav.classList.remove('showNav');
                showBtn.innerHTML = '<i class = "fas fa-bars"></i>';
            } 
        else
            {
                topNav.classList.add('showNav');
                showBtn.innerHTML = '<i class = "fas fa-times"></i>';
            }
    }
);

let array=[errorNode1,errorNode4,errorNode2,errorNode3];
for(let node of array)
{
  node.style.color="orange";
}

function validateForm()
{
    let v1=validate1();
    let v2=validate4();
    let v3=validate2();
    let v4=validate3();
    return (v1 && v4 && v2 && v3); 
}

function validate1()
{
    let fname=fnameNode.value;
    let regex=new RegExp("^[A-Za-z]*$");
    errorNode1.innerHTML="";
    if(fname==='')
    {
        errorNode1.innerHTML="<small>Name is required</small>";
        fnameNode.style.border="1px solid red";
        return false;
    }
    else if(regex.test(fname)==false)
    {
        errorNode1.innerHTML="<small>Name must have only letters no numbers</small>";
        fnameNode.style.border="1px solid red";
        return false;
    }
    else
    {
        fnameNode.style.border="1px solid #86c232";
        return true;
    }
}

function validate2()
{
    let sub=subNode.value;
    errorNode2.innerHTML="";
    if(sub==='')
    {
        errorNode2.innerHTML="<small>Subject is required</small>";
        subNode.style.border="1px solid red";
        return false;
    }
    else if(sub.length<5 || sub.length>20)
    {
        errorNode2.innerHTML="<small>Subject should be 5-20 character long.</small>";
        subNode.style.border="1px solid red";
        return false;
    }
    else
    {
        subNode.style.border="1px solid #86c232";
        return true;
    }
}

function validate3()
{
    let msg=msgNode.value;
    errorNode3.innerHTML="";
    if(msg==='')
    {
        errorNode3.innerHTML="<small>Message is required</small>";
        msgNode.style.border="1px solid red";
        return false;
    }
    else if(msg.length<5 || msg.length>40)
    {
        errorNode3.innerHTML="<small>Message should be 5-40 character long.</small>";
        msgNode.style.border="1px solid red";
        return false;
    }
    else
    {
        msgNode.style.border="1px solid #86c232";
        return true;
    }
}

function validate4()
{
    let email=emailNode.value;
    errorNode4.innerHTML="";
    if(email==='')
    {
        errorNode4.innerHTML="<small>Email is required</small>";
        emailNode.style.border="1px solid red";
        return false;
    }
    else if(!email.includes('@') || email.endsWith('@'))
    {
        errorNode4.innerHTML="<small>Please enter valid email</small>";
        emailNode.style.border="1px solid red";
        return false;
    }
    else
    {
        emailNode.style.border="1px solid #86c232";
        return true;
    }
}

