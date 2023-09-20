# Edgecom Dashboard

By Jason Huang

This app can be run by using

```
npm start
# node v18.17.1
# npm v9.6.7
```

or by running

```
bun start
# bun v1.0.0
```

This project follows the requirements outlined by Task 1 of the [Frontend Developer Code Challenge](https://docs.google.com/document/d/1dEjzU6cdnwOX66y6h8REi8U5JrFZk-AAAKHNLyGugJ4/preview#heading=h.7f54bdsamfhu)

Since there is no API, the server is mocked by using localStorage for persisting data.
Interacting with the data is done through the `user` and `article` contexts. On first load the data will be prepopulated with some values as a starting point.

```
# you can log in with the existing user or create your own
user: test@test.com
pw: Test1234
```

Example schema for persitent data

```
users
{
  id: string, # emails are used as id since the values are unique
  password: string, # should be hashed when saved to database
}
```

```
articles
{
  id: string, # uuid
  createAt: Date,
  title: string,
  description: string,
  user: string, # points to user.id
}
```

We also store a session for the logged in user in the `user` key of localStorage

## UX Behaviors

- The page should first load into a login screen.
  - Allows for sign-in or sign-up.
  - Returns error messages on unsuccessful attempts.
- On successful login, user will be brought to the main dashboard.
  - User may create, edit, or delete articles.
  - Edit and delete functions are restricted only to the owner of the article.
- Pages are responsive to above 320px as that is the smallest screen size available to most handheld devices.

## Images
![image](https://github.com/JayTLH/edgecom-dashboard/assets/53625509/34bd2340-2b85-44c2-a16c-f22966ef6fbe)
![image](https://github.com/JayTLH/edgecom-dashboard/assets/53625509/d47a3d4e-f37f-4ef5-8f31-b047f4418ae3)
![image](https://github.com/JayTLH/edgecom-dashboard/assets/53625509/8d7425bc-c161-46f5-af5f-a88974be777b)

