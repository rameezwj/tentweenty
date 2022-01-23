export const hoverAnimation = ()=>{
  const link = document.querySelectorAll('.hover-this');
  const cursor = document.querySelector('.cursor');
  
  const animateit = function(e){
    console.log(e);
    const span = this;
    const { offsetX: x, offsetY: y } = e;
    const { offsetWidth: width, offsetHeight: height } = this;
    const move = 2; 
    const xMove = x / width * (move*2) - move; 
    const yMove = y / height * (move*2) - move;

    span.style.transform = `translate(${xMove}px, ${yMove}px) scale(1)`;

    cursor.style.transform = `translate(-50%, -50%) scale(6)`;
    cursor.style.opacity = `1`;
    
    if(e.type==='mouseleave'){
      setTimeout(function(){
        cursor.style.opacity = `0`;
        cursor.style.transform = '';
        span.style.transform = '';
      }, 0)
    }
  };

  const editCursor = (e)=>{
    const { clientX: x, clientY: y} = e;
    const mousePosition = e;
    cursor.style.left = x + 'px';
    cursor.style.top = y + 'px';
  };

  link.forEach(b=>b.addEventListener('mousemove', animateit));
  link.forEach(b=>b.addEventListener('mouseleave', animateit));
  window.addEventListener('mousemove', editCursor);
}