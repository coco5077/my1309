$(document).ready(function(){
    $("#courseTable").append("<tr><th>年份</th><th>科別</th><th>姓名</th><th>分數</th></tr>");
    
    var topicCount = topic.length;
    
    var secondUnit = 1000;
    var minuteUnit = secondUnit * 60;
    var hourUnit = minuteUnit * 60;
    var dayUnit = hourUnit *24;
    
    for(var x=0;x<topicCount;x++)
    {
        //$("#courseTable").append("<tr>");
        //$("#courseTable").append("<td>"+year[x]+"</td>");
        //$("#courseTable").append("<td>"+subject[x]+"</td>");
        //$("#courseTable").append("<td>"+topic[x]+"</td>");
        //$("#courseTable").append("<td>"+score[x]+"</td>");
        //$("#courseTable").append("</tr>");
        $("#courseTable").append("<tr>");
        $("#courseTable").append("<td>"+year[x]+"</td>");
        $("#courseTable").append("<td>"+subject[x]+"</td>");
        $("#courseTable").append("<td>"+topic[x]+"</td>");
        $("#courseTable").append("<td>"+score[x]+"</td>");
        $("#courseTable").append("</tr>");
    }
});