document.getElementById("calculate").addEventListener("click",_=>{
    const weight=+document.getElementById("weight").innerText;
    let height=+document.getElementById("height").innerText;
    
    if(!height||!weight){
        console.log(height);
        alert("invalid Weight or Height");
        return;
    }
    height=height/100;
    const bmi=Math.floor(weight/Math.pow(height,2));
    document.getElementById("bmi").innerText=bmi;
    let catogary="";
    if(bmi<=18.5){
        catogary="Underweight";
    }else if(bmi>18.5&&bmi<=24.9){
        catogary="Normal weight";
    }else if(bmi>25 && bmi<=29.9){
        catogary="Overweight"
    }else if(bmi>=30){
        catogary="Obesity";
    }
    document.getElementById("catogary").innerText=catogary;
})