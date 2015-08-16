Social Button Icons

Some social shares also have available count APIs.

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


Add Social Buttons

    {{> social_buttons}}


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
