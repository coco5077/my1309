var mapArray, ctx, currentImgMainx, currentImgMainY;
var imgMountain, imgMain, imgEnemy,imgSchool;

$(document).ready(function(){
    mapArray = [0,1,1,0,0,0,3,4,2];
    ctx = $("#myCanvas")[0].getContext("2d");
    imgMain = new Image();
    imgMain.src = "images/People.png";
    currentImgMainx=0;
    currentImgMainY=0;
    imgMain.onload=function()
    {
        ctx.drawImage(imgMain,40,0,65,100,currentImgMainx,currentImgMainY,200,200);
    };
    imgMountain = new Image();
    imgMountain.src = "SimpleRPGractice0418/images/school5.png";
    imgEnemy = new Image();
    imgEnemy.src = "SimpleRPGractice0418/images/goose.png";
    imgSchool = new Image();
    imgSchool.src = "SimpleRPGractice0418/images/school4.png";
    imgMountain.onload=function()
    {
        imgEnemy.onload=function()
        {
            imgSchool.onload=function()
            {
                for(var x in mapArray)
                {
                   if(mapArray[x]==1)
                   {
                       ctx.drawImage(imgMountain,1,1,5000,5000,x%3*200,Math.floor(x/3)*200,200,200);
                   }else if(mapArray[x]==3)
                   {
                       ctx.drawImage(imgEnemy,0,0,3000,3000,x%3*200,Math.floor(x/3)*200,200,200);
                   }else if(mapArray[x]==4){
                      ctx.drawImage(imgSchool,20,10,500,500,x%3*200,Math.floor(x/3)*200,200,200);
                   } 
                }
                
            };
            
        };
    };
});

$(document).keydown(function(event){
    var targetImgMainX,targetImgMainY,targetBlock,cutImagePositionX;
    event.preventDefault();
    switch(event.which){
        case 37:
            targetImgMainX = currentImgMainx-200;
            targetImgMainY = currentImgMainY;
            cutImagePositionX = 100;
            break;
        case 38:
            targetImgMainX = currentImgMainx;
            targetImgMainY = currentImgMainY-200;
            cutImagePositionX = 230;
            break;
        case 39:
            targetImgMainX = currentImgMainx+200;
            targetImgMainY = currentImgMainY;
            cutImagePositionX = 165;
            break;
        case 40:
            targetImgMainX = currentImgMainx;
            targetImgMainY = currentImgMainY+200;
            cutImagePositionX = 30;
            break;
        default:
            return;
    }
    if(targetImgMainX<=400 && targetImgMainX>=0 && targetImgMainY<=400 && targetImgMainY>=0)
    {
        targetBlock=targetImgMainX/200+targetImgMainY/200*3;        
    }else
    {
        targetBlock=-1;        
    }
    ctx.clearRect(currentImgMainx,currentImgMainY,200,200);
    if(targetBlock==-1 || mapArray[targetBlock]==1 || mapArray[targetBlock]==3 || mapArray[targetBlock]==4)
    {  }
    else
    {
        $("#talkBox").text("");
        currentImgMainx=targetImgMainX;
        currentImgMainY=targetImgMainY;
    }
        ctx.drawImage(imgMain,cutImagePositionX,0,70,130,currentImgMainx,currentImgMainY,200,200);
    switch(mapArray[targetBlock])
        {
            case undefined:
                $("#talkBox").text("邊界");
            break;
            case 1:
                $("#talkBox").text("通達敏睿教學樓");
            break;
            case 2:
                $("#talkBox").text("後門出去搭79路咯！");
            break;
            case 3:
                $("#talkBox").text("我是校霸！");
            break;
            case 4:
                $("#talkBox").text("寧靜致遠宿舍樓");
            break;
        }
});