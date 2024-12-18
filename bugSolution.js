```javascript
const query = { name: 'John Doe' };

const user = db.collection('users').findOne(query, { projection: { _id: 0, email: 1 } });

if (user) {
  console.log(user.email); // Access email only if user is found
} else {
  console.log('No user found');
}
```
This improved version explicitly checks if `user` is `null` before attempting to access `user.email`. This prevents errors caused by trying to access properties of a `null` object.