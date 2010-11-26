/* 
 * spacecadet.js
 *  Adrian Fraiha (aef@catch-colt.com)
 *
 * unlicensed.
 */
function SpaceCadet(canvasId) {
  //private
  
  var that = this;
  var canvas = document.getElementById(canvasId);
  var ctx = canvas.getContext('2d');
  
  
  //privledged  
  
  /*
   * drawIsoTriangle
   *  Draws an Isosceles Triangle pos(x,y) scale(h,w), rotation(r-radians), color(c)
   *  Coordinates represent center of triangle.
  */
  this.drawIsoTriangle = function(x,y,w,h,r,c) {
    var x1 = x;     //top
    var y1 = y-h/2;
    var x2 = x-w/2; //bot left
    var y2 = y+h/2;
    var x3 = x+w/2; //bot right
    var y3 = y+h/2;
    
    var x_cen = (x1 + x2 + x3)/3; //centroid
    var y_cen = (y1 + y2 + y3)/3;
    
    ctx.save();
    
    ctx.translate(x_cen, y_cen);
    ctx.rotate(r);
    ctx.beginPath();
    ctx.moveTo(x1-x_cen, y1-y_cen); // top
    ctx.lineTo(x2-x_cen, y2-y_cen); // bot left
    ctx.lineTo(x3-x_cen, y3-y_cen); // bot right
    ctx.closePath();
    ctx.fillStyle = c;
    ctx.fill();
    ctx.restore();
  };
  
  this.drawCircle = function(x,y,r,c) {
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2, true);
    ctx.closePath();
    ctx.fillStyle = c;
    ctx.fill();
  };

  //needs rotation
  this.drawRectangle = function(x,y,w,h,c) {
    ctx.beginPath();
    ctx.rect(x, y, w, h);
    ctx.closePath();
    ctx.fillStyle = c;
    ctx.fill();
  };

  this.clear = function() {
    ctx.clearRect(0,0,canvas.clientWidth, canvas.clientHeight);
  };
}
