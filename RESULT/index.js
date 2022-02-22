// -------------------------------------------------------------common function---------------------------------------------------

function succerror(elem, checkElement) {
    if (checkElement) {
        elem.style.backgroundColor = "#ED7777";
        elem.style.color = "white";
        elem.style.border = "1px solid #ED7777";
    } else {
        elem.style.backgroundColor = "#48B736";
        elem.style.color = "white";
        elem.style.border = "1px solid #48B736";
    }
}

// добавляем иконку статуса после номера вопроса

function addImage(status, ancestor, appClass, position) {
    let object = document.createElement("img");
    object.style.marginLeft = "10px";

    if (status === "success") {
        object.src = "./pictures/successIcon.svg";
        document.getElementsByClassName(appClass)[0].style.border =
            "1px solid #9DD765";
        document.getElementsByClassName(
            "lineUnderHeading" + position
        )[0].style.borderBottom = "1px solid #9DD765";
    } else {
        object.src = "./pictures/failureIcon.svg";
        document.getElementsByClassName(appClass)[0].style.border =
            "1px solid #FFB47D";
        document.getElementsByClassName(
            "lineUnderHeading" + position
        )[0].style.borderBottom = "1px solid #FFB47D";
    }

    ancestor[0].children[0].appendChild(object);
}

// добавляем крестик или галочку над областью результата

function addMiniIcon(elem, status) {
    // создаём мини-иконку
    let objDiv = document.createElement("div");

    // получаем ширину элемента, чтобы выровнять по горизонтали
    let widthAdjacentElement = elem.getBoundingClientRect().width;

    // получаем отступы элемента, для того же

    let rightIndent = window
        .getComputedStyle(elem, null)
        .getPropertyValue("margin-right");

    objDiv.className = "statusMiniIcon";

    objDiv.style.width = widthAdjacentElement;
    objDiv.style.position = "absolute";

    if (
        elem.parentElement.parentElement.parentElement.className === "content1"
    ) {
        objDiv.style.top = "40px";
    }

    if (elem.parentElement.parentElement.className === "content2") {
        objDiv.style.marginTop = "-25px";
        objDiv.style.marginLeft =
            elem.offsetLeft + widthAdjacentElement / 2 - 7 + "px";
    } else if (
        elem.parentElement.parentElement.parentElement.className === "content6"
    ) {
        objDiv.style.marginTop = "-25px";
        objDiv.style.marginLeft =
            elem.offsetLeft + widthAdjacentElement / 2 - 7 + "px";
    } else {
        objDiv.style.marginTop = "-63px";
        objDiv.style.marginLeft =
            elem.offsetLeft + widthAdjacentElement / 2 - 7 + "px";
    }

    if (
        elem.parentElement.parentElement.parentElement.className === "content5"
    ) {
        objDiv.style.marginTop = "-25px";
        objDiv.style.marginLeft =
            elem.offsetLeft + widthAdjacentElement / 2 - 7 + "px";
    }

    if (
        elem.parentElement.parentElement.parentElement.className === "content10"
    ) {
        objDiv.style.marginTop = "-25px";
    }

    if (elem.parentElement.parentElement.className === "content15") {
        objDiv.style.marginTop = "-25px";
    }

    if (elem.parentElement.className === "content13") {
        objDiv.style.marginTop = "-85px";
    }

    if (elem.parentElement.parentElement.className === "fourthRow11") {
        objDiv.style.marginTop = "-20px";
        objDiv.style.marginLeft =
            elem.offsetLeft + widthAdjacentElement / 2 - 7 + "px";
    } else if (
        elem.parentElement.parentElement.parentElement.className === "content11"
    ) {
        objDiv.style.marginTop = "-20px";
        objDiv.style.marginLeft =
            elem.offsetLeft + widthAdjacentElement / 2 - 5 + "px";
    }

    if (elem.parentElement.parentElement.className === "fourthRow12") {
        objDiv.style.marginTop = "-20px";
        objDiv.style.marginLeft =
            elem.offsetLeft + widthAdjacentElement / 2 - 7 + "px";
    }

    if (elem.parentElement.parentElement.className === "content14") {
        objDiv.style.marginTop = "-55px";
    }

    if (elem.parentElement.parentElement.className === "content17") {
        objDiv.style.marginTop = "-25px";
    }

    if (
        elem.parentElement.parentElement.parentElement.parentElement
            .parentElement.className === "content9"
    ) {
        objDiv.style.marginTop = "-20px";
        objDiv.style.marginLeft =
            elem.offsetLeft + widthAdjacentElement / 2 - 5 + "px";
    }

    if (elem.parentElement.parentElement.className === "content16") {
        objDiv.style.marginTop = "-50px";
    }

    if (
        elem.parentElement.parentElement.parentElement.className === "content18"
    ) {
        objDiv.style.marginTop = "-17px";
    }

    if (elem.parentElement.parentElement.className === "content19") {
        objDiv.style.marginTop = "-43px";
    }

    if (
        elem.parentElement.parentElement.className === "content20" ||
        elem.parentElement.parentElement.className === "content21"
    ) {
        objDiv.style.marginTop = "-55px";
        objDiv.style.marginLeft =
            elem.offsetLeft + widthAdjacentElement / 2 - 67 + "px";
    }

    if (
        elem.parentElement.parentElement.parentElement.className === "content8"
    ) {
        objDiv.style.marginTop = "-23px";
        objDiv.style.marginLeft =
            elem.offsetLeft + widthAdjacentElement / 2 - 27 + "px";
    }

    if (elem.parentElement.className === "content22") {
        objDiv.style.marginTop = "-55px";
        objDiv.style.marginLeft =
            elem.offsetLeft + widthAdjacentElement / 2 - 7 + "px";
    }

    objDiv.style.marginRight = rightIndent;
    objDiv.style.paddingBottom = "10px";
    objDiv.style.display = "flex";
    objDiv.style.justifyContent = "center";
    objDiv.style.alignItems = "center";

    let obj = document.createElement("img");

    if (status === "success") {
        obj.src = "./pictures/successMiniIcon.svg";
    } else {
        obj.src = "./pictures/failureMiniIcon.svg";
    }

    objDiv.appendChild(obj);

    // устанавливаем её в нужное место
    elem.parentElement.insertBefore(objDiv, elem);
}

// делаем появление мини-иконок над областью проверки

function createMiniIcon(property, element) {
    if (property === "right") {
        addMiniIcon(element, "success");
    } else {
        addMiniIcon(element, "failure");
    }
}

function gettingDataFromFields(
    countId,
    correctNumbers,
    numberQuestion,
    number
) {
    for (let i = 0; i < countId; i++) {
        if (i === 0) {
            document.getElementById("firstNumber" + numberQuestion).onchange =
                function (e) {
                    if (e.target.value == correctNumbers[i]) {
                        number.firstNumber = "right";
                    } else {
                        number.firstNumber = "wrong";
                    }
                };
        }

        if (i === 1) {
            document.getElementById("secondNumber" + numberQuestion).onchange =
                function (e) {
                    if (e.target.value == correctNumbers[i]) {
                        number.secondNumber = "right";
                    } else {
                        number.secondNumber = "wrong";
                    }
                };
        }

        if (i === 2) {
            document.getElementById("thirdNumber" + numberQuestion).onchange =
                function (e) {
                    if (e.target.value == correctNumbers[i]) {
                        number.thirdNumber = "right";
                    } else {
                        number.thirdNumber = "wrong";
                    }
                };
        }

        if (i === 3) {
            document.getElementById("fourthNumber" + numberQuestion).onchange =
                function (e) {
                    if (e.target.value == correctNumbers[i]) {
                        number.fourthNumber = "right";
                    } else {
                        number.fourthNumber = "wrong";
                    }
                };
        }

        if (i === 4) {
            document.getElementById("fifthNumber" + numberQuestion).onchange =
                function (e) {
                    if (e.target.value == correctNumbers[i]) {
                        number.fifthNumber = "right";
                    } else {
                        number.fifthNumber = "wrong";
                    }
                };
        }

        if (i === 5) {
            document.getElementById("sixthNumber" + numberQuestion).onchange =
                function (e) {
                    if (e.target.value == correctNumbers[i]) {
                        number.sixthNumber = "right";
                    } else {
                        number.sixthNumber = "wrong";
                    }
                };
        }

        if (i === 6) {
            document.getElementById("seventhNumber" + numberQuestion).onchange =
                function (e) {
                    if (e.target.value == correctNumbers[i]) {
                        number.seventhNumber = "right";
                    } else {
                        number.seventhNumber = "wrong";
                    }
                };
        }

        if (i === 7) {
            document.getElementById("eighthNumber" + numberQuestion).onchange =
                function (e) {
                    if (e.target.value == correctNumbers[i]) {
                        number.eighthNumber = "right";
                    } else {
                        number.eighthNumber = "wrong";
                    }
                };
        }
    }
}

function succerrorAndCreateMiniIcon(countId, numberQuestion, number) {
    for (let i = 0; i < countId; i++) {
        if (i === 0) {
            succerror(
                document.getElementById("firstNumber" + numberQuestion),
                number.firstNumber === "wrong"
            );

            createMiniIcon(
                number.firstNumber,
                document.getElementById("firstNumber" + numberQuestion)
            );
        }

        if (i === 1) {
            succerror(
                document.getElementById("secondNumber" + numberQuestion),
                number.secondNumber === "wrong"
            );

            createMiniIcon(
                number.secondNumber,
                document.getElementById("secondNumber" + numberQuestion)
            );
        }

        if (i === 2) {
            succerror(
                document.getElementById("thirdNumber" + numberQuestion),
                number.thirdNumber === "wrong"
            );

            createMiniIcon(
                number.thirdNumber,
                document.getElementById("thirdNumber" + numberQuestion)
            );
        }

        if (i === 3) {
            succerror(
                document.getElementById("fourthNumber" + numberQuestion),
                number.fourthNumber === "wrong"
            );

            createMiniIcon(
                number.fourthNumber,
                document.getElementById("fourthNumber" + numberQuestion)
            );
        }

        if (i === 4) {
            succerror(
                document.getElementById("fifthNumber" + numberQuestion),
                number.fifthNumber === "wrong"
            );

            createMiniIcon(
                number.fifthNumber,
                document.getElementById("fifthNumber" + numberQuestion)
            );
        }

        if (i === 5) {
            succerror(
                document.getElementById("sixthNumber" + numberQuestion),
                number.sixthNumber === "wrong"
            );

            createMiniIcon(
                number.sixthNumber,
                document.getElementById("sixthNumber" + numberQuestion)
            );
        }

        if (i === 6) {
            succerror(
                document.getElementById("seventhNumber" + numberQuestion),
                number.seventhNumber === "wrong"
            );

            createMiniIcon(
                number.seventhNumber,
                document.getElementById("seventhNumber" + numberQuestion)
            );
        }

        if (i === 7) {
            succerror(
                document.getElementById("eighthNumber" + numberQuestion),
                number.eighthNumber === "wrong"
            );

            createMiniIcon(
                number.eighthNumber,
                document.getElementById("eighthNumber" + numberQuestion)
            );
        }
    }
}

function highlightUnselectedBlocks(countId, numberQuestion, number) {
    for (let i = 0; i < countId; i++) {
        if (i === 0) {
            if (number.firstNumber === "") {
                document.getElementById(
                    "firstNumber" + numberQuestion
                ).style.border = "2px solid #FFB47D";
            }
        }

        if (i === 1) {
            if (number.secondNumber === "") {
                document.getElementById(
                    "secondNumber" + numberQuestion
                ).style.border = "2px solid #FFB47D";
            }
        }

        if (i === 2) {
            if (number.thirdNumber === "") {
                document.getElementById(
                    "thirdNumber" + numberQuestion
                ).style.border = "2px solid #FFB47D";
            }
        }

        if (i === 3) {
            if (number.fourthNumber === "") {
                document.getElementById(
                    "fourthNumber" + numberQuestion
                ).style.border = "2px solid #FFB47D";
            }
        }

        if (i === 4) {
            if (number.fifthNumber === "") {
                document.getElementById(
                    "fifthNumber" + numberQuestion
                ).style.border = "2px solid #FFB47D";
            }
        }

        if (i === 5) {
            if (number.sixthNumber === "") {
                document.getElementById(
                    "sixthNumber" + numberQuestion
                ).style.border = "2px solid #FFB47D";
            }
        }

        if (i === 6) {
            if (number.seventhNumber === "") {
                document.getElementById(
                    "seventhNumber" + numberQuestion
                ).style.border = "2px solid #FFB47D";
            }
        }

        if (i === 7) {
            if (number.eighthNumber === "") {
                document.getElementById(
                    "eighthNumber" + numberQuestion
                ).style.border = "2px solid #FFB47D";
            }
        }
    }
}

function highlightingUnfillededBlocks(countId, numberQuestion) {
    let firstEmpty = document.getElementById("firstEmpty" + numberQuestion);
    let secondEmpty = document.getElementById("secondEmpty" + numberQuestion);
    let thirdEmpty = document.getElementById("thirdEmpty" + numberQuestion);
    let fourthEmpty = document.getElementById("fourthEmpty" + numberQuestion);
    let fifthEmpty = document.getElementById("fifthEmpty" + numberQuestion);
    let sixthEmpty = document.getElementById("sixthEmpty" + numberQuestion);
    let seventhEmpty = document.getElementById("seventhEmpty" + numberQuestion);
    let eighthEmpty = document.getElementById("eighthEmpty" + numberQuestion);

    for (let i = 0; i < countId; i++) {
        if (i === 0) {
            if (firstEmpty.textContent === "") {
                firstEmpty.style.border = "2px solid #FFB47D";
            }
        }

        if (i === 1) {
            if (secondEmpty.textContent === "") {
                secondEmpty.style.border = "2px solid #FFB47D";
            }
        }

        if (i === 2) {
            if (thirdEmpty.textContent === "") {
                thirdEmpty.style.border = "2px solid #FFB47D";
            }
        }

        if (i === 3) {
            if (fourthEmpty.textContent === "") {
                fourthEmpty.style.border = "2px solid #FFB47D";
            }
        }

        if (i === 4) {
            if (fifthEmpty.textContent === "") {
                fifthEmpty.style.border = "2px solid #FFB47D";
            }
        }

        if (i === 5) {
            if (sixthEmpty.textContent === "") {
                sixthEmpty.style.border = "2px solid #FFB47D";
            }
        }

        if (i === 6) {
            if (seventhEmpty.textContent === "") {
                seventhEmpty.style.border = "2px solid #FFB47D";
            }
        }

        if (i === 7) {
            if (eighthEmpty.textContent === "") {
                eighthEmpty.style.border = "2px solid #FFB47D";
            }
        }
    }
}

// ---------------------------------------------------------------------- button selection -------------------------------------------------------

function commonForSelectBtn(idBtn) {
    document.getElementById(idBtn).style.backgroundColor = "#369CB7";
    document.getElementById(idBtn).style.color = "white";
    document.getElementById(idBtn).style.border = "1px solid #369CB7";
}

function commonForNoselectedBtn(arrayBtnsId) {
    arrayBtnsId.map((el) => {
        document.getElementById(el).style.backgroundColor = "white";
        document.getElementById(el).style.color = "black";
        document.getElementById(el).style.border = "1px solid black";
    });
}

// ------------------------------------------------------------ ALL SELECT BTNS -------------------------------------------------------------

// 3 QUESTION

let selectBtn3 = "",
    nameSelectedBtn3 = "";

document.getElementById("firstBtn3").onclick = function () {
    selectBtn3 = "wrong";
    nameSelectedBtn3 = "firstBtn3";

    commonForSelectBtn("firstBtn3");
    commonForNoselectedBtn(["secondBtn3", "thirdBtn3"]);
};

document.getElementById("secondBtn3").onclick = function () {
    selectBtn3 = "right";
    nameSelectedBtn3 = "secondBtn3";

    commonForSelectBtn("secondBtn3");
    commonForNoselectedBtn(["firstBtn3", "thirdBtn3"]);
};

document.getElementById("thirdBtn3").onclick = function () {
    selectBtn3 = "wrong";
    nameSelectedBtn3 = "thirdBtn3";

    commonForSelectBtn("thirdBtn3");
    commonForNoselectedBtn(["firstBtn3", "secondBtn3"]);
};

// ------------------------------------------------------------ ALL DRAG AND DROP -------------------------------------------------------------

// common commands

function allowDrop(e) {
    e.preventDefault();
}

// 5 QUESTION

function drag5(e) {
    localStorage.setItem("idOrigin5question3grade", e.target.id);
}

function drop5(e) {
    // получаем id, позицию и класс текущего
    let idOrig = localStorage.getItem("idOrigin5question3grade");
    let idCurn = e.target.id;
    let classCurn = e.target.parentElement.className;
    let tempPositionOrig = idOrig.slice(-1);
    let positionOrig =
        tempPositionOrig > 2 ? tempPositionOrig - 3 : tempPositionOrig;

    // получаем объекты
    let orgnElement = document.getElementById(idOrig);
    let crntElement = document.getElementById(idCurn);

    // копируем переносимый объект в новый
    let copyObj = document.createElement("img");
    copyObj.src = "./pictures/5que/" + idOrig.slice(0, -1) + ".svg";
    copyObj.id = idOrig;
    copyObj.style.cursor = "grab";
    copyObj.style.marginTop = "10px";
    copyObj.style.marginLeft = "10px";

    // очищаем оригинал
    orgnElement.src = "";
    orgnElement.id = "";
    orgnElement.parentElement.style.cursor = "default";

    if (orgnElement.parentElement.id === "") {
        // вставляем переносимый объект в корзину
        crntElement.appendChild(copyObj);
    }

    // теперь делаем перенос обратно
    if (
        orgnElement.parentElement.id === "firstBasket5" ||
        orgnElement.parentElement.id === "secondBasket5" ||
        orgnElement.parentElement.id === "thirdBasket5"
    ) {
        let crnt =
            document.getElementsByClassName(classCurn)[0].children[positionOrig]
                .children[0];
        crnt.id = idOrig;
        crnt.src = "./pictures/5que/" + idOrig.slice(0, -1) + ".svg";
        crnt.style.cursor = "grab";

        orgnElement.remove();
    }
}

// 6 QUESTION

function drag6(e) {
    localStorage.setItem("idOrigin6question3grade", e.target.id);
}

function drop6(e) {
    // получаем имя и id взятого элемента
    let idOrig = localStorage.getItem("idOrigin6question3grade");
    let nameObjectOrig = idOrig.slice(0, -1);

    // получаем имя и id, на который кладём элемент
    let currentId = e.target.id;
    let nameObjectCurrent = currentId.slice(0, -1);

    // получаем объекты
    let orignalElement = document.getElementById(idOrig);
    let currentElement = document.getElementById(currentId);

    // меняем картинки местами
    currentElement.src = "./pictures/6que/" + nameObjectOrig + ".svg";
    orignalElement.src = "./pictures/6que/" + nameObjectCurrent + ".svg";

    // меняем id местами
    currentElement.id = idOrig;
    orignalElement.id = currentId;

    // меняем фон при определённом условии
    if (nameObjectCurrent === "emptyPlace") {
        currentElement.parentElement.style.backgroundColor = "white";
    }

    // меняем вид курсора
    currentElement.style.cursor = "grab";
    orignalElement.style.cursor = "default";
}

// 8 QUESTION

function drag8(e) {
    localStorage.setItem("idOrigin8question3grade", e.target.id);
}

function drop8(e) {
    // получаем id, позицию и класс текущего
    let idOrig = localStorage.getItem("idOrigin8question3grade");
    let idCurn = e.target.id;
    let classCurn = e.target.parentElement.className;
    let positionOrig = idOrig.slice(-1);

    // получаем объекты
    let orgnElement = document.getElementById(idOrig);
    let crntElement = document.getElementById(idCurn);

    // копируем переносимый объект в новый
    let copyObj = document.createElement("img");
    copyObj.src = "./pictures/8que/" + idOrig.slice(0, -1) + ".svg";
    copyObj.id = idOrig;
    copyObj.style.cursor = "grab";
    copyObj.style.marginTop = "10px";
    copyObj.style.marginLeft = "10px";

    // очищаем оригинал
    orgnElement.src = "";
    orgnElement.id = "";
    orgnElement.parentElement.style.cursor = "default";

    if (orgnElement.parentElement.id === "") {
        // вставляем переносимый объект в корзину
        crntElement.appendChild(copyObj);
    }

    // теперь делаем перенос обратно
    if (
        orgnElement.parentElement.id === "firstBasket8" ||
        orgnElement.parentElement.id === "secondBasket8"
    ) {
        let crnt =
            document.getElementsByClassName(classCurn)[0].children[positionOrig]
                .children[0];
        crnt.id = idOrig;
        crnt.src = "./pictures/8que/" + idOrig.slice(0, -1) + ".svg";
        crnt.style.cursor = "grab";

        orgnElement.remove();
    }
}

// 9 QUESTION

function drag9(e) {
    localStorage.setItem("idOrigin9question3grade", e.target.id);
}

function drop9(e) {
    // получаем имя и id взятого элемента
    let idOrig = localStorage.getItem("idOrigin9question3grade");
    let nameObjectOrig = idOrig.slice(0, -1);

    // получаем имя и id, на который кладём элемент
    let currentId = e.target.id;
    let nameObjectCurrent = currentId.slice(0, -1);

    // получаем объекты
    let orignalElement = document.getElementById(idOrig);
    let currentElement = document.getElementById(currentId);

    // меняем картинки местами
    currentElement.src = "./pictures/9que/" + nameObjectOrig + ".svg";
    orignalElement.src = "./pictures/9que/" + nameObjectCurrent + ".svg";

    // меняем id местами
    currentElement.id = idOrig;
    orignalElement.id = currentId;

    // меняем фон при определённом условии
    if (nameObjectCurrent === "emptyPlace") {
        currentElement.parentElement.style.backgroundColor = "white";
    }

    // меняем вид курсора
    currentElement.style.cursor = "grab";
    orignalElement.style.cursor = "default";
}

// 10 QUESTION

function drag10(e) {
    localStorage.setItem("idOrigin10question3grade", e.target.id);
}

function drop10(e) {
    // получаем имя и id взятого элемента
    let idOrig = localStorage.getItem("idOrigin10question3grade");
    let nameObjectOrig = idOrig.slice(0, -1);

    // получаем имя и id, на который кладём элемент
    let currentId = e.target.id;
    let nameObjectCurrent = currentId.slice(0, -1);

    // получаем объекты
    let orignalElement = document.getElementById(idOrig);
    let currentElement = document.getElementById(currentId);

    // меняем картинки местами
    currentElement.src = "./pictures/10que/" + nameObjectOrig + ".svg";
    orignalElement.src = "./pictures/10que/" + nameObjectCurrent + ".svg";

    // меняем id местами
    currentElement.id = idOrig;
    orignalElement.id = currentId;

    // меняем фон при определённом условии
    if (nameObjectCurrent === "emptyPlace") {
        currentElement.parentElement.style.backgroundColor = "white";
    }

    // меняем вид курсора
    currentElement.style.cursor = "grab";
    orignalElement.style.cursor = "default";
}

// 11 QUESTION

function drag11(e) {
    localStorage.setItem("idOrigin11question3grade", e.target.id);
}

function drop11(e) {
    // получаем имя и id взятого элемента
    let idOrig = localStorage.getItem("idOrigin11question3grade");
    let nameObjectOrig = idOrig.slice(0, -1);

    // получаем имя и id, на который кладём элемент
    let currentId = e.target.id;
    let nameObjectCurrent = currentId.slice(0, -1);

    // получаем объекты
    let orignalElement = document.getElementById(idOrig);
    let currentElement = document.getElementById(currentId);

    // меняем картинки местами
    currentElement.src = "./pictures/11que/" + nameObjectOrig + ".svg";
    orignalElement.src = "./pictures/11que/" + nameObjectCurrent + ".svg";

    // меняем id местами
    currentElement.id = idOrig;
    orignalElement.id = currentId;

    // меняем фон при определённом условии
    if (nameObjectCurrent === "emptyPlace") {
        currentElement.parentElement.style.backgroundColor = "white";
    }

    // меняем вид курсора
    currentElement.style.cursor = "grab";
    orignalElement.style.cursor = "default";
}

// 14 QUESTION

function drag14(e) {
    localStorage.setItem("idOrigin14question3grade", e.target.id);
}

function drop14(e) {
    // получаем имя и id взятого элемента
    let idOrig = localStorage.getItem("idOrigin14question3grade");
    let nameObjectOrig = idOrig.slice(0, -1);

    // получаем имя и id, на который кладём элемент
    let currentId = e.target.id;
    let nameObjectCurrent = currentId.slice(0, -1);

    // получаем объекты
    let orignalElement = document.getElementById(idOrig);
    let currentElement = document.getElementById(currentId);

    // меняем картинки местами
    currentElement.src = "./pictures/14que/" + nameObjectOrig + ".svg";
    orignalElement.src = "./pictures/14que/" + nameObjectCurrent + ".svg";

    // меняем id местами
    currentElement.id = idOrig;
    orignalElement.id = currentId;

    // меняем фон при определённом условии
    if (nameObjectCurrent === "emptyPlace") {
        currentElement.parentElement.style.backgroundColor = "white";
    }

    // меняем вид курсора
    currentElement.style.cursor = "grab";
    orignalElement.style.cursor = "default";
}

// 17 QUESTION

function drag17(e) {
    localStorage.setItem("idOrigin17question3grade", e.target.id);
}

function drop17(e) {
    // получаем имя и id взятого элемента
    let idOrig = localStorage.getItem("idOrigin17question3grade");
    let nameObjectOrig = idOrig.slice(0, -1);

    // получаем имя и id, на который кладём элемент
    let currentId = e.target.id;
    let nameObjectCurrent = currentId.slice(0, -1);

    // получаем объекты
    let orignalElement = document.getElementById(idOrig);
    let currentElement = document.getElementById(currentId);

    // меняем картинки местами
    currentElement.src = "./pictures/17que/" + nameObjectOrig + ".svg";
    orignalElement.src = "./pictures/17que/" + nameObjectCurrent + ".svg";

    // меняем id местами
    currentElement.id = idOrig;
    orignalElement.id = currentId;

    // меняем фон при определённом условии
    if (nameObjectCurrent === "emptyPlace") {
        currentElement.parentElement.style.backgroundColor = "white";
    }

    // меняем вид курсора
    currentElement.style.cursor = "grab";
    orignalElement.style.cursor = "default";
}

// 18 QUESTION

function drag18(e) {
    localStorage.setItem("idOrigin18question3grade", e.target.id);
}

function drop18(e) {
    // получаем имя и id взятого элемента
    let idOrig = localStorage.getItem("idOrigin18question3grade");
    let nameObjectOrig = idOrig.slice(0, -1);

    // получаем имя и id, на который кладём элемент
    let currentId = e.target.id;
    let nameObjectCurrent = currentId.slice(0, -1);

    // получаем объекты
    let orignalElement = document.getElementById(idOrig);
    let currentElement = document.getElementById(currentId);

    // меняем картинки местами
    currentElement.src = "./pictures/18que/" + nameObjectOrig + ".svg";
    orignalElement.src = "./pictures/18que/" + nameObjectCurrent + ".svg";

    // меняем id местами
    currentElement.id = idOrig;
    orignalElement.id = currentId;

    // меняем фон при определённом условии
    if (nameObjectCurrent === "emptyPlace") {
        currentElement.parentElement.style.backgroundColor = "white";
    }

    // меняем вид курсора
    currentElement.style.cursor = "grab";
    orignalElement.style.cursor = "default";
}

// 23 QUESTION

function drag23(e) {
    localStorage.setItem("idOrigin23question3grade", e.target.id);
}

function drop23(e) {
    // получаем id, позицию и класс текущего
    let idOrig = localStorage.getItem("idOrigin23question3grade");
    let idCurn = e.target.id;
    let classCurn = e.target.parentElement.className;
    let positionOrig = idOrig.slice(-1);

    // получаем объекты
    let orgnElement = document.getElementById(idOrig);
    let crntElement = document.getElementById(idCurn);

    // копируем переносимый объект в новый
    let copyObj = document.createElement("img");
    copyObj.src = "./pictures/23que/" + idOrig.slice(0, -1) + ".svg";
    copyObj.id = idOrig;
    copyObj.style.cursor = "grab";
    copyObj.style.marginTop = "10px";
    copyObj.style.marginLeft = "10px";

    // очищаем оригинал
    orgnElement.src = "";
    orgnElement.id = "";
    orgnElement.parentElement.style.cursor = "default";

    if (orgnElement.parentElement.id === "") {
        // вставляем переносимый объект в корзину
        crntElement.appendChild(copyObj);

        orgnElement.src = "./pictures/23que/emptyPlace.svg";
    }

    // теперь делаем перенос обратно
    if (
        orgnElement.parentElement.id === "firstBasket23" ||
        orgnElement.parentElement.id === "secondBasket23"
    ) {
        let crnt =
            document.getElementsByClassName(classCurn)[positionOrig]
                .children[0];

        crnt.id = idOrig;
        crnt.src = "./pictures/23que/" + idOrig.slice(0, -1) + ".svg";
        crnt.style.cursor = "grab";

        orgnElement.remove();
    }
}

// 20 QUESTION

// для полей ввода

function drag20(e) {
    localStorage.setItem("idSign20", e.target.id);
}

function drop20(e) {
    // получаем id взятого элемента и класс прародителя
    let idSign = localStorage.getItem("idSign20");

    // берем id того элемента, на который положим несомый
    let currentId = e.target.id;

    // получаем объекты
    let orignalElem = document.getElementById(idSign);
    let currentElem = document.getElementById(currentId);

    // меняем поля местами
    currentElem.id = idSign;
    currentElem.textContent = orignalElem.textContent;

    orignalElem.textContent = "";
    orignalElem.id = currentId;

    if (orignalElem.parentElement.className === "bottomRow20") {
        currentElem.style.backgroundColor = "#369cb7";
        currentElem.style.color = "white";
        currentElem.style.justifyContent = "center";
        currentElem.style.cursor = "grab";
        orignalElem.style.backgroundColor = "#c2e1e9";
        orignalElem.style.border = "1px solid #c2e1e9";
        orignalElem.style.cursor = "default";
    } else {
        currentElem.style.backgroundColor = "#369cb7";
        currentElem.style.cursor = "grab";
        orignalElem.style.backgroundColor = "#f4f4f4";
        orignalElem.style.border = "1px solid #d0d0d0";
        orignalElem.style.cursor = "default";
    }
}

// ---------------------------------------------------------------------- SHOWING THE CORRECT ANSWER

function addCorrectAnswer(
    numberCorrectAnswer,
    numberQue,
    numberContent,
    numberContentCorrectAnswer
) {
    let newElement = document.createElement("div");
    newElement.className = numberCorrectAnswer;

    let childNewElement = document.createElement("div"); // сосед 1
    childNewElement.className = "headerCorrectAnswer";
    childNewElement.textContent = "Correct answer";

    let secondChildNewElement = document.createElement("div"); // сосед 2
    secondChildNewElement.className = numberContentCorrectAnswer;

    let contentContent = document.createElement("img");
    contentContent.src = "./pictures/" + numberQue + "/correctAnswer.svg";
    contentContent.alt = "correct answer";

    secondChildNewElement.appendChild(contentContent);

    document.getElementsByClassName(numberContent)[0].appendChild(newElement);

    document
        .getElementsByClassName(numberCorrectAnswer)[0]
        .appendChild(childNewElement);
    document
        .getElementsByClassName(numberCorrectAnswer)[0]
        .appendChild(secondChildNewElement);
}

function addCorrectAnswerQuestion1() {
    document.getElementsByClassName("app1")[0].style.height = "600px";
    addCorrectAnswer("correctAnswer1", "1que", "app1", "contentCorrectAnswer1");
}

function addCorrectAnswerQuestion2() {
    document.getElementsByClassName("app2")[0].style.height = "400px";
    addCorrectAnswer("correctAnswer2", "2que", "app2", "contentCorrectAnswer2");
}

function addCorrectAnswerQuestion3() {
    document.getElementsByClassName("app3")[0].style.height = "600px";
    addCorrectAnswer("correctAnswer3", "3que", "app3", "contentCorrectAnswer3");
}

function addCorrectAnswerQuestion4() {
    document.getElementsByClassName("app4")[0].style.height = "950px";
    addCorrectAnswer("correctAnswer4", "4que", "app4", "contentCorrectAnswer4");
}

function addCorrectAnswerQuestion5() {
    document.getElementsByClassName("app5")[0].style.height = "950px";
    addCorrectAnswer("correctAnswer5", "5que", "app5", "contentCorrectAnswer5");
}

function addCorrectAnswerQuestion6() {
    document.getElementsByClassName("app6")[0].style.height = "600px";
    addCorrectAnswer("correctAnswer6", "6que", "app6", "contentCorrectAnswer6");
}

function addCorrectAnswerQuestion7() {
    document.getElementsByClassName("app7")[0].style.height = "500px";
    addCorrectAnswer("correctAnswer7", "7que", "app7", "contentCorrectAnswer7");
}

function addCorrectAnswerQuestion8() {
    document.getElementsByClassName("app8")[0].style.height = "900px";
    addCorrectAnswer("correctAnswer8", "8que", "app8", "contentCorrectAnswer8");
}

function addCorrectAnswerQuestion9() {
    document.getElementsByClassName("app9")[0].style.height = "700px";
    addCorrectAnswer("correctAnswer9", "9que", "app9", "contentCorrectAnswer9");
}

function addCorrectAnswerQuestion10() {
    document.getElementsByClassName("app10")[0].style.height = "600px";
    addCorrectAnswer(
        "correctAnswer10",
        "10que",
        "app10",
        "contentCorrectAnswer10"
    );
}

function addCorrectAnswerQuestion11() {
    document.getElementsByClassName("app11")[0].style.height = "950px";
    addCorrectAnswer(
        "correctAnswer11",
        "11que",
        "app11",
        "contentCorrectAnswer11"
    );
}

function addCorrectAnswerQuestion12() {
    document.getElementsByClassName("app12")[0].style.height = "650px";
    addCorrectAnswer(
        "correctAnswer12",
        "12que",
        "app12",
        "contentCorrectAnswer12"
    );
}

function addCorrectAnswerQuestion13() {
    document.getElementsByClassName("app13")[0].style.height = "550px";
    addCorrectAnswer(
        "correctAnswer13",
        "13que",
        "app13",
        "contentCorrectAnswer13"
    );
}

function addCorrectAnswerQuestion14() {
    document.getElementsByClassName("app14")[0].style.height = "1000px";
    addCorrectAnswer(
        "correctAnswer14",
        "14que",
        "app14",
        "contentCorrectAnswer14"
    );
}

function addCorrectAnswerQuestion15() {
    document.getElementsByClassName("app15")[0].style.height = "800px";
    addCorrectAnswer(
        "correctAnswer15",
        "15que",
        "app15",
        "contentCorrectAnswer15"
    );
}

function addCorrectAnswerQuestion16() {
    document.getElementsByClassName("app16")[0].style.height = "700px";
    addCorrectAnswer(
        "correctAnswer16",
        "16que",
        "app16",
        "contentCorrectAnswer16"
    );
}

function addCorrectAnswerQuestion17() {
    document.getElementsByClassName("app17")[0].style.height = "1000px";
    addCorrectAnswer(
        "correctAnswer17",
        "17que",
        "app17",
        "contentCorrectAnswer17"
    );
}

function addCorrectAnswerQuestion18() {
    document.getElementsByClassName("app18")[0].style.height = "550px";
    addCorrectAnswer(
        "correctAnswer18",
        "18que",
        "app18",
        "contentCorrectAnswer18"
    );
}

function addCorrectAnswerQuestion19() {
    document.getElementsByClassName("app19")[0].style.height = "1000px";
    addCorrectAnswer(
        "correctAnswer19",
        "19que",
        "app19",
        "contentCorrectAnswer19"
    );
}

function addCorrectAnswerQuestion20() {
    document.getElementsByClassName("app20")[0].style.height = "700px";
    addCorrectAnswer(
        "correctAnswer20",
        "20que",
        "app20",
        "contentCorrectAnswer20"
    );
}

function addCorrectAnswerQuestion21() {
    document.getElementsByClassName("app21")[0].style.height = "750px";
    addCorrectAnswer(
        "correctAnswer21",
        "21que",
        "app21",
        "contentCorrectAnswer21"
    );
}

function addCorrectAnswerQuestion22() {
    document.getElementsByClassName("app22")[0].style.height = "500px";
    addCorrectAnswer(
        "correctAnswer22",
        "22que",
        "app22",
        "contentCorrectAnswer22"
    );
}

function addCorrectAnswerQuestion23() {
    document.getElementsByClassName("app23")[0].style.height = "950px";
    addCorrectAnswer(
        "correctAnswer23",
        "23que",
        "app23",
        "contentCorrectAnswer23"
    );
}

// --------------------------------------------------------------------- validation of input fields ----------------------------------------------

// 1 QUESTION

let numbers1 = {
    firstNumber: "",
    secondNumber: "",
    thirdNumber: "",
};

gettingDataFromFields(3, [3, 6, 18], 1, numbers1);

function question1() {
    if (
        numbers1.firstNumber != "" &&
        numbers1.secondNumber != "" &&
        numbers1.thirdNumber != ""
    ) {
        succerrorAndCreateMiniIcon(3, 1, numbers1);

        // выносим общий статус к номеру вопроса

        if (
            numbers1.firstNumber === "right" &&
            numbers1.secondNumber === "right" &&
            numbers1.thirdNumber === "right"
        ) {
            addImage(
                "success",
                document.getElementsByClassName("question1"),
                "app1",
                1
            );
        } else {
            addImage(
                "failure",
                document.getElementsByClassName("question1"),
                "app1",
                1
            );

            addCorrectAnswerQuestion1();
        }
    } else {
        highlightUnselectedBlocks(3, 1, numbers1);
    }
}

// 2 QUESTION

let numbers2 = {
    firstNumber: "",
    secondNumber: "",
    thirdNumber: "",
};

gettingDataFromFields(3, [45, 5, 9], 2, numbers2);

function question2() {
    if (
        numbers2.firstNumber != "" &&
        numbers2.secondNumber != "" &&
        numbers2.thirdNumber != ""
    ) {
        succerrorAndCreateMiniIcon(3, 2, numbers2);

        // выносим общий статус к номеру вопроса

        if (
            numbers2.firstNumber === "right" &&
            numbers2.secondNumber === "right" &&
            numbers2.thirdNumber === "right"
        ) {
            addImage(
                "success",
                document.getElementsByClassName("question2"),
                "app2",
                2
            );
        } else {
            addImage(
                "failure",
                document.getElementsByClassName("question2"),
                "app2",
                2
            );

            addCorrectAnswerQuestion2();
        }
    } else {
        highlightUnselectedBlocks(3, 2, numbers2);
    }
}

// 3 QUESTION

function question3() {
    if (selectBtn3 !== "") {
        succerror(
            document.getElementById(nameSelectedBtn3),
            selectBtn3 === "wrong"
        );

        // расставляем мини-иконки

        createMiniIcon(selectBtn3, document.getElementById(nameSelectedBtn3));

        // выносим общий статус к номеру вопроса

        if (selectBtn3 === "right") {
            addImage(
                "success",
                document.getElementsByClassName("question3"),
                "app3",
                3
            );
        } else {
            addImage(
                "failure",
                document.getElementsByClassName("question3"),
                "app3",
                3
            );

            addCorrectAnswerQuestion3();
        }
    } else {
        document.getElementById("firstBtn3").style.border = "2px solid #FFB47D";
        document.getElementById("secondBtn3").style.border =
            "2px solid #FFB47D";
        document.getElementById("thirdBtn3").style.border = "2px solid #FFB47D";
    }
}

// 4 QUESTION

let numbers4 = {
    firstNumber: "",
    secondNumber: "",
    thirdNumber: "",
    fourthNumber: "",
};

gettingDataFromFields(4, [6, 2, 12, 3], 4, numbers4);

function question4() {
    if (
        numbers4.firstNumber != "" &&
        numbers4.secondNumber != "" &&
        numbers4.thirdNumber != "" &&
        numbers4.fourthNumber != ""
    ) {
        succerrorAndCreateMiniIcon(4, 4, numbers4);

        // выносим общий статус к номеру вопроса

        if (
            numbers4.firstNumber === "right" &&
            numbers4.secondNumber === "right" &&
            numbers4.thirdNumber === "right" &&
            numbers4.fourthNumber === "right"
        ) {
            addImage(
                "success",
                document.getElementsByClassName("question4"),
                "app4",
                4
            );
        } else {
            addImage(
                "failure",
                document.getElementsByClassName("question4"),
                "app4",
                4
            );

            addCorrectAnswerQuestion4();
        }
    } else {
        highlightUnselectedBlocks(4, 4, numbers4);
    }
}

// 5 QUESTION

function question5() {
    // получаем содержимое корзин
    let contentBasketFirst = document.getElementById("firstBasket5").children;
    let contentBasketSecond = document.getElementById("secondBasket5").children;
    let contentBasketThird = document.getElementById("thirdBasket5").children;

    // проверяем на пустоту
    if (
        contentBasketFirst.length > 1 &&
        contentBasketSecond.length > 1 &&
        contentBasketThird.length > 1
    ) {
        let correctOrderBasketFirst = [
                "headerBasket5first",
                "firstBtn50",
                "secondBtn51",
                "fourthBtn53",
            ],
            correctOrderBasketSecond = [
                "headerBasket5second",
                "thirdBtn52",
                "fifthBtn54",
            ],
            correctOrderBasketThird = [
                "headerBasket5third",
                "seventhBtn56",
                "sixthBtn55",
            ],
            theBasketFirstIsFilledCorrectly = "yes",
            theBasketSecondIsFilledCorrectly = "yes",
            theBasketThirdIsFilledCorrectly = "yes";

        // раскрашиваем блоки
        for (let i = 1; i < contentBasketFirst.length; i++) {
            let id = contentBasketFirst[i].id;

            if (correctOrderBasketFirst.includes(id) === false) {
                document.getElementById(id).style.border = "2px solid #ED7777";
            }

            document.getElementById(id).style.borderRadius = "5px";

            if (correctOrderBasketFirst.includes(id) === false) {
                theBasketFirstIsFilledCorrectly = "no";
            }
        }

        for (let i = 1; i < contentBasketSecond.length; i++) {
            let id = contentBasketSecond[i].id;

            if (correctOrderBasketSecond.includes(id) === false) {
                document.getElementById(id).style.border = "2px solid #ED7777";
            }

            document.getElementById(id).style.borderRadius = "5px";

            if (correctOrderBasketSecond.includes(id) === false) {
                theBasketSecondIsFilledCorrectly = "no";
            }
        }

        for (let i = 1; i < contentBasketThird.length; i++) {
            let id = contentBasketThird[i].id;

            if (correctOrderBasketThird.includes(id) === false) {
                document.getElementById(id).style.border = "2px solid #ED7777";
            }

            document.getElementById(id).style.borderRadius = "5px";

            if (correctOrderBasketThird.includes(id) === false) {
                theBasketThirdIsFilledCorrectly = "no";
            }
        }

        // проверяем на верность для создания статуса
        if (
            theBasketFirstIsFilledCorrectly === "yes" &&
            theBasketSecondIsFilledCorrectly === "yes" &&
            theBasketThirdIsFilledCorrectly === "yes"
        ) {
            addImage(
                "success",
                document.getElementsByClassName("question5"),
                "app5",
                5
            );
        } else {
            addImage(
                "failure",
                document.getElementsByClassName("question5"),
                "app5",
                5
            );

            addCorrectAnswerQuestion5();
        }
    } else {
        if (contentBasketFirst.length === 1) {
            document.getElementsByClassName("basket5first")[0].style.border =
                "2px solid #FFB47D";
            document.getElementById("headerBasket5first").style.left = "-1px";
        }

        if (contentBasketSecond.length === 1) {
            document.getElementsByClassName("basket5second")[0].style.border =
                "2px solid #FFB47D";
            document.getElementById("headerBasket5second").style.left = "-1px";
        }

        if (contentBasketThird.length === 1) {
            document.getElementsByClassName("basket5third")[0].style.border =
                "2px solid #FFB47D";
            document.getElementById("headerBasket5third").style.left = "-1px";
        }
    }
}

// 6 QUESTION

function question6() {
    // получаем содежимое блоков
    let object =
        document.getElementsByClassName("topRow6")[0].children[0].children[0];
    let idObject = object.id;

    if (idObject !== "emptyPlace60") {
        // проверяем на верность для создания статуса
        if (idObject === "secondBtn60") {
            addMiniIcon(object, "success");
            object.style.border = "2px solid #48B736";
            object.style.borderRadius = "5px";

            addImage(
                "success",
                document.getElementsByClassName("question6"),
                "app6",
                6
            );
        } else {
            addMiniIcon(object, "failure");
            object.style.border = "2px solid #ED7777";
            object.style.borderRadius = "5px";

            addImage(
                "failure",
                document.getElementsByClassName("question6"),
                "app6",
                6
            );

            addCorrectAnswerQuestion6();
        }
    } else {
        object.style.border = "2px solid #FFB47D";
        object.style.borderRadius = "5px";
    }
}

// 7 QUESTION

let numbers7 = {
    firstNumber: "",
};

gettingDataFromFields(1, [60], 7, numbers7);

function question7() {
    if (numbers7.firstNumber != "") {
        succerrorAndCreateMiniIcon(1, 7, numbers7);

        // выносим общий статус к номеру вопроса

        if (numbers7.firstNumber === "right") {
            addImage(
                "success",
                document.getElementsByClassName("question7"),
                "app7",
                7
            );
        } else {
            addImage(
                "failure",
                document.getElementsByClassName("question7"),
                "app7",
                7
            );

            addCorrectAnswerQuestion7();
        }
    } else {
        highlightUnselectedBlocks(1, 7, numbers7);
    }
}

// 8 QUESTION

function question8() {
    // получаем содержимое корзин
    let contentBasketFirst = document.getElementById("firstBasket8").children;
    let contentBasketSecond = document.getElementById("secondBasket8").children;

    // проверяем на пустоту
    if (contentBasketFirst.length > 1 && contentBasketSecond.length > 1) {
        let correctOrderBasketFirst = [
                "headerBasket8first",
                "thirdBtn82",
                "firstBtn80",
            ],
            correctOrderBasketSecond = [
                "headerBasket8second",
                "fourthBtn83",
                "secondBtn81",
                "fifthBtn84",
            ],
            theBasketFirstIsFilledCorrectly = "yes",
            theBasketSecondIsFilledCorrectly = "yes";

        // раскрашиваем блоки
        for (let i = 1; i < contentBasketFirst.length; i++) {
            let id = contentBasketFirst[i].id;

            if (correctOrderBasketFirst.includes(id) === false) {
                document.getElementById(id).style.border = "2px solid #ED7777";
            }

            document.getElementById(id).style.borderRadius = "5px";

            if (correctOrderBasketFirst.includes(id) === false) {
                theBasketFirstIsFilledCorrectly = "no";
            }
        }

        for (let i = 1; i < contentBasketSecond.length; i++) {
            let id = contentBasketSecond[i].id;

            if (correctOrderBasketSecond.includes(id) === false) {
                document.getElementById(id).style.border = "2px solid #ED7777";
            }

            document.getElementById(id).style.borderRadius = "5px";

            if (correctOrderBasketSecond.includes(id) === false) {
                theBasketSecondIsFilledCorrectly = "no";
            }
        }

        // проверяем на верность для создания статуса
        if (
            theBasketFirstIsFilledCorrectly === "yes" &&
            theBasketSecondIsFilledCorrectly === "yes"
        ) {
            addImage(
                "success",
                document.getElementsByClassName("question8"),
                "app8",
                8
            );
        } else {
            addImage(
                "failure",
                document.getElementsByClassName("question8"),
                "app8",
                8
            );

            addCorrectAnswerQuestion8();
        }
    } else {
        if (contentBasketFirst.length === 1) {
            document.getElementsByClassName("basket8first")[0].style.border =
                "2px solid #FFB47D";
            document.getElementById("headerBasket8first").style.left = "-1px";
        }

        if (contentBasketSecond.length === 1) {
            document.getElementsByClassName("basket8second")[0].style.border =
                "2px solid #FFB47D";
            document.getElementById("headerBasket8second").style.left = "-1px";
        }
    }
}

// 9 QUESTION

function question9() {
    // получаем содежимое блоков
    let firstObject =
        document.getElementsByClassName("topRow9")[0].children[0].children[0]
            .children[1].children[0];
    let secondObject =
        document.getElementsByClassName("topRow9")[0].children[0].children[1]
            .children[1].children[0];
    let thirdObject =
        document.getElementsByClassName("topRow9")[0].children[1].children[0]
            .children[1].children[0];
    let fourthObject =
        document.getElementsByClassName("topRow9")[0].children[1].children[1]
            .children[1].children[0];

    let idObjectFirst = firstObject.id;
    let idObjectSecond = secondObject.id;
    let idObjectThird = thirdObject.id;
    let idObjectFourth = fourthObject.id;

    if (
        idObjectFirst !== "emptyPlace90" &&
        idObjectSecond !== "emptyPlace91" &&
        idObjectThird !== "emptyPlace92" &&
        idObjectFourth !== "emptyPlace93"
    ) {
        // проверяем на верность для создания статуса
        if (
            idObjectFirst === "firstBtn90" &&
            idObjectSecond === "secondBtn90" &&
            idObjectThird === "thirdBtn90" &&
            idObjectFourth === "fourthBtn90"
        ) {
            addMiniIcon(firstObject, "success");
            firstObject.style.border = "2px solid #48B736";
            firstObject.style.borderRadius = "5px";

            addMiniIcon(secondObject, "success");
            secondObject.style.border = "2px solid #48B736";
            secondObject.style.borderRadius = "5px";

            addMiniIcon(thirdObject, "success");
            thirdObject.style.border = "2px solid #48B736";
            thirdObject.style.borderRadius = "5px";

            addMiniIcon(fourthObject, "success");
            fourthObject.style.border = "2px solid #48B736";
            fourthObject.style.borderRadius = "5px";

            addImage(
                "success",
                document.getElementsByClassName("question9"),
                "app9",
                9
            );
        } else {
            if (idObjectFirst !== "firstBtn90") {
                addMiniIcon(firstObject, "failure");
                firstObject.style.border = "2px solid #ED7777";
                firstObject.style.borderRadius = "5px";
            } else {
                addMiniIcon(firstObject, "success");
                firstObject.style.border = "2px solid #48B736";
                firstObject.style.borderRadius = "5px";
            }

            if (idObjectSecond !== "secondBtn90") {
                addMiniIcon(secondObject, "failure");
                secondObject.style.border = "2px solid #ED7777";
                secondObject.style.borderRadius = "5px";
            } else {
                addMiniIcon(secondObject, "success");
                secondObject.style.border = "2px solid #48B736";
                secondObject.style.borderRadius = "5px";
            }

            if (idObjectThird !== "thirdBtn90") {
                addMiniIcon(thirdObject, "failure");
                thirdObject.style.border = "2px solid #ED7777";
                thirdObject.style.borderRadius = "5px";
            } else {
                addMiniIcon(thirdObject, "success");
                thirdObject.style.border = "2px solid #48B736";
                thirdObject.style.borderRadius = "5px";
            }

            if (idObjectFourth !== "fourthBtn90") {
                addMiniIcon(fourthObject, "failure");
                fourthObject.style.border = "2px solid #ED7777";
                fourthObject.style.borderRadius = "5px";
            } else {
                addMiniIcon(fourthObject, "success");
                fourthObject.style.border = "2px solid #48B736";
                fourthObject.style.borderRadius = "5px";
            }

            addImage(
                "failure",
                document.getElementsByClassName("question9"),
                "app9",
                9
            );

            addCorrectAnswerQuestion9();
        }
    } else {
        if (idObjectFirst === "emptyPlace90") {
            firstObject.style.border = "2px solid #FFB47D";
            firstObject.style.borderRadius = "5px";
        }

        if (idObjectSecond === "emptyPlace91") {
            secondObject.style.border = "2px solid #FFB47D";
            secondObject.style.borderRadius = "5px";
        }

        if (idObjectThird === "emptyPlace92") {
            thirdObject.style.border = "2px solid #FFB47D";
            thirdObject.style.borderRadius = "5px";
        }

        if (idObjectFourth === "emptyPlace93") {
            fourthObject.style.border = "2px solid #FFB47D";
            fourthObject.style.borderRadius = "5px";
        }
    }
}

// 10 QUESTION

function question10() {
    // получаем содежимое блоков
    let firstObject =
        document.getElementsByClassName("topRow10")[0].children[0].children[0];
    let secondObject =
        document.getElementsByClassName("topRow10")[0].children[1].children[0];

    let idObjectFirst = firstObject.id;
    let idObjectSecond = secondObject.id;

    if (
        idObjectFirst !== "emptyPlace100" &&
        idObjectSecond !== "emptyPlace101"
    ) {
        // проверяем на верность для создания статуса
        if (
            idObjectFirst === "thirdBtn100" &&
            idObjectSecond === "firstBtn100"
        ) {
            addMiniIcon(firstObject, "success");
            firstObject.style.border = "2px solid #48B736";
            firstObject.style.borderRadius = "5px";

            addMiniIcon(secondObject, "success");
            secondObject.style.border = "2px solid #48B736";
            secondObject.style.borderRadius = "5px";

            addImage(
                "success",
                document.getElementsByClassName("question10"),
                "app10",
                10
            );
        } else {
            if (idObjectFirst !== "thirdBtn100") {
                addMiniIcon(firstObject, "failure");
                firstObject.style.border = "2px solid #ED7777";
                firstObject.style.borderRadius = "5px";
            } else {
                addMiniIcon(firstObject, "success");
                firstObject.style.border = "2px solid #48B736";
                firstObject.style.borderRadius = "5px";
            }

            if (idObjectSecond !== "firstBtn100") {
                addMiniIcon(secondObject, "failure");
                secondObject.style.border = "2px solid #ED7777";
                secondObject.style.borderRadius = "5px";
            } else {
                addMiniIcon(secondObject, "success");
                secondObject.style.border = "2px solid #48B736";
                secondObject.style.borderRadius = "5px";
            }

            addImage(
                "failure",
                document.getElementsByClassName("question10"),
                "app10",
                10
            );

            addCorrectAnswerQuestion10();
        }
    } else {
        if (idObjectFirst === "emptyPlace100") {
            firstObject.style.border = "2px solid #FFB47D";
            firstObject.style.borderRadius = "5px";
        }

        if (idObjectSecond === "emptyPlace101") {
            secondObject.style.border = "2px solid #FFB47D";
            secondObject.style.borderRadius = "5px";
        }
    }
}

// 11 QUESTION

function question11() {
    // получаем содежимое блоков
    let firstObject =
        document.getElementsByClassName("centerRow11")[0].children[0]
            .children[0];
    let secondObject =
        document.getElementsByClassName("centerRow11")[0].children[1]
            .children[0];
    let thirdObject =
        document.getElementsByClassName("centerRow11")[0].children[2]
            .children[0];
    let fourthObject =
        document.getElementsByClassName("centerRow11")[0].children[3]
            .children[0];

    let idObjectFirst = firstObject.id;
    let idObjectSecond = secondObject.id;
    let idObjectThird = thirdObject.id;
    let idObjectFourth = fourthObject.id;

    if (
        idObjectFirst !== "emptyPlace110" &&
        idObjectSecond !== "emptyPlace111" &&
        idObjectThird !== "emptyPlace112" &&
        idObjectFourth !== "emptyPlace113"
    ) {
        // проверяем на верность для создания статуса
        if (
            idObjectFirst === "secondBtn110" &&
            idObjectSecond === "fourthBtn110" &&
            idObjectThird === "firstBtn110" &&
            idObjectFourth === "thirdBtn110"
        ) {
            addMiniIcon(firstObject, "success");
            firstObject.style.border = "2px solid #48B736";
            firstObject.style.borderRadius = "10px";

            addMiniIcon(secondObject, "success");
            secondObject.style.border = "2px solid #48B736";
            secondObject.style.borderRadius = "10px";

            addMiniIcon(thirdObject, "success");
            thirdObject.style.border = "2px solid #48B736";
            thirdObject.style.borderRadius = "10px";

            addMiniIcon(fourthObject, "success");
            fourthObject.style.border = "2px solid #48B736";
            fourthObject.style.borderRadius = "10px";

            addImage(
                "success",
                document.getElementsByClassName("question11"),
                "app11",
                11
            );
        } else {
            if (idObjectFirst !== "secondBtn110") {
                addMiniIcon(firstObject, "failure");
                firstObject.style.border = "2px solid #ED7777";
                firstObject.style.borderRadius = "10px";
            } else {
                addMiniIcon(firstObject, "success");
                firstObject.style.border = "2px solid #48B736";
                firstObject.style.borderRadius = "10px";
            }

            if (idObjectSecond !== "fourthBtn110") {
                addMiniIcon(secondObject, "failure");
                secondObject.style.border = "2px solid #ED7777";
                secondObject.style.borderRadius = "10px";
            } else {
                addMiniIcon(secondObject, "success");
                secondObject.style.border = "2px solid #48B736";
                secondObject.style.borderRadius = "10px";
            }

            if (idObjectThird !== "firstBtn110") {
                addMiniIcon(thirdObject, "failure");
                thirdObject.style.border = "2px solid #ED7777";
                thirdObject.style.borderRadius = "10px";
            } else {
                addMiniIcon(thirdObject, "success");
                thirdObject.style.border = "2px solid #48B736";
                thirdObject.style.borderRadius = "10px";
            }

            if (idObjectFourth !== "thirdBtn110") {
                addMiniIcon(fourthObject, "failure");
                fourthObject.style.border = "2px solid #ED7777";
                fourthObject.style.borderRadius = "10px";
            } else {
                addMiniIcon(fourthObject, "success");
                fourthObject.style.border = "2px solid #48B736";
                fourthObject.style.borderRadius = "10px";
            }

            addImage(
                "failure",
                document.getElementsByClassName("question11"),
                "app11",
                11
            );

            addCorrectAnswerQuestion11();
        }
    } else {
        if (idObjectFirst === "emptyPlace110") {
            firstObject.style.border = "2px solid #FFB47D";
            firstObject.style.borderRadius = "10px";
        }

        if (idObjectSecond === "emptyPlace111") {
            secondObject.style.border = "2px solid #FFB47D";
            secondObject.style.borderRadius = "10px";
        }

        if (idObjectThird === "emptyPlace112") {
            thirdObject.style.border = "2px solid #FFB47D";
            thirdObject.style.borderRadius = "10px";
        }

        if (idObjectFourth === "emptyPlace113") {
            fourthObject.style.border = "2px solid #FFB47D";
            fourthObject.style.borderRadius = "10px";
        }
    }
}

// 12 QUESTION

let numbers12 = {
    firstNumber: "",
};

gettingDataFromFields(1, [2], 12, numbers12);

function question12() {
    if (numbers12.firstNumber != "") {
        succerrorAndCreateMiniIcon(1, 12, numbers12);

        // выносим общий статус к номеру вопроса

        if (numbers12.firstNumber === "right") {
            addImage(
                "success",
                document.getElementsByClassName("question12"),
                "app12",
                12
            );
        } else {
            addImage(
                "failure",
                document.getElementsByClassName("question12"),
                "app12",
                12
            );

            addCorrectAnswerQuestion12();
        }
    } else {
        highlightUnselectedBlocks(1, 12, numbers12);
    }
}

// -----------------------------------------------------------------------------------------------------------------------------------------------

// 13 QUESTION

let numbers13 = {
    firstNumber: "",
    secondNumber: "",
    thirdNumber: "",
};

gettingDataFromFields(3, [1, 1, 2], 13, numbers13);

function question13() {
    if (
        numbers13.firstNumber != "" &&
        numbers13.secondNumber != "" &&
        numbers13.thirdNumber != ""
    ) {
        succerrorAndCreateMiniIcon(3, 13, numbers13);

        // выносим общий статус к номеру вопроса

        if (
            numbers13.firstNumber === "right" &&
            numbers13.secondNumber === "right" &&
            numbers13.thirdNumber === "right"
        ) {
            addImage(
                "success",
                document.getElementsByClassName("question13"),
                "app13",
                13
            );
        } else {
            addImage(
                "failure",
                document.getElementsByClassName("question13"),
                "app13",
                13
            );

            addCorrectAnswerQuestion13();
        }
    } else {
        highlightUnselectedBlocks(3, 13, numbers13);
    }
}

// 14 QUESTION

let numbers14 = {
    firstNumber: "",
    secondNumber: "",
    thirdNumber: "",
    fourthNumber: "",
};

gettingDataFromFields(4, [1, 2, 4, 6], 14, numbers14);

function question14() {
    let emptyPlace = document.getElementsByClassName("emptyPlace14")[0];
    let idEmptyPlace = emptyPlace.children[0].id;

    if (
        numbers14.firstNumber !== "" &&
        numbers14.secondNumber !== "" &&
        numbers14.thirdNumber !== "" &&
        numbers14.fourthNumber !== "" &&
        idEmptyPlace !== "emptyPlace140"
    ) {
        // выносим общий статус к номеру вопроса

        if (
            numbers14.firstNumber === "right" &&
            numbers14.secondNumber === "right" &&
            numbers14.thirdNumber === "right" &&
            numbers14.fourthNumber === "right" &&
            idEmptyPlace === "firstBtn140"
        ) {
            emptyPlace.style.backgroundColor = "#9DD765";

            addImage(
                "success",
                document.getElementsByClassName("question14"),
                "app14",
                14
            );
        } else {
            succerror(
                document.getElementById("firstNumber14"),
                numbers14.firstNumber === "wrong"
            );

            succerror(
                document.getElementById("secondNumber14"),
                numbers14.secondNumber === "wrong"
            );

            succerror(
                document.getElementById("thirdNumber14"),
                numbers14.thirdNumber === "wrong"
            );

            succerror(
                document.getElementById("fourthNumber14"),
                numbers14.fourthNumber === "wrong"
            );

            if (idEmptyPlace !== "firstBtn140") {
                emptyPlace.children[0].style.border = "2px solid #ED7777";
                emptyPlace.children[0].style.borderRadius = "5px";
            } else {
                emptyPlace.children[0].style.border = "2px solid #48B736";
                emptyPlace.children[0].style.borderRadius = "5px";
            }

            addImage(
                "failure",
                document.getElementsByClassName("question14"),
                "app14",
                14
            );

            addCorrectAnswerQuestion14();
        }
    } else {
        highlightUnselectedBlocks(4, 14, numbers14);

        emptyPlace.children[0].style.border = "2px solid #FFB47D";
        emptyPlace.children[0].style.borderRadius = "5px";
    }
}

// 15 QUESTION

let numbers15 = {
    firstNumber: "",
};

gettingDataFromFields(1, ["01 : 10"], 15, numbers15);

function question15() {
    let secondValue = document.getElementById("secondNumber15").value;

    if (numbers15.firstNumber !== "") {
        succerrorAndCreateMiniIcon(1, 15, numbers15);

        // выносим общий статус к номеру вопроса

        if (numbers15.firstNumber === "right" && secondValue === "am") {
            addImage(
                "success",
                document.getElementsByClassName("question15"),
                "app15",
                15
            );
        } else {
            if (secondValue === "pm") {
                addMiniIcon(
                    document.getElementById("secondNumber15"),
                    "failure"
                );
                document.getElementById("secondNumber15").style.border =
                    "2px solid #ED7777";
            } else {
                addMiniIcon(
                    document.getElementById("secondNumber15"),
                    "success"
                );
                document.getElementById("secondNumber15").style.border =
                    "2px solid #48B736";
            }

            addImage(
                "failure",
                document.getElementsByClassName("question15"),
                "app15",
                15
            );

            addCorrectAnswerQuestion15();
        }
    } else {
        highlightUnselectedBlocks(1, 15, numbers15);

        document.getElementById("secondNumber15").style.border =
            "2px solid #FFB47D";
    }
}

// 16 QUESTION

let numbers16 = {
    firstNumber: "",
};

gettingDataFromFields(1, [90], 16, numbers16);

function question16() {
    if (numbers16.firstNumber != "") {
        succerrorAndCreateMiniIcon(1, 16, numbers16);

        // выносим общий статус к номеру вопроса

        if (numbers16.firstNumber === "right") {
            addImage(
                "success",
                document.getElementsByClassName("question16"),
                "app16",
                16
            );
        } else {
            addImage(
                "failure",
                document.getElementsByClassName("question16"),
                "app16",
                16
            );

            addCorrectAnswerQuestion16();
        }
    } else {
        highlightUnselectedBlocks(1, 16, numbers16);
    }
}

// 17 QUESTION

function question17() {
    // получаем содежимое блоков
    let object =
        document.getElementsByClassName("placeToInsert")[0].children[0];
    let idObject = object.id;

    if (idObject !== "emptyPlummet170") {
        // проверяем на верность для создания статуса
        if (idObject === "thirdPlummet170") {
            addMiniIcon(object, "success");
            object.style.border = "2px solid #48B736";
            object.style.borderRadius = "5px";

            addImage(
                "success",
                document.getElementsByClassName("question17"),
                "app17",
                17
            );
        } else {
            addMiniIcon(object, "failure");
            object.style.border = "2px solid #ED7777";
            object.style.borderRadius = "5px";

            addImage(
                "failure",
                document.getElementsByClassName("question17"),
                "app17",
                17
            );

            addCorrectAnswerQuestion17();
        }
    } else {
        object.style.border = "2px solid #FFB47D";
        object.style.borderRadius = "5px";
    }
}

// 18 QUESTION

function question18() {
    // получаем содежимое блоков
    let firstObject =
        document.getElementsByClassName("topRow18")[0].children[0].children[0];
    let secondObject =
        document.getElementsByClassName("topRow18")[0].children[1].children[0];
    let thirdObject =
        document.getElementsByClassName("topRow18")[0].children[2].children[0];
    let fourthObject =
        document.getElementsByClassName("topRow18")[0].children[3].children[0];

    let idObjectFirst = firstObject.id;
    let idObjectSecond = secondObject.id;
    let idObjectThird = thirdObject.id;
    let idObjectFourth = fourthObject.id;

    if (
        idObjectFirst !== "emptyPlace180" &&
        idObjectSecond !== "emptyPlace181" &&
        idObjectThird !== "emptyPlace182" &&
        idObjectFourth !== "emptyPlace183"
    ) {
        // проверяем на верность для создания статуса
        if (
            idObjectFirst === "firstBtn100" &&
            idObjectSecond === "thirdBtn100" &&
            idObjectThird === "fourthBtn100" &&
            idObjectFourth === "secondBtn100"
        ) {
            addMiniIcon(firstObject, "success");
            firstObject.style.border = "2px solid #48B736";
            firstObject.style.borderRadius = "5px";

            addMiniIcon(secondObject, "success");
            secondObject.style.border = "2px solid #48B736";
            secondObject.style.borderRadius = "5px";

            addMiniIcon(thirdObject, "success");
            thirdObject.style.border = "2px solid #48B736";
            thirdObject.style.borderRadius = "5px";

            addMiniIcon(fourthObject, "success");
            fourthObject.style.border = "2px solid #48B736";
            fourthObject.style.borderRadius = "5px";

            addImage(
                "success",
                document.getElementsByClassName("question18"),
                "app18",
                18
            );
        } else {
            if (idObjectFirst !== "firstBtn180") {
                addMiniIcon(firstObject, "failure");
                firstObject.style.border = "2px solid #ED7777";
                firstObject.style.borderRadius = "5px";
            } else {
                addMiniIcon(firstObject, "success");
                firstObject.style.border = "2px solid #48B736";
                firstObject.style.borderRadius = "5px";
            }

            if (idObjectSecond !== "thirdBtn180") {
                addMiniIcon(secondObject, "failure");
                secondObject.style.border = "2px solid #ED7777";
                secondObject.style.borderRadius = "5px";
            } else {
                addMiniIcon(secondObject, "success");
                secondObject.style.border = "2px solid #48B736";
                secondObject.style.borderRadius = "5px";
            }

            if (idObjectThird !== "fourthBtn180") {
                addMiniIcon(thirdObject, "failure");
                thirdObject.style.border = "2px solid #ED7777";
                thirdObject.style.borderRadius = "5px";
            } else {
                addMiniIcon(thirdObject, "success");
                thirdObject.style.border = "2px solid #48B736";
                thirdObject.style.borderRadius = "5px";
            }

            if (idObjectFourth !== "secondBtn180") {
                addMiniIcon(fourthObject, "failure");
                fourthObject.style.border = "2px solid #ED7777";
                fourthObject.style.borderRadius = "5px";
            } else {
                addMiniIcon(fourthObject, "success");
                fourthObject.style.border = "2px solid #48B736";
                fourthObject.style.borderRadius = "5px";
            }

            addImage(
                "failure",
                document.getElementsByClassName("question18"),
                "app18",
                18
            );

            addCorrectAnswerQuestion18();
        }
    } else {
        if (idObjectFirst === "emptyPlace180") {
            firstObject.style.border = "2px solid #FFB47D";
            firstObject.style.borderRadius = "5px";
        }

        if (idObjectSecond === "emptyPlace181") {
            secondObject.style.border = "2px solid #FFB47D";
            secondObject.style.borderRadius = "5px";
        }

        if (idObjectThird === "emptyPlace182") {
            thirdObject.style.border = "2px solid #FFB47D";
            thirdObject.style.borderRadius = "5px";
        }

        if (idObjectFourth === "emptyPlace183") {
            fourthObject.style.border = "2px solid #FFB47D";
            fourthObject.style.borderRadius = "5px";
        }
    }
}

// 19 QUESTION

let numbers19 = {
    firstNumber: "",
    secondNumber: "",
    thirdNumber: "",
};

gettingDataFromFields(3, [12, 6, 49], 19, numbers19);

function question19() {
    if (
        numbers19.firstNumber != "" &&
        numbers19.secondNumber != "" &&
        numbers19.thirdNumber != ""
    ) {
        succerror(
            document.getElementById("firstNumber19"),
            numbers19.firstNumber === "wrong"
        );

        succerror(
            document.getElementById("secondNumber19"),
            numbers19.secondNumber === "wrong"
        );

        succerror(
            document.getElementById("thirdNumber19"),
            numbers19.thirdNumber === "wrong"
        );

        // выносим общий статус к номеру вопроса

        if (
            numbers19.firstNumber === "right" &&
            numbers19.secondNumber === "right" &&
            numbers19.thirdNumber === "right"
        ) {
            addImage(
                "success",
                document.getElementsByClassName("question19"),
                "app19",
                19
            );
        } else {
            addImage(
                "failure",
                document.getElementsByClassName("question19"),
                "app19",
                19
            );

            addCorrectAnswerQuestion19();
        }
    } else {
        highlightUnselectedBlocks(3, 19, numbers19);
    }
}

// 20 QUESTION

let numbers20 = {
    firstNumber: "",
};

gettingDataFromFields(1, [4], 20, numbers20);

function question20() {
    if (numbers20.firstNumber != "") {
        succerrorAndCreateMiniIcon(1, 20, numbers20);

        // выносим общий статус к номеру вопроса

        if (numbers20.firstNumber === "right") {
            addImage(
                "success",
                document.getElementsByClassName("question20"),
                "app20",
                20
            );
        } else {
            addImage(
                "failure",
                document.getElementsByClassName("question20"),
                "app20",
                20
            );

            addCorrectAnswerQuestion20();
        }
    } else {
        highlightUnselectedBlocks(1, 20, numbers20);
    }
}

// 21 QUESTION

let numbers21 = {
    firstNumber: "",
};

gettingDataFromFields(1, [12], 21, numbers21);

function question21() {
    if (numbers21.firstNumber != "") {
        succerrorAndCreateMiniIcon(1, 21, numbers21);

        // выносим общий статус к номеру вопроса

        if (numbers21.firstNumber === "right") {
            addImage(
                "success",
                document.getElementsByClassName("question21"),
                "app21",
                21
            );
        } else {
            addImage(
                "failure",
                document.getElementsByClassName("question21"),
                "app21",
                21
            );

            addCorrectAnswerQuestion21();
        }
    } else {
        highlightUnselectedBlocks(1, 21, numbers21);
    }
}

// 22 QUESTION

let numbers22 = {
    firstNumber: "",
};

gettingDataFromFields(1, [81], 22, numbers22);

function question22() {
    if (numbers22.firstNumber != "") {
        succerrorAndCreateMiniIcon(1, 22, numbers22);

        // выносим общий статус к номеру вопроса

        if (numbers22.firstNumber === "right") {
            addImage(
                "success",
                document.getElementsByClassName("question22"),
                "app22",
                22
            );
        } else {
            addImage(
                "failure",
                document.getElementsByClassName("question22"),
                "app22",
                22
            );

            addCorrectAnswerQuestion22();
        }
    } else {
        highlightUnselectedBlocks(1, 22, numbers22);
    }
}

// 23 QUESTION

function question23() {
    // получаем содержимое корзин
    let contentBasketFirst = document.getElementById("firstBasket23").children;
    let contentBasketSecond =
        document.getElementById("secondBasket23").children;

    // проверяем на пустоту
    if (contentBasketFirst.length > 1 && contentBasketSecond.length > 1) {
        let correctOrderBasketFirst = [
                "headerBasket23first",
                "square232",
                "parallelogram234",
                "rectangle235",
                "rhombus236",
            ],
            correctOrderBasketSecond = [
                "headerBasket23second",
                "triangle230",
                "star231",
                "pentagon233",
                "quadrilateral237",
            ],
            theBasketFirstIsFilledCorrectly = "yes",
            theBasketSecondIsFilledCorrectly = "yes";

        // раскрашиваем блоки
        for (let i = 1; i < contentBasketFirst.length; i++) {
            let id = contentBasketFirst[i].id;

            if (correctOrderBasketFirst.includes(id) === false) {
                document.getElementById(id).style.border = "2px solid #ED7777";
            }

            document.getElementById(id).style.borderRadius = "5px";

            if (correctOrderBasketFirst.includes(id) === false) {
                theBasketFirstIsFilledCorrectly = "no";
            }
        }

        for (let i = 1; i < contentBasketSecond.length; i++) {
            let id = contentBasketSecond[i].id;

            if (correctOrderBasketSecond.includes(id) === false) {
                document.getElementById(id).style.border = "2px solid #ED7777";
            }

            document.getElementById(id).style.borderRadius = "5px";

            if (correctOrderBasketSecond.includes(id) === false) {
                theBasketSecondIsFilledCorrectly = "no";
            }
        }

        // проверяем на верность для создания статуса
        if (
            theBasketFirstIsFilledCorrectly === "yes" &&
            theBasketSecondIsFilledCorrectly === "yes"
        ) {
            addImage(
                "success",
                document.getElementsByClassName("question23"),
                "app23",
                23
            );
        } else {
            addImage(
                "failure",
                document.getElementsByClassName("question23"),
                "app23",
                23
            );

            addCorrectAnswerQuestion23();
        }
    } else {
        if (contentBasketFirst.length === 1) {
            document.getElementsByClassName("basket23first")[0].style.border =
                "2px solid #FFB47D";
            document.getElementById("headerBasket23first").style.left = "-1px";
        }

        if (contentBasketSecond.length === 1) {
            document.getElementsByClassName("basket23second")[0].style.border =
                "2px solid #FFB47D";
            document.getElementById("headerBasket23second").style.left = "-1px";
        }
    }
}

// RESULT

document.getElementById("submit").onclick = function () {
    question1();
    question2();
    question3();
    question4();
    question5();
    question6();
    question7();
    question8();
    question9();
    question10();
    question11();
    question12();
    question13();
    question14();
    question15();
    question16();
    question17();
    question18();
    question19();
    question20();
    question21();
    question22();
    question23();
};
