# GitHub Search App
Search for github users to get their information including name, picture, then click the name to get top repositories.
![Github search Screen Recording](https://i.imgur.com/JQhVSva.gif)

## Information
The app was created with pure JS without taking the design in mind.


## GitHub API

Using the GitHub API [here](https://developer.github.com/v3/) we can view documentation of github users.

#### [User Search Endpoint](https://developer.github.com/v3/search/#search-users)

You can search for users matching a certain name. For example, if we wanted to
find all users name `octocat`, we would make a `GET` request to
`https://api.github.com/search/users?q=octocat`. To view the response, you can
copy and paste that URL into your browser.

This endpoint is rate limited. This means the API will stop returning data if
you make more than
[10 requests per minute](https://developer.github.com/v3/search/#rate-limit).

#### [User Repos Endpoint](https://developer.github.com/v3/repos/#list-user-repositories)

You can find all the public repositories for a user using this endpoint. For
example if we wanted to find all the repositories for a user with GitHub
username `octocat`, we would make a `GET` request to
`https://api.github.com/users/octocat/repos`. To view the response, you can copy
and paste that URL into your browser.

This endpoint is rate limited. This endpoint will stop returning data if you
make more than
[60 requests in an hour](https://developer.github.com/v3/#rate-limiting).

## Deliverables

1. The `index.html` file has a form with a search input. When the form is
   submitted, it takes the value of the input and search GitHub for user
   matches using the [User Search Endpoint](#user-search-endpoint).
2. Using the results of the search, the app displays information about the users to the
   page. 
3. Clicking on one of these users sends a request to the
   [User Repos Endpoint](#user-repos-endpoint) and return data about all the
   repositories for that user then the app displays them.

