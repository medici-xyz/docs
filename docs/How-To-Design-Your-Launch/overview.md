---
sidebar_position: 0
---

# Random Minting

It's a well known fact that many people are capable of exploiting how NFT contracts mint their tokens. This can lead to large distributions of your rarest tokens being minted to a small group of people. The current best solution for this is to randomly decide the token to mint at the time of the mint. This can be done with a randomness oracle or by incurring extra overhead of handling it inside your own contract. We believe the second option is a more robust option across different chains and currently implement the `ERC721R` standard described here : https://github.com/erc721r/ERC721R

