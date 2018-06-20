var questions = [
    {
        "question":"你是哪一年入學？",
        "answers":[
            ["2012年","A"],
            ["2013年",2],
            ["2014年","A"]
        ]
    },
    {
        "question":"你高考是全國幾卷？",
        "answers":[
            ["全國一卷","A"],
            ["全國二卷","A"],
            ["全國三卷",3]
        ]
    },
    {
        "question":"1309是文科班還是理科班？",
        "answers":[
            ["理科班",4],
            ["文科班","A"],
            ["水火箭班","B"]
        ]
    },
    {
        "question":"九班佔據鳳嶺之巔多久？",
        "answers":[
            ["一年","A"],
            ["兩年",5],
            ["三年","A"]
        ]
    },
    {
        "question":"“彬哥”是男生還是女生？",
        "answers":[
            ["不認識啊","A"],
            ["妥妥的男生","A"],
            ["文青女神",6]
            
        ]
    },
    {
        "question":"啟天藝術節時九班的燒烤攤叫什麼？",
        "answers":[
            ["老王燒烤",7],
            ["九班燒烤","A"],
            ["最強燒烤","A"]
        ]
    },
    {
        "question":"下面哪個老師沒有教過我們？",
        "answers":[
            ["陳治民","C"],
            ["藍衛華","C"],
            ["黃永啟",8]
        ]
    },
    {
        "question":"高考前，各科的最後一位老師分別是誰？",
        "answers":[
            ["語文：王彬；數學：蔣愛萍；英語：藍偉華；物理：黃河；化學：唐尚海；生物：余燕","C"],
            ["語文：王彬；數學：蔣愛萍；英語：藍偉華；物理：黃河；化學：唐尚海；生物：陳治民","C"],
            ["語文：王彬；數學：蔣愛萍；英語：賴藝；物理：黃河；化學：唐尚海；生物：陳治民",9]
        ]
    },
    {
        "question":"1309高三時期一共有多少位學生？（這樣的選項會不會容易答一點）",
        "answers":[
            ["不到60個","D"],
            ["正好60個","D"],
            ["多於60個",10]
        ]
    },
    {
        "question":"大聲喊出我們的出征口號！",
        "answers":[
            ["一舉登科攬桂去！","E"],
            ["三元及第載名回！","E"],
            ["載名回~名回~回...","E"]
        ]
    }
    
];

var finalAnswers={
        "A":["啊咧，你是哪位？？","如果你真的是我們九班人，那我會打洗你哦，這麼簡單的題都能答錯！！！"],
        "B":["還用說嗎？！知道我們九班梗的一定是友軍！","不過，我建議你按套路再測一次，會有驚喜哦~"],
        "C":["一日為師終生為父啊，你個不孝子！","來跟我一起念：王彬、蔣愛萍、藍偉華、賴藝、黃河、唐尚海、黃斌、余燕、陳治民、劉紅莉、韋尹、楊業華、王贊宇......"],
        "D":["好啦好啦不怪你，貴人多忘事","還是要恭喜你堅持到了倒數第二題，趕快再測一次吧，會有驚喜哦~"],
        "E":["恭喜你！！！全部回答正確！！！","高考前，拿著答題卡和三年青春去跟世界賭一個明天；高考後，我們就像一盤散沙，四處飄揚，拿著各自鮮紅的錄取通知書走向不同的地方。那時還記得三角函數怎麼解，記得求根公式、橢圓方程，記得奇變偶不變，符號看象限，會很順口地背氢氦锂铍硼碳氮氧氟氖，會記得自由落體壓強壓力，會記得αβγ......還有你的名字。一起奮鬥的理想，一起待過的玖班，如果還是你們，我願意再一次經歷高三。一轉眼，我們已經離開九班兩年了，有沒有再見過那個你最想念的人，有沒有再走近用了很長時間才分得清的智通、智達、智敏、智睿樓，心寧、心靜、心致、心遠樓夜里偷偷亮起的手電燈光還記得嗎？軍訓初識的“打靶歸來”和勇奪第一的排球比賽還記得嗎？也許，有一個人記得我們夜闖智達樓的計劃；也許，有一個人記得食堂二樓黑暗中的陶笛鋼琴聲；也許，有一個人記得永遠的前後左右桌；也許，有一群人記得我們在航洋噴泉里玩耍弄濕一身的幼稚笑臉。春日在通達敏睿之側的木棉花絮紛飛飄揚如落雪，夏日在未濟湖畔草木隱約之處憨態可掬露羽尖，秋日于城市書房前三角梅常盛襯驚艷，冬日于啟天之巔望蟾宮影月聽風眠，二中還是那個令人驕傲的二中，我們不再是懵懂青蔥的我們，再相聚之時，願你們已成為理想里的模樣"]
};

