// массив объектов

// Создать массив объектов. В каждом объекте должна содержаться информация о человеке: 
// имя, пол, год рождения. 
// Объектов должно быть 5-10.

// посчитать средний возраст
// определить представителей какого пола больше
//  вывести ответы в консоль

// Другой вариант записи:

    // var person1 = {name: 'Vasia', sex: 'male', age: 25};
    // var person2 = {name: 'Tania', sex: 'female',age: 34};
    // var person3 = {name: 'Alex', sex: 'male', age: 18};
    // var person4 = {name: 'Serge',sex: 'male', age: 37};
    // var person5 = {name: 'Olia', sex: 'female', age: 21};
    // var person6 = {name: 'Sara', sex: 'female', age: 51};
    // var person7 = {name: 'Nata', sex: 'female', age: 35};
    // var person8 = {name: 'Kolia', sex: 'male', age: 42};

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

    function humanSex(x){
        var maleSex = 0; 
        var femaleSex = 0;
        for (var i = 0; i < x.length; i++){
            switch (x[i].sex){
                case 'male': maleSex++;
                    break;
                case 'female': femaleSex++;
                    break;
            }
        }
        if ( maleSex > femaleSex ){
            return 'Мужчин больше.';
        } else if( maleSex < femaleSex ){
            return 'Женщин больше.';
        } else {
            return 'Одинаковое количество мужчин и женщин.'
        }
    }

        
    console.log ('Средний возраст ' + averageAge(people) + ' год.');
    console.log (humanSex(people));