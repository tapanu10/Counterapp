let count=0;
function increase()
{
   count++;
   updatecounter();
}
function decrease(){
    count--;
    updatecounter();
}
function updatecounter(){
  document.getElementById('num').textContent=count;
}
function reset(){
    count=0;
    updatecounter();
}
document.getElementById('increase-btn').addEventListener('click',increase);
document.getElementById('decrease-btn').addEventListener('click',decrease);
document.getElementById('reset').addEventListener('click', reset);

updatecounter();