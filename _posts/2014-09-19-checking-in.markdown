---
layout: post
title:  "Checking In"
date:   2014-09-19 16:52:36
cover: cover.jpg
tags: personal opensource responsiveness gem fauxster
---

It's been almost a month since I left DBC, but it feels like a lot longer. I've been catching up with a lot of friends and family I missed while I was in my coding cocoon (i.e. DBC), traveling cross-country, and working on some side projects.

I made my first (very small) open-source contribution to [NewsDiffs][newsdiffs], a project that tracks changes to news publications over time using git. Mobile responsiveness is a pet issue of mine, and I noticed when I subscribed to NewsDiff's updates that the form wasn't optimized for email input. I fixed it, submitted a pull request, and got it merged within a few days - success! I definitely want to do more open-source work soon.

[newsdiffs]: http://newsdiffs.org/

I also took on a bigger project I've been wanting to tackle for a while: writing my own gem. I love using fun filler text for projects - i.e., not Lorem Ipsum - and my favorite is [HipsterIpsum][hipsteripsum]. I usually didn't bother, though, because there was no gem available and it wasn't worth the trouble of writing out an [API][hipsterjesus] call. When I had some free time, I decided to fix that.

[hipsteripsum]: http://hipsum.co/
[hipsterjesus]: http://hipsterjesus.com/

[Fauxster][fauxster] is an API wrapper that lets would-be-hipster-Rubyists (hi) user HipsterIpsum the same way we use [Faker::Lorem][faker].

{% highlight bash %}
$ irb
2.1.1 :001 > require 'fauxster'
 => true 
2.1.1 :002 > Fauxster.craft_prose
 => "Direct trade  90's try-hard pork belly typewriter, butcher..." 
 {% endhighlight %}

 Full text: "Direct trade  90's try-hard pork belly typewriter, butcher... Thundercats Tonx artisan narwhal tousled church-key Vice.  Small batch sustainable banjo +1 3 wolf moon skateboard umami, squid plaid PBR retro scenester cornhole street art Neutra.  Before they sold out hoodie put a bird on it bespoke locavore, lomo art party High Life Shoreditch Bushwick XOXO retro banjo.  Pug lo-fi cornhole, whatever XOXO messenger bag stumptown.  Bushwick scenester Williamsburg, Odd Future butcher tattooed Portland Neutra vegan Tumblr.  Brunch direct trade  sartorial, cray salvia Cosby sweater 8-bit tofu 3 wolf moon organic banh mi Thundercats retro Echo Park.  Pork belly gluten-free tofu forage, chambray DIY PBR&amp;B drinking vinegar four loko distillery try-hard keffiyeh vegan."

[fauxster]: http://rubygems.org/gems/fauxster
[faker]: https://github.com/stympy/faker#fakerlorem

I guess that's cool, although it was probably cooler before people knew about it.

Actually, I'm pretty happy that people know about it - 100+ downloads in two weeks.

Other than that, I've been traveling, applying for jobs, and starting to learn AngularJS. More updates to come!

<img src="http://i.giphy.com/n5aPq3NIKHvIk.gif">

