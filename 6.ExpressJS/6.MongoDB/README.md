### save();
- Updating existing documents: When you've modified a document instance and want to persist changes
- Working with document instances: When you already have a Mongoose document object

```js
const user = new User({ name: 'John', email: 'john@example.com' });
await user.save();

const existingUser = await User.findById(userId);
existingUser.email = 'newemail@example.com';
await existingUser.save(); 
```

- Works on document instances
- Executes validation and middleware
- Can be used for both creation and updates

### create();
The create() method is designed for creating new documents and is ideal when:

- Creating single or multiple new documents: More straightforward than new + save()
- You have raw data objects: No need to instantiate document objects first
- Want built-in validation: Automatically runs validation before insertion

```js
const user = await User.create({ name: 'John', email: 'john@example.com' });

const users = await User.create([
  { name: 'John', email: 'john@example.com' },
  { name: 'Jane', email: 'jane@example.com' }
]);
```
### insertMany();
Bulk operations.
passes as Array.

> Best Practices

- Use create() for standard document creation in your appl
- Use save() when working with existing document instances or need fine-grained control
- Use insertMany() for data imports, migrations, or when inserting large batches

