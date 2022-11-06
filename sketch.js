//const densityCharacter = " ⵥⴼⵣ  ⵀⵇⵙⵉⵍ10ⵣⵅⵔⵡⵎⵓⵜ!|ⵏⵀⵛⴱ;:+=-,.  ";
//ⴰⵣⵥⴻⵔⵕⵜⵟⵢⵓⵉⵄⵃⵯⵇⵙⵚⴷⴹⴼⴳⴳⵯⵀⵊⴽⵯⴽⵍⵎⵡⵅⵛⵖⴱⵏ  :ⵉ ⵇⵟⴹⴽⵎⵡ ⵖ   .,ⴰ:-ⵎⴹⵟⵟ
const densityCharacter = "ⵥⴼⵀⵇⵍⵙⵣⵅⵎⵔⵓⵡⵜ0=+1!|;:-,.     ";
let Pic;
let video;
let AsciiDiv;

//function preload() {
//  Pic = loadImage("Pics/12.jpg");
//}
function setup() {
  // put setup code here
  //createCanvas(400, 400);
  noCanvas();
  video = createCapture(VIDEO);
  video.size(100, 100);
  AsciiDiv = createDiv();
}

function draw() {
  // put drawing code here
  background(0);
  //image(Pic, 0, 0, width, height);
  //let w = width / Pic.width;
  //let h = height / Pic.height;
  //Pic.loadPixels();
  video.loadPixels();
  let AsciiImage = "";

  for (let j = 0; j < video.height; j++) {
    //let row = "";
    for (let i = 0; i < video.width; i++) {
      pixelIndex = (i + j * video.width) * 4;
      const r = video.pixels[pixelIndex + 0];
      const g = video.pixels[pixelIndex + 1];
      const b = video.pixels[pixelIndex + 2];
      const a = video.pixels[pixelIndex + 3]; //Transperancy
      const avg = (r + g + b) / 3;

      //noStroke();
      //fill(avg);
      //fill(255, 100, 0);
      //square(i * w, j * h, w);

      const len = densityCharacter.length;
      const charIndex = floor(map(avg, 0, 255, len, 0));

      //textSize(w);
      //textAlign(CENTER, CENTER);
      //text("ⵣ", i * w + w * 0.5, j * h + h * 0.5);
      //text(densityCharacter[charIndex], i * w + w * 0.5, j * h + h * 0.5);

      const c = densityCharacter.charAt(charIndex);
      if (c == " ") {
        AsciiImage += "&nbsp"; //AsciiImage f 3oudh row
      } else {
        AsciiImage +=
          /*
          "<span style='color:rgb(" +
          r +
          ", " +
          g +
          ", " +
          b +
          ")'>" +
          c +
          "</span>";*/
          c;
      }
    }
    AsciiImage += "<br/>";
    //console.log(row);
    //createDiv(row);
  }
  AsciiDiv.html(AsciiImage);
}
