// массив объектов

// Создать массив объектов. В каждом объекте должна содержаться информация о человеке: 
// имя, пол, год рождения. 
// Объектов должно быть 5-10.

// посчитать средний возраст
// определить представителей какого пола больше
//  вывести ответы в консоль

// Другой вариант записи:

    // var person1 = {name: 'Vasia', sex: 'male', age: 1995};
    // var person2 = {name: 'Tania', sex: 'female',age: 1984};
    // var person3 = {name: 'Alex', sex: 'male', age: 2001};
    // var person4 = {name: 'Serge',sex: 'male', age: 2003};
    // var person5 = {name: 'Olia', sex: 'female', age: 1998};
    // var person6 = {name: 'Sara', sex: 'female', age: 1966};
    // var person7 = {name: 'Nata', sex: 'female', age: 1981};
    // var person8 = {name: 'Kolia', sex: 'male', age: 1976};

    // var people = [ person1, person2, person3, person4, person5, person6, person7, person8];

    var people = [{name: 'Vasia', sex: 'male', age: 1995},{name: 'Tania', sex: 'female',age: 1984},
                    {name: 'Alex', sex: 'male', age: 2001},{name: 'Serge',sex: 'male', age: 2003},
                    {name: 'Olia', sex: 'female', age: 1998},{name: 'Sara', sex: 'female', age: 1966},
                    {name: 'Nata', sex: 'female', age: 1981},{name: 'Kolia', sex: 'male', age: 1976}];

    function averageAge(x){
        var totalAge = 0;
        for(var i = 0; i < x.length; i++){
            totalAge += (new Date().getFullYear() - x[i].age);
        }
        return Math.round (totalAge / x.length);
    }

    console.log ('Средний возраст ' + averageAge(people) + ' год.');


    var countMale = people.filter(function(men){
        return men.sex === 'male';
    });

    var countFemale = people.length - countMale.length;

    if (countMale.length > countFemale){
        console.log ('Мужчин больше.');

    } else if (countMale.length < countFemale){
        console.log ('Женщин больше.');
    } else {
        console.log ('Одинаковое количество мужчин и женщин.');
    }