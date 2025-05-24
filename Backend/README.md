# User Registration & Authentication Endpoint Documentation

## POST `/users/register`

### Description
This endpoint allows a new user to register by providing their first name, last name, email, and password. On successful registration, it returns a JWT token and the created user object.

---

### Request Body

Send a JSON object with the following structure:

```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "yourpassword"
}
```

#### Field Requirements

- `fullname.firstname` (string, required): Minimum 3 characters.
- `fullname.lastname` (string, optional): Minimum 3 characters if provided.
- `email` (string, required): Must be a valid email address.
- `password` (string, required): Minimum 6 characters.

---

### Responses

#### Success

- **Status Code:** `201 Created`
- **Body:**
  ```json
  {
    "token": "<jwt_token>",
    "user": {
      "_id": "...",
      "fullname": {
        "firstname": "John",
        "lastname": "Doe"
      },
      "email": "john.doe@example.com"
      // ...other user fields
    }
  }
  ```

#### Validation Error

- **Status Code:** `400 Bad Request`
- **Body:**
  ```json
  {
    "errors": [
      {
        "msg": "Invalid Email",
        "param": "email",
        "location": "body"
      }
      // ...other errors
    ]
  }
  ```

---

## POST `/users/login`

### Description
This endpoint allows an existing user to log in using their email and password. On successful authentication, it returns a JWT token and the user object.

---

### Request Body

```json
{
  "email": "john.doe@example.com",
  "password": "yourpassword"
}
```

#### Field Requirements

- `email` (string, required): Must be a valid email address.
- `password` (string, required): Minimum 6 characters.

---

### Responses

#### Success

- **Status Code:** `200 OK`
- **Body:**
  ```json
  {
    "token": "<jwt_token>",
    "user": {
      "_id": "...",
      "fullname": {
        "firstname": "John",
        "lastname": "Doe"
      },
      "email": "john.doe@example.com"
      // ...other user fields
    }
  }
  ```

#### Validation Error

- **Status Code:** `400 Bad Request`
- **Body:**
  ```json
  {
    "errors": [
      {
        "msg": "Invalid Email",
        "param": "email",
        "location": "body"
      }
      // ...other errors
    ]
  }
  ```

#### Authentication Error

- **Status Code:** `401 Unauthorized`
- **Body:**
  ```json
  {
    "message": "Invalid email or password"
  }
  ```

---

## GET `/users/profile`

### Description
Returns the authenticated user's profile information. Requires a valid JWT token in the request (usually sent as a cookie or in the `Authorization` header).

---

### Request

- **Headers:**  
  - `Authorization: Bearer <jwt_token>` (if not using cookies)

---

### Responses

#### Success

- **Status Code:** `200 OK`
- **Body:**
  ```json
  {
    "_id": "...",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com"
    // ...other user fields
  }
  ```

#### Authentication Error

- **Status Code:** `401 Unauthorized`
- **Body:**
  ```json
  {
    "message": "Authentication required"
  }
  ```

---

## GET `/users/logout`

### Description
Logs out the authenticated user by invalidating the JWT token and clearing the authentication cookie.

---

### Request

- **Headers:**  
  - `Authorization: Bearer <jwt_token>` (if not using cookies)

---

### Responses

#### Success

- **Status Code:** `200 OK`
- **Body:**
  ```json
  {
    "message": "Logout successfully"
  }
  ```

#### Authentication Error

- **Status Code:** `401 Unauthorized`
- **Body:**
  ```json
  {
    "message": "Authentication required"
  }
  ```

---

## Captain Registration & Authentication Endpoint Documentation

## POST `/captains/register`

### Description
Register a new captain (driver) by providing personal and vehicle details. Returns a JWT token and the created captain object.

---

### Request Body

```json
{
  "fullname": {
    "firstname": "Jane",        // required, string, min 3 chars
    "lastname": "Smith"         // optional, string, min 3 chars if provided
  },
  "email": "jane.smith@example.com", // required, valid email
  "password": "yourpassword",        // required, string, min 6 chars
  "vehicle": {
    "color": "Red",                  // required, string, min 3 chars
    "plate": "ABC123",               // required, string, min 3 chars
    "capacity": 4,                   // required, integer, min 1
    "vehicleType": "car"             // required, one of: "car", "bike", "truck"
  }
}
```

---

### Success Response

- **Status Code:** `201 Created`
- **Body:**
  ```json
  {
    "token": "<jwt_token>",
    "captain": {
      "_id": "...",
      "fullname": {
        "firstname": "Jane",
        "lastname": "Smith"
      },
      "email": "jane.smith@example.com",
      "vehicle": {
        "color": "Red",
        "plate": "ABC123",
        "capacity": 4,
        "vehicleType": "car"
      }
      // ...other captain fields
    }
  }
  ```

---

### Validation Error

- **Status Code:** `400 Bad Request`
- **Body:**
  ```json
  {
    "errors": [
      {
        "msg": "Invalid Email",
        "param": "email",
        "location": "body"
      }
      // ...other errors
    ]
  }
  ```

---

## POST `/captains/login`

### Description
Login as a captain using email and password. Returns a JWT token and the captain object.

---

### Request Body

```json
{
  "email": "jane.smith@example.com", // required, valid email
  "password": "yourpassword"         // required, string, min 6 chars
}
```

---

### Success Response

- **Status Code:** `200 OK`
- **Body:**
  ```json
  {
    "token": "<jwt_token>",
    "captain": {
      "_id": "...",
      "fullname": {
        "firstname": "Jane",
        "lastname": "Smith"
      },
      "email": "jane.smith@example.com",
      "vehicle": {
        "color": "Red",
        "plate": "ABC123",
        "capacity": 4,
        "vehicleType": "car"
      }
      // ...other captain fields
    }
  }
  ```

---

### Validation or Authentication Error

- **Status Code:** `400 Bad Request` or `401 Unauthorized`
- **Body:**
  ```json
  {
    "errors": [
      {
        "msg": "Invalid Email",
        "param": "email",
        "location": "body"
      }
      // ...other errors
    ]
    // or
    // { "message": "Invalid email or password" }
  }
  ```

---

## GET `/captains/profile`

### Description
Returns the authenticated captain's profile information. Requires a valid JWT token.

---

### Success Response

- **Status Code:** `200 OK`
- **Body:**
  ```json
  {
    "captain": {
      "_id": "...",
      "fullname": {
        "firstname": "Jane",
        "lastname": "Smith"
      },
      "email": "jane.smith@example.com",
      "vehicle": {
        "color": "Red",
        "plate": "ABC123",
        "capacity": 4,
        "vehicleType": "car"
      }
      // ...other captain fields
    }
  }
  ```

---

## GET `/captains/logout`

### Description
Logs out the authenticated captain by invalidating the JWT token and clearing the authentication cookie.

---

### Success Response

- **Status Code:** `200 OK`
- **Body:**
  ```json
  {
    "message": "Logout successfully"
  }
  ```

---

### Notes

- All fields are required except `fullname.lastname`.
- All endpoints except `/captains/register` and `/captains/login` require authentication.
- On success, a JWT token is returned for authentication in future requests.
