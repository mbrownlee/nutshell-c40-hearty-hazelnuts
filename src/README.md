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