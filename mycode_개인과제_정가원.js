//*********************************************게 임 소 개******************************************************

//이 방탈출 게임은 어딘가 존재하는 빈센트 반 고흐의 영원한 의식속에 갇힌 사람의 이야기 입니다.
//고흐는 정신병에 고통스러워 하며 "고통은 영원하다"라는 말을 남기고 자살한 비운의 화가입니다.
//이 게임을 통해 고흐의 생애와 그의 훌륭한 작품을 간접적으로 엿볼 수 있습니다.

//너무 어려울 때에는 코드의 부연설명을 찾아주시거나,
//코드 맨 하단의 빠른 해답을 참조하여 skip 해주세요.



//*********************************************  방 생 성  ******************************************************

//********첫번째 방 - 생레미요양원********

room = game.createRoom("room", "생레미 앞편.png"); // 앞측 생성
roomleft = game.createRoom("roomleft", "생레미 탁자.png"); // 좌측 생성
roomright = game.createRoom("roomright", "생레미 뒷편.png"); //우측 생성

//********  두번째 방 - 아를의 방  ********

room2 = game.createRoom("room2", "고흐의 방 전체.png"); // 앞측 생성
room2table = game.createRoom("room2table", "고흐의 방 탁자.png"); //탁자 확대
room2right = game.createRoom("room2right", "고흐의 방 침대.png"); //우측 생성
room2vase = game.createRoom("room2vase", "고흐의 방 물병.png"); // 물병 확대
roompictures = game.createRoom("roompictures", "그림의 방.png"); // 그림의 방 초기화면
roompictures2 = game.createRoom("roompictures2", "그림의 방.png"); // 그림의 방 첫번째 루트
roompictures3 = game.createRoom("roompictures3", "그림의 방.png"); // 그림의 방 두번째 루트
roompictures4 = game.createRoom("roompictures4", "그림의 방.png"); // 그림의 방 세번째 루트

//********세번째 방 - 탈출의 복도********

hall = game.createRoom("hall", "복도1.png"); 
hall2 = game.createRoom("hall2", "복도2.png"); 
gogh1 = game.createRoom("gogh1", "말하는 고흐.png");
gogh2 = game.createRoom("gogh2", "총을 든 고흐.png");
lastdoor = game.createRoom("lastdoor", "탈출의 문.png");

game.start(room); // 게임시작
printMessage("으...어지러워...\n여긴 대체 어디야?");


//*********************************************첫 번 째 방 ******************************************************

// 문과 번호키 설정 (첫번째 방)

roomright.door = roomright.createObject("door", "문.png");
roomright.door.setWidth(242);
roomright.locateObject(roomright.door, 1150, 375);
roomright.door.lock();
roomright.door.onUnlock = function() {
	roomright.door.open();
	printMessage("문이 열렸어!");
}

roomright.door.onClick = function(){
	if(roomright.door.isOpened()){
		game.move(room2);
		printMessage("우와, 여기는 진짜 고흐의 방 같잖아?");
	} else {
		printMessage("문은 잠겨있다.");
	}
}

roomright.keypad1 = roomright.createObject("keypad1", "keypad2-se.png");
roomright.keypad1.setWidth(56);
roomright.locateObject(roomright.keypad1, 1250, 366);
roomright.keypad1.onClick = function() {
	printMessage("다이얼 잠금장치네. 비밀번호가 뭘까?");
	showKeypad("number", "3748", function(){ // 키패드 - 숫자 4자리 3748
		roomright.door.unlock();
		printMessage("잠금장치가 열리는 소리가 들렸다.");
	 });
}

// 이동 설정  (첫번째 방)

room.rightangle = room.createObject("rightangle", "오른쪽 화살표.png");
room.rightangle.setWidth(45);
room.locateObject(room.rightangle, 1245, 375);
room.rightangle.onClick = function() {
	game.move(roomright)
}

room.leftangle = room.createObject("leftangle", "왼쪽 화살표.png");
room.leftangle.setWidth(45);
room.locateObject(room.leftangle, 30, 375);
room.leftangle.onClick = function() {
	game.move(roomleft)
}

roomright.leftangle = roomright.createObject("leftangle", "왼쪽 화살표.png");
roomright.leftangle.setWidth(45);
roomright.locateObject(room.leftangle, 30, 375);
roomright.leftangle.onClick = function() {
	game.move(room)
}

roomleft.rightangle = roomleft.createObject("rightangle", "오른쪽 화살표.png");
roomleft.rightangle.setWidth(45);
roomleft.locateObject(roomleft.rightangle, 1245, 375);
roomleft.rightangle.onClick = function() {
	game.move(room)
}


//☆ 단서1 - 창문 ☆

room.window = room.createObject("window", "창문.png");
room.window.setWidth(245);
room.locateObject(room.window, 300, 310);
room.window.onClick = function() {
	showImageViewer("생레미 창문.png", "");
	printMessage("2층 높이지만 쇠창살로 막혀있군.\n");
}


//☆ 단서2 - 커튼 ☆

room.curtain1 = room.createObject("curtain1", "커튼1.png")
room.curtain1.setWidth(70)
room.locateObject(room.curtain1, 109, 300)

room.curtain2 = room.createObject("curtain2", "커튼2.png")
room.curtain2.setWidth(70)
room.locateObject(room.curtain2, 450, 390)

room.curtain3 = room.createObject("curtain3", "커튼3.png")
room.curtain3.setWidth(308)
room.locateObject(room.curtain3, 285, 331)
room.curtain3.hide();


room.curtain1.onClick = function() {
	if(room.curtain3.isOpened()){
		room.curtain3.close();
	} else if (room.curtain3.isClosed()){
		room.curtain3.open();
	}
	
}

room.curtain2.onClick = function() {
	if(room.curtain3.isOpened()){
		room.curtain3.close();
	} else if (room.curtain3.isClosed()){
		room.curtain3.open();
	}
	
}

room.curtain3.onClick = function() {
	if(room.curtain3.isOpened()){
		room.curtain3.close();
	} else if (room.curtain3.isClosed()){
		room.curtain3.open();
	}
	
}

room.curtain3.onOpen = function() {
	printMessage("커튼을 쳤더니 깜깜해졌어.");
	room.curtain3.show();
	room.picture1.setSprite("별이 빛나는 밤-2.png");
	room.setRoomLight(0.25)
	roomleft.setRoomLight(0.25)
	roomright.setRoomLight(0.25)
	roomLight = false
}
room.curtain3.onClose = function() {
	room.curtain3.hide();
	room.picture1.setSprite("별이 빛나는 밤-1.png");
	room.setRoomLight(1)
	roomright.setRoomLight(1)
	roomleft.setRoomLight(1)
	roomLight = true
}

//☆ 단서3 -  별이 빛나는 밤 ☆

room.picture1 = room.createObject("picture1", "별이 빛나는 밤-1.png");
room.picture1.setWidth(180);
room.locateObject(room.picture1, 564, 440);
room.picture1.onClick = function() {
	if(room.curtain3.isClosed()){
		showImageViewer("별이 빛나는 밤.png", "");
		printMessage("재작년 MOMA 미술관에서 본 진품과 아주 유사한걸?");
	} else if (room.curtain3.isOpened()){
		showImageViewer("별이 빛나는 밤 글씨.png", "");
	printMessage("야광 글씨가 빛나고 있어");
	}	
}


//☆ 단서4 - 파이프를 물고 귀에 붕대를 감은 자화상 ☆

room.picture3 = room.createObject("picture3", "파이프를 물고 귀에 붕대를 한 자화상-1.png");
room.picture3.setWidth(90);
room.locateObject(room.picture3, 1000, 280);
room.picture3.onClick = function() {
	showImageViewer("파이프를 물고 귀에 붕대를 한 자화상.png", ""); // 이미지만 출력
	printMessage("눈빛이 쓸쓸해 보이네."); // 메시지 출력
}

roomright.picture3 = roomright.createObject("picture3", "파이프를 물고 귀에 붕대를 한 자화상-2.png");
roomright.picture3.setWidth(130);
roomright.locateObject(roomright.picture3, 150, 200);
roomright.picture3.onClick = function() {
	showImageViewer("파이프를 물고 귀에 붕대를 한 자화상.png", ""); // 이미지만 출력
	printMessage("눈빛이 쓸쓸해 보이네."); // 메시지 출력
}


//☆ 단서5 - 귀에 붕대를 감은 자화상 ☆

roomright.picture2 = roomright.createObject("picture2", "귀에 붕대를 감은 자화상-1.png");
roomright.picture2.setWidth(110);
roomright.locateObject(roomright.picture2, 700, 200);
roomright.picture2.close();


roomright.key = roomright.createObject("key", "key.png");
roomright.key.setWidth(30);
roomright.locateObject(roomright.key, 650, 660);
roomright.key.hide();

roomleft.key = roomleft.createObject("key", "key.png");
roomleft.key.setWidth(30);
roomleft.locateObject(roomleft.key, 650, 660);
roomleft.key.hide();

roomright.key.onClick = function() {
	roomright.key.hide();
	roomleft.key.pick(); // pick하면 아이템이 인벤토리로 이동
	printMessage("열쇠를 얻었다!");
}

roomright.picture2.onClick = function(){	
	if(game.getHandItem()==roomright.knife && roomright.picture2.isClosed()){ // 손에 들고 있는 아이템 이름 가져 옴
		roomright.picture2.open();
		roomright.picture2.setSprite("귀에 붕대를 감은 자화상-3.png");
		showImageViewer("귀에 붕대를 감은 자화상-2.png", ""); // 이미지만 출력
		printMessage("으악, 뭐야? 고흐의 귀를 자르자 무언가 떨어졌다."); // 메시지 출력
		roomright.key.show()
	} else if(roomright.picture2.isOpened()){
		showImageViewer("귀에 붕대를 감은 자화상-2.png", ""); // 이미지만 출력
		printMessage("그림 속에 물건을 숨겨놓다니, 괴짜가 따로없네."); // 메시지 출력
	} else {
		showImageViewer("귀에 붕대를 감은 자화상.png", ""); // 이미지만 출력
		printMessage("내 귀를 잘라줘.....\n섬뜩한 목소리가 들리는 것만 같다."); // 메시지 출력
	}
}

// ☆ 단서6 - 종이상자와 가죽조각 ☆

roomleft.box2 = roomleft.createObject("box2", "Box(Closed)-sw.png");
roomleft.box2.setWidth(100);
roomleft.locateObject(roomleft.box2, 630, 190);

roomleft.box2.onClick = function() {
	if(roomleft.box2.isOpened()){
		roomleft.box2.close();
		roomleft.leather.hide();	
	} else if (roomleft.box2.isClosed()){
		roomleft.box2.open();
		roomleft.leather.show();
	}
}
roomleft.box2.onOpen = function() {
	roomleft.box2.setSprite("Box(Opened)-sw.png");
}
roomleft.box2.onClose = function() {
	roomleft.box2.setSprite("Box(Closed)-sw.png");	
}

roomleft.leather = roomleft.createObject("leather", "찢어진 가죽.png");
roomleft.leather.setWidth(50);
roomleft.locateObject(roomleft.leather, 630, 190);
roomleft.leather.hide();

roomleft.leather.onClick = function() {
		roomleft.leather.pick();
		printMessage("두꺼운 가죽조각이네. 옷을 수선하는 용도인가?");
}

roomleft.leather.setItemDescription("두껍고 튼튼한 가죽조각이다."); // 아이템 Observe시 메시지로 설명 출력


// ☆ 단서7 - 칼 만들기 ☆

roomright.glass = roomright.createObject("glass", "유리조각.png");
roomright.glass.setWidth(25);
roomright.locateObject(roomright.glass, 800, 600);
roomright.glass.onClick = function() {
	roomright.glass.pick();
	printMessage("이런 곳에 유리조각이 떨어져있다니, 위험한걸?");
}

roomright.glass.setItemDescription("매우 날카로우니 조심히 다뤄야겠군.") // 아이템 Observe시 메시지로 설명 출력

roomright.knife = roomright.createObject("knife", "칼.png");
roomright.knife.setWidth(50);
roomright.knife.setItemDescription("부드러운 천이나 종이를 자를 수 있겠군."); // 아이템 Observe시 메시지로 설명 출력
roomright.knife.hide();

game.makeCombination(roomright.glass, roomleft.leather, roomright.knife); // 조합분해식 생성


// ☆ 단서8 - 편지 ☆

room.letter = room.createObject("letter", "편지.png");
room.letter.setWidth(20);
room.locateObject(room.letter, 730, 570);
room.letter.onClick = function() {
	room.letter.pick();
	printMessage("편지를 발견했다.");
}

room.letter.setItemDescription("빈센트가 동생에게 쓰는 편지라...뭔가 수상한데?") // 아이템 Observe시 메시지로 설명 출력


// ☆ 단서9 - 잠겨있는 상자 열기 ☆

roomleft.box1 = roomleft.createObject("box1", "비밀상자.png");
roomleft.box1.setWidth(440);
roomleft.locateObject(roomleft.box1, 488, 556);
roomleft.box1.close();

roomleft.box1.onClick = function() {
	if(roomleft.box1.isOpened()){
		roomleft.box1.close();
		roomleft.post.hide();
	}else if (game.getHandItem()==roomleft.key && roomleft.box1.isClosed()){
		roomleft.box1.open();
		if(roomleft.post.isClosed()) {
			roomleft.post.show();
			 printMessage("열렸네.");
		}else {printMessage("텅 비어있다.");}
	}else{
		printMessage("잠겼네.");
	}
}

roomleft.box1.onOpen = function() {
	roomleft.box1.setSprite("비밀상자-1.png");
}
roomleft.box1.onClose = function() {
	roomleft.box1.setSprite("비밀상자.png");	
}


// ☆ 단서 10 - 쪽지 ☆

roomleft.post = roomleft.createObject("post", "roll paper.png");
roomleft.post.setWidth(280);
roomleft.locateObject(roomleft.post, 488, 570);
roomleft.post.hide();
roomleft.post.close();

roomleft.paper = roomleft.createObject("paper", "paper.png");
roomleft.paper.setWidth(280);
roomleft.locateObject(roomleft.paper, 488, 570);
roomleft.paper.hide();



roomleft.post.onClick = function() {
	roomleft.post.hide()
	roomleft.paper.pick();
	roomleft.post.open();
	printMessage("쪽지를 발견했다.");
}

roomleft.paper.setItemDescription("어떤 숫자를 넣어야 하는걸까?") // 아이템 Observe시 메시지로 설명 출력




//*********************************************두 번 째 방 ******************************************************


// 문과 번호키 설정 (두번째 방)

room2.door = room2.createObject("door", "문2.png");
room2.door.setWidth(170);
room2.locateObject(room2.door, 107, 293);
room2.door.lock();
room2.door.onUnlock = function() {
	room2.door.open();
	printMessage("문이 열렸어!");
}

room2.door.onClick = function(){
	if(room2.door.isOpened()){
		game.move(hall);
		printMessage("끝방에서 나오면 복도가 나온다.");
	} else {
		printMessage("문은 잠겨있다.");
	}
}

room2.keypad2 = room2.createObject("keypad2", "keypad2-sw.png");
room2.keypad2.setWidth(30);
room2.locateObject(room2.keypad2, 165, 193);
room2.keypad2.onClick = function() {
	printMessage("다이얼 잠금장치네. 비밀번호가 뭘까?");
	showKeypad("number", "1888", function(){ // 키패드 - 숫자 4자리 1888
		room2.door.unlock();
		printMessage("잠금장치가 열리는 소리가 들렸다.");
	 });
}

room2.door2 = room2.createObject("door2", "문4.png");
room2.door2.setWidth(120);
room2.locateObject(room2.door2, 1213, 332);
room2.door2.onClick = function() {
	game.move(roompictures);
	printMessage("이런 곳이 있었네.");
}


// 이동 설정 (두번째 방)

room2.rightangle = room2.createObject("rightangle", "오른쪽 화살표.png");
room2.rightangle.setWidth(45);
room2.locateObject(room2.rightangle, 1245, 375);
room2.rightangle.onClick = function() {
	game.move(room2right)
}

room2.backangle = room2.createObject("backangle", "뒤로가기 화살표.png");
room2.backangle.setWidth(40);
room2.locateObject(room2.backangle, 640, 690);
room2.backangle.onClick = function() {
	game.move(roomright)
}


room2vase.backangle = room2vase.createObject("backangle", "뒤로가기 화살표.png");
room2vase.backangle.setWidth(40);
room2vase.locateObject(room2vase.backangle, 640, 690);
room2vase.backangle.onClick = function() {
	game.move(room2)
}

room2table.backangle = room2table.createObject("backangle", "뒤로가기 화살표.png");
room2table.backangle.setWidth(40);
room2table.locateObject(room2table.backangle, 640, 690);
room2table.backangle.onClick = function() {
	game.move(room2)
}

room2right.leftangle = room2right.createObject("leftangle", "왼쪽 화살표.png");
room2right.leftangle.setWidth(45);
room2right.locateObject(room2right.leftangle, 30, 375);
room2right.leftangle.onClick = function() {
	game.move(room2)
}

roompictures.backangle = roompictures.createObject("backangle", "뒤로가기 화살표.png");
roompictures.backangle.setWidth(40);
roompictures.locateObject(roompictures.backangle, 640, 690);
roompictures.backangle.onClick = function() {
	game.move(room2)
}

roompictures2.backangle = roompictures2.createObject("backangle", "뒤로가기 화살표.png");
roompictures2.backangle.setWidth(40);
roompictures2.locateObject(roompictures2.backangle, 640, 690);
roompictures2.backangle.onClick = function() {
	game.move(room2)
}

roompictures3.backangle = roompictures3.createObject("backangle", "뒤로가기 화살표.png");
roompictures3.backangle.setWidth(40);
roompictures3.locateObject(roompictures3.backangle, 640, 690);
roompictures3.backangle.onClick = function() {
	game.move(room2)
}

roompictures4.backangle = roompictures4.createObject("backangle", "뒤로가기 화살표.png");
roompictures4.backangle.setWidth(40);
roompictures4.locateObject(roompictures4.backangle, 640, 690);
roompictures4.backangle.onClick = function() {
	game.move(room2)
}

// ☆ 단서 0 - 편지 ☆

room2right.letter2 = room2right.createObject("letter2", "편지2.png");
room2right.letter2.setWidth(35);
room2right.locateObject(room2right.letter2, 601, 505);
room2right.letter2.onClick = function() {
	room2right.letter2.pick();
	printMessage("편지를 발견했다.\n");
}

room2right.letter2.setItemDescription("고흐의 행복한 추억이 담긴 편지라...뭔가 단서가 될 것 같군.")

// ☆ 단서 1 - 물병 ☆

room2.ontable = room2.createObject("ontable", "탁자 위.png");
room2.ontable.setWidth(115);
room2.locateObject(room2.ontable, 360, 270);
room2.ontable.onClick = function() {
	game.move(room2vase)
}

room2vase.morse = room2vase.createObject("morse", "모스 부호.png");
room2vase.morse.setWidth(80);
room2vase.locateObject(room2vase.morse, 720, 270);
room2vase.morse.hide();

room2vase.morse.setItemDescription("모스부호를 어디에 써야할까?");

room2vase.letter2 = room2vase.createObject("letter2", "roll paper2.png");
room2vase.letter2.setWidth(115);
room2vase.locateObject(room2vase.letter2, 650, 120);
room2vase.letter2.onClick = function() {
	room2vase.letter2.hide();
	room2vase.morse.pick();
	printMessage("종이를 발견했다.");
}


// ☆ 단서2 - 아를의 창문 ☆ 

room2.window = room2.createObject("window", "아를의 창문.png");
room2.window.setWidth(130);
room2.locateObject(room2.window, 471, 118);
room2.window.onClick = function() {
	showImageViewer("아를의 풍경.png", "");
	printMessage("2층이지만 뛰어내리는데 거부감을 느낀다. \n내 의지가 사라지는 기분이다.\n");
}

// ☆ 단서 3 - 탁자 ☆ 

room2.table = room2.createObject("table", "탁자 선택.png");
room2.table.setWidth(120);
room2.locateObject(room2.table, 368, 330);
room2.table.onClick = function() {
	game.move(room2table);
	printMessage("서랍을 열어보았다.");
}

room2table.drawer = room2table.createObject("drawer", "서랍.png");
room2table.drawer.setWidth(178);
room2table.locateObject(room2table.drawer, 653, 294);
room2table.drawer.onClick = function() {
	room2table.drawer.hide();
	room2table.gun.hide();
}

room2table.drawer2 = room2table.createObject("drawer2", "서랍장 선택.png");
room2table.drawer2.setWidth(120);
room2table.locateObject(room2table.drawer2, 680, 270);
room2table.drawer2.onClick = function() {
	room2table.drawer.show();
	room2table.gun.show();
}

// ☆ 단서 4 - 거울 ☆

room2.mirror = room2.createObject("mirror", "거울.png");
room2.mirror.setWidth(60);
room2.locateObject(room2.mirror, 345, 152);
room2.mirror.onClick = function() {
	showImageViewer("말하는 고흐.png", "");
	printMessage("이럴수가! 거울에 비친 내 모습이 고흐로 바뀌어있다!!\n");
}



// ☆ 단서 5 - 그림의 방 ☆

//#1
roompictures.picture1 = roompictures.createObject("picture1", "해바라기.png");
roompictures.picture1.setWidth(230);
roompictures.locateObject(roompictures.picture1, 190, 200);
roompictures.picture1.onClick = function() {
	playSound("모스2.wav");
	game.move(roompictures2);
}

roompictures.picture2 = roompictures.createObject("picture2", "고흐의 방 액자.png");
roompictures.picture2.setWidth(230);
roompictures.locateObject(roompictures.picture2, 640, 200);
roompictures.picture2.onClick = function() {
	game.move(room2);
	printMessage("그림을 건드렸더니 고흐의 방으로 돌아왔다.");
}

roompictures.picture3 = roompictures.createObject("picture3", "붓꽃.png");
roompictures.picture3.setWidth(230);
roompictures.locateObject(roompictures.picture3, 1130, 210);
roompictures.picture3.onClick = function() {
	playSound("모스1.wav");
}

roompictures.picture4 = roompictures.createObject("picture4", "해바라기.png");
roompictures.picture4.setWidth(230);
roompictures.locateObject(roompictures.picture4, 190, 200);
roompictures.picture4.hide();

roompictures.picture5 = roompictures.createObject("picture5", "붓꽃.png");
roompictures.picture5.setWidth(230);
roompictures.locateObject(roompictures.picture5, 1130, 210);
roompictures.picture5.hide();

roompictures.picture6 = roompictures.createObject("picture6", "떨어진 액자.png");
roompictures.picture6.setWidth(230);
roompictures.locateObject(roompictures.picture6, 640, 580);
roompictures.picture6.hide();

roompictures.year = roompictures.createObject("year", "연도.png");
roompictures.year.setWidth(50);
roompictures.locateObject(roompictures.year, 640, 200);
roompictures.year.hide();
roompictures.year.onClick = function() {
	showImageViewer("연도 확대.png", "");
	printMessage("분필로 쓴 글씨네. 이건.... 연도인가?");
}


//#2
roompictures2.picture1 = roompictures2.createObject("picture1", "해바라기.png");
roompictures2.picture1.setWidth(230);
roompictures2.locateObject(roompictures2.picture1, 190, 200);
roompictures2.picture1.onClick = function() {
	playSound("모스2.wav");
	game.move(roompictures);
}

roompictures2.picture2 = roompictures2.createObject("picture2", "고흐의 방 액자.png");
roompictures2.picture2.setWidth(230);
roompictures2.locateObject(roompictures2.picture2, 640, 200);
roompictures2.picture2.onClick = function() {
	game.move(room2);
	printMessage("그림을 건드렸더니 고흐의 방으로 돌아왔다.");
}

roompictures2.picture3 = roompictures2.createObject("picture3", "붓꽃.png");
roompictures2.picture3.setWidth(230);
roompictures2.locateObject(roompictures2.picture3, 1130, 210);
roompictures2.picture3.onClick = function() {
	playSound("모스1.wav");
	game.move(roompictures3);
}

//#3
roompictures3.picture1 = roompictures3.createObject("picture1", "해바라기.png");
roompictures3.picture1.setWidth(230);
roompictures3.locateObject(roompictures3.picture1, 190, 200);
roompictures3.picture1.onClick = function() {
	playSound("모스2.wav");
	game.move(roompictures);
}

roompictures3.picture2 = roompictures3.createObject("picture2", "고흐의 방 액자.png");
roompictures3.picture2.setWidth(230);
roompictures3.locateObject(roompictures3.picture2, 640, 200);
roompictures3.picture2.onClick = function() {
	game.move(room2);
	printMessage("그림을 건드렸더니 고흐의 방으로 돌아왔다.");
}

roompictures3.picture3 = roompictures3.createObject("picture3", "붓꽃.png");
roompictures3.picture3.setWidth(230);
roompictures3.locateObject(roompictures3.picture3, 1130, 210);
roompictures3.picture3.onClick = function() {
	playSound("모스1.wav");
	game.move(roompictures4);
}

//#4
roompictures4.picture1 = roompictures4.createObject("picture1", "해바라기.png");
roompictures4.picture1.setWidth(230);
roompictures4.locateObject(roompictures4.picture1, 190, 200);
roompictures4.picture1.onClick = function() {
	playSound("모스2.wav");
	game.move(roompictures);
	roompictures.picture1.hide();
	roompictures.picture2.hide();
	roompictures.picture3.hide();
	roompictures.picture4.show();
	roompictures.picture5.show();
	roompictures.picture6.show();
	roompictures.year.show();
	printMessage("앗, 그림이 떨어지더니 글씨가 나타났다.");
}

roompictures4.picture2 = roompictures4.createObject("picture2", "고흐의 방 액자.png");
roompictures4.picture2.setWidth(230);
roompictures4.locateObject(roompictures4.picture2, 640, 200);
roompictures4.picture2.onClick = function() {
	game.move(room2);
	printMessage("그림을 건드렸더니 고흐의 방으로 돌아왔다.");
}

roompictures4.picture3 = roompictures4.createObject("picture3", "붓꽃.png");
roompictures4.picture3.setWidth(230);
roompictures4.locateObject(roompictures4.picture3, 1130, 210);
roompictures4.picture3.onClick = function() {
	playSound("모스1.wav");
	game.move(roompictures);
}


// ☆ 단서 6 - 총 만들기 ☆ 

room2right.bullet = room2right.createObject("bullet", "총알.png");
room2right.bullet.setWidth(30);
room2right.locateObject(room2right.bullet, 1100, 600);
room2right.bullet.onClick = function() {
	room2right.bullet.pick();
	printMessage("꽤나 묵직한 총알이 떨어져있다.");
}

room2table.gun = room2table.createObject("gun", "총.png");
room2table.gun.setWidth(80);
room2table.locateObject(room2table.gun, 653, 280);
room2table.gun.onClick = function() {
	room2table.gun.pick();
	printMessage("서랍에서 탄알 없는 총을 찾았다.");
}

room2table.gun.setItemDescription("이거 진짜 총인가?") // 아이템 Observe시 메시지로 설명 출력
room2right.bullet.setItemDescription("이건 진짜 총알이야.") // 아이템 Observe시 메시지로 설명 출력

gogh1.guncom = gogh1.createObject("guncom", "장전된 총.png");
gogh1.guncom.setWidth(50);
gogh1.locateObject(gogh1.guncom, 800, 600);
gogh1.guncom.hide();


gogh1.guncom.setItemDescription("위험하니 신중히 사용해야겠어."); // 아이템 Observe시 메시지로 설명 출력
game.makeCombination(room2right.bullet, room2table.gun, gogh1.guncom); // 조합분해식 생성


//*********************************************세 번 째 방 ******************************************************

// 문과 번호키 설정 (세번째 방)

lastdoor.bigbox = lastdoor.createObject("bigbox", "선택창.png");
lastdoor.bigbox.setWidth(300);
lastdoor.locateObject(lastdoor.bigbox, 640, 358);
lastdoor.bigbox.lock()
lastdoor.bigbox.onClick = function() {
	if (lastdoor.bigbox.isLocked()){
		printMessage("문은 잠겨있다.");
	}else { 
		game.clear();
	}
}

lastdoor.keypad3 = lastdoor.createObject("keypad3", "keypad.png");
lastdoor.keypad3.setWidth(30);
lastdoor.locateObject(lastdoor.keypad3, 580, 330);
lastdoor.keypad3.onClick = function() {
	printMessage("고통스럽다...이 문을 열면 행복해질 수 있을까?");
	showKeypad("alphabet", "AGONY", function(){ // 키패드 - 문자 5자리 agony-고통
		lastdoor.bigbox.unlock();
		printMessage("잠금장치가 열리는 소리가 들렸다.");
	 });
}


// 이동 설정 (세번째 방)

hall.backangle = hall.createObject("backangle", "뒤로가기 화살표.png");
hall.backangle.setWidth(40);
hall.locateObject(hall.backangle, 640, 690);
hall.backangle.onClick = function() {
	game.move(room2)
}

hall.rightangle = hall.createObject("rightangle", "오른쪽 화살표.png");
hall.rightangle.setWidth(45);
hall.locateObject(hall.rightangle, 1245, 375);
hall.rightangle.onClick = function() {
	game.move(hall2)
}

hall2.backangle = hall2.createObject("backangle", "뒤로가기 화살표.png");
hall2.backangle.setWidth(40);
hall2.locateObject(hall2.backangle, 640, 690);
hall2.backangle.onClick = function() {
	game.move(hall)
}

lastdoor.backangle = lastdoor.createObject("backangle", "뒤로가기 화살표.png");
lastdoor.backangle.setWidth(40);
lastdoor.locateObject(lastdoor.backangle, 640, 690);
lastdoor.backangle.onClick = function() {
	game.move(hall2)
}

gogh1.backangle = gogh1.createObject("backangle", "뒤로가기 화살표.png");
gogh1.backangle.setWidth(40);
gogh1.locateObject(gogh1.backangle, 640, 690);
gogh1.backangle.onClick = function() {
	game.move(hall)
}

gogh2.backangle = gogh2.createObject("backangle", "뒤로가기 화살표.png");
gogh2.backangle.setWidth(40);
gogh2.locateObject(gogh2.backangle, 640, 690);
gogh2.backangle.onClick = function() {
	printMessage("안돼...!! 그가 의미심장한 말을 남기고 스스로를 쏴버렸다!"); // 메시지 출력
	game.move(hall)

}

hall2.frontangle = hall2.createObject("frontangle", "앞으로 화살표.png");
hall2.frontangle.setWidth(40);
hall2.locateObject(hall2.frontangle, 640, 430);
hall2.frontangle.onClick = function() {
	game.move(lastdoor)
}


// ☆ 단서 1 - 고흐의 자살 ☆ 

hall.gogh = hall.createObject("gogh", "앉아있는 고흐.png");
hall.gogh.setWidth(170);
hall.locateObject(hall.gogh, 220, 550);
hall.gogh.onClick = function() {
	game.move(gogh1);
	printMessage("내 방에서 장전된 권총을 가져다 줘.");
}



gogh1.box = gogh1.createObject("box", "선택창.png");
gogh1.box.setWidth(365);
gogh1.locateObject(gogh1.box, 640, 358);
gogh1.box.onClick = function() {
	if(game.getHandItem()==gogh1.guncom){ // 손에 들고 있는 아이템 이름 가져 옴
		game.move(gogh2);
		hall.gogh.hide();
		hall.gogh2.show();
		printMessage("The agony will last forever."); // 메시지 출력
	} else {
		printMessage("장전된 권총이 필요해."); // 메시지 출력
	}
}

gogh2.box = gogh2.createObject("box", "선택창.png");
gogh2.box.setWidth(365);
gogh2.locateObject(gogh2.box, 640, 358);
gogh2.box.onClick = function() {
		game.move(hall);
		printMessage("안돼...!! 그가 의미심장한 말을 남기고 스스로를 쏴버렸다!"); // 메시지 출력
}

hall.gogh2 = hall.createObject("gogh2", "쓰러진 고흐.png");
hall.gogh2.setWidth(160);
hall.locateObject(hall.gogh2, 270, 655);
hall.gogh2.hide();
hall.gogh2.onClick = function() {
	printMessage("The agony will last forever.\n고통이 영원하다는 말이 귓가에 맴돈다.");
}

// ☆ 단서 2 - 이 방에 갇힌 이유 ☆

hall2.why = hall2.createObject("why", "액자 선택.png");
hall2.why.setWidth(145);
hall2.locateObject(hall2.why, 640, 125);
hall2.why.onClick = function() {
	showImageViewer("슬퍼하는 고흐.png", "");
	printMessage("어쩌면 영원히 존재하는 그의\n고통 속으로 들어온 것일지도 몰라.");
}



//빠른 해답

//첫번째 방 비밀번호 : 3748
//두번째 방 비밀번호 : 1888
//마지막 방 비밀번호 : AGONY
