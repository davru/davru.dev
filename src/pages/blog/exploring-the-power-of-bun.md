---
layout: ../../layouts/BlogPost.astro
---

![Discover 5 powerful TypeScript tips to improve your code. Learn how to use key utility types like Partial and Omit, optimize type inference, enforce immutability with as const, implement type guards, and leverage conditional types with extends. [CAPTION]](/images/typescript.webp)

TypeScript has become an indispensable tool for modern frontend developers. It offers the flexibility of JavaScript while adding a powerful type system that can prevent bugs, improve code quality, and provide better tooling support. However, many developers only scratch the surface of TypeScript’s capabilities. In this blog post, we will explore five advanced TypeScript tips that will help you unlock its full potential. By using these tips, you can write more robust, maintainable, and scalable applications.

## 1\. Type guards

Type assertions (also known as type casting) are often used when developers want to tell TypeScript that they "know better" about a variable's type. However, relying on type assertions can lead to runtime errors if used incorrectly. A better approach is to use type guards.

Type guards are functions or conditions that refine the type of a variable within a block of code. This allows TypeScript to narrow the type automatically based on the runtime check.

```ts
function isString(value: unknown): value is string {
  return typeof value === 'string';
}

function printValue(value: string | number) {
  if (isString(value)) {
    console.log(value.toUpperCase()); // TypeScript knows value is a string here
  } else {
    console.log(value.toFixed(2)); // TypeScript knows value is a number here
  }
}
```

By using type guards, you can avoid type assertions and let TypeScript safely infer the type, reducing the risk of runtime errors.

## 2\. Immutable types

In many cases, ensuring immutability in your data structures is critical, especially in state management (such as using Redux or other frameworks). One simple yet powerful trick in TypeScript is to use the `as const` keyword.

When you declare an array or an object using `as const`, it locks down the values to their literal types, making them immutable.

```ts
const colors = ['red', 'green', 'blue'] as const;

// Now TypeScript treats each item as its literal type
// 'red' | 'green' | 'blue' instead of string
```

This can be especially useful when you’re working with fixed sets of values or enums and want to ensure those values don't change.

```ts
const position = {
  x: 10,
  y: 20
} as const;

// position.x = 15; // Error: Cannot assign to 'x' because it is a read-only property.
```

## 3\. Type inferring with union types

When working with union types, it can be tricky to infer a type based on a condition. One powerful feature of TypeScript is the use of the `extends` keyword to create conditional types, which are types that change based on a condition.

For example, let’s say we want to create a utility type that checks whether a type is part of a union:

```ts
type IsNumber<T> = T extends number ? true : false;

type A = IsNumber<number>; // true
type B = IsNumber<string>; // false
```

Using `extends` you could also enforece a class to infer a type from its constructor arguments using TypeScript generics. It allows for strong typing and flexibility, enabling you to create instances of the class with various types while maintaining type safety

```ts
class Class<T> {
  constructor(value: T) {}
}

// Creating an instance with a string
const stringHolder = new ValueHolder<string>('Hello, TypeScript!');

// You can also use type inference from the argument, type argument is not required
const inferredHolder = new ValueHolder('Inferred type!'); // T inferred as string
```

## 4\. Use these useful Utility types

TypeScript provides several built-in utility types that simplify everyday tasks. Here are a few essential ones that every developer should know:

- `Partial<T>`: This utility type takes an object type `T` and makes all of its properties optional. This is useful when you need to construct an object incrementally or conditionally.

  ```ts
  interface User {
    id: number;
    name: string;
    age: number;
  }

  // Now User props are all optional
  type OptionalUser = Partial<User>;
  ```

- `Required<T>`: Being the opposite of Partial, it takes an object type and makes all properties mandatory, even if they were originally optional.

  ```ts
  interface Config {
    debug?: boolean;
    logLevel?: string;
  }

  // Now debug and logLevel props are mandatory
  type RequiredConfig = Required<Config>;
  ```

- `Omit<T, K>:` Omit allows you to create a type by picking all properties from `T` except for those specified in `K`. This is helpful when you need most of an object’s properties but want to exclude a few.

  ```ts
  interface Post {
    title: string;
    content: string;
    published: boolean;
  }

  type PostWithoutPublished = Omit<Post, 'published'>;
  ```

- `Pick<T, K>`: Pick is the inverse of Omit; it lets you create a new type by selecting only the specified properties.

  ```ts
  type PostTitleAndContent = Pick<Post, 'title' | 'content'>;
  ```

- `Readonly<T>`: This utility type makes all properties of a type immutable, ensuring that once a value is set, it cannot be changed.

  ```ts
  interface Car {
    brand: string;
    model: string;
  }

  const myCar: Readonly<Car> = {
    brand: 'Tesla',
    model: 'Model 3'
  };

  // myCar.brand = "BMW"; // Error: Cannot assign to 'brand' because it is a read-only property.
  ```
