---
title: Development Plan
date: 2021-07-26 20:23:24
tags:
---
# After a week, here is the plan

It is subject to change and I will write weekly updates.
The idea is to use cycles of 2 weeks where every 2 weeks there will be a new version with additional features and capabilities.
Each cycle will start with a short internal planning of the cycle, followed by coding and near the end of the 2 weeks cycle, there will be time for testing and stabilizing.
If course there will be shorter cycles in between but these are internal and not so public.

The [github repository is called eosinabox](https://github.com/eosinabox/eosinabox) and is open from the start, but not always up to date with my latest code. Don't expect much in the first few cycles, it will be ugly and that's on purpose. I want to focus on the mechanics of it.

The code is open source and MIT licensed so anyone can take it and modify it and call it their own if they want.
The plan is on the README file of that repository and I am copying the initial draft here for reference. It will change and the changes will be updated in the repository, not here.

Some things might accelerate while others will be delayed. I probably forgot some important aspects and will include later, for example:

1. PWA features like "Install to Home Screen"
2. Some type of reporting to the site owner if all is well, and if any API is always failing to respond.
3. Global error handling which will report to a centralized server, with the option to opt out or in, not sure which should be the default. Perhaps initially the default should be that any installation reports errors unless the site owner specifically turns this off and switch to the opposite later on.
4. Some type of rate limiting, to protect the server from harrassing the blockchain API nodes
5. Again, alert the site owner and perhaps the central error handling about suck a situation.
6. Share and share target to make it easier to send and receive transaction requests to be signed. Perhaps that is too risky if the user doesn't understand? Maybe add a screen explaining before presenting the fingerprint signing.

So here is the dev plan, copied from the README:

# Design principles
* Simple code, less layers between code and the website owner, no need to be an expert in:
    * typescript
    * react
    * route libraries
    * esoteric css compilers
    * Database
* No database, not saving user's name nor email nor phone number,
    * No backup needed
    * No private info needs to be kept secure
    * No GDPR or other regulatory compliance needed
* Warn website owner in README and on the front page of the site, and warn the user requesting an account with the help of the website owner
* Warning should include: Don't put a large sum of money in tokens on this wallet, you might lose access forever.


# Plan (will be fine tuned as time progresses)

## Week 1-2
* define requirements and capabilities and order of development in broad lines
* start implementing and git push, so there is something to show on github at the end of each 2 week cycle
* dead simple hard coded config, input fields and buttons, jQuery front end, simple backend
* proof of concept, check account name, taken or available
* user wants to create a new keypair using webauthn? do it!
* check on server if valid attestation
* perhaps if account exists, ask user if this account is managed by the site owner?
* perhaps have a simple PIN so only friends of the site owner have access? PIN in a setup file on the server?

## Week 3-4
* allow the user to transfer EOS using the mini website as a wallet
* allow transfer of any "standard" token
* "share" feature, send to web site owner the info - account name and pub key and what the user wants, either create a new account or change keys since user changed phones.
* split flows to:
    * I want to create a new account
    * I want to regain access to my account with a new phone
    * I want to add another phone to my account, so either phone can be used (future)
    * I want to add another phone to my account, so I will need to approve a transaction from both phones (future)
    * I want to logout, please forget my account on this phone
    * I want to transfer EOS to another account
    * (future) sign any transaction (wallet capabilities)

## Week 5-6
* beautify with react & some css
* use sockets for push notification from server to phone
* streamline the pages
* continue implementing the features from the previous cycle

## Week 7-8
* integrate with eospowerup.io ?
* integrate with EOS block explorers? several?
* config json with different chains, let owner customize the site
* integrate with EOS wallets to make it easier for site owner to create accounts and replace active keys to help users regain access
* define recommended standard msig owners, perhaps with delays? some without delays to cancel unstaking and replace keys to help user save his account from attacker
* continue implementing the features from the previous cycle

