
//~ var f = 2.83465;
//~ var ws = prompt("Enter any number of widths (in mm) separated by spaces", "30 150 300 150 297", "Widths");
//~ var hs = prompt("Enter any number of hights (in mm) separated by spaces", "75 200 75", "Heights");
//~ var w = ws.split(" ");

UL = [0, 479]
BR = [799, 599]

var shapeRef = [
    [UL[0], UL[1]],
    [UL[0], BR[1]],
    
    [BR[0], BR[1]],
    [BR[0], UL[1]], 
//~     [20,20],
//~     [20,100],
//~     [100,100],
//~     [100,20]
]

strokeBox(shapeRef)

//~     for (var i = 0; i < w.length; i++) {
function strokeBox ( shapeRef ) {
        docRef = app.activeDocument
        docRef.selection.select (shapeRef, SelectionType.REPLACE, 0, false)
        
        fillColor = new RGBColor;
        fillColor.hexValue = "FF0000";
//~         docRef.selection.stroke (strokeColor, 2, StrokeLocation.OUTSIDE, ColorBlendMode.VIVIDLIGHT, 75, false)
        docRef.selection.fill( fillColor, ColorBlendMode.VIVIDLIGHT, 25, false)
        docRef.activeLayer.name = "Test"

//~ var fillColor = new SolidColor()
//~ fillColor.rgb.red = 255
//~ fillColor.rgb.green = 0
//~ fillColor.rgb.blue = 0

}

//~ for (var i = 0; i < w.length; i++){
//~        w[i] = Number(w[i])*f;
//~ }
//~ var h = hs.split(" ");
//~ for (var i = 0; i < h.length; i++){
//~     h[i] = Number(h[i])*f;
//~ }
//~ //var d = app.activeDocument.activeLayer.artboardRect;
//~ var w1 = 0;
//~ for (var i in w){
//~     w1 += w[i];
//~ }
//~ var h1 = 0;
//~ for (var i in h){
//~     h1 += h[i];
//~ }
//~ var h2 = d[3]/2+h1/2;
//~ for (var j = 0; j < h.length; j++) {
//~     var w2 = d[2]/2-w1/2;

//~         var rect0 = app.activeDocument.pathItems.rectangle(h2, w2, w[i], h[j]);
//~         rect0.name = "rect " + (j + 1) + ", " + (i + 1);
//~         w2 = w2 + w[i];

//~     }
//~     h2 = h2 - h[j];
//~ }
// delete top and bottom left
//~ app.activeDocument.pathItems["rect 1, 1"].remove();
//~ app.activeDocument.pathItems["rect " + h.length + ", 1"].remove();

//~ 	var doc = app.documents[i];
//~ 	app.activeDocument = doc;
//~ 	var imageWidth = doc.width;
//~ 	var imageHeight = doc.height;
//~ 	var imageAspectRatio = doc.width / doc.height;

//~ 	if( imageHeight > targetHeight ) {
//~         var tWidth = Math.round( imageAspectRatio * targetHeight );
//~         doc.resizeImage( tWidth, targetHeight );

//~         //~var fileName = getFileName( doc );

//~         //~fileName.name += "_" + targetHeight;

//~         //~ saveFile( doc, fileName );
//~ 	}

//~ function getFileName( doc ) {
//~     //var filePath = doc.path.toString();
//~     var fileName = doc.name.toString();

//~     var lastDot = fileName.lastIndexOf( "." );
//~     if ( lastDot == -1 ) {
//~         lastDot = fileName.length;
//~     }

//~     var fileExtension = fileName.substr( lastDot );
//~     var fileName = fileName.substr( 0, lastDot );

//~     //var outputName = filePath + "/" + fileName;

//~     //return { name: outputName, extension: fileExtension };
//~ }

function saveFile( doc, fileName ) {
    fileName.name += ".jpg";
    var jpegOptions = new JPEGSaveOptions();
    jpegOptions.quality = 10;
    jpegOptions.embedColorProfile = true;
    doc.saveAs( File( fileName.name ), jpegOptions, true );
}