const tableBody = document.getElementById('tablebody')
const searchBox = document.getElementById('myInput')

// searchBox.addEventListener('change', (e) => {
//     if (e.target.value == 0)
// })

const searchFun = () => {
    let filter = searchBox.value.toUpperCase();
    // console.log(searchBox.value)
    if (searchBox.value == "")
        tableBody.style.display = "none";
    else
        tableBody.style.display = "table-row-group";

    const myTable = document.getElementById('myTable');
    let tr = myTable.getElementsByTagName('tr')

    for (let i = 0; i < tr.length; i++) {
        let td = tr[i].getElementsByTagName('td')[0];

        if (td) {
            let txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1)
                tr[i].style.display = "";
            else
                tr[i].style.display = "none";
        }
    }
}