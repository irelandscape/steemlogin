# SteemLogin

SteemLogin is an online application that eases the authentication process with the [Steem](https://www.steem.com) blockchain.

With SteemLogin users can store their Steem username and posting key on a secure database and make these credentials available to any supporting Steem app upon future authentications with Google, Facebook, Twitter or GitHub.

In effect, SteemLogin acts as a secure storage for posting keys and an authentication gateway for Steem applications.


![SteemLogin architecture](https://i.postimg.cc/hv46YzWL/steemlogin.png)

## Why use SteemLogin?                                                                                                                                

A posting key looks like this:

<pre>5K7dsflOerj8324lfsdf0lfsKDFSL0284kF9KFWl85skdfk37ks</pre>

This is a 50 character hash which is impossible to memorize and difficult to enter without making any mistakes.

While such passwords are very awkward to type in on a PC/laptop, the task becomes even more painful when using handheld devices.

In this day and age people have come to expect being able to login to most applications using mainstream content providers and social networks.

This is the user experience that SteemLogin will provide to any adopting Steem appllication.

## How does it work?
Upon signing in to the application the user will be redirected to the SteemLogin authentication portal.

There, he/she will be presented with the following authentication options:
![Authentication choices](https://i.postimg.cc/fbPxWdwx/Screenshot-from-2019-03-14-20-04-06.png)

The user selects his/her authentication provider of choice and completes the verification procedure that he/she is accustomed to.


The user should be asked by the provider to authorize SteemLogin for authentication.
[!Authorisation request](https://i.postimg.cc/LXg46Vq2/Screenshot-2019-03-06-14-04-05.png)

Upon successfully authenticating with the provider, the user is redirected to the SteemLogin application.

SteemLogin retrieves all stored Steem account details (usernames and posting keys), if available, from its database and checks if these details are still valid.

The user is then invited to select his/her account of choice or add another Steem account into the system.
[!Choose Steem Account](https://i.postimg.cc/sDFCQHnL/Screenshot-from-2019-03-14-20-10-08.png)

Once a Steem account has been selected, SteemLogin redirects the user to the Steem application.
In the process a unique authorization code is supplied to the app which allows it to retrieves securely the account details.

The Steem application can now use the Steem username and posting key with the Steem blockchain for all operations requiring authentication.

The user is now logged in.

## Designed for Firebase
SteemLogin is designed to use the cloud services offered by [Firebase](https://firebase.google.com), a Google owned company.

Specifically, SteemLogin uses the following services:
* [Firebase hosting](https://firebase.google.com/products/hosting/): hosting the authentication gateway for authenticating with external providers and managing the Steem usernames and posting keys.
* [Firebase authentication](https://firebase.google.com/products/auth/): facilitates authentication with Google, Facebook, Twitter and GitHub
* [Cloud Firestore](https://firebase.google.com/products/firestore/): provides secure database for storing Steem usernames and posting keys.
* [Cloud Functions](https://firebase.google.com/products/functions/): allows Steem applications to securely retrieve the Steem details of a user upon successful authentication.

## Website and other Resources
The official SteemLogin web site is available at:
https://www.steemlogin.net

To get additional support, submit suggestions and simply interact with our community of users and Steem app developers, join our [Discord server](https://discord.gg/YrU9nsX).

