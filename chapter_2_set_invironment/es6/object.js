const sam1 = {
    name : 'Sam',
    age : 4
};

const sam2 = {
    name : 'Sam',
    age : 4
};

const sam3 = {
    name : 'Sam',
    classification : {
        kingdom : 'Anamalia',
        phylum : 'Chordata',
        class : 'Mamalia',
        order : 'Carnivoria',
        family : 'Felidae',
        subfamily : 'Felinae',
        genus : 'Felis',
        species : 'catus'
    }
};

function printing({name, age}) {
    console.log(`${name} ${age}`);
};

function printObject(obj) {
    console.log(`${obj.name} ${obj.classification.kingdom} ${obj.classification.phylum}` + 
                `${obj.classification.class} ${obj.classification.order} ${obj.classification.family}` +
                `${obj.classification.subfamily} ${obj.classification.genus} ${obj.classification.species}`);
};

sam3.speak = function() {
    console.log("Meow!");
};

printing(sam1);
printing(sam2);
printObject(sam3);
sam3.speak();

delete sam3.classification;
delete sam3.speak;

// sam3.speak 함수가 삭제되었기 때문에, 오류발생
// sam3.speak(); 