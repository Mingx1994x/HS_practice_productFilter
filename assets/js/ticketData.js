let data = [
    {
        "id": 0,
        "name": "肥宅心碎賞櫻3日",
        "imgUrl": "https://images.unsplash.com/photo-1522383225653-ed111181a951?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1655&q=80",
        "area": "高雄",
        "description": "賞櫻花最佳去處。肥宅不得不去的超讚景點！",
        "group": 87,
        "price": 1400,
        "rate": 10
    },
    {
        "id": 1,
        "name": "貓空纜車雙程票",
        "imgUrl": "https://images.unsplash.com/photo-1501393152198-34b240415948?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
        "area": "台北",
        "description": "乘坐以透明強化玻璃為地板的「貓纜之眼」水晶車廂，享受騰雲駕霧遨遊天際之感",
        "group": 99,
        "price": 240,
        "rate": 2
    },
    {
        "id": 2,
        "name": "台中谷關溫泉會1日",
        "imgUrl": "https://images.unsplash.com/photo-1535530992830-e25d07cfa780?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
        "area": "台中",
        "description": "全館客房均提供谷關無色無味之優質碳酸原湯，並取用八仙山之山冷泉供蒞臨貴賓沐浴及飲水使用。",
        "group": 20,
        "price": 1765,
        "rate": 7
    },
    {
        "id": 3,
        "name": "綠島自由行套裝行程",
        "imgUrl": "https://github.com/hexschool/2022-web-layout-training/blob/main/js_week5/travel_1.png?raw=true",
        "area": "台北",
        "description": "嚴選超高CP值綠島自由行套裝行程，多種綠島套裝組合，提供台東綠島來回船票、綠島環島機車、綠島民宿住宿，行程加贈『綠島浮潛體驗』以及『綠島生態導覽』，讓你用輕鬆的綠島套裝自由行，也能深度認識綠島在地文化。",
        "group": 8,
        "price": 1280,
        "rate": 8.6
    },
    {
        "id": 4,
        "name": "清境高空觀景步道二日遊",
        "imgUrl": "https://raw.githubusercontent.com/hexschool/2022-web-layout-training/refs/heads/main/js_week5/travel_4.png",
        "area": "台北",
        "description": "清境農場青青草原數十公頃碧草，餵食著數以百計的綿羊和牛群，中央山脈最高的北三段群峰形成一堵如帶的高牆，攔住清晨的薄霧山嵐，成就了從花蓮翻山而來的雲瀑在濁水溪谷積成雲海，這些景觀豐沛了清境觀景步道的風格，也涵養它無可取代的特色。",
        "group": 12,
        "price": 2580,
        "rate": 8.2
    },
    {
        "id": 5,
        "name": "南庄度假村露營車二日遊",
        "imgUrl": "https://raw.githubusercontent.com/hexschool/2022-web-layout-training/refs/heads/main/js_week5/travel_6.png",
        "area": "台中",
        "description": "南庄雲水豪華露營車，快來擁有最愜意的露營體驗吧！ 一泊一食，輕鬆享受露營車樂趣。 獨立衛浴與私人戶外露臺。 入住豪華露營車還能使用戶外SPA大眾湯，感受美人湯魅力。",
        "group": 2,
        "price": 2480,
        "rate": 9.2
    }
];

// let testData = [
//     {
//         "id": 6,
//         "name": "山林悠遊雙人套票",
//         "imgUrl": "https://raw.githubusercontent.com/hexschool/2022-web-layout-training/refs/heads/main/js_week5/travel_3.png",
//         "area": "台中",
//         "description": "山林悠遊套票，結合南投清境高空步道、雙龍瀑布七彩吊橋、瑞龍瀑布園區之熱門景點，帶您飽覽南投瑰麗的自然環境，體驗變化無窮的地形景觀，喜歡挑戰高空的您一定不可錯過。 （含雙龍瀑布入場券 x2）",
//         "group": 0,
//         "price": 880,
//         "rate": 9.3
//     },
//     {
//         "id": 7,
//         "name": "漁樂碼頭釣魚體驗套票",
//         "imgUrl": "https://raw.githubusercontent.com/hexschool/2022-web-layout-training/refs/heads/main/js_week5/travel_2.png",
//         "area": "台中",
//         "description": "台中全新親子景點寶熊漁樂碼頭，為知名釣具公司「OKUMA」所創立的觀光工廠。一樓藍白希臘漁村風商店街免費參觀。二樓釣魚故事館則設立全台唯一虛擬釣場，透過導覽讓你知道如何釣魚、魚餌怎麼區分，寓教於樂的台中景點！",
//         "group": 5,
//         "price": 1280,
//         "rate": 8.2
//     },
//     {
//         "id": 8,
//         "name": "熊森公園親子二日遊套票",
//         "imgUrl": "https://raw.githubusercontent.com/hexschool/2022-web-layout-training/refs/heads/main/js_week5/travel_5.png",
//         "area": "高雄",
//         "description": "來自日本最受歡迎的兒童遊樂園《 BearSon Park 熊森公園》於全世界有800多家據點，在全世界、日本及台灣，很多小孩的童年都在遊戲愛樂園裡一同成長，提供兒童一個最富教育性及娛樂性的休憩遊樂天地！",
//         "group": 3,
//         "price": 2480,
//         "rate": 8.6
//     }

// ];

const ticketForm = document.querySelector('#ticketAddForm');
const ticketName = document.querySelector('#ticketName');
const ticketImgUrl = document.querySelector('#ticketImgUrl');
const ticketRegion = document.querySelector('#ticketRegion');
const ticketPrice = document.querySelector('#ticketPrice');
const ticketSetNum = document.querySelector('#ticketSetNum');
const ticketRank = document.querySelector('#ticketRank');
const ticketDescription = document.querySelector('#ticketDescription');
const addTicket = document.querySelector('#addTicket');
const filterRegion = document.querySelector('#filterRegion');
const filterNums = document.querySelector('#filterNums');

//card內容
const ticketCard = (ticketData) => {
    const ticketDisplay = document.querySelector('#ticketDisplay');
    ticketDisplay.innerHTML = '';
    ticketData.forEach(item => {
        const ticketList = document.createElement('li');
        ticketList.className = 'col-12 col-sm-6 col-lg-4';
        //a.ticket-link
        const ticketLink = document.createElement('a');
        ticketLink.href = '#';
        ticketLink.className = 'ticket-link';

        //div.roundImgCard
        const ticketCard = document.createElement('div');
        ticketCard.className = 'roundImgCard';
        //img
        const cardImg = document.createElement('img');
        cardImg.src = item.imgUrl;
        //p.card-badge
        const imgBadge = document.createElement('p');
        imgBadge.className = 'card-badge badge-primary-100';
        imgBadge.textContent = item.area;

        //div.card-body
        const cardBody = document.createElement('div');
        cardBody.className = 'card-body';
        //p.card-badge
        const cardBodyBadge = document.createElement('p');
        cardBodyBadge.className = 'card-badge-sm badge-primary';
        cardBodyBadge.textContent = item.rate;
        //h3.card-title
        const cardTitle = document.createElement('h3');
        cardTitle.className = 'card-title';
        cardTitle.textContent = item.name;
        //p.card-content
        const cardContent = document.createElement('p');
        cardContent.textContent = item.description;

        //div.card-info
        const cardInfo = document.createElement('div');
        cardInfo.className = 'card-info';
        //p.group-info
        const groupInfo = document.createElement('p');
        const groupNoneHtml = `<i class="bi bi-exclamation-circle-fill"></i>限時搶購`;
        const groupLeftHtml = `<i class="bi bi-exclamation-circle-fill"></i>剩下最後 ${item.group} 組`;
        groupInfo.innerHTML = (item.group == 0) ? groupNoneHtml : groupLeftHtml;
        //p.infoPrice
        const ticketInfo = document.createElement('p');
        ticketInfo.className = 'infoPrice';
        ticketInfo.innerHTML = `TWD<span class="highlight">$${item.price}</span>`;

        //div.card-info>p.group-info+p.infoPrice
        cardInfo.appendChild(groupInfo);
        cardInfo.appendChild(ticketInfo);

        //div.card-body>p.card-badge+h3.card-title+p.card-content+div.card-info
        cardBody.appendChild(cardBodyBadge);
        cardBody.appendChild(cardTitle);
        cardBody.appendChild(cardContent);
        cardBody.appendChild(cardInfo);

        //div.roundImgCard>img+p.card-badge+div.card-body
        ticketCard.appendChild(cardImg);
        ticketCard.appendChild(imgBadge);
        ticketCard.appendChild(cardBody);

        ticketLink.appendChild(ticketCard);
        ticketList.appendChild(ticketLink);

        // console.log(ticketList);
        ticketDisplay.appendChild(ticketList);

    });
}
//渲染
const renderTicket = (ticketData) => {
    let dataNum = ticketData.length;
    if (dataNum !== 0) {
        filterNums.textContent = `本次搜尋共 ${dataNum} 筆資料`;
        ticketCard(ticketData);
    } else {
        ticketDisplay.style.display = 'none';
    }
}


//監聽
addTicket.addEventListener('click', () => {
    let newTicket = new Object;
    newTicket.id = data.length;
    newTicket.name = ticketName.value.trim();
    newTicket.imgUrl = ticketImgUrl.value.trim();
    newTicket.area = ticketRegion.value.trim();
    newTicket.description = ticketDescription.value.trim();
    newTicket.group = ticketSetNum.value.trim();
    newTicket.price = ticketPrice.value.trim();
    newTicket.rate = ticketRank.value.trim();
    data.push(newTicket);
    // console.log(data);
    ticketForm.reset();
    filterRegion.value = '';
    renderTicket(data);
});

filterRegion.addEventListener('change', () => {
    let filterData = new Array;
    if (!filterRegion.value) {
        renderTicket(data);
    } else if (filterRegion.value === '台北') {
        filterData = data.filter(item => item.area === '台北');
        renderTicket(filterData);
    } else if (filterRegion.value === '台中') {
        filterData = data.filter(item => item.area === '台中');
        renderTicket(filterData);
    } else if (filterRegion.value === '高雄') {
        filterData = data.filter(item => item.area === '高雄');
        renderTicket(filterData);
    }
})



renderTicket(data);