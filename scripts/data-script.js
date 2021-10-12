const fetchData = fetch('https://indonesia-covid-19.mathdro.id/api/provinsi', {method: 'get'});

async function getData(){
    const resolve = await fetchData;
    const response = await resolve.json();

    var arr = response.data;

    arr = arr.splice(0, arr.length-1)

    arr.forEach((element, idx) => {
        console.log(element)

        const mainTag = document.getElementsByTagName('main')[0];

        let container = document.createElement('div');
        container.setAttribute('class', 'main-container');
        container.setAttribute('id', element.provinsi);
        mainTag.appendChild(container);

        let getContainer = document.querySelectorAll('main .main-container')[idx];

        let header = document.createElement('h2');
        header.setAttribute('class', 'provinsi');
        header.innerHTML = element.provinsi;
        getContainer.appendChild(header);

        let line = document.createElement('hr');
        line.setAttribute('class', 'main-line');
        getContainer.appendChild(line);

        let containerDetails = document.createElement('div');
        containerDetails.setAttribute('class', 'container-details');
        getContainer.appendChild(containerDetails);

        let getContainerDetails = document.querySelectorAll('main .main-container .container-details')[idx];

        let listContainer = document.createElement('ul');
        listContainer.setAttribute('class', 'list-container');
        getContainerDetails.appendChild(listContainer);

        const getListContainer = document.querySelectorAll('main .main-container .container-details .list-container')[idx];
    

        for(index = idx*3; index < (idx*3) + 3; index++){

            let list = document.createElement('li');
            list.setAttribute('class', 'list');
            getListContainer.appendChild(list);

            let getList = document.querySelectorAll('main .main-container .container-details .list-container .list')[index];

            let sp = document.createElement('span');
            sp.setAttribute('class', 'inner-list');
            getList.appendChild(sp);

        }

        
        for(index = (idx * 3); index < (idx * 3 + 1); index++){
        
            let getSpan = document.querySelectorAll('main .main-container .container-details .list-container .list .inner-list');

            let getPositive = element.kasusPosi;
            let getRecovered = element.kasusSemb;
            let getDeath = element.kasusMeni;

            var pos = getSpan[index].innerHTML = ` <span>Positive</span> <br> ${getPositive}`;
            var rec = getSpan[index+1].innerHTML = `<span>Recovered</span> <br> ${getRecovered}`;
            var death = getSpan[index+2].innerHTML = `<span>Death</span> <br> ${getDeath}`;

        }

       

    });

}

getData();

let searchId = document.getElementById('search-pill');

searchId.addEventListener("keyup", (event) => {
    if (event.key === "Enter") {
        var val = searchId.value.toLowerCase();
        
        let container = document.querySelectorAll('main .main-container');

        container.forEach((element, idx) => {
            if(element.id.toLowerCase().includes(val)){
                document.getElementById(element.id).scrollIntoView();
                val =  undefined;
            }
        })

        searchId.value = '';
    }
})
