class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName() {
        return this.name;
    }

    getID() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }

    getRole() {
        return "Employee";
    }
}

module.exports = Employee;









/*function Employee(name, profession, id, email, officenumber) {
    this.name = name;
    this.profession = profession;
    this.id = id;
    this.email = email;
    this.officenumber = officenumber;
}

Employee.prototype.printStats = function() {
    console.log("Name: " + this.name + "\nProfession: " + this.profession + "\nID: " + this.id + "\nEmail: " + this.email + "\nOffice number: " + this.officenumber);
}; */

