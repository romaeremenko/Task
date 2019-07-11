/* 1 задача */
function removeProperty(obj, prop) {
    for (key in obj) {
        if (key === prop) {
            delete obj[prop];
            return true;
        }
    }
    return false;
}

/* 2 задача */
function formatDate(userDate) {
    return userDate.substr(6, 4) + userDate.substr(3, 2) + userDate.substr(0, 2);
}

/* 3 задача */
function Worker(firstName, lastName, rate, days) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.rate = rate;
    this.days = days;

    this.getRate = function () {
        return this.rate
    }

    this.getDays = function () {
        return this.days;
    }

    this.getSalary = function () {
        return this.rate * this.days;
    }

    this.setRate = function (newRate) {
        this.rate = newRate;
    }

    this.setDays = function (newDays) {
        this.days = newDays;
    }
}

function PreciousWorker(firstName, lastName, rate, days, arg) {
    Worker.apply(this, arguments); // (2)

    this._arg = arg;

    this.getSalary = function () {
        return this.rate * this.days * this._arg;
    }
}