#Social Button Icons

Some social shares also have available count APIs.

### Social Buttons

* Facebook (#shares)
* Twitter (#tweets)
* LinkedIn (#posts)
* Pinterest (#shares)
* Google
* Delicious
* Tumblr
* Pocket
* Reddit
* Wordpress
* Hacker News
* Email


### Setup

Add Social Buttons

    {{> social_buttons}}


### Configuration

Default Settings: 

    defaults = {
      facebook: true,
      twitter: true,
      google: false,
      pinterest: false,
      delicious: false,
      tumblr: false,
      pocket: false,
      reddit: false,
      linkedin: false,
      wordpress: false,
      hackernews: false,
      stumbledupon: false,
      mail: false,
    
      incrementing: false,
      useCount: false,
      incrementerSpeed: 150
      via: ''
    };
    
Configure Settings
   
    SocialButtons.config({
      facebook: false,
      google: true
    });
    
Enable counts: 

    SocialButtons.config({
      useCount: true
    });
    
Enable incrementing counts:

    SocialButtons.config({
      useCount: true,
      incrementing: true,
      incrementingSpeed: 200
    });
    
Enable "via" message

    SocialButtons.config({
      via: '@ShMcK'
    });

