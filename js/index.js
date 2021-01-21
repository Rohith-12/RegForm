//select country 

let windowWidth=0;
let get;
const checkHnadler=document.querySelector('.checkbox');

const selectCountry=document.querySelector('.selectcountry');




checkHnadler.addEventListener('click',function(){
    
    
    if(selectCountry.style.display=='none'){
        
        selectCountry.style.display='block'
        
        
        
    }
    
 
    else{
        
        selectCountry.style.display='none'
        
        
    }

})

//lnik Handler 



const resumeHandler=document.querySelector('.textarea');
const link=document.querySelector('.upload__link');

 link.addEventListener('click',function(event){
    
    event.preventDefault();
    if(resumeHandler.style.display=='none'){
        
        resumeHandler.style.display='block'
        
        
        
    }
    else{
        
        resumeHandler.style.display='none'
        
    }
    
    
})



//form validation



const bttnsubmit=document.querySelector('.regsiter_now__bttn');

const inputHandler=document.querySelectorAll('.section__form__input');

const errormsg=document.querySelector('.section__main__form__error');



bttnsubmit.addEventListener('click',function(event){
    event.preventDefault();
    
   
    
    
    
    
    for(const i of inputHandler){
        
        
       
        
        
        //console.log(i.type);
       if(i.value===""){
           
           
           i.style.border='1px solid red'
           //console.log(i.target.value)
           //errormsg.innerHTML+=`Please specify your ${i.name}`
           i.nextElementSibling.innerHTML=`Please specify your ${i.name}`
           //break;
           //console.log(i.value);
           break;
           
           
       }
        else{
            i.style.border='1px solid #DFDFDF'
            i.nextElementSibling.style.display='none'
            
            
        }
 if(i.value !=""){
     
     
     console.log('hi');
     
 }
        
        
        
    }
 
})


//email checking 
let getemail;
const patt=/[a-z A-Z !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/g;
const emailErrorcontent=document.querySelector('.section__main__form__error__email')
const Email=document.getElementById('email');
//const loc=document.getElementById('location');
const mobilenumber=document.getElementById('Mobilenumber');
const mobileError=document.querySelector('.section__main__form__error__mobile')
let myelements=[Email,mobilenumber]
console.log(myelements);
window.addEventListener('resize',function(){
    
    
    windowWidth=window.innerWidth;
    
    
    if(windowWidth<800){
    
    console.log(windowWidth);
    get='keyup'
    
}
    
})
 get='pointerleave'


console.log(get)


for(const i of myelements){
    
  i.addEventListener('keyup',function(event){
      
      
      //console.log(event.target.id)
      
      
      if(event.target.value!=''){

          event.target.style.border='1px solid #DFDFDF';
          event.target.nextElementSibling.style.display='none'
          
      }
      
      
      
      if(event.target.id=='email'){
          
          let emailval=event.target.value;
          let indexat=emailval.indexOf('@');
          let indexdot=emailval.indexOf('.');
         // console.log(indexat)
          if(indexat===-1 &&indexdot===-1 && typeof(emailval[0])=='string'){
              
             // console.log('enter valid email id ')
             emailErrorcontent.innerHTML=`${emailval} is not a vaild email id`
              //break
          }
          else{
              
                emailErrorcontent.innerHTML=``
          }
         //console.log(indexat) 
      }
      
      if(event.target.id=='Mobilenumber'){
          
           
          let mobilevalue=event.target.value;
          
          let mobileal=mobilevalue.length
          
          
          if(mobileal<8 && typeof(mobilevalue[0])=='string' || patt.test(mobilevalue)==true ){
              
              //console.log('err')
                mobileError.innerHTML=`${mobilevalue}is not a valid moblie number`
                mobilenumber.style.border='1px solid red'
              
          }
          else{
              
              mobileError.innerHTML=``;
              mobilenumber.style.border='1px solid  #DFDFDF';
          }
      
          
      }
 
      
  })
   
}





//console.log(get)