
prediction_1 = "sad"
prediction_2 = "bored"

Webcam.set({
    width: 350,
    height: 300,
    image_format: "png",
    png_quality: 100
})

camera = document.getElementById("camera");
Webcam.attach(camera);

function takepicture() {
    Webcam.snap(function (data_uri) {
        document.getElementById("result").innerHTML = "<img id= 'takenimage' src= " + data_uri + ">"
    });


}
Classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/4oSZhqJSB/model.json", modelloaded);

function modelloaded() {
    console.log("model has been loaded");
}

function speak() {
    var synth = window.speechSynthesis;
    speak_data_1 = "The first prediction is" + prediction_1;
    speak_data_2 = "The second prediction is" + prediction_2;
    var speakthis = new SpeechSynthesisUtterance(speak_data_1 + speak_data_2);
    synth.speak(speakthis);
}

