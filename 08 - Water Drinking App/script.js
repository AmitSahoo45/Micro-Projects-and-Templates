// Variables

let waterDrinkingTracker = {
    'uuid': '',
    'userDrinkTarget': 0,
    'userDrinkConsumed': 0,
    'userDrinkRemaining': 0,
    'userSetTime': '',
    'registerStatus': false,
    'timetrackerTime': ''
}

const drinkingUserTarget = document.getElementById('dlywtgl')
const targetSubmit = document.getElementById('targetSubmit')
const targetError = document.getElementById('target__error')
const checkbox_ = document.querySelectorAll('[type="radio"]')
let drinkWater = 0
const cupSmall = document.querySelectorAll('.cup-small')
let userSetTarget = document.getElementById('userSetTarget');
let glassesConsumed = document.getElementById('glassesConsumed');
let glassesRemaining = document.getElementById('glassesRemaining');

// Functions for the file

function generateUUID() {
    let d = new Date().getTime();
    let d2 = ((typeof performance !== 'undefined') && performance.now && (performance.now() * 1000)) || 0;
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        let r = Math.random() * 16;
        if (d > 0) {
            r = (d + r) % 16 | 0;
            d = Math.floor(d / 16);
        } else {
            r = (d2 + r) % 16 | 0;
            d2 = Math.floor(d2 / 16);
        }
        return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
}

const onSubmitUser = (num, drinkWater) => {
    const uuid = generateUUID();
    waterDrinkingTracker.userDrinkTarget = num;
    waterDrinkingTracker.userDrinkConsumed = 0;
    waterDrinkingTracker.timetrackerTime = new Date().getTime();
    waterDrinkingTracker.userDrinkRemaining = num;
    waterDrinkingTracker.registerStatus = true;
    if (waterDrinkingTracker.uuid === '') {
        waterDrinkingTracker.uuid = uuid;
    }
    userSetTarget.innerHTML = Math.floor(waterDrinkingTracker.userDrinkTarget);
    glassesConsumed.innerHTML = Math.floor(waterDrinkingTracker.userDrinkConsumed);
    glassesRemaining.innerHTML = Math.floor(waterDrinkingTracker.userDrinkRemaining);
    localStorage.setItem('waterDrinkingTracker', JSON.stringify(waterDrinkingTracker));
}

const getTimeDifference = (t) => {
    const currentTimeValue = new Date().getTime();
    const diff = currentTimeValue - t;
    return ((diff / (1000 * 60 * 60)) % 24).toFixed(2);
}

// Event Listener Only

targetSubmit.addEventListener('click', () => {
    checkbox_.forEach(drink => {
        if (drink.checked) {
            drinkWater = drink.value
        }
    })

    console.log(drinkWater)

    const num = drinkingUserTarget.value;
    const errorMessage = document.querySelector('.error__message');
    errorMessage.style.color = '#FF0000'
    errorMessage.style.visibility = 'hidden';

    if (num === '' || drinkWater === 0) {
        errorMessage.style.visibility = 'visible';
        targetError.innerHTML = `Oops! It seems like you forgot to set your target.`;
        return false;
    }
    else if (num <= 1) {
        errorMessage.style.visibility = 'visible';
        targetError.innerHTML = `Just ${num} litre of Water for today🙄😲??? That's too less`;
        return false;
    }
    else if (num > 3 && num <= 4) {
        errorMessage.style.visibility = 'visible';
        targetError.innerHTML = `Thats pretty ambitious...😅. We hope you get it done.`;
        return false;
    }
    else if (num > 4) {
        errorMessage.style.visibility = 'visible';
        targetError.innerHTML = `
        Holy Cow🐄. That's a lot of water.<br>
        <span class='error__message__sub'>Please re-enter details<span>
        `;
        return false;
    }
    else {
        errorMessage.style.visibility = 'visible';
        errorMessage.style.color = '#95CD41'
        targetError.innerHTML = `Nice! Your goal has been set.`;
        onSubmitUser(num, drinkWater);
    }
})

cupSmall.forEach((cup) => {
    cup.addEventListener('click', (e) => {
        const waterConsumptionValue = (e.path[0].id);
        switch (waterConsumptionValue) {
            case '100ml':
                if (waterDrinkingTracker.uuid === '') {
                    alert('Please set your target first')
                }
                else {
                    console.log(waterDrinkingTracker.userDrinkRemaining)
                    if (waterDrinkingTracker.userDrinkRemaining <= 0) {
                        alert('You have already consumed your target')
                    } else {
                        glassesConsumed.innerHTML = (waterDrinkingTracker.userDrinkConsumed += 0.1).toFixed(2) 
                        glassesRemaining.innerHTML = (waterDrinkingTracker.userDrinkRemaining -= 0.1).toFixed(2) 
                        localStorage.setItem('waterDrinkingTracker', JSON.stringify(waterDrinkingTracker));
                    }
                }
                break;

            case '150ml':
                if (waterDrinkingTracker.uuid === '') {
                    alert('Please set your target first')
                } else {
                    console.log(waterDrinkingTracker.userDrinkRemaining)
                    if (waterDrinkingTracker.userDrinkRemaining <= 0) {
                        alert('You have already consumed your target')
                    } else {
                        glassesConsumed.innerHTML = (waterDrinkingTracker.userDrinkConsumed += 0.15).toFixed(2)
                        glassesRemaining.innerHTML = (waterDrinkingTracker.userDrinkRemaining -= 0.15).toFixed(2)
                        localStorage.setItem('waterDrinkingTracker', JSON.stringify(waterDrinkingTracker));
                    }
                }
                break;

            case '200ml':
                if (waterDrinkingTracker.uuid === '') {
                    alert('Please set your target first')
                } else {
                    console.log(waterDrinkingTracker.userDrinkRemaining)
                    if (waterDrinkingTracker.userDrinkRemaining <= 0) {
                        alert('You have already consumed your target')
                    } else {
                        glassesConsumed.innerHTML = (waterDrinkingTracker.userDrinkConsumed += 0.2).toFixed(2)
                        glassesRemaining.innerHTML = (waterDrinkingTracker.userDrinkRemaining -= 0.2).toFixed(2)
                        localStorage.setItem('waterDrinkingTracker', JSON.stringify(waterDrinkingTracker));
                    }
                }
                break;

            case '250ml':
                if (waterDrinkingTracker.uuid === '') {
                    alert('Please set your target first')
                } else {
                    console.log(waterDrinkingTracker.userDrinkRemaining)
                    if (waterDrinkingTracker.userDrinkRemaining <= 0) {
                        alert('You have already consumed your target')
                    } else {
                        glassesConsumed.innerHTML = (waterDrinkingTracker.userDrinkConsumed += 0.25).toFixed(2)
                        glassesRemaining.innerHTML = (waterDrinkingTracker.userDrinkRemaining -= 0.25).toFixed(2)
                        localStorage.setItem('waterDrinkingTracker', JSON.stringify(waterDrinkingTracker));
                    }
                }
                break;
            default:
                targetError.innerHTML = `Oops! Something went wrong.`;
                setTimeout(() => {
                    window.location.reload();
                }, 2000)
                break;
        }
    })
})

window.addEventListener('load', () => {
    // console.log(waterDrinkingTracker)
    if (localStorage.getItem('waterDrinkingTracker') === null) {
        localStorage.setItem('waterDrinkingTracker', JSON.stringify(waterDrinkingTracker));
        userSetTarget.innerHTML = 'Unset'
        glassesConsumed.innerHTML = 'Unset'
        glassesRemaining.innerHTML = "Unset"
    }
    else {
        waterDrinkingTracker = JSON.parse(localStorage.getItem('waterDrinkingTracker'))
        userSetTarget.innerHTML = waterDrinkingTracker.userDrinkTarget;
        glassesConsumed.innerHTML = waterDrinkingTracker.userDrinkConsumed > waterDrinkingTracker.userDrinkTarget ? waterDrinkingTracker.userDrinkTarget : waterDrinkingTracker.userDrinkConsumed;
        glassesRemaining.innerHTML = waterDrinkingTracker.userDrinkRemaining < 0 ? 0 : waterDrinkingTracker.userDrinkRemaining;
    }
    console.log(waterDrinkingTracker)
    const timeDifference = getTimeDifference(waterDrinkingTracker.timetrackerTime)
    console.log(timeDifference)
})