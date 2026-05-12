# Types in Typescript

## Type any:
any is labeled a "type safety hole", because this type does not restrict a data from being used as a input. Also the data is not being checked in runtime.

## Type unknown:
unknown is better type than any, and safe to use. unknown can be used when it is uncertain what type of data we will get from the user, and we don't want to restrict entry of that data. Afterwards, that data goes through check in runtime via conditionals, and specific response is given. 

## Type Narrowing:
Type narrowing is sorting data type through a series of condition and providing response according to specific types.
Type narrowing can be done using typeof, in and instanceof operator.

```tsx
const add1 = (num1: number | string, num2: number |string ) => {
    return typeof num1 === 'number' && typeof num2 === 'number' ?
        num1 + num2 :
            num1.toString() + num2.toString();
};

```

In the given code block, typeof operator is being used to check data type and if conditions are met, operation proceeds to next step.

## Conclusion:
Type unknown is safe to use than type any as it provides means to check the error in runtime. Also, Type Narrowing is better practice to check the data type and provide response accordingly.
