---
title: WebAuthn and Blockchain
date: 2021-07-21 07:25:29
tags:
---
# Relationship between WebAuthn and Blockchain

WebAuthn is relatively new, Apple supports the technology for less than a year now. Android was an earlier adopter and many modern phones have the hardware required for the whole system to work. Biometrics data is not shared with the server, it stays on the phone's special hardware which creates key pairs bound to specific website domains. The private key never leaves the hardware which is separate from the regular computer of the phone. It is limited to only send out the public key or create signatures using the private key.

EOSIO chains and EOS in particular have a powerful set of permissions. The minimum and not recommended way to create an account is to use a single keypair for both the activ and owner permissions. Let me backup a bit and explain in my own words the concepts involved. I think the names of the keys is not ideal. A better model would be an email address and a password. You tell everyone your email address and keep the password safe. If your password leaks, someone can pretend to be you and send email on your behalf. In the blockchain world, if someone knows your private key they can send the coins out of your account.

EOSIO has 2 sets of keys and locks, the owner is the one with all permissions and is unrestricted. With it you can do anything including sending coins out of the account and changing locks. The active key can do everything except for changing keys. It is recommended to use the active key for everyday actions and keep the owner key offline in a more secure place.

EOSIO lets you also use other accounts as owner or active permissions, time delays and a group of several keys with a minimum threshold to make an action. So for example, I can set up my active key to require a minimum of 3 and have this list of keys:

    +1 mydad@active
    +1 mymom@active
    +1 mybrother@active
    +3 myPublicKey

So I can do anything on my account as usual or if I'm in a coma, my father mother and brother can get access to my money. But that is not very reliable, what happens if one of them loses their keys? I need to add more people to allow for some flexibility. Maybe add:

    +1 mytrustedlawyer@active
    +1 mybestfriendforever@active

But too many people is also not so good, what if some of them collude to steal my money? I can set up a combination of permissions that will use time delay with the other people so I will have time to cancel and change the keys before it is irreversible. How about adjusting the minimum threshold to 5:

    +1 mydad@active
    +1 mymom@active
    +1 mybrother@active
    +1 mytrustedlawyer@active
    +1 wait 7 days
    +5 myPublicKey

There are better combinations, I will write about it later.

Webauthn is a very convenient way to manage keys and there is a cost to this convenience. It is tied to me obviously, to the specific phone I'm using now - not my phone number and to the specfic website domain name. So we can have a mini site template package which is easy to deploy to any web server and it will never handle private keys, the website owner and admin will tweak teh appearace of the site to make it his own and fill some technical details like his EOS account and/or the owner public key for the people he invites. Once the invited friend goes to the website, the web site will ask the user's phone to create a new key pair which will prompt the user to put his finger on the reader or use faceID. Then the phone will create a new key pair, store the private key in the secure hardware and send the website the public key. The website will make some checks that are recommended in the Webauthn standard to make sure the public key it received is actually coming from a biometric hardware ssytem on the phone and if all is well, it will create a new account for the user with the user's chosen account name, the active key will be the webauthn public key and the owner key will be the website's settings. The website owner pays for the 3KB RAM needed to create the account and sends some EOS so the account is not empty. The website owner and the new account owner can exchange USD or any other legacy coins between them outside of the website. No need to complicate this with credit cards/PayPal or anything else since they know each other in real life and trust each other.

Now the user has a first citizen EOS account if the mini site acts as a wallet and can handle requests for signing by the UI or using special HTTP GET messages with some parameters. The mini site will ask the phone to sign the hash of the transaction, the user will confirm with his biometrics and the website will take the signature and turn around to the blockchain nodes, and send the transaction with the signature where the blockchain will verify and approve the transaction.

If the user loses their phone or it gets stolen, the user needs to ask the website owner for help in regaining access through a new phone. There will be a process similar to opening a new account where the webauthn asks the user to create a new keypair on the new phone and the website owner, will be able to change the public key for the user.

The user may elect to leave the system and graduate to an independent account with other key management system, the website owner can once again help by approving replacing the keys to whatever the account owner wants.

If I made any inaccuracies, you know how to reach me, Ami Heines, also for the more advanced EOSIO experts, what prevents such a system to work with any EOSIO chain, even without enabling WEBAUTHN_KEY?
