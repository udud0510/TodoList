// 리스트 개수 세는 변수
var totalItems = 0;


function updateItemStatus() {
	var chId = this.id.replace('cb_', '');
	var itemText = document.getElementById('item_' + chId);
	if (this.checked) {
		itemText.className = 'checked';
	} else {
		itemText.className = '';
	}

} 

// todolist에 항목 추가하는 함수
function addNewItem(list, itemText) {

	totalItems++;
	// 리스트 목록
	var listItem = document.createElement('li');
	// 완료 작업 구분할 체크박스
	var checkBox = document.createElement('input');
	checkBox.type = 'checkbox';
	checkBox.id = 'cb_' + totalItems;
	checkBox.onclick = updateItemStatus;

	var span = document.createElement('span');
	span.id = 'item_' + totalItems;
	span.innerText = itemText; 

	listItem.appendChild(checkBox);
	listItem.appendChild(span);
	list.appendChild(listItem);

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
		document.getElementById("inputText").value='';
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
	document.getElementById("inputText").value='';
}