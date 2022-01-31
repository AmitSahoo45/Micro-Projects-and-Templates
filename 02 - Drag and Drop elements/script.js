const draggables = document.querySelectorAll('.draggable')
const containers = document.querySelectorAll('.container')

draggables.forEach((draggable) => {
    draggable.addEventListener('dragstart', () => {
        console.log('dragstart')
        draggable.classList.add('dragging')
    })

    draggable.addEventListener('dragend', () => {
        console.log('dragend')
        draggable.classList.remove('dragging')
    })
})

containers.forEach((container) => {
    container.addEventListener('dragover', (e) => {
        e.preventDefault()
        const afterElement = getDragAfterElement(container, e.pageY);
        console.log(afterElement)
        console.log('dragover');
        const draggable = document.querySelector('.dragging')
        if (afterElement === null) {
            container.appendChild(draggable);
        } else {
            container.insertBefore(draggable, afterElement);
        }
    })
})

const getDragAfterElement = (container, y) => {
    const draggbleElements = [...container.querySelectorAll('.draggable:not(.dragging)')]

    return draggbleElements.reduce((closest, child) => {
        const box = child.getBoundingClientRect();
        // console.log(box)
        const offset = y - box.top - box.height / 2
        console.log(offset)
        if (offset < 0 && offset > closest.offset) {
            return {
                offset: offset,
                element: child
            }
        } else {
            return closest
        }
    }, { offset: Number.NEGATIVE_INFINITY }).element
}