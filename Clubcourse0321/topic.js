var year = [
    "2008",
    "2009",
    "2009",
    "2010",
    "2013",
    "2017",
    "2017",
];

var subject = [
    "理",
    "文",
    "理",
    "文",
    "理",
    "文",
    "理",
];

var topic = [
    "青慈阳",
    "黄嫣",
    "黎璇",
    "黄昊华",
    "张波",
    "韩思雨",
    "胡腾戈",
];

var score = [
    "704",
    "649",
    "717",
    "650",
    "682",
    "681",
    "700",
];

var startDate = new Date();

function setMonthAndDay(startMonth,startDay)
{
    startDate.setMonth(startMonth-1);
    startDate.setDate(startDay);
    startDate.setHours(0);
    startDate.setMinutes(0);
    startDate.setSeconds(0);
    
}

setMonthAndDay(4,1);