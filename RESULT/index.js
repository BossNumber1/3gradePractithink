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

    if (elem.parentElement.parentElement.className === "content2") {
        objDiv.style.marginTop = "-50px";
        objDiv.style.marginLeft =
            elem.offsetLeft + widthAdjacentElement / 2 - 7 + "px";
    } else if (elem.parentElement.parentElement.className === "content6") {
        objDiv.style.marginTop = "-50px";
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

    if (elem.parentElement.parentElement.className === "content10") {
        objDiv.style.marginTop = "-25px";
    }

    if (
        elem.parentElement.parentElement.parentElement.className === "content13"
    ) {
        objDiv.style.marginTop = "-25px";
    }

    if (elem.parentElement.parentElement.className === "fourthRow11") {
        objDiv.style.marginTop = "-20px";
        objDiv.style.marginLeft =
            elem.offsetLeft + widthAdjacentElement / 2 - 7 + "px";
    } else if (
        elem.parentElement.parentElement.parentElement.className === "content11"
    ) {
        objDiv.style.marginTop = "-25px";
        objDiv.style.marginLeft =
            elem.offsetLeft + widthAdjacentElement / 2 - 23 + "px";
    }

    if (elem.parentElement.parentElement.className === "fourthRow12") {
        objDiv.style.marginTop = "-20px";
        objDiv.style.marginLeft =
            elem.offsetLeft + widthAdjacentElement / 2 - 7 + "px";
    }

    if (elem.parentElement.parentElement.className === "content14") {
        objDiv.style.marginTop = "-55px";
    }

    if (
        elem.parentElement.parentElement.parentElement.className === "content9"
    ) {
        objDiv.style.marginTop = "-25px";
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
        elem.parentElement.parentElement.parentElement.className === "content20"
    ) {
        objDiv.style.marginTop = "-55px";
    }

    if (
        elem.parentElement.parentElement.parentElement.className === "content8"
    ) {
        objDiv.style.marginTop = "-23px";
        objDiv.style.marginLeft =
            elem.offsetLeft + widthAdjacentElement / 2 - 27 + "px";
    }

    if (
        elem.parentElement.parentElement.parentElement.parentElement
            .className === "content22"
    ) {
        objDiv.style.marginTop = "-23px";
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

// 1 QUESTION;

let selectedButton1 = {
    firstBtn1: "",
    secondBtn1: "",
    thirdBtn1: "",
    fourthBtn1: "",
    fifthBtn1: "",
};

document.getElementById("firstBtn1").onclick = function () {
    commonForSelectBtn("firstBtn1");

    selectedButton1.firstBtn1 = "right";
};

document.getElementById("secondBtn1").onclick = function () {
    commonForSelectBtn("secondBtn1");

    selectedButton1.secondBtn1 = "wrong";
};

document.getElementById("thirdBtn1").onclick = function () {
    commonForSelectBtn("thirdBtn1");

    selectedButton1.thirdBtn1 = "wrong";
};

document.getElementById("fourthBtn1").onclick = function () {
    commonForSelectBtn("fourthBtn1");

    selectedButton1.fourthBtn1 = "right";
};

document.getElementById("fifthBtn1").onclick = function () {
    commonForSelectBtn("fifthBtn1");

    selectedButton1.fifthBtn1 = "right";
};

// 3 QUESTION

let selectBtn3 = "",
    nameSelectedBtn3 = "";

document.getElementById("firstBtn3").onclick = function () {
    selectBtn3 = "right";
    nameSelectedBtn3 = "firstBtn3";

    commonForSelectBtn("firstBtn3");
    commonForNoselectedBtn(["secondBtn3", "thirdBtn3"]);
};

document.getElementById("secondBtn3").onclick = function () {
    selectBtn3 = "wrong";
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

// 4 QUESTION

let selectBtn4 = "",
    nameSelectedBtn4 = "";

document.getElementById("firstBtn4").onclick = function () {
    selectBtn4 = "wrong";
    nameSelectedBtn4 = "firstBtn4";

    commonForSelectBtn("firstBtn4");
    commonForNoselectedBtn(["secondBtn4"]);
};

document.getElementById("secondBtn4").onclick = function () {
    selectBtn4 = "right";
    nameSelectedBtn4 = "secondBtn4";

    commonForSelectBtn("secondBtn4");
    commonForNoselectedBtn(["firstBtn4"]);
};

// 8 QUESTION

let selectedButton8 = {
    firstBtn8: "",
    secondBtn8: "",
    thirdBtn8: "",
    fourthBtn8: "",
    fifthBtn8: "",
};

document.getElementById("firstBtn8").onclick = function () {
    commonForSelectBtn("firstBtn8");

    selectedButton8.firstBtn8 = "wrong";
};

document.getElementById("secondBtn8").onclick = function () {
    commonForSelectBtn("secondBtn8");

    selectedButton8.secondBtn8 = "right";
};

document.getElementById("thirdBtn8").onclick = function () {
    commonForSelectBtn("thirdBtn8");

    selectedButton8.thirdBtn8 = "wrong";
};

document.getElementById("fourthBtn8").onclick = function () {
    commonForSelectBtn("fourthBtn8");

    selectedButton8.fourthBtn8 = "right";
};

document.getElementById("fifthBtn8").onclick = function () {
    commonForSelectBtn("fifthBtn8");

    selectedButton8.fifthBtn8 = "wrong";
};

// 15 QUESTION

let selectBtn15 = "",
    nameSelectedBtn15 = "";

document.getElementById("firstBtn15").onclick = function () {
    selectBtn15 = "wrong";
    nameSelectedBtn15 = "firstBtn15";

    commonForSelectBtn("firstBtn15");
    commonForNoselectedBtn(["secondBtn15"]);
};

document.getElementById("secondBtn15").onclick = function () {
    selectBtn15 = "right";
    nameSelectedBtn15 = "secondBtn15";

    commonForSelectBtn("secondBtn15");
    commonForNoselectedBtn(["firstBtn15"]);
};

// 18 QUESTION

let selectBtn18 = "",
    nameSelectedBtn18 = "";

document.getElementById("firstBtn18").onclick = function () {
    selectBtn18 = "wrong";
    nameSelectedBtn18 = "firstBtn18";

    commonForSelectBtn("firstBtn18");
    commonForNoselectedBtn(["secondBtn18", "thirdBtn18"]);
};

document.getElementById("secondBtn18").onclick = function () {
    selectBtn18 = "wrong";
    nameSelectedBtn18 = "secondBtn18";

    commonForSelectBtn("secondBtn18");
    commonForNoselectedBtn(["firstBtn18", "thirdBtn18"]);
};

document.getElementById("thirdBtn18").onclick = function () {
    selectBtn18 = "right";
    nameSelectedBtn18 = "thirdBtn18";

    commonForSelectBtn("thirdBtn18");
    commonForNoselectedBtn(["firstBtn18", "secondBtn18"]);
};

// ------------------------------------------------------------ ALL DRAG AND DROP -------------------------------------------------------------

// common commands

function allowDrop(e) {
    e.preventDefault();
}

// 3 QUESTION

function drag3(e) {
    localStorage.setItem("idOrigin3question5class", e.target.id);
    localStorage.setItem(
        "textContent3question5class",
        e.target.textContent.trim()
    );
}

function drop3(e) {
    // получаем текст и id взятого элемента
    let idOrig = localStorage.getItem("idOrigin3question5class");
    let textContent = localStorage.getItem("textContent3question5class");

    // получаем id, на который кладём элемент
    let currentId = e.target.id;

    // получаем объекты
    let orignalElement = document.getElementById(idOrig);
    let currentElement = document.getElementById(currentId);

    // меняем блоки местами
    currentElement.textContent = textContent;
    currentElement.style.opacity = "1";
    currentElement.style.color = "white";
    currentElement.style.cursor = "grab";

    orignalElement.textContent = "";
    orignalElement.style.opacity = "0.3";
    orignalElement.style.cursor = "default";

    // меняем id местами
    currentElement.id = idOrig;
    orignalElement.id = currentId;
}

// 4 QUESTION

function drag4(e) {
    localStorage.setItem("idOrigin4question5class", e.target.id);
}

function drop4(e) {
    // получаем id, позицию и класс текущего
    let idOrig = localStorage.getItem("idOrigin4question5class");
    let idCurn = e.target.id;
    let classCurn = e.target.parentElement.className;
    let positionOrig = idOrig.slice(0, -1).slice(-1) - 1;

    // получаем объекты
    let orgnElement = document.getElementById(idOrig);
    let crntElement = document.getElementById(idCurn);

    // копируем переносимый объект в новый
    let copyObj = document.createElement("img");
    copyObj.src = "./pictures/4que/" + idOrig.slice(0, -1) + ".svg";
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
        orgnElement.parentElement.id === "firstBasket4" ||
        orgnElement.parentElement.id === "secondBasket4" ||
        orgnElement.parentElement.id === "thirdBasket4"
    ) {
        let crnt =
            document.getElementsByClassName(classCurn)[0].children[positionOrig]
                .children[0];
        crnt.id = idOrig;
        crnt.src = "./pictures/4que/" + idOrig.slice(0, -1) + ".svg";
        crnt.style.cursor = "grab";
    }
}

// 9 QUESTION

function drag9(e) {
    localStorage.setItem("idTakenCube9", e.target.id);
    localStorage.setItem("nameCube9", e.target.dataset.name);
}

function drop9(e) {
    // получаем id и имя несомого элемента
    let idTakenCube = localStorage.getItem("idTakenCube9");
    let nameCube = localStorage.getItem("nameCube9");

    // берем id того элемента, на который положим несомый
    let currentId = e.target.id;
    let currentName = e.target.dataset.name;

    // меняем картинки местами
    let orig = document.getElementById(idTakenCube);
    orig.src = "./pictures/9que/" + currentName + ".svg";
    orig.id = currentId;
    orig.setAttribute("data-name", currentName);
    orig.parentElement.style.cursor = "default";

    e.target.src = "./pictures/9que/" + nameCube + ".svg";
    e.target.id = idTakenCube;
    e.target.setAttribute("data-name", nameCube);
    e.target.parentElement.style.cursor = "grab";
}

// 11 QUESTION

function drag11(e) {
    localStorage.setItem("idOrigin11question2class", e.target.id);
    localStorage.setItem(
        "textContent11question2class",
        e.target.textContent.trim()
    );
}

function drop11(e) {
    // получаем текст и id взятого элемента
    let idOrig = localStorage.getItem("idOrigin11question2class");
    let textContent = localStorage.getItem("textContent11question2class");

    // получаем id, на который кладём элемент
    let currentId = e.target.id;

    // получаем объекты
    let orignalElement = document.getElementById(idOrig);
    let currentElement = document.getElementById(currentId);

    // меняем блоки местами
    currentElement.textContent = textContent;
    currentElement.style.backgroundColor = "#369cb7";
    currentElement.style.border = "1px solid #369cb7";
    currentElement.style.color = "white";
    currentElement.style.cursor = "grab";

    currentElement.style.display = "flex";
    currentElement.style.alignItems = "center";
    currentElement.style.justifyContent = "center";

    orignalElement.style.backgroundColor = "white";
    orignalElement.style.border = "1px solid black";
    orignalElement.textContent = "";
    orignalElement.style.cursor = "default";

    // меняем id местами
    currentElement.id = idOrig;
    orignalElement.id = currentId;
}

// 12 QUESTION

function drag12(e) {
    localStorage.setItem("idOrigin11question2class", e.target.id);
    localStorage.setItem(
        "textContent11question2class",
        e.target.textContent.trim()
    );
}

function drop12(e) {
    // получаем текст и id взятого элемента
    let idOrig = localStorage.getItem("idOrigin11question2class");
    let textContent = localStorage.getItem("textContent11question2class");

    // получаем id, на который кладём элемент
    let currentId = e.target.id;

    // получаем объекты
    let orignalElement = document.getElementById(idOrig);
    let currentElement = document.getElementById(currentId);

    // меняем блоки местами
    currentElement.textContent = textContent;
    currentElement.style.backgroundColor = "#369cb7";
    currentElement.style.border = "1px solid #369cb7";
    currentElement.style.color = "white";
    currentElement.style.cursor = "grab";

    currentElement.style.display = "flex";
    currentElement.style.alignItems = "center";
    currentElement.style.justifyContent = "center";

    orignalElement.style.backgroundColor = "white";
    orignalElement.style.border = "1px solid black";
    orignalElement.textContent = "";
    orignalElement.style.cursor = "default";

    // меняем id местами
    currentElement.id = idOrig;
    orignalElement.id = currentId;
}

// 17 QUESTION

function drag17(e) {
    localStorage.setItem("idOrigin17question5class", e.target.id);
    localStorage.setItem(
        "textContent17question5class",
        e.target.textContent.trim()
    );
}

function drop17(e) {
    // получаем текст и id взятого элемента
    let idOrig = localStorage.getItem("idOrigin17question5class");
    let textContent = localStorage.getItem("textContent17question5class");

    // получаем id, на который кладём элемент
    let currentId = e.target.id;

    // получаем объекты
    let orignalElement = document.getElementById(idOrig);
    let currentElement = document.getElementById(currentId);

    // меняем блоки местами
    currentElement.textContent = textContent;
    currentElement.style.opacity = "1";
    currentElement.style.color = "white";
    currentElement.style.cursor = "grab";
    currentElement.style.backgroundColor = "#369cb7";

    orignalElement.textContent = "";
    orignalElement.style.opacity = "0.3";
    orignalElement.style.cursor = "default";

    // меняем id местами
    currentElement.id = idOrig;
    orignalElement.id = currentId;
}

// 23 QUESTION

function drag23(e) {
    localStorage.setItem("idOrigin23question2class", e.target.id);
}

function drop23(e) {
    // получаем имя и id взятого элемента
    let idOrig = localStorage.getItem("idOrigin23question2class");
    let nameObjectOrig = idOrig.slice(0, -1);

    // получаем имя и id, на который кладём элемент
    let currentId = e.target.id;
    let nameObjectCurrent = currentId.slice(0, -1);

    // получаем объекты
    let orignalElement = document.getElementById(idOrig);
    let currentElement = document.getElementById(currentId);

    // меняем картинки местами
    currentElement.src = "./pictures/23que/" + nameObjectOrig + ".svg";
    orignalElement.src = "./pictures/23que/" + nameObjectCurrent + ".svg";

    // меняем id местами
    currentElement.id = idOrig;
    orignalElement.id = currentId;

    // меняем фон при определённом условии
    if (nameObjectCurrent === "emptyPlace") {
        currentElement.parentElement.style.backgroundColor = "white";
        currentElement.parentElement.style.border = "none";
    }

    // меняем вид курсора
    currentElement.style.cursor = "grab";
    orignalElement.style.cursor = "default";
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
    document.getElementsByClassName("app1")[0].style.height = "500px";
    addCorrectAnswer("correctAnswer1", "1que", "app1", "contentCorrectAnswer1");
}

function addCorrectAnswerQuestion2() {
    document.getElementsByClassName("app2")[0].style.height = "400px";
    addCorrectAnswer("correctAnswer2", "2que", "app2", "contentCorrectAnswer2");
}

function addCorrectAnswerQuestion3() {
    document.getElementsByClassName("app3")[0].style.height = "450px";
    addCorrectAnswer("correctAnswer3", "3que", "app3", "contentCorrectAnswer3");
}

function addCorrectAnswerQuestion4() {
    document.getElementsByClassName("app4")[0].style.height = "850px";
    addCorrectAnswer("correctAnswer4", "4que", "app4", "contentCorrectAnswer4");
}

function addCorrectAnswerQuestion5() {
    document.getElementsByClassName("app5")[0].style.height = "700px";
    addCorrectAnswer("correctAnswer5", "5que", "app5", "contentCorrectAnswer5");
}

function addCorrectAnswerQuestion6() {
    document.getElementsByClassName("app6")[0].style.height = "450px";
    addCorrectAnswer("correctAnswer6", "6que", "app6", "contentCorrectAnswer6");
}

function addCorrectAnswerQuestion7() {
    document.getElementsByClassName("app7")[0].style.height = "400px";
    addCorrectAnswer("correctAnswer7", "7que", "app7", "contentCorrectAnswer7");
}

function addCorrectAnswerQuestion8() {
    document.getElementsByClassName("app8")[0].style.height = "700px";
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
    document.getElementsByClassName("app11")[0].style.height = "750px";
    addCorrectAnswer(
        "correctAnswer11",
        "11que",
        "app11",
        "contentCorrectAnswer11"
    );
}

function addCorrectAnswerQuestion12() {
    document.getElementsByClassName("app12")[0].style.height = "750px";
    addCorrectAnswer(
        "correctAnswer12",
        "12que",
        "app12",
        "contentCorrectAnswer12"
    );
}

function addCorrectAnswerQuestion13() {
    document.getElementsByClassName("app13")[0].style.height = "950px";
    addCorrectAnswer(
        "correctAnswer13",
        "13que",
        "app13",
        "contentCorrectAnswer13"
    );
}

function addCorrectAnswerQuestion14() {
    document.getElementsByClassName("app14")[0].style.height = "450px";
    addCorrectAnswer(
        "correctAnswer14",
        "14que",
        "app14",
        "contentCorrectAnswer"
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
    document.getElementsByClassName("app17")[0].style.height = "900px";
    addCorrectAnswer(
        "correctAnswer17",
        "17que",
        "app17",
        "contentCorrectAnswer17"
    );
}

function addCorrectAnswerQuestion18() {
    document.getElementsByClassName("app18")[0].style.height = "450px";
    addCorrectAnswer(
        "correctAnswer18",
        "18que",
        "app18",
        "contentCorrectAnswer18"
    );
}

function addCorrectAnswerQuestion19() {
    document.getElementsByClassName("app19")[0].style.height = "650px";
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
    document.getElementsByClassName("app21")[0].style.height = "900px";
    addCorrectAnswer(
        "correctAnswer21",
        "21que",
        "app21",
        "contentCorrectAnswer21"
    );
}

function addCorrectAnswerQuestion22() {
    document.getElementsByClassName("app22")[0].style.height = "900px";
    addCorrectAnswer(
        "correctAnswer22",
        "22que",
        "app22",
        "contentCorrectAnswer22"
    );
}

function addCorrectAnswerQuestion23() {
    document.getElementsByClassName("app23")[0].style.height = "700px";
    addCorrectAnswer(
        "correctAnswer23",
        "23que",
        "app23",
        "contentCorrectAnswer23"
    );
}

// --------------------------------------------------------------------- validation of input fields ----------------------------------------------

// 1 QUESTION

function question1() {
    let selectedButtons = [],
        namesSelectedButtons = [],
        isTheArrayEmpty = 0;

    for (let key in selectedButton1) {
        if (selectedButton1[key] !== "") {
            selectedButtons.push(selectedButton1[key]);
            namesSelectedButtons.push(key);
            isTheArrayEmpty++;
        }
    }

    if (isTheArrayEmpty > 0) {
        namesSelectedButtons.map((el, index) => {
            succerror(
                document.getElementById(el),
                selectedButtons[index] === "wrong"
            );
        });

        // выносим общий статус к номеру вопроса

        if (
            selectedButton1.firstBtn1 !== "" &&
            selectedButton1.secondBtn1 !== "" &&
            selectedButton1.thirdBtn1 !== "" &&
            selectedButton1.fourthBtn1 !== "" &&
            selectedButton1.fifthBtn1 !== ""
        ) {
            addImage(
                "success",
                document.getElementsByClassName("question1"),
                "app1",
                1
            );
        } else {
            // подсветим невыбранные блоки
            if (selectedButton1.firstBtn1 === "") {
                document.getElementById("firstBtn1").style.border =
                    "2px solid #FFB47D";
            }

            if (selectedButton1.secondBtn1 === "") {
                document.getElementById("secondBtn1").style.border =
                    "2px solid #FFB47D";
            }

            if (selectedButton1.thirdBtn1 === "") {
                document.getElementById("thirdBtn1").style.border =
                    "2px solid #FFB47D";
            }

            if (selectedButton1.fourthBtn1 === "") {
                document.getElementById("fourthBtn1").style.border =
                    "2px solid #FFB47D";
            }

            if (selectedButton1.fifthBtn1 === "") {
                document.getElementById("fifthBtn1").style.border =
                    "2px solid #FFB47D";
            }

            // придадим статуса
            addImage(
                "failure",
                document.getElementsByClassName("question1"),
                "app1",
                1
            );

            addCorrectAnswerQuestion1();
        }
    } else {
        document.getElementById("firstBtn1").style.border = "2px solid #FFB47D";
        document.getElementById("secondBtn1").style.border =
            "2px solid #FFB47D";
        document.getElementById("thirdBtn1").style.border = "2px solid #FFB47D";
        document.getElementById("fourthBtn1").style.border =
            "2px solid #FFB47D";
        document.getElementById("fifthBtn1").style.border = "2px solid #FFB47D";
    }
}

// 2 QUESTION

let numbers2 = {
    firstNumber: "",
    secondNumber: "",
    thirdNumber: "",
};

gettingDataFromFields(3, [2, 9, 16], 2, numbers2);

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
};

gettingDataFromFields(3, [6, 6, 12], 4, numbers4);

function question4() {
    if (
        selectBtn4 !== "" &&
        numbers4.firstNumber !== "" &&
        numbers4.secondNumber !== "" &&
        numbers4.thirdNumber !== ""
    ) {
        succerror(
            document.getElementById(nameSelectedBtn4),
            selectBtn4 === "wrong"
        );

        // выносим общий статус к номеру вопроса

        if (
            selectBtn4 === "right" &&
            numbers4.firstNumber === "right" &&
            numbers4.secondNumber === "right" &&
            numbers4.thirdNumber === "right"
        ) {
            addImage(
                "success",
                document.getElementsByClassName("question4"),
                "app4",
                4
            );
        } else {
            succerror(
                document.getElementById("firstNumber4"),
                numbers4.firstNumber === "wrong"
            );

            succerror(
                document.getElementById("secondNumber4"),
                numbers4.secondNumber === "wrong"
            );

            succerror(
                document.getElementById("thirdNumber4"),
                numbers4.thirdNumber === "wrong"
            );

            addImage(
                "failure",
                document.getElementsByClassName("question4"),
                "app4",
                4
            );

            addCorrectAnswerQuestion4();
        }
    } else {
        if (selectBtn4 === "") {
            document.getElementById("firstBtn4").style.border =
                "2px solid #FFB47D";
            document.getElementById("secondBtn4").style.border =
                "2px solid #FFB47D";
        }

        highlightUnselectedBlocks(3, 4, numbers4);
    }
}

// 5 QUESTION

let numbers5 = {
    firstNumber: "",
    secondNumber: "",
    thirdNumber: "",
    fourthNumber: "",
    fifthNumber: "",
    sixthNumber: "",
};

gettingDataFromFields(6, [3, 3, 3, 3, 3, 15], 5, numbers5);

function question5() {
    if (
        numbers5.firstNumber !== "" &&
        numbers5.secondNumber !== "" &&
        numbers5.thirdNumber !== "" &&
        numbers5.fourthNumber !== "" &&
        numbers5.fifthNumber !== "" &&
        numbers5.sixthNumber !== ""
    ) {
        succerrorAndCreateMiniIcon(6, 5, numbers5);

        // выносим общий статус к номеру вопроса

        if (
            numbers5.firstNumber === "right" &&
            numbers5.secondNumber === "right" &&
            numbers5.thirdNumber === "right" &&
            numbers5.fourthNumber === "right" &&
            numbers5.fifthNumber === "right" &&
            numbers5.sixthNumber === "right"
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
        highlightUnselectedBlocks(6, 5, numbers5);
    }
}

// 6 QUESTION

let selectedButton6 = {
    firstBtn6: "right",
    secondBtn6: "",
    thirdBtn6: "",
    fourthBtn6: "",
    fifthBtn6: "",
    sixthBtn6: "",
    seventhBtn6: "",
    eighthBtn6: "",
};

document.getElementById("firstBtn6").onclick = function () {
    document.getElementById("firstBtn6").classList.toggle("selectedCircle");

    selectedButton6.firstBtn6 = "right";
};

document.getElementById("secondBtn6").onclick = function () {
    document.getElementById("secondBtn6").classList.toggle("selectedCircle");

    selectedButton6.secondBtn6 = "wrong";
};

document.getElementById("thirdBtn6").onclick = function () {
    document.getElementById("thirdBtn6").classList.toggle("selectedCircle");

    selectedButton6.thirdBtn6 = "right";
};

document.getElementById("fourthBtn6").onclick = function () {
    document.getElementById("fourthBtn6").classList.toggle("selectedCircle");

    selectedButton6.fourthBtn6 = "wrong";
};

document.getElementById("fifthBtn6").onclick = function () {
    document.getElementById("fifthBtn6").classList.toggle("selectedCircle");

    selectedButton6.fifthBtn6 = "right";
};

document.getElementById("sixthBtn6").onclick = function () {
    document.getElementById("sixthBtn6").classList.toggle("selectedCircle");

    selectedButton6.sixthBtn6 = "wrong";
};

document.getElementById("seventhBtn6").onclick = function () {
    document.getElementById("seventhBtn6").classList.toggle("selectedCircle");

    selectedButton6.seventhBtn6 = "right";
};

document.getElementById("eighthBtn6").onclick = function () {
    document.getElementById("eighthBtn6").classList.toggle("selectedCircle");

    selectedButton6.eighthBtn6 = "wrong";
};

function question6() {
    let selectedButtons = [],
        namesSelectedButtons = [],
        isTheArrayEmpty = 0;

    for (let key in selectedButton6) {
        if (selectedButton6[key] !== "") {
            selectedButtons.push(selectedButton6[key]);
            namesSelectedButtons.push(key);
            isTheArrayEmpty++;
        }
    }

    if (isTheArrayEmpty > 0) {
        namesSelectedButtons.map((el, index) => {
            if (selectedButtons[index] === "wrong") {
                document.getElementById(el).style.border = "2px solid #ED7777";
            } else {
                document.getElementById(el).style.border = "2px solid #48B736";
            }
        });

        // выносим общий статус к номеру вопроса

        if (
            selectedButton6.firstBtn6 === "right" &&
            selectedButton6.thirdBtn6 === "right" &&
            selectedButton6.fifthBtn6 === "right" &&
            selectedButton6.seventhBtn6 === "right"
        ) {
            addImage(
                "success",
                document.getElementsByClassName("question6"),
                "app6",
                6
            );
        } else {
            addImage(
                "failure",
                document.getElementsByClassName("question6"),
                "app6",
                6
            );

            addCorrectAnswerQuestion6();
        }
    } else {
        document.getElementById("firstBtn6").classList.remove("selectedCircle");
        document.getElementsByClassName("content6")[0].style.border =
            "1px solid #FFB47D";
    }
}

// 7 QUESTION

let numbers7 = {
    firstNumber: "",
    secondNumber: "",
    thirdNumber: "",
};

gettingDataFromFields(3, [7, 0, 6], 7, numbers7);

function question7() {
    if (
        numbers7.firstNumber != "" &&
        numbers7.secondNumber != "" &&
        numbers7.thirdNumber != ""
    ) {
        succerrorAndCreateMiniIcon(3, 7, numbers7);

        // выносим общий статус к номеру вопроса

        if (
            numbers7.firstNumber === "right" &&
            numbers7.secondNumber === "right" &&
            numbers7.thirdNumber === "right"
        ) {
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
        highlightUnselectedBlocks(3, 7, numbers7);
    }
}

// 8 QUESTION

function question8() {
    let selectedButtons = [],
        namesSelectedButtons = [],
        isTheArrayEmpty = 0;

    for (let key in selectedButton8) {
        if (selectedButton8[key] !== "") {
            selectedButtons.push(selectedButton8[key]);
            namesSelectedButtons.push(key);
            isTheArrayEmpty++;
        }
    }

    if (isTheArrayEmpty > 0) {
        namesSelectedButtons.map((el, index) => {
            succerror(
                document.getElementById(el),
                selectedButtons[index] === "wrong"
            );
        });

        // выносим общий статус к номеру вопроса

        if (
            selectedButton8.secondBtn8 === "right" &&
            selectedButton8.fourthBtn8 === "right"
        ) {
            addImage(
                "success",
                document.getElementsByClassName("question8"),
                "app8",
                8
            );
        } else {
            // придадим статуса
            addImage(
                "failure",
                document.getElementsByClassName("question8"),
                "app8",
                8
            );

            addCorrectAnswerQuestion8();
        }
    } else {
        document.getElementById("firstBtn8").style.border = "2px solid #FFB47D";
        document.getElementById("secondBtn8").style.border =
            "2px solid #FFB47D";
        document.getElementById("thirdBtn8").style.border = "2px solid #FFB47D";
        document.getElementById("fourthBtn8").style.border =
            "2px solid #FFB47D";
        document.getElementById("fifthBtn8").style.border = "2px solid #FFB47D";
    }
}

// 9 QUESTION

let numbers9 = {
    firstNumber: "",
    secondNumber: "",
    thirdNumber: "",
};

gettingDataFromFields(3, [42, 37, 5], 9, numbers9);

function question9() {
    if (
        numbers9.firstNumber != "" &&
        numbers9.secondNumber != "" &&
        numbers9.thirdNumber != ""
    ) {
        succerrorAndCreateMiniIcon(3, 9, numbers9);

        // выносим общий статус к номеру вопроса

        if (
            numbers9.firstNumber === "right" &&
            numbers9.secondNumber === "right" &&
            numbers9.thirdNumber === "right"
        ) {
            addImage(
                "success",
                document.getElementsByClassName("question9"),
                "app9",
                9
            );
        } else {
            addImage(
                "failure",
                document.getElementsByClassName("question9"),
                "app9",
                9
            );

            addCorrectAnswerQuestion9();
        }
    } else {
        highlightUnselectedBlocks(3, 9, numbers9);
    }
}

// 10 QUESTION

let numbers10 = {
    firstNumber: "",
};

gettingDataFromFields(1, ["14 + 4 = 18"], 10, numbers10);

function question10() {
    if (numbers10.firstNumber != "") {
        succerrorAndCreateMiniIcon(1, 10, numbers10);

        // выносим общий статус к номеру вопроса

        if (numbers10.firstNumber === "right") {
            addImage(
                "success",
                document.getElementsByClassName("question10"),
                "app10",
                10
            );
        } else {
            addImage(
                "failure",
                document.getElementsByClassName("question10"),
                "app10",
                10
            );

            addCorrectAnswerQuestion10();
        }
    } else {
        highlightUnselectedBlocks(1, 10, numbers10);
    }
}

// 11 QUESTION

let numbers11 = {
    firstNumber: "",
};

gettingDataFromFields(1, [5], 11, numbers11);

function question11() {
    // получаем содежимое блоков
    let firstPlace11 =
        document.getElementsByClassName("firstRow11")[0].children[0].id;
    let secondPlace11 =
        document.getElementsByClassName("firstRow11")[0].children[1].id;
    let thirdPlace11 =
        document.getElementsByClassName("firstRow11")[0].children[2].id;
    let fourthPlace11 =
        document.getElementsByClassName("firstRow11")[0].children[3].id;
    let fifthPlace11 =
        document.getElementsByClassName("firstRow11")[0].children[4].id;
    let sixthPlace11 =
        document.getElementsByClassName("firstRow11")[0].children[5].id;

    if (
        numbers11.firstNumber !== "" &&
        firstPlace11 !== "firstEmpty11" &&
        secondPlace11 !== "secondEmpty11" &&
        thirdPlace11 !== "thirdEmpty11" &&
        fourthPlace11 !== "fourthEmpty11" &&
        fifthPlace11 !== "fifthEmpty11" &&
        sixthPlace11 !== "sixthEmpty11"
    ) {
        succerrorAndCreateMiniIcon(1, 11, numbers11);
        // проверяем на верность для создания статуса
        if (
            numbers11.firstNumber === "right" &&
            firstPlace11 === "sixthBtn11" &&
            secondPlace11 === "secondBtn11" &&
            thirdPlace11 === "thirdBtn11" &&
            fourthPlace11 === "fourthBtn11" &&
            fifthPlace11 === "fifthBtn11" &&
            sixthPlace11 === "firstBtn11"
        ) {
            addImage(
                "success",
                document.getElementsByClassName("question11"),
                "app11",
                11
            );
        } else {
            if (firstPlace11 !== "sixthBtn11") {
                document.getElementById(firstPlace11).style.border =
                    "2px solid #ED7777";

                addMiniIcon(document.getElementById(firstPlace11), "failure");
            } else if (firstPlace11 === "sixthBtn11") {
                document.getElementById(firstPlace11).style.border =
                    "2px solid #9DD765";

                addMiniIcon(document.getElementById(firstPlace11), "success");
            }

            if (secondPlace11 !== "secondBtn11") {
                document.getElementById(secondPlace11).style.border =
                    "2px solid #ED7777";

                addMiniIcon(document.getElementById(secondPlace11), "failure");
            } else if (secondPlace11 === "secondBtn11") {
                document.getElementById(secondPlace11).style.border =
                    "2px solid #9DD765";

                addMiniIcon(document.getElementById(secondPlace11), "success");
            }

            if (thirdPlace11 !== "thirdBtn11") {
                document.getElementById(thirdPlace11).style.border =
                    "2px solid #ED7777";

                addMiniIcon(document.getElementById(thirdPlace11), "failure");
            } else if (thirdPlace11 === "thirdBtn11") {
                document.getElementById(thirdPlace11).style.border =
                    "2px solid #9DD765";

                addMiniIcon(document.getElementById(thirdPlace11), "success");
            }

            if (fourthPlace11 !== "fourthBtn11") {
                document.getElementById(fourthPlace11).style.border =
                    "2px solid #ED7777";

                addMiniIcon(document.getElementById(fourthPlace11), "failure");
            } else if (fourthPlace11 === "fourthBtn11") {
                document.getElementById(fourthPlace11).style.border =
                    "2px solid #9DD765";

                addMiniIcon(document.getElementById(fourthPlace11), "success");
            }

            if (fifthPlace11 !== "fifthBtn11") {
                document.getElementById(fifthPlace11).style.border =
                    "2px solid #ED7777";

                addMiniIcon(document.getElementById(fifthPlace11), "failure");
            } else if (fifthPlace11 === "fifthBtn11") {
                document.getElementById(fifthPlace11).style.border =
                    "2px solid #9DD765";

                addMiniIcon(document.getElementById(fifthPlace11), "success");
            }

            if (sixthPlace11 !== "firstBtn11") {
                document.getElementById(sixthPlace11).style.border =
                    "2px solid #ED7777";

                addMiniIcon(document.getElementById(sixthPlace11), "failure");
            } else if (sixthPlace11 === "firstBtn11") {
                document.getElementById(sixthPlace11).style.border =
                    "2px solid #9DD765";

                addMiniIcon(document.getElementById(sixthPlace11), "success");
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
        if (
            firstPlace11 === "firstEmpty11" &&
            secondPlace11 === "secondEmpty11" &&
            thirdPlace11 === "thirdEmpty11" &&
            fourthPlace11 === "fourthEmpty11" &&
            fifthPlace11 === "fifthEmpty11" &&
            sixthPlace11 === "sixthEmpty11"
        ) {
            highlightingUnfillededBlocks(6, 11);
        }

        highlightUnselectedBlocks(1, 11, numbers11);
    }
}

// 12 QUESTION

let numbers12 = {
    firstNumber: "",
};

gettingDataFromFields(1, [10], 12, numbers12);

function question12() {
    // получаем содежимое блоков
    let firstPlace12 =
        document.getElementsByClassName("firstRow12")[0].children[0].id;
    let secondPlace12 =
        document.getElementsByClassName("firstRow12")[0].children[1].id;
    let thirdPlace12 =
        document.getElementsByClassName("firstRow12")[0].children[2].id;
    let fourthPlace12 =
        document.getElementsByClassName("firstRow12")[0].children[3].id;
    let fifthPlace12 =
        document.getElementsByClassName("firstRow12")[0].children[4].id;
    let sixthPlace12 =
        document.getElementsByClassName("firstRow12")[0].children[5].id;

    if (
        numbers12.firstNumber !== "" &&
        firstPlace12 !== "firstEmpty12" &&
        secondPlace12 !== "secondEmpty12" &&
        thirdPlace12 !== "thirdEmpty12" &&
        fourthPlace12 !== "fourthEmpty12" &&
        fifthPlace12 !== "fifthEmpty12" &&
        sixthPlace12 !== "sixthEmpty12"
    ) {
        succerrorAndCreateMiniIcon(1, 12, numbers12);

        // проверяем на верность для создания статуса
        if (
            numbers12.firstNumber === "right" &&
            firstPlace12 === "firstBtn12" &&
            secondPlace12 === "fourthBtn12" &&
            thirdPlace12 === "sixthBtn12" &&
            fourthPlace12 === "secondBtn12" &&
            fifthPlace12 === "fifthBtn12" &&
            sixthPlace12 === "thirdBtn12"
        ) {
            addImage(
                "success",
                document.getElementsByClassName("question12"),
                "app12",
                12
            );
        } else {
            if (firstPlace12 !== "firstBtn12") {
                document.getElementById(firstPlace12).style.border =
                    "2px solid #ED7777";

                addMiniIcon(document.getElementById(firstPlace12), "failure");
            } else if (firstPlace12 === "firstBtn12") {
                document.getElementById(firstPlace12).style.border =
                    "2px solid #9DD765";

                addMiniIcon(document.getElementById(firstPlace12), "success");
            }

            if (secondPlace12 !== "fourthBtn12") {
                document.getElementById(secondPlace12).style.border =
                    "2px solid #ED7777";

                addMiniIcon(document.getElementById(secondPlace12), "failure");
            } else if (secondPlace12 === "fourthBtn12") {
                document.getElementById(secondPlace12).style.border =
                    "2px solid #9DD765";

                addMiniIcon(document.getElementById(secondPlace12), "success");
            }

            if (thirdPlace12 !== "sixthBtn12") {
                document.getElementById(thirdPlace12).style.border =
                    "2px solid #ED7777";

                addMiniIcon(document.getElementById(thirdPlace12), "failure");
            } else if (thirdPlace12 === "sixthBtn12") {
                document.getElementById(thirdPlace12).style.border =
                    "2px solid #9DD765";

                addMiniIcon(document.getElementById(thirdPlace12), "success");
            }

            if (fourthPlace12 !== "secondBtn12") {
                document.getElementById(fourthPlace12).style.border =
                    "2px solid #ED7777";

                addMiniIcon(document.getElementById(fourthPlace12), "failure");
            } else if (fourthPlace12 === "secondBtn12") {
                document.getElementById(fourthPlace12).style.border =
                    "2px solid #9DD765";

                addMiniIcon(document.getElementById(fourthPlace12), "success");
            }

            if (fifthPlace12 !== "fifthBtn12") {
                document.getElementById(fifthPlace12).style.border =
                    "2px solid #ED7777";

                addMiniIcon(document.getElementById(fifthPlace12), "failure");
            } else if (fifthPlace12 === "fifthBtn12") {
                document.getElementById(fifthPlace12).style.border =
                    "2px solid #9DD765";

                addMiniIcon(document.getElementById(fifthPlace12), "success");
            }

            if (sixthPlace12 !== "thirdBtn12") {
                document.getElementById(sixthPlace12).style.border =
                    "2px solid #ED7777";

                addMiniIcon(document.getElementById(sixthPlace12), "failure");
            } else if (sixthPlace12 === "thirdBtn12") {
                document.getElementById(sixthPlace12).style.border =
                    "2px solid #9DD765";

                addMiniIcon(document.getElementById(sixthPlace12), "success");
            }

            addImage(
                "failure",
                document.getElementsByClassName("question12"),
                "app12",
                12
            );

            addCorrectAnswerQuestion12();
        }
    } else {
        if (
            firstPlace12 === "firstEmpty12" &&
            secondPlace12 === "secondEmpty12" &&
            thirdPlace12 === "thirdEmpty12" &&
            fourthPlace12 === "fourthEmpty12" &&
            fifthPlace12 === "fifthEmpty12" &&
            sixthPlace12 === "sixthEmpty12"
        ) {
            highlightingUnfillededBlocks(6, 12);
        }

        highlightUnselectedBlocks(1, 12, numbers12);
    }
}

// ------------------------------------------------------------- Rotate and moved ----------------------------------------------------------------

// 13 QUESTION

const rotationFunction = new Propeller(
    document.getElementsByClassName("ruler")[0],
    {
        inertia: 0,
    }
);

dragElement(document.getElementsByClassName("ruler")[0]);

function dragElement(element) {
    let pos1 = 0,
        pos2 = 0,
        pos3 = 0,
        pos4 = 0;

    element.onmousedown = dragMouseDown;

    function dragMouseDown(e) {
        e = e || window.event;
        // get the mouse cursor position at startup:
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        // calculate the new cursor position:
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        // set the element's new position:
        element.style.top = element.offsetTop - pos2 + "px";
        element.style.left = element.offsetLeft - pos1 + "px";
    }

    function closeDragElement() {
        document.onmouseup = null;
        document.onmousemove = null;
    }
}

document
    .getElementsByClassName("ruler")[0]
    .addEventListener("mousedown", (e) => {
        if (
            (e.target.className !== "leftEdge" ||
                e.target.className !== "rightEdge") &&
            e.target.className === "imgRuler"
        ) {
            rotationFunction.stop();
            dragElement(document.getElementsByClassName("ruler")[0]);
        }

        if (
            (e.target.className === "leftEdge" ||
                e.target.className === "rightEdge") &&
            e.target.className !== "imgRuler"
        ) {
            rotationFunction.onRotated(e);
        }
    });

// -----------------------------------------------------------------------------------------------------------------------------------------------

// 13 QUESTION

let numbers13 = {
    firstNumber: "",
    secondNumber: "",
    thirdNumber: "",
    fourthNumber: "",
    fifthNumber: "",
    sixthNumber: "",
};

gettingDataFromFields(6, [5, 0, 2, "1/2", 3, 0], 13, numbers13);

function question13() {
    if (
        numbers13.firstNumber !== "" &&
        numbers13.secondNumber !== "" &&
        numbers13.thirdNumber !== "" &&
        numbers13.fourthNumber !== "" &&
        numbers13.fifthNumber !== "" &&
        numbers13.sixthNumber !== ""
    ) {
        succerror(
            document.getElementById("firstNumber13"),
            numbers13.firstNumber === "wrong"
        );

        succerror(
            document.getElementById("secondNumber13"),
            numbers13.secondNumber === "wrong"
        );

        succerror(
            document.getElementById("thirdNumber13"),
            numbers13.thirdNumber === "wrong"
        );

        succerror(
            document.getElementById("fourthNumber13"),
            numbers13.fourthNumber === "wrong"
        );

        succerror(
            document.getElementById("fifthNumber13"),
            numbers13.thirdNumber === "wrong"
        );

        succerror(
            document.getElementById("sixthNumber13"),
            numbers13.secondNumber === "wrong"
        );

        // выносим общий статус к номеру вопроса

        if (
            numbers13.firstNumber === "right" &&
            numbers13.secondNumber === "right" &&
            numbers13.thirdNumber === "right" &&
            numbers13.fourthNumber === "right" &&
            numbers13.fifthNumber === "right" &&
            numbers13.sixthNumber === "right"
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
        highlightUnselectedBlocks(6, 13, numbers13);
    }
}

// 14 QUESTION

let numbers14 = {
    firstNumber: "",
    secondNumber: "",
};

gettingDataFromFields(2, [77, 13], 14, numbers14);

function question14() {
    if (numbers14.firstNumber != "" && numbers14.secondNumber != "") {
        succerrorAndCreateMiniIcon(2, 14, numbers14);

        // выносим общий статус к номеру вопроса

        if (
            numbers14.firstNumber === "right" &&
            numbers14.secondNumber === "right"
        ) {
            addImage(
                "success",
                document.getElementsByClassName("question14"),
                "app14",
                14
            );
        } else {
            addImage(
                "failure",
                document.getElementsByClassName("question14"),
                "app14",
                14
            );

            addCorrectAnswerQuestion14();
        }
    } else {
        highlightUnselectedBlocks(2, 14, numbers14);
    }
}

// 15 QUESTION

function question15() {
    if (selectBtn15 !== "") {
        succerror(
            document.getElementById(nameSelectedBtn15),
            selectBtn15 === "wrong"
        );

        // выносим общий статус к номеру вопроса

        if (selectBtn15 === "right") {
            addImage(
                "success",
                document.getElementsByClassName("question15"),
                "app15",
                15
            );
        } else {
            addImage(
                "failure",
                document.getElementsByClassName("question15"),
                "app15",
                15
            );

            addCorrectAnswerQuestion15();
        }
    } else {
        document.getElementById("firstBtn15").style.border =
            "2px solid #FFB47D";
        document.getElementById("secondBtn15").style.border =
            "2px solid #FFB47D";
    }
}

// 16 QUESTION

let numbers16 = {
    firstNumber: "",
    secondNumber: "",
    thirdNumber: "",
    fourthNumber: "",
};

gettingDataFromFields(4, ["12:10", "08:55", "05:50", "12:30"], 16, numbers16);

function question16() {
    if (
        numbers16.firstNumber != "" &&
        numbers16.secondNumber != "" &&
        numbers16.thirdNumber != "" &&
        numbers16.fourthNumber != ""
    ) {
        succerrorAndCreateMiniIcon(4, 16, numbers16);

        // выносим общий статус к номеру вопроса

        if (
            numbers16.firstNumber === "right" &&
            numbers16.secondNumber === "right" &&
            numbers16.thirdNumber === "right" &&
            numbers16.fourthNumber === "right"
        ) {
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
        highlightUnselectedBlocks(4, 16, numbers16);
    }
}

// 17 QUESTION

let selectBtn17 = "right",
    btnSelectedName17;

document.getElementById("firstCollection17").onclick = function () {
    document
        .getElementById("firstCollection17")
        .classList.toggle("selectedPicture17");
    document
        .getElementById("secondCollection17")
        .classList.remove("selectedPicture17");
    document
        .getElementById("thirdCollection17")
        .classList.remove("selectedPicture17");

    selectBtn17 = "right";
    btnSelectedName17 = "firstCollection17";
};

document.getElementById("secondCollection17").onclick = function () {
    document
        .getElementById("secondCollection17")
        .classList.toggle("selectedPicture17");
    document
        .getElementById("firstCollection17")
        .classList.remove("selectedPicture17");
    document
        .getElementById("thirdCollection17")
        .classList.remove("selectedPicture17");

    selectBtn17 = "wrong";
    btnSelectedName17 = "secondCollection17";
};

document.getElementById("thirdCollection17").onclick = function () {
    document
        .getElementById("thirdCollection17")
        .classList.toggle("selectedPicture17");
    document
        .getElementById("firstCollection17")
        .classList.remove("selectedPicture17");
    document
        .getElementById("secondCollection17")
        .classList.remove("selectedPicture17");

    selectBtn17 = "wrong";
    btnSelectedName17 = "thirdCollection17";
};

function question17() {
    if (btnSelectedName17) {
        if (selectBtn17 === "right") {
            document
                .getElementById(btnSelectedName17)
                .classList.toggle("success17");
        } else {
            document
                .getElementById(btnSelectedName17)
                .classList.toggle("error17");
        }

        if (selectBtn17 === "right") {
            addImage(
                "success",
                document.getElementsByClassName("question17"),
                "app17",
                17
            );
        } else {
            addImage(
                "failure",
                document.getElementsByClassName("question17"),
                "app17",
                17
            );

            addCorrectAnswerQuestion17();
        }
    } else {
        document
            .getElementById("firstCollection17")
            .classList.remove("selectedPicture17");

        document.getElementsByClassName("bottomRow17")[0].style.border =
            "1px solid #FFB47D";
    }
}

// 18 QUESTION

function question18() {
    if (selectBtn18 !== "") {
        succerror(
            document.getElementById(nameSelectedBtn18),
            selectBtn18 === "wrong"
        );

        // выносим общий статус к номеру вопроса

        if (selectBtn18 === "right") {
            addImage(
                "success",
                document.getElementsByClassName("question18"),
                "app18",
                18
            );
        } else {
            addImage(
                "failure",
                document.getElementsByClassName("question18"),
                "app18",
                18
            );

            addCorrectAnswerQuestion18();
        }
    } else {
        document.getElementById("firstBtn18").style.border =
            "2px solid #FFB47D";
        document.getElementById("secondBtn18").style.border =
            "2px solid #FFB47D";
        document.getElementById("thirdBtn18").style.border =
            "2px solid #FFB47D";
    }
}

// 19 QUESTION

let selectBtn19 = "right",
    btnSelectedName19;

document.getElementById("firstCollection19").onclick = function () {
    document
        .getElementById("firstCollection19")
        .classList.toggle("selectedPicture19");
    document
        .getElementById("secondCollection19")
        .classList.remove("selectedPicture19");
    document
        .getElementById("thirdCollection19")
        .classList.remove("selectedPicture19");

    selectBtn19 = "wrong";
    btnSelectedName19 = "firstCollection19";
};

document.getElementById("secondCollection19").onclick = function () {
    document
        .getElementById("secondCollection19")
        .classList.toggle("selectedPicture19");
    document
        .getElementById("firstCollection19")
        .classList.remove("selectedPicture19");
    document
        .getElementById("thirdCollection19")
        .classList.remove("selectedPicture19");

    selectBtn19 = "wrong";
    btnSelectedName19 = "secondCollection19";
};

document.getElementById("thirdCollection19").onclick = function () {
    document
        .getElementById("thirdCollection19")
        .classList.toggle("selectedPicture19");
    document
        .getElementById("firstCollection19")
        .classList.remove("selectedPicture19");
    document
        .getElementById("secondCollection19")
        .classList.remove("selectedPicture19");

    selectBtn19 = "right";
    btnSelectedName19 = "thirdCollection19";
};

function question19() {
    if (btnSelectedName19) {
        if (selectBtn19 === "right") {
            document
                .getElementById(btnSelectedName19)
                .classList.toggle("success19");
        } else {
            document
                .getElementById(btnSelectedName19)
                .classList.toggle("error19");
        }

        if (selectBtn19 === "right") {
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
        document
            .getElementById("thirdCollection19")
            .classList.remove("selectedPicture19");

        document.getElementsByClassName("content19")[0].style.border =
            "1px solid #FFB47D";
    }
}

// 20 QUESTION

let numbers20 = {
    firstNumber: "",
    secondNumber: "",
    thirdNumber: "",
    fourthNumber: "",
};

gettingDataFromFields(4, [3, 27, 3, 33], 20, numbers20);

function question20() {
    // проверяем на присутствие знака
    let requiredElement = document.getElementsByClassName("forSign20")[0];
    let selectedSign = requiredElement.textContent.trim();

    if (
        numbers20.firstNumber != "" &&
        numbers20.secondNumber != "" &&
        numbers20.thirdNumber != "" &&
        numbers20.fourthNumber != "" &&
        selectedSign != ""
    ) {
        succerrorAndCreateMiniIcon(4, 20, numbers20);
        succerror(requiredElement, selectedSign !== "<");

        // выносим общий статус к номеру вопроса

        if (
            numbers20.firstNumber === "right" &&
            numbers20.secondNumber === "right" &&
            numbers20.thirdNumber === "right" &&
            numbers20.fourthNumber === "right" &&
            selectedSign === "<"
        ) {
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
        highlightUnselectedBlocks(4, 20, numbers20);

        if (selectedSign !== "<") {
            requiredElement.style.border = "2px solid #FFB47D";
        }
    }
}

// 21 QUESTION

function drag21(e) {
    localStorage.setItem("idOrigin21question2class", e.target.id);
}

function drop21(e) {
    // получаем id, позицию и класс текущего
    let idOrig = localStorage.getItem("idOrigin21question2class");
    let idCurn = e.target.id;
    let classCurn = e.target.parentElement.className;
    let positionOrig = idOrig.slice(-1) - 1;

    // получаем объекты
    let orgnElement = document.getElementById(idOrig);
    let crntElement = document.getElementById(idCurn);

    // копируем переносимый объект в новый
    let copyObj = document.createElement("img");
    copyObj.src = "./pictures/21que/" + idOrig.slice(0, -1) + ".svg";
    copyObj.id = idOrig;
    copyObj.style.cursor = "grab";
    copyObj.style.marginTop = "10px";
    copyObj.style.marginLeft = "10px";

    orgnElement.style.opacity = 0.3;
    orgnElement.parentElement.style.cursor = "default";

    if (orgnElement.parentElement.id === "") {
        // вставляем переносимый объект в корзину
        crntElement.appendChild(copyObj);
    }

    // теперь делаем перенос обратно
    if (orgnElement.parentElement.id === "basket21") {
        let crnt =
            document.getElementsByClassName(classCurn)[0].children[
                positionOrig
            ];

        crnt.id = idOrig;
        crnt.src = "./pictures/21que/" + idOrig.slice(0, -1) + ".svg";
        crnt.style.cursor = "grab";
        crnt.style.opacity = 1;

        orgnElement.remove();
    }
}

function question21() {
    let basket = document.getElementById("basket21");

    if (basket.children.length !== 2) {
        if (basket.children.length === 8) {
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
        basket.style.border = "2px solid #FFB47D";
    }
}

// 22 QUESTION

let numbers22 = {
    firstNumber: "",
    secondNumber: "",
    thirdNumber: "",
    fourthNumber: "",
};

gettingDataFromFields(4, [7, 3, 4, 2], 22, numbers22);

function question22() {
    if (
        numbers22.firstNumber != "" &&
        numbers22.secondNumber != "" &&
        numbers22.thirdNumber != "" &&
        numbers22.fourthNumber != ""
    ) {
        succerror(
            document.getElementById("firstNumber22"),
            numbers22.firstNumber === "wrong"
        );

        succerror(
            document.getElementById("secondNumber22"),
            numbers22.secondNumber === "wrong"
        );

        succerror(
            document.getElementById("thirdNumber22"),
            numbers22.thirdNumber === "wrong"
        );

        succerror(
            document.getElementById("fourthNumber22"),
            numbers22.fourthNumber === "wrong"
        );

        // выносим общий статус к номеру вопроса

        if (
            numbers22.firstNumber === "right" &&
            numbers22.secondNumber === "right" &&
            numbers22.thirdNumber === "right" &&
            numbers22.fourthNumber === "right"
        ) {
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
        highlightUnselectedBlocks(4, 22, numbers22);
    }
}

// 23 QUESTION

function question23() {
    let necessaryPlace1 = document.getElementsByClassName("emptyPlace23")[0];
    let necessaryPlace2 = document.getElementsByClassName("emptyPlace23")[1];
    let necessaryPlace3 = document.getElementsByClassName("emptyPlace23")[2];
    let necessaryPlace4 = document.getElementsByClassName("emptyPlace23")[3];

    let nameChild1 = necessaryPlace1.children[0].id.slice(0, -1);
    let nameChild2 = necessaryPlace2.children[0].id.slice(0, -1);
    let nameChild3 = necessaryPlace3.children[0].id.slice(0, -1);
    let nameChild4 = necessaryPlace4.children[0].id.slice(0, -1);

    if (
        nameChild1 !== "emptyPlace" &&
        nameChild2 !== "emptyPlace" &&
        nameChild3 !== "emptyPlace" &&
        nameChild4 !== "emptyPlace"
    ) {
        if (
            nameChild1 === "triangle" &&
            nameChild2 === "trapezium" &&
            nameChild3 === "pentagon" &&
            nameChild4 === "hexagon"
        ) {
            addImage(
                "success",
                document.getElementsByClassName("question23"),
                "app23",
                23
            );
        } else {
            if (nameChild1 !== "triangle") {
                necessaryPlace1.style.border = "2px solid #ED7777";
            }

            if (nameChild2 !== "trapezium") {
                necessaryPlace2.style.border = "2px solid #ED7777";
            }

            if (nameChild3 !== "pentagon") {
                necessaryPlace3.style.border = "2px solid #ED7777";
            }

            if (nameChild4 !== "hexagon") {
                necessaryPlace4.style.border = "2px solid #ED7777";
            }

            addImage(
                "failure",
                document.getElementsByClassName("question23"),
                "app23",
                23
            );

            addCorrectAnswerQuestion23();
        }
    } else {
        if (nameChild1 === "emptyPlace") {
            necessaryPlace1.style.border = "2px solid #FFB47D";
        }

        if (nameChild2 === "emptyPlace") {
            necessaryPlace2.style.border = "2px solid #FFB47D";
        }

        if (nameChild3 === "emptyPlace") {
            necessaryPlace3.style.border = "2px solid #FFB47D";
        }

        if (nameChild4 === "emptyPlace") {
            necessaryPlace4.style.border = "2px solid #FFB47D";
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
