var henry = {
    name: "Henry",
    age: 30,
    speak: function (text) {
        console.log(text);
    },
    spend: function (amt) {
        return amt;
    }
};
henry.speak("Java");
console.log(henry);
var helloPerson = function (onePerson) {
    return console.log("Hello ".concat(onePerson.name));
};
helloPerson(henry);
