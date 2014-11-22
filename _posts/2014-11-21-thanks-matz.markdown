---
layout: post
title:  "Thanks, Matz"
date:   2014-11-21 21:35:00
cover: cover.jpg
description: I went to a talk/panel with Matz and other members of the Ruby core team at Heroku HQ for 'A Very Ruby Thanksgiving.' They spoke about the future of Ruby as a language and a few other design decisions. Static vs. dynamic vs. soft typing was one of the highlights.
---

Last night, I was lucky enough to join a small group of developers at Heroku HQ for one of the most exciting experiences of my time in the Ruby community. Matz and a few other members of the Ruby core team made a stop in SF on their way back from RubyConf 2014 in San Diego. Matz gave a short presentation (pretty similar the one he gave at RubyConf, from the recaps I read), and all four team members took questions afterward.

![Matz and teammates at Heroku](/images/matz.jpg)

As he did in his talk at RubyConf, Matz aired some of his thoughts on the future of Ruby as a language. One of the most surprising ideas put forward was introducing static typing in Ruby 3.0(ish). To paraphrase Matz himself: "Is Ruby without duck typing still Ruby?" As hyperbolic as that sounds, it's a question worth asking; duck typing is a major part of what endears the language to Rubists everywhere. It's not only convenient for human writers of code, but makes Ruby code DRY-er by allowing us to use a variable without declaring and/or type-checking it first.

However, there's some demand for static typing in Ruby (see ['Issue #9999'][Issue9999]). As a compromise, Matz raised the possibility of using [soft typing][softtyping], which effectively introduces static typing as an option. The type checker would run at compile time and alert the user to possible type errors, but not prevent the program from running with these suspected errors. Ideally, such a system would provide the best of both worlds: the utility of static typing with the convenience of dynamic typing.

In practice, of course, it couldn't be that simple; nothing ever is! Nevertheless, it's an exciting possibility. I'm happy to know that Ruby is still a fresh, dynamic (pun intended...sorry) language whose creators aren't afraid to consider big changes.

[Issue9999]: https://bugs.ruby-lang.org/issues/9999
[softtyping]: http://c2.com/cgi/wiki?SoftTyping