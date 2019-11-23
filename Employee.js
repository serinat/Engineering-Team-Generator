function Employee(name, profession, id, email, officenumber) {
    this.name = name;
    this.profession = profession;
    this.id = id;
    this.email = email;
    this.officenumber = officenumber;
}

Employee.prototype.printStats = function() {
    console.log("Name: " + this.name + "\nProfession: " + this.profession + "\nID: " + this.id + "\nEmail: " + this.email + "\nOffice number: " + this.officenumber);
};