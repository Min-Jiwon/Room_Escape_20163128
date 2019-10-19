/* <게임 기본 소개>
이 방탈출 게임은 호그와트의 마법학생이 되어 수업을 받는 이야기입니다. 기숙사에서 일어난 학생이 되어 하루 수업을 듣는 일과를 담고자 하였습니다. 각 방 별로 다른 미션이 있으며, 기숙사->마법약수업->예술사 교실 순으로 진행됩니다.

<미션 내용>
기숙사 : 200초안에 정해진 물건들을 찾아 수업에 늦지않게 가야합니다. 부엉이 아침밥을 주는 것도 잊지마세요!
	  *방에서 나가기 위해서는 빗자루를 이용하는 것이 중요합니다.
마법약 교실 : 수업시간 동안 다양한 재료를 모아 순간이동 물약을 만들어야 합니다. 
	     재료법을 알기 위해서는 마법책과 칠판의 내용이 중요합니다. 
예술사 교실: 수업이 끝나고 밖으로 나가려고 하는데, 문이 잠겨 있습니다. 
	    미술관에 걸린 모나리자 그림이 주는 힌트와 미술실의 석상들을 이용해서 암호를 알아내어 기숙사로 돌아가야 합니다.

<답안 설명>
***** 기숙사 ***** 
나무상자 답안 : MUSIC     //침대 옆 시간표를 보면 목요일 마지막 수업은 music이라고 써있습니다.
좌측 열쇠로 우측 상자 열기->부엉이밥 주기
시계, 교과서, 꽃을 모두 얻은 후 빗자루를 이용해 창문을 클릭하면 탈출합니다.

***** 마법약 교실 *****
나무상자 답안 : 1128 -> 마법풀 획득    //칠판을 클릭하면 날짜가 나옵니다.
금화박스 답안 : 3325 ->금화 획득  //각 비커의 색 개수를 세면 됩니다.

물약 제조법 : 
금화+날개 = 날개달린 금화 획득 
마법풀+1번방 꽃 = 붉은 꽃 획득
날개달린 금화+붉은 꽃 = 순간이동 물약 획득
순간이동 물약을 성 모형에 사용하면 탈출

***** 예술사 교실 *****
문 답안 : *4538#    //배터리를 리모컨에 사용 -> 불이 꺼지면 조각상 기호가 보입니다.
		//카펫을 오른쪽으로 밀면 붓 자국이 보입니다. 옆에 있는 붓들과 붓 자국들을 매치하여 번호 4538을 알아냅니다.

*/

//***************** 기숙사 휴게실 *******************
room3 = game.createRoom("room3", "기숙사배경.png") // 기숙사 생성

room3.broomstick = room3.createObject("broomstick", "마법빗자루.png") // 빗자루생성
room3.broomstick.setWidth(200) // 크기 조절
room3.locateObject(room3.broomstick, 440, 440) 
room3.broomstick.setItemDescription("빗자루를 타고 창밖으로 나가자.")
room3.broomstick.onClick = function() {
		printMessage("마법 빗자루를 얻었다.")
		room3.broomstick.pick()
	}

room3.key = room3.createObject("key", "열쇠.png")
room3.key.setWidth(40)
room3.locateObject(room3.key, 35, 540)
room3.key.onClick = function(){
	room3.key.pick()
	printMessage("상자 열쇠를 얻었어.")
}


room3.list = room3.createObject("list", "리스트종이.png")
room3.list.setWidth(80)
room3.locateObject(room3.list, 455, 640)
room3.list.onClick = function(){
	showImageViewer("리스트.png")
	printMessage("오늘 준비물과 할 일이 적혀있어.")
}

room3.book = room3.createObject("book", "책4.png")
room3.book.setWidth(100)
room3.locateObject(room3.book, 1035, 540)
room3.book.onClick = function(){
	room3.book.pick()
	item2= true
	printMessage("교과서들을 챙겼어.")
}


room3.clock = room3.createObject("clock", "시계.png")
room3.clock.setWidth(100)
room3.locateObject(room3.clock, 835, 640)
room3.clock.onClick = function(){
	room3.clock.pick()
	item3= true
	game.addTime("100")
	printMessage("마법시계를 이용해 100초를 더 벌었어!")
}


room3.empty1 = room3.createObject("empty1", "empty.png") // 창문투명
room3.empty1.setWidth(250) // 크기 조절
room3.locateObject(room3.empty1, 200, 160) 
room3.empty1.onClick = function() {
	if(game.getHandItem() == room3.broomstick) { // 빗자루를 들고 있으면
		if(item1&&item2&&item3&owleat) {
			game.move(room) // room로 이동
			printMessage("무사히 마법약 교실에 도착했어!")
			game.stopTimer()
			game.hideTimer()
		} else if(item1 == false||item2==false||item3==false && owleat == true) {
			printMessage("준비물을 다 챙기지 못했어... 어서 챙기자")
		}
		else if(item1&&item2&&item3&& owleat == false) {
			printMessage("부엉이 밥을 아직 안 챙겨줬어.")
		}
		else {
			printMessage("아직 준비물과 부엉이밥을 못 챙겼어.")
		}
	} else {
		printMessage("맨몸으로 창문에서 뛰어내릴 수는 없어.")
	}
}

room3.empty2 = room3.createObject("empty2", "empty.png") // 창문투명
room3.empty2.setWidth(250) // 크기 조절
room3.locateObject(room3.empty2, 1150, 160) 
room3.empty2.onClick = function() {
	if(game.getHandItem() == room3.broomstick) { // 빗자루를 들고 있으면
		if(item1&&item2&&item3&owleat) {
			game.move(room) // room로 이동
			printMessage("무사히 마법약 교실에 도착했어! \n칠판에 오늘 수업이 적혀있는 것 같아.")
			game.stopTimer()
			game.hideTimer()
		} else if(item1 == false||item2==false||item3==false && owleat == true) {
			printMessage("준비물을 다 챙기지 못했어... 어서 챙기자")
		}
		else if(item1&&item2&&item3&& owleat == false) {
			printMessage("부엉이 밥을 아직 안 챙겨줬어.")
		}
		else {
			printMessage("아직 준비물과 부엉이밥을 못 챙겼어.")
		}
	} else {
		printMessage("맨몸으로 창문에서 뛰어내릴 수는 없어.")
	}
}

room3.timetable = room3.createObject("timetable", "시간표_1.png") //시간표 생성
room3.timetable.setWidth(40)
room3.locateObject(room3.timetable, 440, 235)
room3.timetable.onClick = function() {
	printMessage("오늘은 목요일. 수업이 3개나 있잖아? 큰일났어..")
	showImageViewer("시간표.png")
	 }

room3.owl = room3.createObject("owl", "부엉이.png") //부엉이 생성
room3.owl.setWidth(150)
room3.locateObject(room3.owl, 150, 585)
room3.owl.onClick = function() {
	if(owleat==false) 
	{
		if(game.getHandItem() == room3.food)
		{
		printMessage("이제 배불러하는 것 같아!")
		owleat=true
		}
	}
	if(owleat==true && game.getHandItem() == room3.food)
	{
	printMessage("이제 배불러하는 것 같아.")
	}
	else
	{
	printMessage("배고파 하는 것 같아.")
	}
}

room3.box = room3.createObject("box", "박스.png") // 박스생성
room3.box.setWidth(200)
room3.locateObject(room3.box, 1140, 625)


room3.food = room3.createObject("food", "먹이.png") // 먹이생성
room3.food.setWidth(50)
room3.locateObject(room3.food, 1150, 560)
room3.food.hide() 
room3.food.onClick = function(){
	room3.food.pick()
	printMessage("부엉이용 먹이를 찾았어.")
	}

room3.flower = room3.createObject("flower", "꽃.png") // 꽃생성
room3.flower.setWidth(120)
room3.flower.setItemDescription("마법풀과 합치자.")
room3.locateObject(room3.flower, 650, 665)
room3.flower.hide() // flower 숨기기
room3.flower.onClick = function(){
	room3.flower.pick()
	item1= true
	printMessage("꽃을 챙겼다.")
	}

room3.box.onClick = function() { // 클릭했을 때
	if(game.getHandItem() == room3.key) {
	if(room3.box.isOpened()) { // Opened 상태인 경우
		room3.box.close() // close
	} else if(room3.box.isClosed()) { // Closed 상태인 경우
		room3.box.open() // open
		printMessage("상자가 열렸다.")
	} else { 
		// do nothing
	}
	}
	else { 
		printMessage("박스가 닫혀있어. 내 열쇠가 어디있지?")
	}
}

	room3.box.onOpen = function() {
	room3.box.setWidth(50)
	room3.box.setSprite("박스_열림.png") // 열린 그림으로 변경
	room3.food.show() 
}
	room3.box.onClose = function() {
	room3.box.setSprite("박스.png") // 닫힌 그림으로 변경
	room3.box.setWidth(200)
	room3.food.hide() 
}

room3.box2 = room3.createObject("box2", "cryptex_1.png") // 상자투명
room3.box2.setWidth(30) // 크기 조절
room3.locateObject(room3.box2, 660, 510) 

room3.empty3 = room3.createObject("empty3", "empty_2.png") // 상자투명
room3.empty3.setWidth(250) // 크기 조절
room3.locateObject(room3.empty3, 650, 530) 
room3.empty3.onClick = function() { game.move(room4) // 상자확대->room4로 이동}
}






//*********************기숙사 상자***************
room4 = game.createRoom("room4", "기숙사배경_1.png") // 기숙사상자확대방


room4.locker = room4.createObject("locker", "cryptex_1.png") // 자물쇠
room4.locker.setWidth(150) // 크기 조절
room4.locateObject(room4.locker, 670, 375)
room4.locker.onClick = function() { 
	printMessage("상자를 열려면 비밀번호가 필요해. \n 오늘 마지막 수업이 뭐였지?")
	showKeypad("alphabet", "MUSIC" , function(){
		room4.locker.unlock() 
		printMessage("상자가 열리고 무언가 바닥에 떨어졌다")
		game.move(room3)
		room3.flower.show() 
		playSound("mainbgm.wav")
	 })
 }


room4.back = room4.createObject("back", "화살표_아래.png") // 상자투명
room4.back.setWidth(100) // 크기 조절
room4.locateObject(room4.back, 650, 650) 
room4.back.onClick = function() { game.move(room3) }


//***************** 마법약 교실 *******************

room = game.createRoom("room", "교실배경.png") // 마법약교실 생성


room.beaker = room.createObject("beaker", "비커들.png")
room.beaker.setWidth(900)
room.locateObject(room.beaker, 620, 400)
room.beaker.onClick = function(){
	printMessage("필요한 재료들이 아닌 것 같아.")
	}

room.empty1 = room.createObject("empty1", "empty_3.png") // 창문투명
room.empty1.setWidth(250) // 크기 조절
room.locateObject(room.empty1, 110, 240)
room.empty1.onClick = function(){
	showImageViewer("칠판이미지.png")
	printMessage("칠판을 보니 오늘 배울 물약은 순간이동 물약이네. \n책에 제조법이 쓰여있을거야. 어서 만들어보자…!")
	}


room.unicorn = room.createObject("unicorn", "유니콘.png")
room.unicorn.setWidth(160)
room.locateObject(room.unicorn, 380, 350)
room.unicorn.onClick = function(){
	room.unicorn.setSprite("유니콘_날개없음.png")
	room.unicorn.setWidth(100)
	room.unicornwing.pick()
	printMessage("유니콘에게서 재료 중 하나인 날개를 얻었어!")
	}


room.book = room.createObject("book", "책3-1.png")
room.book.setWidth(140)
room.locateObject(room.book, 100, 480)
room.book.onClick = function(){
	showImageViewer("마법책내용.png")
	//room.periodic.show() 
	printMessage("순간이동 물약이라니... 다음 수업으로 갈 때 좋겠는걸?\n어서 만들어보자.")
	}

room.plask = room.createObject("plask", "비커1.png")
room.plask.setWidth(30)
room.locateObject(room.plask, 580, 350)
room.plask.onClick = function(){
	//room.plask.pick()
	//printMessage("마법약 재료 중 하나인 '파란색 길쭉이 비커'야!.")
	}


room.box = room.createObject("box", "박스.png")
room.box.setWidth(200)
room.box.lock()
room.locateObject(room.box, 670, 560)
room.box.onClick = function() { // 클릭했을 때
	if(room.box.isOpened()) { // Opened 상태인 경우
		
	} else if(room.box.isClosed()) { // Closed 상태인 경우
		room.box.open() // open
	} else if(room.box.isLocked()){ 
		printMessage("오늘 날짜는? \n *아까 칠판에 뭐라고 써있었지...?*")
		showKeypad("number", "1128" , function(){
		room.box.unlock() // door의 잠금을 연다
		printMessage("박스가 열리는 소리가 들렸어.") // 비밀번호를 풀었을 때 출력
	 })
	}
}

	room.box.onOpen = function() {
	room.box.setWidth(50)
	room.box.setSprite("박스_열림.png") // 열린 그림으로 변경
	room.plant.show() 
}
	room.box.onClose = function() {
	room.box.setSprite("박스.png") // 닫힌 그림으로 변경
	room.box.setWidth(200)
	room.plant.hide() 
}


room.castle = room.createObject("castle", "마법성.png")
room.castle.setWidth(280)
room.locateObject(room.castle, 1000, 520)
room.castle.onClick = function() {
	if(game.getHandItem() == room.potion)
		{
		printMessage("물약을 이용해 무사히 예술사 교실에 도착했어!")
		game.move(room2)
		}
	else
	{
	printMessage("물약을 여기 뿌리면 순간이동을 할 수 있단 말이지....?")
	}
}


room.earth = room.createObject("earth", "지구본-1.png")
room.earth.setWidth(90)
room.locateObject(room.earth, 1220, 400) 
room.earth.onClick = function(){
	printMessage("지구본이 있어. 수업과는 상관 없는 재료같아.")
	}

room.fish = room.createObject("fish", "장식2-우.png")
room.fish.setWidth(110)
room.locateObject(room.fish, 500, 380)
room.fish.onClick = function(){
	printMessage("생선 모형이 있어. 수업과는 상관 없는 재료같아.")
	}

/* room.periodic = room.createObject("periodic", "주기율표-1.png")
room.periodic.setWidth(130)
room.locateObject(room.periodic, 520, 660)
room.periodic.hide() 
room.periodic.onClick = function(){
	showImageViewer("주기율표.png")
	printMessage("책 사이에서 주기율표가 떨어졌네. 몇개는 뭔가 이상한 것 같은데..?")
	} */

room.goldbox = room.createObject("goldbox", "금화박스_1.png")
room.goldbox.setWidth(170)
room.locateObject(room.goldbox, 830, 430) 
room.goldbox.onClick = function() { 
	game.move(room5) // 박스확대->room5로 이동}
	printMessage("깜짝이야... 금화 박스가 살아있잖아? ")
}

room.gold = room.createObject("gold", "동전.png")
room.gold.setWidth(50)
room.locateObject(room.gold, 830, 360) 
room.gold.hide() 
room.gold.setItemDescription("유니콘 날개와 합치자.")
room.gold.onClick = function(){
	room.gold.pick()
	printMessage("박스로부터 '금화 한 닢'을 찾았어!")
	}

room.unicornwing = room.createObject("unicornwing", "유니콘날개.png")
room.unicornwing.setItemDescription("금화와 합치자.")
room.unicornwing.hide()

room.plant = room.createObject("plant", "마법풀.png")
room.plant.setWidth(100)
room.plant.setItemDescription("보라색 꽃과 합치자.")
room.locateObject(room.plant, 700, 515)
room.plant.hide() 
room.plant.onClick = function(){
	room.plant.pick()
	printMessage("물약 재료 중 하나인 '마법풀'을 찾았어!")
	}

room.potion = room.createObject("potion", "순간이동물약.png")
room.potion.setItemDescription("순간이동 물약 : 성 모형에 뿌려보자.")
room.potion.hide()
room.winggold = room.createObject("winggold", "날개달린동전.png")
room.winggold.setItemDescription("빨간꽃과 합치자.")
room.winggold.hide()
room.redflower = room.createObject("redflower", "빨간꽃.png")
room.redflower.setItemDescription("날개달린 동전과 합치자.")
room.redflower.hide()

game.makeCombination(room3.flower, room.plant, room.redflower)
game.makeCombination(room.gold, room.unicornwing, room.winggold)
game.makeCombination(room.winggold, room.redflower, room.potion )

//*********************금화박스***************

room5 = game.createRoom("room5", "교실배경-2.png") 

room5.locker = room5.createObject("locker", "금화박스.png") 
room5.locker.setWidth(250) // 크기 조절
room5.locateObject(room5.locker, 670, 375)
room5.locker.onClick = function() { 
	printMessage("금화를 얻고싶으면 내가내는 퀴즈를 맞춰야해. \n 빨노초파=???? \n ")
	showKeypad("number", "3325" , function(){
		printMessage("솥으로부터 금화를 얻었다.")
		game.move(room)
		room.gold.pick() 
		playSound("mainbgm.wav")
	 })
 }


room5.back = room5.createObject("back", "화살표_아래.png") // 상자투명
room5.back.setWidth(100) // 크기 조절
room5.locateObject(room5.back, 650, 650) 
room5.back.onClick = function() { 
		game.move(room) 
		playSound("mainbgm.wav") }


// ********* 미술실 *************

room2 = game.createRoom("room2","미술실배경.png") // 예술사 교실 생성

room2.door = room2.createObject("door", "미술실문.png") // 문 생성
room2.door.setWidth(280) // 크기 조절
room2.locateObject(room2.door, 310, 300) // 문 배치
room2.door.lock() // door 상태를 locked로 변경

room2.door.onOpen = function() { // door 상태가 open으로 변경되면 실행
	room2.door.setWidth(100) // 크기 조절
	room2.door.setSprite("미술실문-열림.png") // 열린 문으로 변경
	room2.door.moveX(-10) // X 방향으로 200 이동
}

room2.door.onClick = function() { // door를 클릭했을 때
	if(room2.door.isClosed()){ // door가 closed 상태이면
		room2.door.open() // door의 상태를 open으로 바꿈
	} else if (room2.door.isOpened()){ // door가 opened 상태이면
		game.clear() // room로 이동
	} else if (room2.door.isLocked()){ // door가 locked 상태이면
		printMessage("웅장한 문이네... 지금은 잠겨있어.") // 메시지 출력
	}
}


room2.banner = room2.createObject("banner", "호그와트배너.png") // 배너 생성
room2.banner.setWidth(280) // 크기 조절
room2.locateObject(room2.banner, 100, 120) 
room2.banner.onClick = function() {
	printMessage("그리핀도르의 마크가 걸려있다.")
	 }

room2.monalisa = room2.createObject("monalisa", "액자3-1.png")
room2.monalisa.setWidth(200)
room2.locateObject(room2.monalisa, 650, 200)
room2.monalisa.onClick = function() {
	printMessage("벽에 걸린 초상화가 말을 건다.")
	playSound("phonecall.wav") // 플레이어
	showImageViewer("모나리자.png") // 이미지 위에 텍스트 출력
	 }


room2.keypad = room2.createObject("keypad", "키패드-좌.png") // 키패드 생성
room2.keypad.setWidth(30) // 크기 조절
room2.locateObject(room2.keypad, 160, 350) 
room2.keypad.onClick = function() {
	printMessage("비밀번호를 입력하자.")
	showKeypad("telephone", "*4538#" , function(){ // 키패드
		room2.door.unlock() // door의 잠금을 연다
		printMessage("잠금장치가 열리는 소리가 들렸다.")
	 })
}

room2.carpet = room2.createObject("carpet", "카펫.png")
room2.carpet.setWidth(350)
room2.locateObject(room2.carpet, 500, 600)
room2.carpet.onDrag = function(direction){ // 드래그 모션 direction - Up, Down, Left, Right
	if(direction == "Right" && room2.carpet.move){ // 오른쪽으로 드래그 했으면
		printMessage("카펫을 밀어버렸다!")
		room2.brushhint.show()
		room2.carpet.moveX(400) // X 방향으로 200 이동
		room2.carpet.moveY(180) // Y 방향으로 0 이동
		room2.carpet.move = false // 이후에는 더 이상 움직이지 않도록 합니다.
		room2.clock.moveX(400) // X 방향으로 200 이동
		room2.clock.moveY(80) // Y 방향으로 0 이동
		room2.clock.move = false // 이후에는 더 이상 움직이지 않도록 합니다.
	} else {
		printMessage("붉은 카펫이 깔려있어.")
	}
}

room2.brushhint = room2.createObject("brushhint", "미술실바닥.png")
room2.brushhint.setWidth(600)
room2.locateObject(room2.brushhint, 570, 570)
room2.brushhint.hide() 

room2.brush = room2.createObject("brush", "미술실붓.png")
room2.brush.setWidth(120)
room2.locateObject(room2.brush, 340, 580)
room2.brush.onClick = function() {
	printMessage("학생들이 쓰는 붓들이 보관되어 있다.")
	showImageViewer("미술실붓확대.png") // 이미지 위에 텍스트 출력
	 }

room2.sculpture1 = room2.createObject("sculpture1", "미술실조각-1.png")
room2.sculpture1.setWidth(340)
room2.locateObject(room2.sculpture1, 700, 400)
room2.sculpture1.onClick = function() {
	printMessage("고풍스런 조각상들이다.")
	 }

room2.sculpture11 = room2.createObject("sculpture11", "미술실조각야광-1.png")
room2.sculpture11.setWidth(340)
room2.locateObject(room2.sculpture11, 708, 400)
room2.sculpture11.hide() 
room2.sculpture11.onClick = function() {
	printMessage("전에는 보이지 않던 글씨들이 보이고있다.")
	 }

room2.sculpture2 = room2.createObject("sculpture2", "미술실조각-2.png")
room2.sculpture2.setWidth(350)
room2.locateObject(room2.sculpture2, 1040, 440)
room2.sculpture2.onClick = function() {
	printMessage("고풍스런 조각상들이다.")
	 }

room2.sculpture22 = room2.createObject("sculpture22", "미술실조각야광-2.png")
room2.sculpture22.setWidth(350)
room2.locateObject(room2.sculpture22, 1037, 440)
room2.sculpture22.hide() 
room2.sculpture22.onClick = function() {
	printMessage("전에는 보이지 않던 글씨들이 보이고있다.")
	 }

room2.box = room2.createObject("box", "상자-1-닫힘.png")
room2.box.setWidth(200)
room2.locateObject(room2.box, 120, 550)
room2.box.onClick = function(){
	room2.box.setSprite("상자-1-열림.png")
	room2.battery.show()
	room2.key.show()
}

room2.battery = room2.createObject("battery", "건전지.png")
room2.battery.setWidth(30)
room2.locateObject(room2.battery, 95, 540)
room2.battery.hide()
room2.battery.setItemDescription("이제 시계랑 리모컨을 쓸 수 있을 것 같아.")
room2.battery.onClick = function(){
	room2.battery.pick()
	printMessage("건전지를 얻었다.")
}


room2.remote = room2.createObject("remote", "리모컨.png")
room2.remote.setWidth(100)
room2.locateObject(room2.remote, 850, 630)
room2.remote.onClick = function() {
	if(game.getHandItem() == room2.battery) { // 배터리를 들고 있으면
		printMessage("배터리를 넣어 리모컨이 작동한다.")
		remoteControl = true
	} else {
		printMessage("배터리가 없어 작동하지 않아.")
		remoteControl = false
	}

	if(roomLight && remoteControl == true ) {
		
		room2.setRoomLight(0.5)
		roomLight = false
		room2.sculpture11.show()
		room2.sculpture22.show()
		printMessage("불을 끄니 조각상에 야광글씨가 보이고 있어!")
		
	} else {
		room2.setRoomLight(1)
		roomLight = true
		room2.sculpture11.hide()
		room2.sculpture22.hide()
	}

}


room2.clock = room2.createObject("clock", "시계.png")
room2.clock.setWidth(150)
room2.locateObject(room2.clock, 550, 550)
room2.clock.onClick = function() {
	printMessage("시계를 뒤집어보니 이상한 문제가 있어....")
	showImageViewer("미술실문제.PNG")
	 }

room2.circle = room2.createObject("circle", "장식1-우.png")
room2.circle.setWidth(250)
room2.locateObject(room2.circle, 950, 150)



// *****************게임시작*******************

roomLight = false // 플래그 변수
remoteControl = false
owleat=false
item1=false
playSound("mainbgm.wav")


game.start(room3) // 게임시작
game.printStory("<기숙사 휴게실>\n당신은 호그와트의 학생입니다. \n기숙사에서 일어나보니 이미 9시 55분. \n10시까지 늦지 않을 방법을 찾아 어서 나가야해요.\n수업에 쓸 준비물들을 챙기는 것도 잊지마세요!\n\n*음악이 나오니 소리를 알맞게 조절해주세요* ")
game.setClearMessage("오늘 수업도 무사히 끝냈어!")
game.setGameoverMessage("결국 오늘도 지각하고 말았어...")
game.setTimer("200", "1", "초")
