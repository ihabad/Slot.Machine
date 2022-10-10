
var item1 = document.getElementById('item1');
var item2 = document.getElementById('item2');
var item3 = document.getElementById('item3');
var item4 = document.getElementById('item4');
var item5 = document.getElementById('item5');
var item6 = document.getElementById('item6');
var item7 = document.getElementById('item7');
var item8 = document.getElementById('item8');
var item9 = document.getElementById('item9');
var item1Start = item1.style.top;
var bottom = document.getElementById('bottom').offsetTop;

// Times the columns will spin
var col1times = 20;
var col2times = 35;
var col3times = 55;
var col1MaxTimes = 0;
var col2MaxTimes = 0;
var col3MaxTimes = 0;

// Sum of all max times
var sumMaxTimes = 0;
var roundSumMaxTimes = 0;

// Times each item passed per column
var column1Passed = 0;
var column2Passed = 0;
var column3Passed = 0;

// Intervals
var column1Interval;
var column2Interval;
var column3Interval;

// Current item
var currentCol1;
var currentCol2;
var currentCol3;

// Score
var score = 0;

function start() {
    document.getElementById('start').style.display = 'none';
    document.getElementById('win').style.display = 'none';

    // Number of extra spins
    add = Math.floor((Math.random() * 10) + 1);
    col1MaxTimes = col1times + add;
    column1Interval = setInterval(function () {
        scrollCol1(col1MaxTimes);
    }, 15);
    add = Math.floor((Math.random() * 10) + 1);
    col2MaxTimes = col2times + add;
    column2Interval = setInterval(function () {
        scrollCol2(col2MaxTimes);
    }, 15);
    add = Math.floor((Math.random() * 10) + 1);
    col3MaxTimes = col3times + add;
    column3Interval = setInterval(function () {
        scrollCol3(col3MaxTimes);
    }, 15);
    sumMaxTimes = col1MaxTimes + col2MaxTimes + col3MaxTimes;
}

function scrollCol1() {
    var i1 = parseInt((item1.style.top).replace('px', ''));
    var i2 = parseInt((item2.style.top).replace('px', ''));
    var i3 = parseInt((item3.style.top).replace('px', ''));
    item1.style.top = (i1 + 15) + 'px';
    item2.style.top = (i2 + 15) + 'px';
    item3.style.top = (i3 + 15) + 'px';
    var offset = 55;
    if (parseInt(item1.style.top) > parseInt(bottom + offset)) {
        item1.style.top = item1Start;
        column1Passed++;
        roundSumMaxTimes++;
        currentCol1 = "2";
    }
    if (parseInt(item2.style.top) > parseInt(bottom + offset)) {
        item2.style.top = item1Start;
        column1Passed++;
        roundSumMaxTimes++;
        currentCol1 = "3";
    }
    if (parseInt(item3.style.top) > parseInt(bottom + offset)) {
        item3.style.top = item1Start;
        column1Passed++;
        roundSumMaxTimes++;
        currentCol1 = "1";
    }
    if (column1Passed == col1MaxTimes) {
        clearInterval(column1Interval);
    }
    checkResult();
}

function scrollCol2() {
    var i4 = parseInt((item4.style.top).replace('px', ''));
    var i5 = parseInt((item5.style.top).replace('px', ''));
    var i6 = parseInt((item6.style.top).replace('px', ''));
    item4.style.top = (i4 + 15) + 'px';
    item5.style.top = (i5 + 15) + 'px';
    item6.style.top = (i6 + 15) + 'px';
    var offset = 55;
    if (parseInt(item4.style.top) > parseInt(bottom + offset)) {
        item4.style.top = item1Start;
        column2Passed++;
        roundSumMaxTimes++;
        currentCol2 = "2";
    }
    if (parseInt(item5.style.top) > parseInt(bottom + offset)) {
        item5.style.top = item1Start;
        column2Passed++;
        roundSumMaxTimes++;
        currentCol2 = "3";
    }
    if (parseInt(item6.style.top) > parseInt(bottom + offset)) {
        item6.style.top = item1Start;
        column2Passed++;
        roundSumMaxTimes++;
        currentCol2 = "1";
    }
    if (column2Passed == col2MaxTimes) {
        clearInterval(column2Interval);
    }
    checkResult();
}

function scrollCol3() {
    var i7 = parseInt((item7.style.top).replace('px', ''));
    var i8 = parseInt((item8.style.top).replace('px', ''));
    var i9 = parseInt((item9.style.top).replace('px', ''));
    item7.style.top = (i7 + 15) + 'px';
    item8.style.top = (i8 + 15) + 'px';
    item9.style.top = (i9 + 15) + 'px';
    var offset = 55;
    if (parseInt(item7.style.top) > parseInt(bottom + offset)) {
        item7.style.top = item1Start;
        column3Passed++;
        roundSumMaxTimes++;
        currentCol3 = "2";
    }
    if (parseInt(item8.style.top) > parseInt(bottom + offset)) {
        item8.style.top = item1Start;
        column3Passed++;
        roundSumMaxTimes++;
        currentCol3 = "3";
    }
    if (parseInt(item9.style.top) > parseInt(bottom + offset)) {
        item9.style.top = item1Start;
        column3Passed++;
        roundSumMaxTimes++;
        currentCol3 = "1";
    }
    if (column3Passed == col3MaxTimes) {
        clearInterval(column3Interval);
    }
    checkResult();
}

function checkResult() {
    if (sumMaxTimes == roundSumMaxTimes) {

        // Stopped spinning
        document.getElementById('start').style.display = 'block';
        col1MaxTimes = 0;
        col2MaxTimes = 0;
        col3MaxTimes = 0;
        sumMaxTimes = 0;
        roundSumMaxTimes = 0;
        column1Passed = 0;
        column2Passed = 0;
        column3Passed = 0;
        // Check for combinations
        if (currentCol1 == currentCol2 && currentCol2 == currentCol3) {
            score += 100;
            document.getElementById('win').style.display = 'block';
        }
        else {
            if (score > 0) {
                score -= 100;
            }
        }
        document.getElementById('score').innerHTML = "SCORE: " + (score > 0 ? score : '000');
    }
}
