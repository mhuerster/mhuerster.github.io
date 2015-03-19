---
layout: post
title:  "Hipster News"
date:   "2015-03-18"
cover: cover.jpg
description: HipsterNews is a Hacker News clone built in Ruby on Rails and AngularJS, with Devise authentication.
---

I've been neglecting my blog lately, and one of my New Year's resolutions* was to blog more often. So I missed February, but I'm back at it now!

A few months ago, I started learning AngularJS, but didn't end up getting very far. I picked it back up this weekend, and had a great time. I hadn't worked with a front-end framework before, and frankly was a little skeptical about their usefulness. Rails views have always worked just fine for me - if it's not broken, why fix it?

[The Ruby Rogues][rubyrogues] (h/t [Sam Fahlberg][sam] for the link) evangelize for JavaScript MVC frameworks much more eloquently than I could, and I highly recommend listening to this podcast. They actually make a really persuasive argument for frameworks in general (i.e. Rails included, not just front-end frameworks): their counterargument to doubters like me is, essentially, why reinvent the wheel? Sometimes you need a high degree of customization, but if your needs are relatively standard, it's usually more efficient to use a tool already built to handle them.

[rubyrogues]: http://devchat.tv/ruby-rogues/189-rr-choosing-a-javascript-mvc-framework-with-craig-mckeachie-
[sam]: http://www.samfahlberg.com/

As convincing as the Rogues are, though, I naturally had to try a JavaScript framework for myself. I've played with ReactJS before, and considered learning Backbone.js, but ultimately went with Angular just because it seems to be the most commonly used in the wild (based on a very unscientific survey of job-searching friends).

The app I built is [HipsterNews][hn], a Hacker News clone. It uses Rails on the back end, Angular on the front end, Bootstrap for styling and Devise for authentication. (Somehow I'd never gotten around to using Devise before - I've always done OAuth. Devise is so easy it feels like cheating!) Obviously, I went with the hipster theme for an excuse to use my [gem][fauxster] (shameless plug). The code is on my [GitHub][gh].

As it turns out, the front-end framework advocates aren't wrong. I found that the experience of HipsterNews is noticeably different from straight Rails apps. It's faster, cleaner and feels more like a native app - exactly as promised. That said, I'm not sure I'm sold. It still seems like more duplication than is necessarily warranted, and the extra dependencies Angular brings in still make me uneasy. In the context of this (admittedly very small) project, I don't think the marginal improvements in user experience are worth the tradeoff, and if HipsterNews were a real product, I would probably eliminate Angular.

[hn]: http://hipsternews.herokuapp.com
[fauxster]: http://rubygems.org/gems/fauxster
[gh]: https://github.com/mhuerster/hipsternews


There are other legitimate concerns with AngularJS outside the $scope of this post (pun intended - I'm really sorry). It's definitely not as lightweight as Backbone, Google is less internally committed to Angular than Facebook is to React, and all bets will be off when Angular 2.0 comes out. I've also heard good things about the Ember.js community, and I would argue that community support can make or break a framework - that's definitely one of the reasons Rails' popularity has been so enduring.

Thoughts on Angular? Do you want to defend JS MVC frameworks? Did I neglect your favorite? Scroll down to comment...

\* I don't actually make New Year's resolutions. Instead, I have "15 Goals for 2015," one of which is to publish an averge of two blog posts per month. So I have a little catching up to do... stay tuned!