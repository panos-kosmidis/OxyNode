OxyNode
=============================

OxyNode could considered as an application startup for node.js. Developers can use the tools it provides to build a variety of web apps, from simple web-sites to complex web apps.

This project is created for myself to easily startup a web project based on Node.js but I deeply believe in Open Source and I feel that all I got and all I am today I owe it to Open Source community so I try every day to contribute as much as possible. I can't say that this project is the way to go but I could say that some people could find it useful either to use it or get ideas from it or use parts of it or what ever.

OxyNode is 100% Node.js based app and it follows the following structure:

```
apps/
bootstrap.js
package.json
```

`apps` folder hosts our apps.
`bootstrap.js` is our bootstrap, what it does is simply create a vhost for each of our apps and boot them there.
`package.json` is the standard `package.json` file that indicate our application dependencies, properties and etc

Apps don't follow any specific structure, they could be used how ever we want, in our example the `main` app propose a structure and also some tools that I personally use in my projects (and please feel free to suggest me any correction if you have).


OxyNode uses **Domain-driven Design (DDD)** approach, **Command-query Responsibility Segregation (CQRS)** architecture which follows **Command and Query Separation (CQS)** design pattern and **Event Sourcing (ES)** architectural  pattern. I build a diagram that show the [application flow](http://dl.dropbox.com/u/16165490/js-ddd-cqrs2.png) in client-side with the use of OxyNode. The project is inspired by [OxyBase](http://code.google.com/p/oxybase/) where I contribute and it is created by Tomas Bartkus.  


The purpose of this framework is to propose a way for building front-end web apps in a more structural way. I saw lot of proposals out there, for instance how to organize Backbone.js and etc but I'm really thinking, why not use DDD / CQRS to organize it and work with it like we work on server side? I believe of course that some things will be different in client side regarding those patterns but still the main idea remains. Of course the real benefit of DDD / CQRS / ES etc is mostly shown in server-side and in front-end I'm not really sure if there are any front-end developers who actually know about DDD / CQRS / ES but even so, even as an architectual and behavioral perspective it would be a real benefit in many ways on interacting with clients and also track client's behaviour to improve UX and many other things, we do that on server side... why not doing it on client-side too? The idea is the same.  


Resources for DDD/CQRS/ES:

* **[Domain Driven Design keynote by Eric Evans](http://www.youtube.com/watch?v=lVjxxhA10w0)** *1hour video*
* **[CQRS keynote by Udi Dahan](http://www.youtube.com/watch?v=EkEz3pcLdgY)** *1hour video - the introduction is in spanish but the keynote is in English*
* [Domain Driven Design - Step by Step](http://thinkddd.com/assets/2/Domain_Driven_Design_-_Step_by_Step.pdf)
* [DDD Sample & Definitions](http://dddsample.sourceforge.net/patterns-reference.html)
* [Domain Event](http://martinfowler.com/eaaDev/DomainEvent.html)
* **[Architectural Innovation: Eventing, Event Sourcing by Greg Young](http://skillsmatter.com/podcast/design-architecture/architectural-innovation-eventing-event-sourcing/zx-553)** *1hour video*
* **[CQRS and Event Sourcing - the Business Perspective by Greg Young](http://skillsmatter.com/podcast/design-architecture/greg-young-cqrs-event-sourcing-the-business-perspective)** *2hour video*
* [Domain Driven Design and Development In Practice](http://www.infoq.com/articles/ddd-in-practice)
* [Domain-driven design (Wikipedia)](http://en.wikipedia.org/wiki/Domain-driven_design)
* **[Domain-Driven Design: Tackling Complexity in the Heart of Software by Eric Evans](http://www.amazon.com/dp/0321125215)** This is a must have book if you are about to dive in DDD
* **[Design Patterns: Elements of Reusable Object-Oriented Software](http://www.amazon.com/dp/0201633612/)** This is also a must have book in order to understand design patterns in OOP programming
* [Q&A on DDD and CQRS with Eric Evans and Udi Dahan](http://www.youtube.com/watch?v=1DqiKMuVlXI) *55minutes video*


When you should use OxyNode with DDD / CQRS
----------------------------

* If you have complex domain (very complex business rules)
* If you have at least 1 experienced developer in your team
* If you have experience in advanced JavaScript OOP patterns
* If you know what is DDD

When you should not use OxyNode with DDD / CQRS
--------------------------------

You can use it for any kind of project, but more likely that you will not benefit from packages and features it provides.  Although, if you will try to implement some small, not complex application by using all those "things" described above - most likely that you will fail, because it will be just too much work and very little benefit. [when to avoid CQRS](http://www.udidahan.com/2011/04/22/when-to-avoid-cqrs/ "When to avoid CQRS"), read this before you start redesigning anything.

OxyNode's Extras!
------------------

The main app contains the following libraries but feel free to remove the ones that you don't really need:

* [HTML5 Boilerplate](http://html5boilerplate.com/) (some features)
* [Twitter Bootstrap](http://twitter.github.com/bootstrap/)
* [jQuery UI](http://jqueryui.com/) (with [Bootstrap theme](http://addyosmani.github.com/jquery-ui-bootstrap/))
* [Modernizr](http://www.modernizr.com/) (full featured)
* [jQuery](http://jquery.com/)
* [Backbone.js](http://documentcloud.github.com/backbone/) - [Backbone Tutorials](http://backbonetutorials.com/) helped a lot to start up with Backbone.js!
* [Underscore.js](http://documentcloud.github.com/underscore/)
* [JSON2.js](https://github.com/douglascrockford/JSON-js)
* [QUnit](http://docs.jquery.com/QUnit) for testings (I would recommend to keep this for Test Driven Development)
* [Pretify](http://google-code-prettify.googlecode.com/svn/trunk/README.html) lib (code highlighting)
* [Chosen](http://harvesthq.github.com/chosen/) select boxes lib
* [Jwerty](http://keithcirkel.co.uk/jwerty/) for easy keyboard handling
* [Bootbox](http://paynedigital.com/2011/11/bootbox-js-alert-confirm-dialogs-for-twitter-bootstrap) for nice alert and confirm type boxes
* [Animate.css](http://daneden.me/animate/)
* [Table sorter](http://tablesorter.com/docs/) for easy table shoring & pagination

*Please if you think that any of the project's file violate any license please let me know if it does it's not on purpose and I will replace/remove or ask permission to use it.*



Next!
====
* Examples need to be added in order to represent the flow of DDD/CQRS and how can be interacted with UI
* `apps/main/front-end/app.coffee` uses eval in some parts, unfortunately I can't avoid it but I believe it is safe in the way I use it but I will listen any alternatives ! :)
* I revisit the code daily so things could be changed on how they work (flow may be changed too if I find that something  could work in a better way)
* A/B Testing script to make A/B Testing easy to use!
* A growl like notification lib
* Plupload of course... best upload way in my opinion
* Form user-input auto saver (so if browser crash or something happens the user won't have to re-type again everything he may lost)

More things will come of course :)

Ideas
=====

I got some ideas but I'm not puting those to *Next* chapter because for some of those I'm not sure if I will actually implement them and for some others I don't know when I will implement them.

* I was thinking that having the events and the repository we could actually benefit of local storage or node.js some how. For example would be cool to send events to server and store those events in any storage mechanism that we will use (if could be sql or nosql or xml or csv or flat files or anything we like). This would have an actuall use for instance tracking the behaviour of our users in our web apps, see how they interact with it, when a client report a bug related to front-end we could actually get the events and reproduce the same error with same data, so many things could benefit us in case we log our front-end events, even if we need to consider redesigning a part of our page we could take good UX decisions having those data. We could store events only on logged in users, or in both this will be decided based in our business logic.
* Another idea I had is to use localstorage as a some kind of queue mechanism to "push" events to server (it will be a some kind of fake pushing) so having this, imagine that your secretary uses your web app to do some things like add apointments, add todos and stuff like that. I believe it wasn't lot of times but it happen when eventualy for some minutes or some hours you went offline for any reason (constructions outside of the building, router crashed, ISP down etc) why not giving the ability to the secreatery (User) to continue work with the application localy and continue creating apointments and etc which will be added into local storage and then when the internet will be back again the events will be "pushed" to server in the exact same order they where executed (this could work even if the user close the browser and then open it again...) Of course in order to make the web app available localy it's not so simple but if you think about it with Backbone.js & Require.js it isn't too hard to implement, of course probabaly if we need to get something from server we won't be able to but still at least we could do some work instead of nothing...

License: **Free/GPL**