//your code here!
function addListItem() {
	
var list = document.getElementById('infi-list');
var listItem = document.createElement('li');
listItem.textContent = 'New Item';
list.appendChild(listItem);
}
for(var i = 0; i< 10; i++){
	addListItem();
}
var list = document.getElementById('infi-list');
list.addEventListener('scroll', function(){
	if(list.scrollTop + list.clientHeight >= list.scrollHeight)
	{
		addListItem();
		addListItem();
	}
})

