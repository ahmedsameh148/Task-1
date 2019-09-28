var fs = require('fs');
var rowData = fs.readFileSync('db.json');
var members = JSON.parse(rowData);
var Member = /** @class */ (function () {
    function Member() {
        this.firstName = "";
        this.middleName = "";
        this.lastName = "";
        this.fullName = "";
        this.committee = "";
        this.joinDate = new Date();
    }
    return Member;
}());
var grid = [];
var committees = [];
var check = function (name) {
    var i;
    for (i = 0; i < committees.length; ++i) {
        if (committees[i] === name)
            return i;
    }
    return i;
};
for (var i = 0; i < 100; i++) {
    grid[i] = [];
}
for (var i = 0; i < members.length; i++) {
    var tmp = new Member();
    tmp.committee = members[i].committee;
    tmp.firstName = members[i].firstName;
    tmp.joinDate = members[i].joinDate;
    tmp.lastName = members[i].lastName;
    tmp.middleName = members[i].middleName;
    tmp.fullName = members[i].firstName + " " + members[i].middleName + " " + members[i].lastName;
    var committe = tmp.committee;
    var idx = check(committe);
    if (grid[idx].length > 0) {
        grid[idx].push(tmp);
    }
    else {
        committees.push(committe);
        grid[idx].push(tmp);
    }
}
;
for (var i = 0; i < grid.length; i++) {
    if (grid[i].length <= 0)
        continue;
    console.log("\n======================== " + committees[i] + " ====================");
    grid[i].sort(function (a, b) {
        if (a.fullName < b.fullName)
            return -1;
        else if (a.fullName > b.fullName)
            return 1;
        else
            return 0;
    });
    for (var y = 0; y < grid[i].length; y++) {
        console.log((y + 1) + "- Name : " + grid[i][y].fullName + " , Joined In : " + grid[i][y].joinDate);
    }
}
