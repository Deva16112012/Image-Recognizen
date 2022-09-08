Webcam.attach('#camera');
camera=document.getElementById("camera");
Webcam.set({
    width:350,
    height:300,
    image_format:'jpg',
    jpg_quality:90
})
function bt(){
    Webcam.snap(function(pic){
        document.getElementById("result").innerHTML='<img src="'+pic+'" id="sc"/>';
    })
}
console.log("ml5 version is",ml5.version);
x=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/j-K3BSfVA/model.json',modelloded);
function modelloded(){
    console.log("model is loaded");
}
function it(){
    g=document.getElementById("sc");
    x.classify(g,j);
}
function j(error,result){
if(error){
    console.log(error);
}
else{
    console.log(result);
    document.getElementById("s").innerHTML=result[0].label;
    document.getElementById("a").innerHTML=(result[0].confidence*100).toFixed(2)+"%";
}
}