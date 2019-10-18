
//***************** 기숙사 휴게실 *******************
room3 = game.createRoom("room3", "기숙사배경.png") // 기숙사 생성

room3.broomstick = room3.createObject("broomstick", "마법빗자루.png") // 빗자루생성
room3.broomstick.setWidth(200) // 크기 조절
room3.locateObject(room3.broomstick, 440, 440) 
room3.broomstick.setItemDescription("빗자루를 타고 창밖으로 나가자.")
room3.broomstick.onClick = function() {
		printMessage("빗자루를 얻었다.")
		room3.broomstick.pick()
	}

room3.key = room3.createObject("key", "열쇠.png")
room3.key.setWidth(40)
room3.locateObject(room3.key, 35, 540)
room3.key.onClick = function(){
	room3.key.pick()
	printMessage("열쇠를 얻었다.")
}


room3.empty1 = room3.createObject("empty1", "empty.png") // 창문투명
room3.empty1.setWidth(250) // 크기 조절
room3.locateObject(room3.empty1, 200, 160) 
room3.empty1.onClick = function() {
	if(game.getHandItem() == room3.broomstick) { // 빗자루를 들고 있으면
		if(item1 == true) {
			game.move(room) // room로 이동
			game.stopTimer()
			game.hideTimer()
		} else {
			printMessage("준비물을 다 챙기지 못했어... 어서 챙기자")
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
		if(item1 == true) {
			game.move(room) // room로 이동
			game.stopTimer()
			game.hideTimer()
		} else {
			printMessage("준비물을 다 챙기지 못했어... 어서 챙기자")
		}

	} else {
		printMessage("맨몸으로 창문에서 뛰어내릴 수는 없어.")
	}
}


room3.box = room3.createObject("box", "박스.png") // 박스생성
room3.box.setWidth(200)
room3.locateObject(room3.box, 1050, 585)

room3.flower = room3.createObject("flower", "꽃.png") // 꽃생성
room3.flower.setWidth(60)
room3.locateObject(room3.flower, 1050, 525)
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
	room3.flower.show() 
}
	room3.box.onClose = function() {
	room3.box.setSprite("박스.png") // 닫힌 그림으로 변경
	room3.box.setWidth(200)
	room3.flower.hide() 
}




//***************** 마법약 교실 *******************

room = game.createRoom("room", "교실배경-1.png") // 마법약교실 생성

/* room.door = room.createObject("door", "문-오른쪽-닫힘.png") // 문 생성
room.door.setWidth(136) // 크기 조절
room.locateObject(room.door, 600, 270) // 문 배치
room.door.lock() // door 상태를 locked로 변경

room.door.onClick = function() { // door를 클릭했을 때
	if(room.door.isClosed()){ // door가 closed 상태이면
		room.door.open() // door의 상태를 open으로 바꿈
	} else if (room.door.isOpened()){ // door가 opened 상태이면
		game.move(room2) // room2로 이동
	} else if (room.door.isLocked()){ // door가 locked 상태이면
		printMessage("문이 잠겨있다") // 메시지 출력
	}
}

room.door.onOpen = function() { // door 상태가 open으로 변경되면 실행
	room.door.setSprite("문-오른쪽-열림.png") // 열린 문으로 변경
}


room.keypad = room.createObject("keypad", "숫자키-우.png") // 오브젝트 생성
room.keypad.setWidth(50) // 크기 조절
room.locateObject(room.keypad, 710, 230) // 위치 변경

room.keypad.onClick = function() {
	printMessage("비밀번호를 입력하자.")
	showKeypad("number", "3325" , function(){ // 키패드 1 - 숫자4자리
		room.door.unlock() // door의 잠금을 연다
		printMessage("잠금장치가 열리는 소리가 들렸다.")
	 })
}


room.shelf1 = room.createObject("shelf1", "선반-우.png")
room.shelf1.setWidth(460)
room.locateObject(room.shelf1, 980, 150)

room.shelf2 = room.createObject("shelf2", "선반-우.png")
room.shelf2.setWidth(460)
room.locateObject(room.shelf2, 980, 255)

room.shelf3 = room.createObject("shelf3", "선반-우.png")
room.shelf3.setWidth(460)
room.locateObject(room.shelf3, 980, 350)

room.plask = room.createObject("plask", "비커들.png")
room.plask.setWidth(300)
room.locateObject(room.plask, 950, 160)

room.earth = room.createObject("earth", "지구본-1.png")
room.earth.setWidth(90)
room.locateObject(room.earth, 370, 350)


room.book = room.createObject("book", "책3-1.png")
room.book.setWidth(90)
room.locateObject(room.book, 150, 430)

room.fish = room.createObject("fish", "장식2-우.png")
room.fish.setWidth(110)
room.locateObject(room.fish, 880, 300)

room.periodic = room.createObject("periodic", "주기율표-1.png")
room.periodic.setWidth(150)
room.locateObject(room.periodic, 550, 630) */




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
remoteControl = false // 플래그 변수
playSound("mainbgm.wav")


game.start(room3) // 게임시작
game.printStory("<기숙사 휴게실>\n당신은 호그와트의 학생입니다. \n기숙사에서 일어나보니 이미 9시 55분. \n10시까지 늦지 않을 방법을 찾아 어서 나가야해요.\n수업에 쓸 준비물들을 챙기는 것도 잊지마세요!\n*bgm이 나오니 소리를 알맞게 조절해주세요* ")
game.setClearMessage("오늘 수업도 무사히 끝냈어!")
game.setGameoverMessage("결국 오늘도 지각하고 말았어...")
game.setTimer("200", "1", "초")