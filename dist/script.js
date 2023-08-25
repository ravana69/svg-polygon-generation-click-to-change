const radius = 200,
      max = 8;

let n = 2;

function setPts(){  
  let pts = [];
  
  ( n > max ) ? n=3 : n++;
  
  for (let i = 0; i < n; i++){
    const angle = (i/n * Math.PI *2)-Math.PI/2;
    const x = Math.cos(angle)*radius.toFixed(2);
    const y = Math.sin(angle)*radius.toFixed(2);
    pts.push( x + ',' + y + ' ');
  }

  gsap.set('.p', {x:250, y:250, attr:{points:pts}});
}

window.onclick = window.onload = setPts;

gsap.set('.p', {scale:(i)=>0.3+i*0.33, attr:{'stroke-width':(i)=>3-i}})

gsap.timeline({defaults:{duration:6, rotation:'+=360'}, repeat:-1})
    .to('.p1', {ease:'power4.inOut'}, 0)
    .to('.p2', {ease:'power3.inOut'}, 0)
    .to('.p3', {ease:'power2.inOut'}, 0)