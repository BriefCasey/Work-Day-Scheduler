function setColors(time){
    let timeArray=['9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm'];

    let timeIndex=timeArray.findIndex(function checkTime(input){
        return input==time; 
    });
    if (timeIndex==-1){
        for (let i=0;i<=timeArray.length;i++){
            $('#'+timeArray[i]+'Text').addClass("past")
        }
    }else{
        for (let i=0;i<=timeArray.length;i++){
            if (i<timeIndex){
                $('#'+timeArray[i]+'Text').addClass("past")
            }else if(i==timeIndex){
                $('#'+timeArray[i]+'Text').addClass("present")
            }else{
                $('#'+timeArray[i]+'Text').addClass("future")
            }
        }
    }
}
function setText(){
    let savedData=JSON.parse(localStorage.getItem('data'));
    for (let property in savedData){
        document.getElementById(property).setAttribute("value",savedData[property]);
    }
}

var currentDate=moment().format("MMM Do YYYY");
$('#currentDay').text(currentDate);
var currentHour=moment().format('ha');
console.log(currentHour);

setColors(currentHour);
setText();
var saveButton=document.querySelectorAll('.saveBtn');
saveButton.forEach(button =>button.addEventListener('click',()=>{
    let textData={
        '9amText':document.getElementById('9amText').value,
        '10amText':document.getElementById('10amText').value,
        '11amText':document.getElementById('11amText').value,
        '12pmText':document.getElementById('12pmText').value,
        '1pmText':document.getElementById('1pmText').value,
        '2pmText':document.getElementById('2pmText').value,
        '3pmText':document.getElementById('3pmText').value,
        '4pmText':document.getElementById('4pmText').value,
        '5pmText':document.getElementById('5pmText').value,
    }
    window.localStorage.setItem('data', JSON.stringify(textData));
}));
