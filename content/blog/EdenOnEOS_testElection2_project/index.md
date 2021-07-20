---
title: EdenOnEOS - Test Election 2 project
date: "2021-07-19T22:25:37.121Z"
---

#Repurposing the eosinabox name for something better

I was elected the "leader of the board" by a random number generator, so I got the 2000 EOS funding. I plan on using that to create a minisite template which will be easy to deploy on a web site domain.

Each website owner will be need to be experienced in crypto wallet, specifically on EOSIO. Should be comfortable with knowing the difference between the owner and the active permissions and why it is a good idea to keep these separate. The website owner will be able to invite people who trust him to open a new EOS account using their phone on the website using just their biometrics - their fingerprints or faceID.

Behind the scenes what will happen is that the website will interact with the user's phone using <a href="https://webauthn.guide/">webauthn</a> so the phone will create a new key pair on the secure hardware in the phone. The User's phone doesnot send any biometric data to the web site, just a new public key. The website will create a new account on the EOS main net (and this can easily be changed to any other EOSIO chain). The newly created account will be paid for by the website owner, 3KB RAM which is needed to open an account is currently less than 0.1000 EOS ro less than $0.40 USD. The user can then verify that the account actually exists using any blockchain explorer. The Active key will be the public key created by the WebAuthn process and the owner key will be the active key of the owner of the website or in a more advanced setup, any combination of additional users, public keys and time delays.

The new account owner will be able to sign transactions using his fingerprint or faceID and will enjoy the convenience of not needing to take good care of any secret keys. The dreaded 12 word list on paper will be spared from him.

If/when the user loses access to his phone, either it is broken, lost or stolen, no one else can access his funds since they need his biometrics too. In order for him to regain access to his account, he buys a new phone and asks the website owner for help in changing the active key to his new phone's WebAuthn created one.

Need to elaborate on the possible schemes for the owner keys, perhaps a group of friends can have several such sites and a 3 out of 6 of those web site owners can help any member of one of the websites to regain access to their account.

Another risk is that the way the WebAuthn standard works is that the key pair is tied to the domain name. If the website is not accessible, all the users who enjoyed the convenience of an EOS account through that site are locked out. They need the help of whoever controls the owner key to change their active key to something else.

#In conclusion

This will be an interesting additional option to help on-board new users. The tradeoffs should be obvious to any one who chooses to participate. Perhaps there will be a smart contract with "approve that you read the agreement" but it should be minimal and more aligned with a recadian contract clause and not the traditional sign up forms where a fairy dies every time someone clicks the checkbox next to the words: "I read and agree to the terms and conditions of this website". Perhaps something along the short and unformal lines:

1. I personally know and trust the owner of this website
2. Convenience comes with risks, I will not blame anyone if/when I lose my cryptos

