const isAWin = record.find(superbowlWin);

function superbowlWin(record) {

    for (let elem of record) {

        if (elem.result === `W`) {
            return elem.year;
        }

    }

}