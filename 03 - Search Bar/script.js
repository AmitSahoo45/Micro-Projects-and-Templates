const searchFun = () => {
    let filter = document.getElementById('myInput').value.toUpperCase();

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