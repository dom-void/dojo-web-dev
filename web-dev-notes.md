# TOC

- [TOC](#toc)
- [JS](#js)
  - [Object destructuring](#object-destructuring)

# JS

## Object destructuring

```js
const obj = {
  name: 'my name',
  location: 'my location',
  language: {
    native: 'my native language',
    learned: 'other language I have learned',
  },
};

const {
  name,
  location: myLocation,
  language: {
    native: first,
    learned,
    other: someOther = 'no such language',
  },
  age,
} = obj;

console.log({ name }, { myLocation }, { first }, { learned }, { someOther }, { age });
```

```js
{name: "my name"} {myLocation: "my location"} {first: "my native language"} {learned: "other language I have learned"} {someOther: "no such language"} {age: undefined}
```