// function showouput(output){
//     document.getElementById("output").innerHTML=output;

// }

showouput=(output)=>{
    document.getElementById("output").innerHTML=output
}
// let now=new Date()
// let today=.getDay()

function date(){
    if(new Date().getDay()===0){
        alert("its Sunday")
    }
    else if(new Date().getDay()===1){
        alert("its Monday")
    }
    else if(new Date().getDay()===2){
        alert("its Tuesday")

    }
    else if(new Date().getDay()===3){
        alert("its Wednesday")

    }
    else if(new Date().getDay()===4){
        alert("its Thrusday")

    }
    else if(new Date().getDay()===5){
        alert("its Friday")

    }
    else if(new Date().getDay()===6){
        alert("its Saturday")
    }
    
    else{
        alert("its Other day")

    }
    showouput(new Date().getDay())
    // showouput(today)
    
}

function Switch(){
    switch(today){
        case 0:
            alert("its Sunday");
            break;
            case 1:
                alert("its Moday")
                break;
                case 2:
                    alert("its Tuesday")
                    break;
            
                case 3:
                    alert("its Wedneesday")
                    break;
            
                case 4:
                    alert("its Thrusday")
                    break;
            
                case 5:
                    alert("its Friday  ")
                    break;
                case 6:
                    alert("its Saturday ")
                    break;
                    default:
                        alert("its Other Day")
            }
            showouput(today)

}

function askingName(){
    
    let i=0;
    do{
        let naam=prompt("Enter Your Name:")
        i++;
    }
    
    while(i<=3)
        showouput(naam)
    
}

const arrow=(a,b)=>{
    return sum=a+b
}
console.log(sum);

function expandme(){
    let expand=
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam nostrum eius deserunt est tempore quo porro repudiandae laboriosam eum rerum, libero quidem cum minus cumque provident assumenda perspiciatis placeat autem! <a href='javascript:void(0)' onclick='reduceme()'>Click To Reduce</a>"
    document.getElementById("para").innerHTML=expand
}