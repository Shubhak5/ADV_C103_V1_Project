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

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/9M_ge5_Me/model.json', modelLoaded);

function modelLoaded() {
    console.log("Model Loaded !");
}

function Check() {
    img = document.getElementById("captured_image");
    classifier.classify(img, getResult);
}

function getResult(error, results) {
    if (error) {
        console.log(error);
    } else {
        console.log(results);
        document.getElementById("result_object_name").innerHTML = results[0].label;
        document.getElementById("result_object_accuracy").innerHTML = results[0].confidence.toFixed(3);
    }
}