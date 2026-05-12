// Problem 1 Solution

const filterEvenNumbers = (arr : number[]) : number[] => {
    return arr.filter((n) => !(n % 2 === 1)); 
};

// console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6]));
// // output- [ 2, 4, 6 ]

// Problem 2 Solution

const reverseString = (str : string) : string => {
    return str.split('').reverse().join('');
};

// console.log(reverseString("typescript"));
// // output- tpircsepyt

// Problem 3 Solution

type StringOrNumber = string | number ;

const checkType = (input : StringOrNumber) => {
    return typeof input === 'string' ?
        'String' :
            typeof input === 'number' ?
                'Number' :
                    undefined;
}

// console.log(checkType(42));             // output- Number
// console.log(checkType("Hello"));        // output String

// Problem 4 Solution

const getProperty = <T> (obj: T, key : keyof T) => {
    return obj[key];
};

const user = { id: 1, name: "John Doe", age: 21 };
getProperty(user, "name");

// console.log(getProperty(user, "name"));
// // output - John Doe

// Problem 5 Solution

interface Book {
    title: string;
    author: string;
    publishedYear: number;
}

const toggleReadStatus = (book: Book) => {
    return {
        ...book,
        isRead : true,
    }
};

const myBook = { title: "TypeScript Guide", author: "Jane Doe", publishedYear: 2024 };
toggleReadStatus(myBook);

// console.log(toggleReadStatus(myBook));
// output
/*
{
  title: 'TypeScript Guide',
  author: 'Jane Doe',
  publishedYear: 2024,
  isRead: true
}
*/

// Problem 6 Solution

class Person {
    name : string;
    age : number;

    constructor(name : string, age : number) {
        this.name = name;
        this.age = age;
    }
}

class Student extends Person {
    grade: string;

    constructor(name: string, age: number, grade: string) {
        super(name, age);
        this.grade = grade;
    }

    getDetails () {
        return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`;
    }
}

const student = new Student("Alice", 20, "A");
student.getDetails();

// console.log(student.getDetails());
// output- Name: Alice, Age: 20, Grade: A

// Problem 7 Solution

const getIntersection = (arr1: number[], arr2: number[]) => {
    return arr1.filter((num) => {
        return arr2.includes(num);
    });
};

getIntersection([1, 2, 3, 4, 5], [3, 4, 5, 6, 7]);

// console.log(getIntersection([1, 2, 3, 4, 5], [3, 4, 5, 6, 7]));
// output- [ 3, 4, 5 ]