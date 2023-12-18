function dis(e)
{
let x=e.clientX;
let y=e.pageY;
    document.getElementById('num').innerHTML=document.getElementById('rnge').value;
    document.getElementById('num').style.position='absolute';
    document.getElementById('num').style.left=x+'px';
    document.getElementById('num').style.top=y+'px';
}
function mov(event)
{
    let x=event.pageX;
    let y=event.pageY;
    // document.getElementById('dis').innerHTML='( '+x+' , '+y+' )'
    document.getElementById('dis').style.position='absolute';
    document.getElementById('dis').style.left=x-25+'px';
    document.getElementById('dis').style.top=y-25+'px';
}