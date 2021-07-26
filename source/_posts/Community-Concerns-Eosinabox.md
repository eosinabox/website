---
title: Community concerns about EOS in a Box
date: 2021-07-27 00:02:39
tags:
---
# Message Summary Received on First Week

- webauthn lacks a lot of support currently in the frontend stack. In order to create this in-a-box platform, you're going to have to write a decent amount of custom code in order to even support and sign webauthn transactions. You won't be able to use existing wallet abstractions at this point in time to do that signing.

I am willing to work on this even if there are no established libraries I can use. I will try to make the most of webauthn and eosjs-ecc libraries. Perhaps I can disect some signing code in the middle and insert the part from the webauthn somehow. We'll see. Anyway, I will document my progress and dead-ends I get to.

- The security of the box itself also need to be rock solid, with no attack vectors present. The server itself should not be hosting any private keys to automatically sign transactions on behalf of the accounts under control of the custodian, or it'll create a tempting target for any malicious actor who may realize what that server is hosting.

I totally agree. No private keys should be anywhere near this project, not at the server, not encrypted, not in any form or shape. The private keys are in a secure hardware module on the user's phone, that's what webauthn is all about. The other keys belong to the website owner and are his responsibility and will be on his wallet of choice, not on the server. The server doesn't automatically sign anything. It just coordinates passing transactions around between the new user wanting to create an account and the web site owner who creates the account for them. Only public keys are passed between them.

- It's been said the users onboarding this way have to have implicit trust in whoever runs the box, but they'll also have to implicitly trust the UI itself as well. When signing webauthn transactions, there's no verification step to ensure you're signing the transaction you intend to sign. You have to trust that the website UI itself is telling you what its signing when you go to approve it. If the UI itself is modified/hacked/changed by owner, the end user may have no idea and could be convinced to sign any type of transaction without realizing it.

The website owner will not make a malicious change to the website to trick the users, the users are trusting him, these should be family and friends, not strangers. There will be text explaining that prominently displayed on the mini website. The other potential issue is with a third party changing the website to something evil. I don't know what to say. Perhaps someone from the community wants to chime in? What if there is a third party tool that the user can send the requested transaction to view it in a human readable format before signing?

- The migration between the webauthn onboarded experience and a real wallet won't be simple. There's no protocols (yet) to easily request a key from an external wallet and inject them into a web UI like this. The user will have to generate the key pair(s) in an external wallet and somehow relay them to the box. The owner of the box will then need to issue the transaction to allow the user to migrate off the box and into a self-custody solution.

Initially the creation of a webauthn account will be manual as well. The user will send a message to the website owner requesting him to create an EOS account with his chosen account name and public key created by the webauthn, so migrating out / graduating to a "regular" EOS account simply means asking the website owner to replace the webauthn public key with another public key created on another wallet. And possibly changing the owner key too while they're at it.

- There's no interoperability at all for the users who were onboarded into a box-environment. The only app they're going to be able to use is the box's UI, they won't be able to interact with EOS in any other way until they migrate to a real wallet. They will be at the mercy of the box operator and the interfaces it provides.

Yes, that is correct. Ease of use has its costs.

- There are also concerns about legal/regulations - which we may not care about but is good to highlight for people considering running a box of their own. Whoever is running the box, and has those owner keys to those accounts, may in some regions be the legal custodian of any tokens deposited/withdrawn from the accounts onboarded through the box.

Interesting, I have no knowledge of the legal implications. I would argue that these accounts are for easy onboarding for family and close friends and they shouldn't put their life savings there, just some pocket money to experience what EOS is all about. The site owner just keeps control of the owner keys for recovery purposes since webauthn doesn't have a way for you to regain access to an account if your phone is broken or stolen, nothing more.

The EOS-in-a-Box project is not intended for commercial use. I don't want it installed on a website server managing a million accounts or even one thousand. I think this is more suitable for 25 people and should be installed on many sub domains. The website owner will need to manually create the accounts for his small circle of trust and he will pay for the initial resources in EOS. The new users can of course pay him but that will be out-of-band, meaning they can pay in cash or by any other means they want. This project will not have integration with credit cards or any such service. I don't want to even collect emails and phone numbers or names of the users creating the new accounts. They can have a somewhat anonymous experience, other than the fact that they are publickly tied to the website's owner account via the owner key.

Thanks to Aaron Cox of Greymass for most of the points discussed above.
