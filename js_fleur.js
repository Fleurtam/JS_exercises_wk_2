Ex 1

var newArray = [1, 2, 3]

newArray[1]

123/12 = number
"Things in quotes" = string
undefined property, a variable that has not been assigned a value

var string = "Fleur";

 if (string == "Fleur") {
 alert("Hi Fleur!");
 }

myArray = ['Thomas', 'Amber', 'Raoul']
emptyArray = []

for (i = 0; i < myArray.length; i++) {
    emptyArray.push(myArray[i]);
}



.length it is the same as in Ruby

 Ex 2
 function FirstName(fn){
 return fn;
 }
 fn = "Fleur"

 function firstLastName(fn, ln) {
   return "fn + ln"
 }

 Ex 3
 This is similar to subject in Ruby

class Person

 function Person(first, last) {
    // create "constructor"
    this.first = first;
    // public variables -- reference current object
    this.last = last;

    var privateFn = function(first, last){
    // private function
    }

    this.setName = function(first, last){
        // public function
        this.first = first;
        this.last = last;
    }

}

Person.prototype.fullName = function() {
    // extend prototype
    return this.first + ' ' + this.last;
    // even at runtime!
}
