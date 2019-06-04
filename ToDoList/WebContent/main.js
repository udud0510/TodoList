// 리스트 개수 세는 변수
var totalItems = 0;

// todolist에 항목 추가하는 함수
function addNewItem(list, itemText) {
	// 시간을 부여하는 id를 만들어서 각 li태그 가리키기
	var date = new Date();
	// 앞에 "" 붙여서 string 형식으로 만듦 안만들면 값이 커서 제대로 id에 값이 안들어감
	var id = "" + date.getHours() + date.getMinutes() + date.getSeconds() + date.getMilliseconds();
	// 잘나오는지 검사
	// alert(id);
	totalItems++;
	// 리스트 목록
	var listItem = document.createElement('li');
	// 각 li태그에 이벤트 주기 위해서 구별 id 지정
	listItem.id = 'li_' + id;
	listItem.ondblclick = moveItem;
	listItem.addEventListener('mouseover', mouseover);
	listItem.addEventListener('mouseout', mouseout);
	// 완료 작업 구분할 체크박스
	var checkBox = document.createElement('input');
	checkBox.type = 'checkbox';
	checkBox.id = 'cb_' + id;
	checkBox.onclick = updateItemStatus;

	var span = document.createElement('span');
	span.id = 'item_' + totalItems;
	span.innerText = itemText;
	

	var pencilIcon = document.createElement('i');
	pencilIcon.className = 'fa fa-pencil';
	pencilIcon.id = 'pencilIcon_' + id;
	pencilIcon.onclick = editItem;
	
	// 글씨를 눌렀을때 editItem 함수 호출
	span.onclick = editItem;

	listItem.appendChild(checkBox);
	listItem.appendChild(span);
	list.appendChild(listItem);
	listItem.appendChild(pencilIcon);
}

// 엔터 눌렀을때 입력&공백만 있을때는 입력 안되게
inputText.onkeyup = function(event) {
	if (event.which === 13) {
		var itemText = inputText.value;
		if (!itemText || itemText === "" || itemText === " ")
			return false;

		addNewItem(document.getElementById('todolist'), itemText);

		// 커서가 입력창에 포커싱되게
		inputText.focus();
		// 해당 영역이 선택되어져있게
		inputText.select();
		// 입력창 초기화
		document.getElementById("inputText").value = '';
	}
};

// 추가 버튼 눌렀을때 입력&공백만 있을때는 입력 안되게
var btnNew = document.getElementById('btnAdd');
btnNew.onclick = function() {
	var listItem = document.createElement('inputText');
	var itemText = inputText.value;

	if (!itemText || itemText === "" || itemText === " ")
		return false;

	addNewItem(document.getElementById('todolist'), itemText);

	// 커서가 입력창에 포커싱되게
	inputText.focus();
	// 해당 영역이 선택되어져있게
	inputText.select();
	// 입력창 초기화
	document.getElementById("inputText").value = '';
}

// 체크된거 구별 함수
function updateItemStatus() {
	var chId = this.id.replace('cb_', '');
	var itemText = document.getElementById('item_' + chId);
	if (this.checked) {
		itemText.className = 'checked';
	} else {
		itemText.className = '';
	}
}
// 수정_편집 함수
function editItem() {
	// 새창을 띄우고 입력값 받기 위해 prompt 사용
	var newText = prompt("수정하시겠습니까?");
	if (!newText || newText === "" || newText === " ")
		return false;
	var spanId = this.id.replace('pencilIcon', '');
	var span = document.getElementById('item_' + spanId);

	span.innerText = newText;
}

var donelist = document.getElementById('donelist');
function moveItem() {
	var listItemId = this.id.replace('li_', '');
	var listItem = document.getElementById('li_' + listItemId);
	var listItemParentId = listItem.parentElement;
	
	if(listItemParentId==donelist){
		todolist.appendChild(listItem);
	}else{
		donelist.appendChild(listItem);
	}
}

function mouseover() {
	var pencilIconId = this.id.replace('li_', '');
	var pencilIcon = document.getElementById('pencilIcon_' + pencilIconId);
	pencilIcon.style.visibility = 'visible';
}

function mouseout() {
	var pencilIconId = this.id.replace('li_', '');
	var pencilIcon = document.getElementById('pencilIcon_' + pencilIconId);
	pencilIcon.style.visibility = 'hidden';
}