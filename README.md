# Form handler with redux, react-bootstrap and Next.js

#### [Demo](https://redux-form-bugjunbzww.now.sh)

## How it works

#### Just call the Input from handlers and pass some props:

* controlLabel
* disabled
* type
* title (Title of the form)
* name (Name of the input)
* value

### e.g
```javascript
<Input controlLabel="Name" title="user" name="name" />
<Input controlLabel="Last name" title="user" name="lastName" />
<Input controlLabel="Email" type="email" title="user" name="email" />
<Input controlLabel="Password" type="password" title="user" name="password" />
```
```json
{
  "formReducer": {
    "user": {
      "name": "",
      "lastName": "",
      "email": "",
      "password": ""
    }
  }
}
```


