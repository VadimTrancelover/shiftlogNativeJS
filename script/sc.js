"use strict"; 

//добавляем контент блоков меню в массив
const menuBlocks =  [];
const menuBlock1 = document.querySelector('.content-rightside_block1');
const menuBlock2 = document.querySelector('.content-rightside_block2');
menuBlocks.push(menuBlock1, menuBlock2);

//добавляем кнопки блоков меню в массив
const menuButtons = [];
const buttonReport = document.querySelector('.reports');
const buttonStatistic = document.querySelector('.statisctic');

menuButtons.push(buttonStatistic, buttonReport);

//переключаем пункты меню

function activeMenuItem() {
    menuButtons.forEach((button, indexButt) => 
        button.onclick = function() {
            if (button.classList.contains('active')) {
            } else {
                menuButtons.forEach(button => 
                    button.classList.remove('active'));
                menuBlocks.forEach(block =>
                    block.classList.add('unactive_block')
                        )
                }
                button.classList.add('active');
                menuBlocks[indexButt].classList.remove('unactive_block');                
            }
    );
}

activeMenuItem();


// открытие и закрытие модального окна

const modalWindow = document.getElementById('modal_window_new-record');
const openModalBt = document.querySelector('.new-record');
const closeModalBt = document.querySelector('.close_modal');
const body = document.querySelector('body');

function hideModal () {
    modalWindow.style.display = 'none';
    body.style.overflow = 'visible';
}

closeModalBt.onclick = function() {
   hideModal()
}

openModalBt.onclick = function() {
    modalWindow.style.display = 'block';
    body.style.overflow = 'hidden';
}

window.onclick = function(event) {
    if (event.target == modalWindow){
        hideModal()
    } 
}


function getNamesfromCheckbox () {
    const checkboxes = document.querySelectorAll('ul input');
    const countChecked = () => Object.values(checkboxes).filter(el => el.checked);

    let objectChecked = countChecked();
    let nameChecked = objectChecked;

    nameChecked.map((elem) => {
        const arrCheck = elem.getAttribute('name')
        return arrCheck;

});
}


// Добавление новых записей // 
// 1.1 получение данных из textarea

const btSentReport = document.querySelector('.sent-report');
const btAddReport = document.querySelector('.add-report');
const blockReports = document.querySelector('.content-rightside_block1');
const aboutProblem = document.querySelector('.about_problem');
const repairProblem = document.querySelector('.repair_problem');
const recomendation = document.querySelector('.recomendation');


    aboutProblem.addEventListener('input', inputAbout);
    repairProblem.addEventListener('input', inputRepair);
    recomendation.addEventListener('input', inputRecomendation);

    function inputAbout() {
        const textAbout = aboutProblem.value;
        return textAbout;
    }

    function inputRepair() {
        const textProblem = repairProblem.value;
        return textProblem;
   
    }
    function inputRecomendation() {
        const textRecomendation = recomendation.value;
        return textRecomendation;

    }

    const elemLink = document.querySelectorAll('a');
    
    elemLink.onclick = function(event) {
        if (event.target.nodeName != 'A') return;
        event.target.getAttribute('href');
        return false; // отменить действие браузера (переход по ссылке)
      };




        const newElem = document.createElement('div');


        //Добавление даты
        function createDate() {
            const newDateReport = document.createElement('p');
            const newElemDate = document.createElement('div');
            let date = new Date;
            let day = date.getDate();
            let month = date.getMonth();
            let year = date.getFullYear();
            switch (month)
                {
                case 0: month="января"; break;
                case 1: month="февраля"; break;
                case 2: month="марта"; break;
                case 3: month="апреля"; break;
                case 4: month="мае"; break;
                case 5: month="июня"; break;
                case 6: month="июля"; break;
                case 7: month="августа"; break;
                case 8: month="сентября"; break;
                case 9: month="октября"; break;
                case 10: month="ноября"; break;
                case 11: month="декабря"; break;
                };

            let fullDate = `${day} ${month} ${year} года`;
            newDateReport.innerText = fullDate;
            newElemDate.append(newDateReport);
            newElemDate.className = 'faults-log_date';
            newElem.append(newElemDate);
            newElem.className = "content-rightside_block1_faults-log";
            blockReports.append(newElem);
        }
            


        // Проверка чекбоксов и вывод в элемент

        function checkboxCheck() {
            const checkboxes = document.querySelectorAll('ul input');
            const newTextEquipment = document.createElement('p');
            const newElemEquipment = document.createElement('div');
            const dropDawnName = document.querySelector('.active_dropdawn');
            const countChecked = () => Object.values(checkboxes).filter(el => el.checked);
            let nameChecked = countChecked();
    
            const arrCheck = nameChecked.map((elem) => {
            return elem.getAttribute('name')
            });

            newTextEquipment.innerText = arrCheck;
            newElemEquipment.append(newTextEquipment);
            newElemEquipment.className = 'faults-log_equipment';
            newElem.append(newElemEquipment);
            newElem.className = "content-rightside_block1_faults-log";
            blockReports.append(newElem);
        }

        //Описание ошибки или поломки
        function createDescription() {
            const textAbout = inputAbout();
            const newTextAbout = document.createElement('p');
            const newElemDescription = document.createElement('div');
            newTextAbout.innerText = textAbout;
            newElemDescription.append(newTextAbout);
            newElemDescription.className = "faults-log_description-fault";
            newElem.append(newElemDescription);
            newElem.className = "content-rightside_block1_faults-log";
            blockReports.append(newElem);
        }



        //Описание испраления или ремонта
        function createRepair() {
            const textRepair = inputRepair();
            const newTextRepair = document.createElement('p');
            const newElemtrobleshooting = document.createElement('div');
            newTextRepair.innerText = textRepair;
            newElemtrobleshooting.append(newTextRepair);
            newElemtrobleshooting.className = "faults-log_trobleshooting";
            newElem.append(newElemtrobleshooting);
            newElem.className = "content-rightside_block1_faults-log";
            blockReports.append(newElem);
        }
        

        //Описание рекомендаций
        function createRecomendation() {
            const textRecomendation = inputRecomendation();
            const newTextRecomendation = document.createElement('p');
            const newElemRecomendation = document.createElement('div');
            newTextRecomendation.innerText = textRecomendation;
            newElemRecomendation.append(newTextRecomendation);
            newElemRecomendation.className = "faults-log_recommendations";
            newElem.append(newElemRecomendation);
            newElem.className = "content-rightside_block1_faults-log";
            blockReports.append(newElem);
        }
        


        function handleButtonClick() {
            newElem.scrollIntoView({ block: "center", behavior: "smooth" });
          }

        function hideChechedAndtextArea() {
            aboutProblem.value = '',
            repairProblem.value = '',
            recomendation.value = '',
            nameChecked.map(checkbox => {
            checkbox.type =='checkbox' ?  checkbox.checked = false : checkbox.checked = none;
        })
        }

        function newElemReport() {
            createDate();
            checkboxCheck();
            createDescription();
            createRepair();
            createRecomendation();
            hideChechedAndtextArea();
            handleButtonClick();
            console.log(checkboxCheck);

            const newArr = [];
            newArr.push(newElem);
            return newArr;     
        }

    hideModal();

    btSentReport.addEventListener('click', newElemReport, hideModal);

    btAddReport.addEventListener('click', function() {
        const newnewArr = [];
        newnewArr.push(...newElemReport());
        console.log(newnewArr);

    })









