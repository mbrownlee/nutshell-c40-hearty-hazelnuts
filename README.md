# Welcome to Nutshell! 
## Social task manager
> "I have all these tasks and all these friends, but no platform to connect the two!" 

Sound familiar? The team at Hearty Hazelnuts thought so, and we've taken the problem to task. Find events, read news, write messages, and organize your tasks--all in one handy app! 

## FAQ

* How can I use the app? 

You'll need to make an account first! Think up your best username and a password that can easily be hacked, and then you're in. You'll also need to make a local database.json file in an API folder. This API folder will go on the same level as your SRC folder. From there, you'll need create a basic database structure, too. We'll list the database structure at the bottom of this README file! 

* Who can use the app? 

Anyone with a task in mind they'd like to keep track of. If you fancy relevant events and news articles, even better. Like messaging people who have done similar things in the past? That's another bingo, baby.

* Is my information secure? 

Absolutely not. We've implemented no security features beyond basic account validation. Don't use your personal passwords! 

* How can I repay the Hearty Hazelnuts for all their hard work? 

The Hazelnuts' pride is all they need. Thank you for your comments. 

> Created by the Hearty Hazelnuts ft. Brian, Michelle, Tom, & Zach

## Database Structure

{
  "users": [
    {
      "id": 1,
      "username": "Example User",
      "email": "example@example.com",
      "password": "example"
    }
  ],
  "messages": [
    {
      "id": 1,
      "userId": 1,
      "description": "This is an example message."
    }
  ],
  "news": [
    {
      "id": 1,
      "userId": 1,
      "description": "Example News Description",
      "url": "url",
      "title": "Example News Title",
      "synopsis": "This is an example.",
      "timestamp": "Wed, 27 July 2020 13:30:00"
    }
  ],
  "tasks": [
    {
      "userId": 1,
      "title": "Completed Task Example",
      "description": "This task is completed.",
      "compDate": "2001-05-16",
      "complete": true,
      "id": 1
    },
    {
      "userId": 1,
      "title": "Incomplete Task Example",
      "description": "This task is yet to be finished.",
      "compDate": "2030-12-25",
      "complete": false,
      "id": 2
    }
  ],
  "events": [
    {
      "date": "2020-05-20",
      "event": "Example Event",
      "location": "Event Location",
      "id": 1
    }
  ]
}


# Nutshell: The Information Dashboard

## Setup: Follow these steps exactly

1. Clone this repository
1. `cd` into the directory it creates
1. Make a `database.json` file in the `api` directory
1. Delete the `.ignore` file in the `api` directory

> **Note:** Your `database.json` file is already in the `.gitignore` file for this project, so it will never be added to the repo or pushed to Github.

## Instructions

Nutshell is a new product offering that you have been tasked with building. It's a dashboard for people to use to organize their daily tasks, events, news article, friends, and chat messages.

You will be utilizing all of the skills and concepts that you've learned up to this point in the course.

1. Functions
1. Databases
1. Github
1. Objects
1. CSS/Flexbox
1. Array methods
1. Components
1. Handling user events
1. Implementing CRUD operations
1. Relational data
1. ERDs

To start you off, here's an example of what the resources in your API should look like once it's populated with some data from your application.

### Users

```json
{ "id": 1, "username": "Steve", "email": "me@me.com", "password": "xxxxxxxxxxxxxxxxxxxxx" }
```

### Messages

```json
{ "id": 1, "userId": 1, "message": "What's up?" }
```

### News

```json
{
    "id": 1,
    "userId": 2,
    "url": "https://www.quantamagazine.org/newfound-wormhole-allows-information-to-escape-black-holes-20171023/",
    "title": "Wormholes Allow Information to Escape Black Holes",
    "synopsis": "Check out this recent discovery about workholes"
}
```

### Friends

```json
{ "id": 1, "userId": 1, "following": 3 }
```

### Tasks

```json
{ "id": 1, "userId": 3, "task": "Take out garbage", "complete": false }
```

## Professional Requirements

1. Each module should have a comment at the top with the following info: author(s) and purpose of module
1. The README for your project should include instructions on how another person can download and run the application

## How to Handle Authentication

Be very clear that what you will be implemeting is not real authentication. It is a simulation of it using very simplistic tools.

You will be using session storage to keep track of which user has logged into Nutshell. When the user fills out the registration form, you will POST their email, username and password to the `users` collection in your API. You will then immediately take the `id` of the object in the response and save it to [session storage](https://javascript.info/localstorage#sessionstorage).

```js
sessionStorage.setItem("activeUser", user.id)
```

If you want to add a Logout feature, all you need to do it remove the session storage item.

```js
sessionStorage.removeItem("activeUser")
```
