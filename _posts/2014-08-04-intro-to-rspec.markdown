---
layout: post
title:  "Intro to RSpec"
date:   2014-08-04 21:21:32
cover: cover.jpg
description: Learning RSpec and using TDD to teach ActiveRecord to Ruby on Rails students
---

I've run RSpec tests for exercises a few times before, but this weekend was the first time I tried writing my own tests. It's a DBC tradition for the outgoing Phase 2 students to help teach ActiveRecord to the incoming cohort, and I was part of the group leading a weekend workshop.

My role was to prepare a (relatively simple) exercise for the new Phase 2 students to practice their skills on after the talk. Because the cohort before mine had already written great exercises (thanks, Woodchucks!), I decided not to reinvent the wheel, but instead to improve on one of the existing challenges by making it test-driven.

The object of the challenge was to implement a many-to-many relationship between a car rental service's cars and its customers - i.e. a customer can rent many cars, and a car can be rented by many customers.

I used the RSpec documentation and previous exercises I'd been given to get a feel for RSpec 3.0 syntax. Here's a short, annotated sample:

{% highlight ruby linenos %}
# require the file that the spec file should test
require_relative 'rentals'
# identify the class being tested
describe User do
	# open the test block ("it...do") and explain in concise, plain English what behavior is being tested
	it 'has many cars' do
		# create an instance of the class to test
		sam = User.create(name: 'Sam',
			state: 'DC',
			age: 26)
		# give the expected behavior in RSpec - i.e., this instance of the class User should respond to the method #cars
		expect(sam).to respond_to :cars
	end	
	# mark a test as pending using "xit" to indicate that it shouldn't be run immediately
	# stretch - uncomment to run the test
	xit 'must be 25 or older' do
		molly = User.create(name: 'Molly', state: 'NY', age: 23)
		expect(molly.errors.messages[:age]).to include('must be greater than or equal to 25')
	end
end
{% endhighlight %}

After working through the exercise with a few of the new Phase 2 students, I realized that the tests I had written weren't bad, but there was room for improvement. For example, I had written a test that made sure instances of a class responded to the correct method, but I didn't test what the method returned. This allowed all the tests to pass even if the student's associations were incorrect. As I move on with RSpec and TDD, I'll definitely have be more thorough. I enjoyed my first dive into testing, though, and I'm looking forward to learning more!