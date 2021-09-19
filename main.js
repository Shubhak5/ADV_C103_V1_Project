Webcam.set({
    width: 350,
    height: 300,
    image_format: "png",
    png_quality: 90
});

camera = document.getElementById("camera");

Webcam.attach("#camera");

function take_snapshot() {
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = "<img id='captured_image' src='" + data_uri + "'/>";
    });
}

classifier = ml5.classifier('https://teachablemachine.withgoogle.com/models/9M_ge5_Me/model.json', modelLoaded);

function modelLoaded() {
    console.log("Model Loaded !");
}