const goods = {
    "1": {
        name: 'Пипица',
        composition: {
            cheese: 1,
            meat: 2,
            tomato: 4,
        },
        cal: 1000,
        cost: 130,
        img: `https://friendlystock.com/wp-content/uploads/2019/12/8-sliced-pizza-cartoon-clipart.jpg`,
    },
    "2": {
        name: 'Хабара',
        composition: {
            cheese: 1,
            meat: 2,
            tomato: 0,
        },
        cal: 1100,
        cost: 110,
        img: `https://friendlystock.com/wp-content/uploads/2019/12/8-sliced-pizza-cartoon-clipart.jpg`,
    },
    "3": {
        name: 'Мимозыря',
        composition: {
            cheese: 1,
            meat: 2,
            tomato: 0,
        },
        cal: 1000,
        cost: 110,
        img: `https://friendlystock.com/wp-content/uploads/2019/12/8-sliced-pizza-cartoon-clipart.jpg`,
    },
    "4": {
        name: 'Хухря',
        composition: {
            cheese: 0,
            meat: 0,
            tomato: 0,
        },
        cal: 1000,
        cost: 69.5,
        img: `https://friendlystock.com/wp-content/uploads/2019/12/8-sliced-pizza-cartoon-clipart.jpg`,
    },
    "5": {
        name: 'Ендовочник',
        composition: {
            cheese: 1,
            meat: 0,
            tomato: 4,
        },
        cal: 1000,
        cost: 290,
        img: `https://friendlystock.com/wp-content/uploads/2019/12/8-sliced-pizza-cartoon-clipart.jpg`,
    },
    "6": {
        name: 'Яга',
        composition: {
            cheese: 1,
            meat: 2,
            tomato: 4,
        },
        cal: 1000,
        cost: 99,
        img: `https://friendlystock.com/wp-content/uploads/2019/12/8-sliced-pizza-cartoon-clipart.jpg`,
    },
    "7": {
        name: 'Потиральце',
        composition: {
            cheese: 1,
            meat: 0,
            tomato: 0,
        },
        cal: 1100,
        cost: 570,
        img: `https://friendlystock.com/wp-content/uploads/2019/12/8-sliced-pizza-cartoon-clipart.jpg`,
    },
    "8": {
        name: 'Анчутка',
        composition: {
            cheese: 0,
            meat: 0,
            tomato: 4,
        },
        cal: 1000,
        cost: 230,
        img: `https://friendlystock.com/wp-content/uploads/2019/12/8-sliced-pizza-cartoon-clipart.jpg`,
    },
    "9": {
        name: 'Козлодер',
        composition: {
            cheese: 0,
            meat: 2,
            tomato: 0,
        },
        cal: 1000,
        cost: 110,
        img: `https://friendlystock.com/wp-content/uploads/2019/12/8-sliced-pizza-cartoon-clipart.jpg`,
    },
    "10": {
        name: 'Пердимонокль',
        composition: {
            cheese: 1,
            meat: 2,
            tomato: 0,
        },
        cal: 1000,
        cost: 310,
        img: `https://friendlystock.com/wp-content/uploads/2019/12/8-sliced-pizza-cartoon-clipart.jpg`,
    },
    "11": {
        name: 'Курвиметр',
        composition: {
            cheese: 1,
            meat: 0,
            tomato: 4,
        },
        cal: 1000,
        cost: 110,
        img: `https://friendlystock.com/wp-content/uploads/2019/12/8-sliced-pizza-cartoon-clipart.jpg`,
    },
    "12": {
        name: 'Брандахлыст',
        composition: {
            cheese: 1,
            meat: 2,
            tomato: 4,
        },
        cal: 1000,
        cost: 100,
        img: `https://friendlystock.com/wp-content/uploads/2019/12/8-sliced-pizza-cartoon-clipart.jpg`,
    },
    "13": {
        name: 'Балясина',
        composition: {
            cheese: 1,
            meat: 2,
            tomato: 0,
        },
        cal: 1100,
        cost: 110,
        img: `https://friendlystock.com/wp-content/uploads/2019/12/8-sliced-pizza-cartoon-clipart.jpg`,
    },
    "14": {
        name: 'Пендельтюр',
        composition: {
            cheese: 0,
            meat: 2,
            tomato: 4,
        },
        cal: 1000,
        cost: 110,
        img: `https://friendlystock.com/wp-content/uploads/2019/12/8-sliced-pizza-cartoon-clipart.jpg`,
    },
    "15": {
        name: 'Пимпочка',
        composition: {
            cheese: 1,
            meat: 0,
            tomato: 4,
        },
        cal: 1000,
        cost: 110,
        img: `https://friendlystock.com/wp-content/uploads/2019/12/8-sliced-pizza-cartoon-clipart.jpg`,
    },
    "16": {
        name: 'Вувузела',
        composition: {
            cheese: 0,
            meat: 0,
            tomato: 0,
        },
        cal: 1000,
        cost: 110,
        img: `https://friendlystock.com/wp-content/uploads/2019/12/8-sliced-pizza-cartoon-clipart.jpg`,
    }
};
let listDraw = 0;
function createCards() {
    function up() {
        setTimeout(function () {
            switchB = 0;
            test.style.top= `${0}px`;
            test.style.opacity= `${0}`;
        },333)
    }
    up();
    let container = document.createElement('div');
    container.classList.add("container");
    let radioWrapper = document.createElement('div');
    radioWrapper.classList.add("radio_wrap");
    let form = document.createElement('form');
    for (let i = 0; i < 3; i++) {
        let input = document.createElement('input');
        let arr = ['cheese', 'meat', 'tomato'];
        input.type = "checkbox";
        input.name = arr[i];
        input.title = arr[i];
        input.classList.add(`${arr[i]}${i + 1}`);
        form.append(input);
    }
    let button = document.createElement('button');
    button.id = "btn";
    button.value = "Выбрать";
    button.innerText = "Выбрать";
    container.append(radioWrapper);
    radioWrapper.prepend(button);
    radioWrapper.append(form);
    globalContainer.append(container);

    function drow() {
        let wrapper = document.createElement('div');
        wrapper.classList.add("goods_wrapper");
        container.append(wrapper);
        let ul = document.createElement('ul');
        for (let list in goods) {
            let item = document.createElement('div');
            item.classList.add("goods_wrapper_item");
            let iMg = document.createElement('img');
            iMg.classList.add("img_pizza");
            iMg.src = goods[list].img;
            let ul = document.createElement('ul');
            let ulElem = document.createElement('ul');
            for (let text in goods[list]) {
                let li = document.createElement('li');
                if (text !== 'img') {
                    if (typeof goods[list][text] !== 'object') {
                        li.innerText = `${text}: ${goods[list][text]}`;
                        ul.append(li);
                    } else {
                        let a = `${text}:`;
                        for (let elements2 in goods[list][text]) {
                            let liElem = document.createElement('li');
                            liElem.innerText = `${elements2}: ${goods[list][text][elements2]}`;
                            ulElem.append(liElem);
                        }
                        li.append(a);
                        ul.append(li);
                        ul.append(ulElem);
                    }
                }
            }
            item.append(iMg);
            item.append(ul);
            wrapper.append(item);
        }
    }

    drow();
    let cheeseBox = document.querySelector('.cheese1');
    let meatBox = document.querySelector('.meat2');
    let tomatoBox = document.querySelector('.tomato3');
    document.getElementById('btn').onclick = function () {
        let i = 2;
        while (i % 2 !== 0) {
            location.reload();
            i += 1;
        }
        let items = document.querySelectorAll('.goods_wrapper_item');
        for (let boxes in goods) {
            let sum = 0;
            if (cheeseBox.checked && meatBox.checked) {// 1-2 = 3
                for (let k = 0; k < 3; k++) {
                    let arr = ['cheese', 'meat', 'tomato'];
                    sum += goods[boxes]['composition'][arr[k]];
                }
                if (sum !== 3) {
                    items[boxes - 1].classList.toggle('test');
                }
            } else if (cheeseBox.checked && tomatoBox.checked) {// 1-3 = 5
                for (let k = 0; k < 3; k++) {
                    let arr = ['cheese', 'meat', 'tomato'];
                    sum += goods[boxes]['composition'][arr[k]];
                }
                if (sum !== 5) {
                    items[boxes - 1].classList.toggle('test');
                }
            } else if (meatBox.checked && tomatoBox.checked) {// 2-3 = 6
                for (let k = 0; k < 3; k++) {
                    let arr = ['cheese', 'meat', 'tomato'];
                    sum += goods[boxes]['composition'][arr[k]];
                }
                if (sum > 6 || sum !== 6) {
                    items[boxes - 1].classList.toggle('test');
                }
            } else if (cheeseBox.checked && meatBox.checked && tomatoBox.checked) { //1-2-3 =7
                for (let k = 0; k < 3; k++) {
                    let arr = ['cheese', 'meat', 'tomato'];
                    sum += goods[boxes]['composition'][arr[k]];
                }
                if (false) {
                    items[boxes - 1].classList.toggle('test');
                }
            } else if (!cheeseBox.checked && !meatBox.checked && !tomatoBox.checked) {// 0 = 0
                for (let k = 0; k < 3; k++) {
                    let arr = ['cheese', 'meat', 'tomato'];
                    sum += goods[boxes]['composition'][arr[k]];
                }
                if (true) {
                    items[boxes - 1].classList.toggle('test');
                }
            } else if (cheeseBox.checked && !meatBox.checked && !tomatoBox.checked) { //1 = 1
                for (let k = 0; k < 3; k++) {
                    let arr = ['cheese', 'meat', 'tomato'];
                    sum += goods[boxes]['composition'][arr[k]];
                }
                if (sum !== 1) {
                    items[boxes - 1].classList.toggle('test');
                }
            } else if (!cheeseBox.checked && meatBox.checked && !tomatoBox.checked) { //2 = 2
                for (let k = 0; k < 3; k++) {
                    let arr = ['cheese', 'meat', 'tomato'];
                    sum += goods[boxes]['composition'][arr[k]];
                }
                if (sum !== 2) {
                    items[boxes - 1].classList.toggle('test');
                }
            } else if (!cheeseBox.checked && !meatBox.checked && tomatoBox.checked) { //3 = 4
                for (let k = 0; k < 3; k++) {
                    let arr = ['cheese', 'meat', 'tomato'];
                    sum += goods[boxes]['composition'][arr[k]];
                }
                if (sum !== 4) {
                    items[boxes - 1].classList.toggle('test');
                }
            }
        }
    };
}

function listCards() {
    function up() {
        setTimeout(function () {
            switchB = 0;
            test.style.top= `${0}px`;
            test.style.opacity= `${0}`;
        },333)
    }
    up();
    if (listDraw > 0){
        container.innerHTML = '';
    }

    let arr = [];

    function creatArr() {
        for (let i = 1; i <= 16; i++) {
            arr.push([goods[i].name, goods[i].cost]);
        }
    }

    creatArr();

    let container = document.createElement('div');
    container.classList.add('container2');
    function startList() {


        if (listDraw === 0) {


            let btnWrapper = document.createElement('div');
            btnWrapper.classList.add('btnWrapper');


            let btnName = document.createElement('div');
            btnName.classList.add('name');
            btnName.innerText = 'Название';
            btnWrapper.append(btnName);


            let btnPrice = document.createElement('div');
            btnPrice.classList.add('price');
            btnPrice.innerText = 'Цена';
            btnWrapper.append(btnPrice);

            globalContainer.append(btnWrapper);
            draw();
        }
        listDraw+=1;


    }

    startList();


    function creatPizza(i) {
        let line = document.createElement('div');
        line.classList.add('line');
        let img = document.createElement('img');
        img.src = 'img/pz.png';
        img.alt = 'pizza';
        line.append(img);

        let nameOf = document.createElement('span');
        nameOf.classList.add('span');

        nameOf.innerHTML = `${arr[i][0]}:`;
        line.append(nameOf);

        let price = document.createElement('span');
        price.classList.add('span');

        price.innerHTML = `${arr[i][1]} grn`;
        line.append(price);

        container.append(line);

    }


    function draw() {
        for (let i = 0; i < 16; i++) {
            creatPizza(i);
        }
    }

    globalContainer.append(container);


    document.querySelector('.name').onclick = sortArrName;
    document.querySelector('.price').onclick = sortArrPrice;

    let i1 = 0;
    let i2 = 0;

    function sortArrName() {

        container.innerHTML = '';


        if (i1 === 0) {
            arr.sort(function (a, b) {
                b = b[0];
                a = a[0];

                return a > b ? 1 : -1;
            });
            i1 += 1;
            draw();
        } else {
            arr.sort(function (a, b) {
                b = b[0];
                a = a[0];

                return a < b ? 1 : -1;
            });
            i1 -= 1;
            draw();
        }

    }

    function sortArrPrice() {
        container.innerHTML = '';

        if (i2 === 0) {
            arr.sort(function (a, b) {
                b = b[1];
                a = a[1];

                return a > b ? 1 : -1;
            });
            i2 += 1;
            draw();
        } else {
            arr.sort(function (a, b) {
                b = b[1];
                a = a[1];

                return a < b ? 1 : -1;
            });
            i2 -= 1;
            draw();
        }
    }


}



