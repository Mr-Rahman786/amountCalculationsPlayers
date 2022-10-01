// single player input field
const getSelectButton = document.querySelectorAll('.button')
for (let singleButton of getSelectButton) {
    singleButton.addEventListener('click', function (event) {
        // console.log(event.target.parentNode.childNodes[3].firstElementChild.innerText)
        const singleplayers = event.target.parentNode.childNodes[3].firstElementChild.innerText;
        const setTextPlayer = document.getElementById('setPlayers');

        const playerError = setTextPlayer.childNodes.length;
        if (playerError > 4) {
            alert('Sorry You Cant Selcet Over The Five');
            return;
        }
        const listItem = document.createElement('li');
        listItem.innerText = singleplayers;
        setTextPlayer.appendChild(listItem);
        
        // btn disabled
        event.target.setAttribute('disabled', true);
        event.target.style.backgroundColor = 'grey';
    })
}



document.getElementById('calculate-btn').addEventListener('click', function () {
    const perPlayer = document.getElementById('per-palyer');
    const perPlayerString = perPlayer.value;
    const perPlayerValue = parseInt(perPlayerString);
    // console.log(perPlayerValue);
    const setTextPlayer = document.getElementById('setPlayers');
    const playerList = setTextPlayer.childNodes.length;
    const budget = playerList * perPlayerValue;
    
    const playerExpense = document.getElementById('player-expense');
    playerExpense.innerText = budget;
})

// calculate total
document.getElementById('calculate-btn-total').addEventListener('click', function () {
    const playerExpense = document.getElementById('player-expense');
    const playerTotalExpenses = parseInt(playerExpense.innerText);

    const managerValueByid = document.getElementById('manager-input');
    const managerFiled = managerValueByid.value;
    const managerInputFiled = parseInt(managerFiled);

    const coachFiledValueById = document.getElementById('coach-input');
    const coachFiled = coachFiledValueById.value;
    const coachInputFiled = parseInt(coachFiled)
    
    const totalAround = playerTotalExpenses + managerInputFiled + coachInputFiled;
    const totalAmountAll = document.getElementById('total-amount');
    totalAmountAll.innerText = totalAround;
})

