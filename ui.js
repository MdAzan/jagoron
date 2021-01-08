class Exam{
  constructor(qaparent,q,ulX,li,l1,l2,l3,l4){
    this.questionpaper = qaparent;
    this.questiion = q;
    this.classOfUlTag = ulX;
    this.classOfEveryListTagOfParticularUl = li;
    this.list1 = l1;
    this.list2 = l2;
    this.list3 = l3;
    this.list4 = l4;
  }

  questionPaper(qaparent,q,ulX,li,l1,l2,l3,l4){
    // target question elements
    const question = document.querySelector(`.${qaparent} .question`);
    question.innerHTML = `${q}`;
    // target answer
    const answer = document.querySelector(`.${qaparent} .answer`);
    const ul = document.createElement('ul');
    ul.className = `list-unstyled ${ulX}`;
    ul.innerHTML = `
    <li class='list'></li>
    <li class='list'></li>
    <li class='list'></li>
    <li class='list'></li>
    `;
    answer.appendChild(ul);
    const answerUL = document.querySelector(`.${ulX}`);
    const fiSon = answerUL.children[0];
    const seSon = answerUL.children[1];
    const thSon = answerUL.children[2];
    const foSon = answerUL.children[3];
    // append element to list
    fiSon.innerHTML = `${l1}`;
    seSon.innerHTML = `${l2}`;
    thSon.innerHTML = `${l3}`;
    foSon.innerHTML = `${l4}`;
    // add a particular class to every list item of particular ul element
    fiSon.className = `${li}`;
    seSon.className = `${li}`;
    thSon.className = `${li}`;
    foSon.className = `${li}`;
  }



  // target click on list and change color
  targetList(){ 


    // target ul1
    const father1 = document.querySelector('.ul1');
    const childA1 = father1.children[0].children[0];
    const childA2 = father1.children[1].children[0];
    const childA3 = father1.children[2].children[0];
    const childA4 = father1.children[3].children[0];
    if(father1.classList.contains('ul1')){
      father1.addEventListener('click', (e)=>{
        if(e.target == childA1){
          childA1.parentElement.style.backgroundColor = "darkcyan ";
          childA2.parentElement.style.backgroundColor = "gray";
          childA3.parentElement.style.backgroundColor = "gray";
          childA4.parentElement.style.backgroundColor = "gray";
          console.log(e.target);
        }else if(e.target == childA2){
          childA2.parentElement.style.backgroundColor = "darkcyan";
          childA1.parentElement.style.backgroundColor = "gray";
          childA4.parentElement.style.backgroundColor = "gray";
          childA3.parentElement.style.backgroundColor = "gray";
        }else if(e.target == childA3){
          childA3.parentElement.style.backgroundColor = "darkcyan";
          childA1.parentElement.style.backgroundColor = "gray";
          childA2.parentElement.style.backgroundColor = "gray";
          childA4.parentElement.style.backgroundColor = "gray";
        }else if(e.target == childA4){
          childA4.parentElement.style.backgroundColor = "darkcyan";
          childA1.parentElement.style.backgroundColor = "gray";
          childA2.parentElement.style.backgroundColor = "gray";
          childA3.parentElement.style.backgroundColor = "gray";
        }
      });
    }


    // target ul2
    const father2 = document.querySelector('.ul2');
    const childB1 = father2.children[0].children[0];
    const childB2 = father2.children[1].children[0];
    const childB3 = father2.children[2].children[0];
    const childB4 = father2.children[3].children[0];
    if(father2.classList.contains('ul2')){
      father2.addEventListener('click', (e)=>{
        if(e.target == childB1){
          childB1.parentElement.style.backgroundColor = "darkcyan";
          childB2.parentElement.style.backgroundColor = "gray";
          childB3.parentElement.style.backgroundColor = "gray";
          childB4.parentElement.style.backgroundColor = "gray";
        }else if(e.target == childB2){
          childB2.parentElement.style.backgroundColor = "darkcyan";
          childB1.parentElement.style.backgroundColor = "gray";
          childB4.parentElement.style.backgroundColor = "gray";
          childB3.parentElement.style.backgroundColor = "gray";
        }else if(e.target == childB3){
          childB3.parentElement.style.backgroundColor = "darkcyan";
          childB1.parentElement.style.backgroundColor = "gray";
          childB2.parentElement.style.backgroundColor = "gray";
          childB4.parentElement.style.backgroundColor = "gray";
        }else if(e.target == childB4){
          childB4.parentElement.style.backgroundColor = "darkcyan";
          childB1.parentElement.style.backgroundColor = "gray";
          childB2.parentElement.style.backgroundColor = "gray";
          childB3.parentElement.style.backgroundColor = "gray";
        }
      });
    }

    
    // target ul3
    const father3 = document.querySelector('.ul3');
    const childC1 = father3.children[0].children[0];
    const childC2 = father3.children[1].children[0];
    const childC3 = father3.children[2].children[0];
    const childC4 = father3.children[3].children[0];
    if(father3.classList.contains('ul3')){
      father3.addEventListener('click', (e)=>{
        
        if(e.target == childC1){
          childC1.parentElement.style.backgroundColor = "darkcyan";
          childC2.parentElement.style.backgroundColor = "gray";
          childC3.parentElement.style.backgroundColor = "gray";
          childC4.parentElement.style.backgroundColor = "gray";
        }else if(e.target == childC2){
          childC2.parentElement.style.backgroundColor = "darkcyan";
          childC1.parentElement.style.backgroundColor = "gray";
          childC4.parentElement.style.backgroundColor = "gray";
          childC3.parentElement.style.backgroundColor = "gray";
        }else if(e.target == childC3){
          childC3.parentElement.style.backgroundColor = "darkcyan";
          childC1.parentElement.style.backgroundColor = "gray";
          childC2.parentElement.style.backgroundColor = "gray";
          childC4.parentElement.style.backgroundColor = "gray";
        }else if(e.target == childC4){
          childC4.parentElement.style.backgroundColor = "darkcyan";
          childC1.parentElement.style.backgroundColor = "gray";
          childC2.parentElement.style.backgroundColor = "gray";
          childC3.parentElement.style.backgroundColor = "gray";
        }
      });
    }

    // target ul4
    const father4 = document.querySelector('.ul4');
    const childD1 = father4.children[0].children[0];
    const childD2 = father4.children[1].children[0];
    const childD3 = father4.children[2].children[0];
    const childD4 = father4.children[3].children[0];
    if(father4.classList.contains('ul4')){
      father4.addEventListener('click', (e)=>{
        if(e.target == childD1){
          childD1.parentElement.style.backgroundColor = "darkcyan";
          childD2.parentElement.style.backgroundColor = "gray";
          childD3.parentElement.style.backgroundColor = "gray";
          childD4.parentElement.style.backgroundColor = "gray";
        }else if(e.target == childD2){
          childD2.parentElement.style.backgroundColor = "darkcyan";
          childD1.parentElement.style.backgroundColor = "gray";
          childD4.parentElement.style.backgroundColor = "gray";
          childD3.parentElement.style.backgroundColor = "gray";
        }else if(e.target == childD3){
          childD3.parentElement.style.backgroundColor = "darkcyan";
          childD1.parentElement.style.backgroundColor = "gray";
          childD2.parentElement.style.backgroundColor = "gray";
          childD4.parentElement.style.backgroundColor = "gray";
        }else if(e.target == childD4){
          childD4.parentElement.style.backgroundColor = "darkcyan";
          childD1.parentElement.style.backgroundColor = "gray";
          childD2.parentElement.style.backgroundColor = "gray";
          childD3.parentElement.style.backgroundColor = "gray";
        }
      });
    }

    

    // target ul5
    const father5 = document.querySelector('.ul5');
    const childE1 = father5.children[0].children[0];
    const childE2 = father5.children[1].children[0];
    const childE3 = father5.children[2].children[0];
    const childE4 = father5.children[3].children[0];
    if(father5.classList.contains('ul5')){
      father5.addEventListener('click', (e)=>{
        if(e.target == childE1){
          childE1.parentElement.style.backgroundColor = "darkcyan";
          childE2.parentElement.style.backgroundColor = "gray";
          childE3.parentElement.style.backgroundColor = "gray";
          childE4.parentElement.style.backgroundColor = "gray";
        }else if(e.target == childE2){
          childE2.parentElement.style.backgroundColor = "darkcyan";
          childE1.parentElement.style.backgroundColor = "gray";
          childE4.parentElement.style.backgroundColor = "gray";
          childE3.parentElement.style.backgroundColor = "gray";
        }else if(e.target == childE3){
          childE3.parentElement.style.backgroundColor = "darkcyan";
          childE1.parentElement.style.backgroundColor = "gray";
          childE2.parentElement.style.backgroundColor = "gray";
          childE4.parentElement.style.backgroundColor = "gray";
        }else if(e.target == childE4){
          childE4.parentElement.style.backgroundColor = "darkcyan";
          childE1.parentElement.style.backgroundColor = "gray";
          childE2.parentElement.style.backgroundColor = "gray";
          childE3.parentElement.style.backgroundColor = "gray";
        }
      });
    }

    // target ul6 F
    const father6 = document.querySelector('.ul6');
    const childF1 = father6.children[0].children[0];
    const childF2 = father6.children[1].children[0];
    const childF3 = father6.children[2].children[0];
    const childF4 = father6.children[3].children[0];
    if(father6.classList.contains('ul6')){
      father6.addEventListener('click', (e)=>{
        if(e.target == childF1){
          childF1.parentElement.style.backgroundColor = "darkcyan";
          childF2.parentElement.style.backgroundColor = "gray";
          childF3.parentElement.style.backgroundColor = "gray";
          childF4.parentElement.style.backgroundColor = "gray";
        }else if(e.target == childF2){
          childF2.parentElement.style.backgroundColor = "darkcyan";
          childF1.parentElement.style.backgroundColor = "gray";
          childF4.parentElement.style.backgroundColor = "gray";
          childF3.parentElement.style.backgroundColor = "gray";
        }else if(e.target == childF3){
          childF3.parentElement.style.backgroundColor = "darkcyan";
          childF1.parentElement.style.backgroundColor = "gray";
          childF2.parentElement.style.backgroundColor = "gray";
          childF4.parentElement.style.backgroundColor = "gray";
        }else if(e.target == childF4){
          childF4.parentElement.style.backgroundColor = "darkcyan";
          childF1.parentElement.style.backgroundColor = "gray";
          childF2.parentElement.style.backgroundColor = "gray";
          childF3.parentElement.style.backgroundColor = "gray";
        }
      });
    }
    
    
    // target ul7 G
    const father7 = document.querySelector('.ul7');
    const childG1 = father7.children[0].children[0];
    const childG2 = father7.children[1].children[0];
    const childG3 = father7.children[2].children[0];
    const childG4 = father7.children[3].children[0];
    if(father7.classList.contains('ul7')){
      father7.addEventListener('click', (e)=>{
        if(e.target == childG1){
          childG1.parentElement.style.backgroundColor = "darkcyan";
          childG2.parentElement.style.backgroundColor = "gray";
          childG3.parentElement.style.backgroundColor = "gray";
          childG4.parentElement.style.backgroundColor = "gray";
        }else if(e.target == childG2){
          childG2.parentElement.style.backgroundColor = "darkcyan";
          childG1.parentElement.style.backgroundColor = "gray";
          childG4.parentElement.style.backgroundColor = "gray";
          childG3.parentElement.style.backgroundColor = "gray";
        }else if(e.target == childG3){
          childG3.parentElement.style.backgroundColor = "darkcyan";
          childG1.parentElement.style.backgroundColor = "gray";
          childG2.parentElement.style.backgroundColor = "gray";
          childG4.parentElement.style.backgroundColor = "gray";
        }else if(e.target == childG4){
          childG4.parentElement.style.backgroundColor = "darkcyan";
          childG1.parentElement.style.backgroundColor = "gray";
          childG2.parentElement.style.backgroundColor = "gray";
          childG3.parentElement.style.backgroundColor = "gray";
        }
      });
    }

    // target ul8 H
    const father8 = document.querySelector('.ul8');
    const childH1 = father8.children[0].children[0];
    const childH2 = father8.children[1].children[0];
    const childH3 = father8.children[2].children[0];
    const childH4 = father8.children[3].children[0];
    if(father8.classList.contains('ul8')){
      father8.addEventListener('click', (e)=>{
        if(e.target == childH1){
          childH1.parentElement.style.backgroundColor = "darkcyan";
          childH2.parentElement.style.backgroundColor = "gray";
          childH3.parentElement.style.backgroundColor = "gray";
          childH4.parentElement.style.backgroundColor = "gray";
        }else if(e.target == childH2){
          childH2.parentElement.style.backgroundColor = "darkcyan";
          childH1.parentElement.style.backgroundColor = "gray";
          childH4.parentElement.style.backgroundColor = "gray";
          childH3.parentElement.style.backgroundColor = "gray";
        }else if(e.target == childH3){
          childH3.parentElement.style.backgroundColor = "darkcyan";
          childH1.parentElement.style.backgroundColor = "gray";
          childH2.parentElement.style.backgroundColor = "gray";
          childH4.parentElement.style.backgroundColor = "gray";
        }else if(e.target == childH4){
          childH4.parentElement.style.backgroundColor = "darkcyan";
          childH1.parentElement.style.backgroundColor = "gray";
          childH2.parentElement.style.backgroundColor = "gray";
          childH3.parentElement.style.backgroundColor = "gray";
        }
      });
    }


    // target ul9 I
    const father9 = document.querySelector('.ul9');
    const childI1 = father9.children[0].children[0];
    const childI2 = father9.children[1].children[0];
    const childI3 = father9.children[2].children[0];
    const childI4 = father9.children[3].children[0];
    if(father9.classList.contains('ul9')){
      father9.addEventListener('click', (e)=>{
        if(e.target == childI1){
          childI1.parentElement.style.backgroundColor = "darkcyan";
          childI2.parentElement.style.backgroundColor = "gray";
          childI3.parentElement.style.backgroundColor = "gray";
          childI4.parentElement.style.backgroundColor = "gray";
        }else if(e.target == childI2){
          childI2.parentElement.style.backgroundColor = "darkcyan";
          childI1.parentElement.style.backgroundColor = "gray";
          childI4.parentElement.style.backgroundColor = "gray";
          childI3.parentElement.style.backgroundColor = "gray";
        }else if(e.target == childI3){
          childI3.parentElement.style.backgroundColor = "darkcyan";
          childI1.parentElement.style.backgroundColor = "gray";
          childI2.parentElement.style.backgroundColor = "gray";
          childI4.parentElement.style.backgroundColor = "gray";
        }else if(e.target == childI4){
          childI4.parentElement.style.backgroundColor = "darkcyan";
          childI1.parentElement.style.backgroundColor = "gray";
          childI2.parentElement.style.backgroundColor = "gray";
          childI3.parentElement.style.backgroundColor = "gray";
        }
      });
    }


    // target ul10 J
    const father10 = document.querySelector('.ul10');
    const childJ1 = father10.children[0].children[0];
    const childJ2 = father10.children[1].children[0];
    const childJ3 = father10.children[2].children[0];
    const childJ4 = father10.children[3].children[0];
    if(father10.classList.contains('ul10')){
      father10.addEventListener('click', (e)=>{
        if(e.target == childJ1){
          childJ1.parentElement.style.backgroundColor = "darkcyan";
          childJ2.parentElement.style.backgroundColor = "gray";
          childJ3.parentElement.style.backgroundColor = "gray";
          childJ4.parentElement.style.backgroundColor = "gray";
        }else if(e.target == childJ2){
          childJ2.parentElement.style.backgroundColor = "darkcyan";
          childJ1.parentElement.style.backgroundColor = "gray";
          childJ4.parentElement.style.backgroundColor = "gray";
          childJ3.parentElement.style.backgroundColor = "gray";
        }else if(e.target == childJ3){
          childJ3.parentElement.style.backgroundColor = "darkcyan";
          childJ1.parentElement.style.backgroundColor = "gray";
          childJ2.parentElement.style.backgroundColor = "gray";
          childJ4.parentElement.style.backgroundColor = "gray";
        }else if(e.target == childJ4){
          childJ4.parentElement.style.backgroundColor = "darkcyan";
          childJ1.parentElement.style.backgroundColor = "gray";
          childJ2.parentElement.style.backgroundColor = "gray";
          childJ3.parentElement.style.backgroundColor = "gray";
        }
      });
    } //target ul10 finish here
  } //This is the curly braces of targetList function


  selectItems(cb){
    // target Exam Div
    const examDiv = document.querySelector('.ex1');
    // click ex1 and choose answer
    examDiv.addEventListener('click', (e)=>{
      if(e.target.parentElement.classList.contains('li1')){
        const fa1 = e.target.parentElement;
        window.f1 = fa1;
        const valone = e.target;
        window.val1 = valone;
      }

      if(e.target.parentElement.classList.contains('li2')){
        const fa2 = e.target.parentElement;
        window.f2 = fa2;
        const valtwo = e.target;
        window.val2 = valtwo;
      }

      if(e.target.parentElement.classList.contains('li3')){
        const fa3 = e.target.parentElement;
        window.f3 = fa3;
        const valthree = e.target;
        window.val3 = valthree;
      }

      if(e.target.parentElement.classList.contains('li4')){
        const fa4 = e.target.parentElement;
        window.f4 = fa4;
        const valfour = e.target;
        window.val4 = valfour;
      }

      
      if(e.target.parentElement.classList.contains('li5')){
        const fa5 = e.target.parentElement;
        window.f5 = fa5;
        const valfive = e.target;
        window.val5 = valfive;
      }

      if(e.target.parentElement.classList.contains('li6')){
        const fa6 = e.target.parentElement;
        window.f6 = fa6;
        const valsix = e.target;
        window.val6 = valsix;
      }

      if(e.target.parentElement.classList.contains('li7')){
        const fa7 = e.target.parentElement;
        window.f7 = fa7;
        const valseven = e.target;
        window.val7 = valseven;
      }

      if(e.target.parentElement.classList.contains('li8')){
        const fa8 = e.target.parentElement;
        window.f8 = fa8;
        const valEight = e.target;
        window.val8 = valEight;
      }

      if(e.target.parentElement.classList.contains('li9')){
        const fa9 = e.target.parentElement;
        window.f9 = fa9;
        const valNine = e.target;
        window.val9 = valNine;
      }

      if(e.target.parentElement.classList.contains('li10')){
        const fa10 = e.target.parentElement;
        window.f10 = fa10;
        const valTen = e.target;
        window.val10 = valTen;
      }
      
      // put all targeted list into arrlist
      let arrList = [];
      arrList.push(f1);
      arrList.push(f2);
      arrList.push(f3);
      arrList.push(f4);
      arrList.push(f5);
      arrList.push(f6);
      arrList.push(f7);
      arrList.push(f8);
      arrList.push(f9);
      arrList.push(f10);

      //put all values into an array

      // innerhtml of list item
      let arr = [];
      arr.push(val1);
      arr.push(val2);
      arr.push(val3);
      arr.push(val4);
      arr.push(val5);
      arr.push(val6);
      arr.push(val7);
      arr.push(val8);
      arr.push(val9);
      arr.push(val10);

      //(val1 != '' || val2 != '' || val3 != '' || val4 != '')
      // return value to calculate and submit
      if(val1 != '' || val2 != '' || val3 != '' || val4 != ''){
        cb(arrList,arr);
      }
    });

  } //selectItem function ends here


}  // Exam class end here


class Exam2{
  constructor(){}

  // change color for exam 2
  colorizeExam2(){
      // target ulB1
      const father1 = document.querySelector('.ulB1');
      const childA1 = father1.children[0];
      const childA2 = father1.children[1];
      const childA3 = father1.children[2];
      const childA4 = father1.children[3];
      if(father1.classList.contains('ulB1')){
        father1.addEventListener('click', (e)=>{
          if(e.target == childA1){
            childA1.style.backgroundColor = "darkcyan";
            childA2.style.backgroundColor = "gray";
            childA3.style.backgroundColor = "gray";
            childA4.style.backgroundColor = "gray";
          }else if(e.target == childA2){
            childA2.style.backgroundColor = "darkcyan";
            childA1.style.backgroundColor = "gray";
            childA4.style.backgroundColor = "gray";
            childA3.style.backgroundColor = "gray";
          }else if(e.target == childA3){
            childA3.style.backgroundColor = "darkcyan";
            childA1.style.backgroundColor = "gray";
            childA2.style.backgroundColor = "gray";
            childA4.style.backgroundColor = "gray";
          }else if(e.target == childA4){
            childA4.style.backgroundColor = "darkcyan";
            childA1.style.backgroundColor = "gray";
            childA2.style.backgroundColor = "gray";
            childA3.style.backgroundColor = "gray";
          }
        });
      }
  
  
      // target ulB2
      const father2 = document.querySelector('.ulB2');
      const childB1 = father2.children[0];
      const childB2 = father2.children[1];
      const childB3 = father2.children[2];
      const childB4 = father2.children[3];
      if(father2.classList.contains('ulB2')){
        father2.addEventListener('click', (e)=>{
          if(e.target == childB1){
            childB1.style.backgroundColor = "darkcyan";
            childB2.style.backgroundColor = "gray";
            childB3.style.backgroundColor = "gray";
            childB4.style.backgroundColor = "gray";
          }else if(e.target == childB2){
            childB2.style.backgroundColor = "darkcyan";
            childB1.style.backgroundColor = "gray";
            childB4.style.backgroundColor = "gray";
            childB3.style.backgroundColor = "gray";
          }else if(e.target == childB3){
            childB3.style.backgroundColor = "darkcyan";
            childB1.style.backgroundColor = "gray";
            childB2.style.backgroundColor = "gray";
            childB4.style.backgroundColor = "gray";
          }else if(e.target == childB4){
            childB4.style.backgroundColor = "darkcyan";
            childB1.style.backgroundColor = "gray";
            childB2.style.backgroundColor = "gray";
            childB3.style.backgroundColor = "gray";
          }
        });
      }
  
      
      // target ulB3
      const father3 = document.querySelector('.ulB3');
      const childC1 = father3.children[0];
      const childC2 = father3.children[1];
      const childC3 = father3.children[2];
      const childC4 = father3.children[3];
      if(father3.classList.contains('ulB3')){
        father3.addEventListener('click', (e)=>{
          if(e.target == childC1){
            childC1.style.backgroundColor = "darkcyan";
            childC2.style.backgroundColor = "gray";
            childC3.style.backgroundColor = "gray";
            childC4.style.backgroundColor = "gray";
          }else if(e.target == childC2){
            childC2.style.backgroundColor = "darkcyan";
            childC1.style.backgroundColor = "gray";
            childC4.style.backgroundColor = "gray";
            childC3.style.backgroundColor = "gray";
          }else if(e.target == childC3){
            childC3.style.backgroundColor = "darkcyan";
            childC1.style.backgroundColor = "gray";
            childC2.style.backgroundColor = "gray";
            childC4.style.backgroundColor = "gray";
          }else if(e.target == childC4){
            childC4.style.backgroundColor = "darkcyan";
            childC1.style.backgroundColor = "gray";
            childC2.style.backgroundColor = "gray";
            childC3.style.backgroundColor = "gray";
          }
        });
      }
  
      // target ulB4
      const father4 = document.querySelector('.ulB4');
      const childD1 = father4.children[0];
      const childD2 = father4.children[1];
      const childD3 = father4.children[2];
      const childD4 = father4.children[3];
      if(father4.classList.contains('ulB4')){
        father4.addEventListener('click', (e)=>{
          if(e.target == childD1){
            childD1.style.backgroundColor = "darkcyan";
            childD2.style.backgroundColor = "gray";
            childD3.style.backgroundColor = "gray";
            childD4.style.backgroundColor = "gray";
          }else if(e.target == childD2){
            childD2.style.backgroundColor = "darkcyan";
            childD1.style.backgroundColor = "gray";
            childD4.style.backgroundColor = "gray";
            childD3.style.backgroundColor = "gray";
          }else if(e.target == childD3){
            childD3.style.backgroundColor = "darkcyan";
            childD1.style.backgroundColor = "gray";
            childD2.style.backgroundColor = "gray";
            childD4.style.backgroundColor = "gray";
          }else if(e.target == childD4){
            childD4.style.backgroundColor = "darkcyan";
            childD1.style.backgroundColor = "gray";
            childD2.style.backgroundColor = "gray";
            childD3.style.backgroundColor = "gray";
          }
        });
      }
  
  
      // target ulB5
      const father5 = document.querySelector('.ulB5');
      const childE1 = father5.children[0];
      const childE2 = father5.children[1];
      const childE3 = father5.children[2];
      const childE4 = father5.children[3];
      if(father5.classList.contains('ulB5')){
        father5.addEventListener('click', (e)=>{
          if(e.target == childE1){
            childE1.style.backgroundColor = "darkcyan";
            childE2.style.backgroundColor = "gray";
            childE3.style.backgroundColor = "gray";
            childE4.style.backgroundColor = "gray";
          }else if(e.target == childE2){
            childE2.style.backgroundColor = "darkcyan";
            childE1.style.backgroundColor = "gray";
            childE4.style.backgroundColor = "gray";
            childE3.style.backgroundColor = "gray";
          }else if(e.target == childE3){
            childE3.style.backgroundColor = "darkcyan";
            childE1.style.backgroundColor = "gray";
            childE2.style.backgroundColor = "gray";
            childE4.style.backgroundColor = "gray";
          }else if(e.target == childE4){
            childE4.style.backgroundColor = "darkcyan";
            childE1.style.backgroundColor = "gray";
            childE2.style.backgroundColor = "gray";
            childE3.style.backgroundColor = "gray";
          }
        });
      }

  } // colorize finish here


  selectItems2(cb){
    // target Exam Div
    const examDiv = document.querySelector('.ex2');
    // click ex1 and choose answer
    examDiv.addEventListener('click', (e)=>{
      if(e.target.classList.contains('liB1')){
        const fa1 = e.target;
        window.f1 = fa1;
        const valone = e.target.innerHTML;
        window.val1 = valone;
      }

      if(e.target.classList.contains('liB2')){
        const fa2 = e.target;
        window.f2 = fa2;
        const valtwo = e.target.innerHTML;
        window.val2 = valtwo;
      }

      if(e.target.classList.contains('liB3')){
        const fa3 = e.target;
        window.f3 = fa3;
        const valthree = e.target.innerHTML;
        window.val3 = valthree;
      }

      if(e.target.classList.contains('liB4')){
        const fa4 = e.target;
        window.f4 = fa4;
        const valfour = e.target.innerHTML;
        window.val4 = valfour;
      }

      
      if(e.target.classList.contains('liB5')){
        const fa5 = e.target;
        window.f5 = fa5;
        const valfive = e.target.innerHTML;
        window.val5 = valfive;
      }

      // if(e.target.classList.contains('li6')){
      //   const fa6 = e.target;
      //   window.f6 = fa6;
      //   const valsix = e.target.innerHTML;
      //   window.val6 = valsix;
      // }

      // if(e.target.classList.contains('li7')){
      //   const fa7 = e.target;
      //   window.f7 = fa7;
      //   const valseven = e.target.innerHTML;
      //   window.val7 = valseven;
      // }

      // if(e.target.classList.contains('li8')){
      //   const fa8 = e.target;
      //   window.f8 = fa8;
      //   const valEight = e.target.innerHTML;
      //   window.val8 = valEight;
      // }

      // if(e.target.classList.contains('li9')){
      //   const fa9 = e.target;
      //   window.f9 = fa9;
      //   const valNine = e.target.innerHTML;
      //   window.val9 = valNine;
      // }

      // if(e.target.classList.contains('li10')){
      //   const fa10 = e.target;
      //   window.f10 = fa10;
      //   const valTen = e.target.innerHTML;
      //   window.val10 = valTen;
      // }
      
      // put all targeted list into arrlist
      let arrList = [];
      arrList.push(f1);
      arrList.push(f2);
      arrList.push(f3);
      arrList.push(f4);
      arrList.push(f5);
      // arrList.push(f6);
      // arrList.push(f7);
      // arrList.push(f8);
      // arrList.push(f9);
      // arrList.push(f10);

      //put all values into an array

      // innerhtml of list item
      let arr = [];
      arr.push(val1);
      arr.push(val2);
      arr.push(val3);
      arr.push(val4);
      arr.push(val5);
      // arr.push(val6);
      // arr.push(val7);
      // arr.push(val8);
      // arr.push(val9);
      // arr.push(val10);

      // return value to calculate and submit
      if(val1 != '' || val2 != '' || val3 != '' || val4 != ''){
        cb(arrList,arr);
      }
    });

  } //selectItem function ends here





} // class Exam2 finish here
