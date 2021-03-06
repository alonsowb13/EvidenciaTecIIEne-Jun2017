const addItems = document.querySelector('.add-items');
    const itemsList = document.querySelector('.plates');
    const items = JSON.parse(localStorage.getItem('items'))||[];

    const checkall = document.querySelector('#checkall');
    const uncheckall = document.querySelector('#uncheckall');
    
    console.log(items);
    function addItem(e){
        e.preventDefault();
        const text = (this.querySelector('[name=item]')).value;
        const item = {
          text,
            done:false
        };

        items.push(item);
        populateList(items,itemsList);
        localStorage.setItem('items',JSON.stringify(items));
        this.reset();
    }

    function populateList(plates = [],platesList){
        platesList.innerHTML = plates.map((plate,i)=>{
            return `
                <li>
                    <input type="checkbox" data-index=${i} id="item${i}" ${plate.done ? 'checked':''} />
                    <label for="item${i}">${plate.text} </label>
                </li>
                `;
        }).join('');
    }

    function toogleDone(e){
        if(!e.target.matches('input')) return;
        const el = e.target;
        const index = el.dataset.index;
        items[index].done = !items[index].done;
        localStorage.setItem('items',JSON.stringify(items));
        populateList(items,itemsList);
    }
    

    function checkeditems(e){
        items.forEach(item=>{
            item.done=true;
        })
        console.dir(checkall);
        populateList(items,itemsList);
    }
    function uncheckeditems(e){
        items.forEach(item=>{
            item.done=false;
        })
        populateList(items,itemsList);
    }


    populateList(items,itemsList);
    addItems.addEventListener('submit',addItem);
    itemsList.addEventListener('click',toogleDone);


    checkall.addEventListener('click',checkeditems);
    uncheckall.addEventListener('click',uncheckeditems);