---
title: An introduction to REST APIs
date: "2021-04-07"
---

![Splash Image](./splash.png)

The term "REST API" (aka "RESTful API") is thrown around all the time when talking about web applications. But what exactly does the term REST mean? And why is it important to API design?

There's a number of various guidelines that define REST, but there are a couple key points that will help introduce and understand REST APIs.

## First, what is an API?
Before getting into what REST is, let's briefly describe an API.

**An API (Application Programming Interface) is a way of communicating with an application and tapping into some of its functionality.** For example, an API can be used to request information (data) from an application, or used to run complex computations on data passed into an API request. The application's API exposes its functionality as methods, operations, endpoints, etc., and the specific language of the API depends on the application.

_Note: in order to use an API, you need to know the functionality available and the format which it expects the the request/response to be in._

As an analogy, imagine a  vending machine. A customer walks up to the vending machine, sees a bunch of buttons for different sodas, and presses the button for the one they want. The vending machine then does a bunch of stuff behind the scenes, and pops out the soda.

The front of the machine is like the API, and the buttons are like available methods of an API. Pressing a button is like calling a method, i.e. requesting something from the application. The machine and the application both perform some magic behind closed doors and respond to the request.

The customer doesn't really care what happened behind the scenes, they just want a soda. The same is true of one application using another application's functionality through its API.

In the context of web applications, server APIs are often used to pull data from the server and/or database into the client (or vice versa, sending data from the client to the server). This is where the practice of REST comes into play.

## RESTful APIs
REST stands for <u>**Re**</u>presentational <u>**S**</u>tate <u>**T**</u>ransfer. These three words do a great job of describing the essence of a REST API, but require a little deciphering first.

Put another way, REST defines **a standard way for web applications to share information, by transferring a representation of the state of some data**.

If we break this down:
- Representational State: A snapshot of the data saved in a database, or the data sent from the client. This represents its state at the moment of the transfer.
- Transfer: The [HTTP](https://www.w3schools.com/whatis/whatis_http.asp) requests and responses between the client and the server, which allows standardized operations across the web.

**So, an application using a REST API uses HTTP requests/responses to transfer a snapshot of some data.**

Using the vending machine analogy, the "buttons" of a REST API are endpoints (i.e. URLs) and HTTP methods, and the "soda" is the representational state of the data.

As an example, a client might make an HTTP "GET" request to a server (using the JavaScript [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch) here), a little like this:

```js
fetch('some-server.com/api/tacos', {method: 'GET'});
```

The server would receive this request, do some magic based on what was requested, and respond back with a snapshot of the data at that point in time. Without going into details, the response might look a little like this:

```json
{
  "data":
    "tacos": ["carnitas", "cheese", "carne asada"]
}
```

The client could then go off and use this data as it pleases, for instance to display a menu of available tacos!

## Why is this important for web APIs?
One component of reliable and scalable web applications is separation of concerns. This is where REST guidelines shine.

When the client and server communicate via the REST API, they are sending JSON representational snapshots of data at the time of transfer. The data could change one second after the API transfer, but what the client received remains unchanged. In other words, outside of the API call, neither knows anything about the state of the other.

Additionally, different clients can use the API to communicate with the server, and the server will happily perform its functions for them all. And once the client has received its *representation* of the data in response, it doesn't care what the server does afterward.

Again, outside of the API, the server and any of its clients are not concerned with each other.

When the client and the server are decoupled from each other like this, the code on either end can change independently of each other, so long as the API remains the same. This allows independent scalability and improved reliability on both sides.

## Wrapping up
So there you go, a brief introduction to what REST APIs are and why they are important in web applications.

Key points:
* APIs allow communication between clients and a server, in accordance with a defined "language".
* REST APIs adhere to a standard format for transferring information to and from the application.
* REST APIs ensure separation of concerns by decoupling the logic of the client/server, instead transferring snapshots of data then carrying on independently.
