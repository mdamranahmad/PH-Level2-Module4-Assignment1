# Utility Types for Clean Code:
Among the utility types, pick and omit are great tool to create a desired copy of master interface while maintaining a clean code.

## Type pick:
Type pick allows us to create a copy of a master type, but only keeping the desired properties without declaring a duplicate interface;

```tsx
type Product = {
    id: number;
    name: string;
    price: string;
    stock: number;
    color?: string;
};

type ProductSummaryD = Pick<Product, 'id' | 'name' | 'price'>;

// output
/**
 * type ProductSummaryD = {
    id: number;
    name: string;
    price: string;
    }
 */
```

`ProductSummaryD` is a instance of `Product`, but it contains only desired properties.

## Type omit:
Type omit is a special utility type that creates a copy of master type without duplicating the type;

```tsx
type ProductSummaryWOUndProp = Omit<Product, 'stock' | 'color'>;

/**
 * type ProductSummaryD = {
    id: number;
    name: string;
    price: string;
    }
*/
```

`ProductSummaryWOUndProp` is another instance of `Product`, the some properties are omited. 

## Conclusion:
Utility type Pick and Omit create a specialized copy of master type with desired properties, and there is no requirement to declare another type again.