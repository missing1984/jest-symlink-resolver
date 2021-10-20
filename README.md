# jest-symlink-resolver

a jest resolver that preserves symlinks

```
yarn add jest-symlink-resolver
```

Add it to jest.config.js

```js
module.exports = {
  resolver: require.resolve("jest-symlink-resolver"),
};
```
