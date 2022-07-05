---
sidebar_position: 1
---

# Features Overview

Our minting tool is designed to guide you through the process of turning your media or collections of media into NFTs easily and with as many options as possible to fit your unqiue use case!


** Sections: **
* [Media and Collection Type](http://localhost:3000/docs/minting/overview#media-and-collection-type)
* [Collection Details](http://localhost:3000/docs/minting/overview#Collection-details)
* [Bring Your Own Metadata](http://localhost:3000/docs/minting/overview#Bring-your-own-metadata)
* [Collection Upload](http://localhost:3000/docs/minting/overview#Collection-upload)
* [Allow Listing](http://localhost:3000/docs/minting/overview#Allow-listing)
* [Contract Details](http://localhost:3000/docs/minting/overview#Contract-Details)

-------------------------  
## Media and Collection Type

Our goal is to support as many media and collection types as possible, but we currently support:

**  Media Types: **
* Images - png & jpeg
* Music - ** Coming Soon **
* PDF - ** Coming Soon **
* Video - ** Coming Soon **


** Collection Types:**
* Unique - Perfect for PFP collections and series of art!
* Identical - Ideal for music, tickets, pdfs, and membership NFTs!

If you have a request feel free to let us know in Discord!

------------------------- 

## Collection Details

In order to register your project with our backend, it needs a title and cover image. This data wont go on chain and is currently unchangable, but we plan on adding the ability to rename and change collection details in the future!

------------------------- 

## Bring Your Own Metadata

As NFT creators ourselves, metadata was the most confusing step in our journies! Our hope is to make metadata as easy as possible by default, and as expressive as doing it yourself for more advanced users!

BYOM gives you full control of the core of your NFT! Simply include the metadata for each associated image and we will handle uploading your image to IPFS along with including the base URI in your metadata! 

But if that sounds confusing, you most likely dont need it! In the case where you upload images without metadata, we will handle creating it and uploading it to IPFS for you!

An example metadata format:

```JSON
{
    title: "mcTitle",
    description: "mcDescription",
    attribute: "mcAttribute"
}
```

------------------------- 

## Collection Upload

Zip files are the main way to upload to our backend, but there are a few specific naming and format requirements as well. 

### Collections w/ Metadata

All collections with metadata must have numbered titles, and the media and metadata files should be separated. This format follows the default output of popular tools like [HashLips Art Engine](https://github.com/HashLips/hashlips_art_engine). We plan on removing the need for having number file names in the near future!

* Upload is limited to max 1k collections at the moment *

Accepted folder structure:
```
project_name_media
│   1.png
│   2.png
│   3.png
│    .
│    .
│    .
│   n.png

project_name_metadata
│   1.json
│   2.json
│   3.json
│    .
│    .
│    .
│   n.json

```
### Collections w/o Metadata

For a collection without metadata, you can simply upload the zipped folder. You can include the original names or use numbered names, either work!

```
project_name
│   name.png
│   xyz.png
│   thirdName.png
│    .
│    .
│    .
│   lastName.png

// Alternate
project_name
│   1.png
│   2.png
│   3.png
│    .
│    .
│    .
│   n.png

```

<!-- For a collection of 500 identical NFTs:
```
project_name
│   1.png


``` -->

------------------------- 

## Allow Listing

In this step you can input a list of addresses that are allowed to mint from your project first before you turn minting on for the general public! Turning public mint on will be a second transaction you can do from the project's page. Optionally you can upload the ID of the token you want to allow that address to mint. All mints which are not predefined are random using the ERC721R specification. This spec is slightly cost prohibitevly so we look to improve upon it in the future.

** Supported Allow List Formats **

We support uploading via text or csv


example allowlist input ** with out tokenId **:
```
0x6790074ec154C3Eba62E82251d264D73a0173dF3,0xB4CE055Db36374C95d31499e4AD099FCcC2E6009,0x99372e84136C8B63C5Af25817bB1a4dbd6173ca9
```

example allowlist input ** with tokenId **:
```
0x6790074ec154C3Eba62E82251d264D73a0173dF3 1, 0xB4CE055Db36374C95d31499e4AD099FCcC2E6009 2,0x99372e84136C8B63C5Af25817bB1a4dbd6173ca9 3
```


------------------------- 
## Contract Details