# [rockyhutchins.com](https://rockyhutchins.com)

This is a portfolio site for Drummer and Producer Rocky Hutchins. 

Technologies used: 
- [Hugo](https://gohugo.io/)
- [Bootstrap](https://getbootstrap.com/)
- [Decap CMS](https://decapcms.org/)

## Features
Some notable features of the site include: 

### Web Scraping of Bandcamp and Youtube
The music page of the site pulls its data from Bandcamp and Youtube. Adding one of these items to the page is as simple as copy-and-pasting the link into the CMS. Hugo then fetches the page from Bandcamp or Youtube and pulls out all of the information that we need such as the album art, the video and album IDs for embedded players, etc.

#### CMS input:

![CMS for adding music item](./readme-media/music-item-cms.png)

#### Output on website:

![A music item on the website](./readme-media/music-item-output.png)

### Automatic Contact Card Generation
One of the primary objectives for this site is to help the client in networking with people. To aid in this, I created a system that automatically puts the client's contact information into a virtual contact card format (.vcf) with an quick download link. This way, the client can simply have someone pull up the website on their phone and download the contact card, and now that person has the client's full name, phone number, email, notes about their skills, and even a picture to help them remember the client and make sure they can find them in the future. The contact information for the website can all be updated from the same place, so if it changes in the future, the website and the contact card will stay consistent with each other.

![Contact card being downloaded](./readme-media/contact-card.png)


### Link Forwarding
This site serves as a central place for the client to link to all other platforms that they are on. I added an additional feature that creates an easy-to-remember URL that will forward people to those platforms automatically. For instance, if the client adds a link to their Spotify account, a page is automatically created a rockyhutchins.com/links/spotify.

### Device Recognition for Contact Import Instructions

### Google Analytics

### User-Friendly Content Management System 

### User-Configurable icons for links

### CSS Purging
