# Answers to technical questions

1.  How long did you spend on the coding test? What would you add to your solution if you had more time? If you didn't spend much time on the coding test then use this as an opportunity to explain what you would add.

- *Well, it took approximately 1.5 hour to complete. Perhaps it would be less than it with more focus. For such a API works like a proxy, I would add more validation, logging and more advanced caching using Redis. I would surely use TypeScript instead of pure Javascript and design the API with more generic approach as it can be extended in the future. More proxies, endpoints can be added. When we start using Redis, we can cache more. Currently, the API caches only the course object. We can also cache learners, trainers etc.* 

    
2.  Describe your solution in plain english. Point out your design decisions and the reasoning behind them.

- *I implemented a NodeJS server using express framework with essential modules. As the external api url might be changed, dotenv module is also added to the project so that we can add more configuration along side with the external url. For testing, Jest and Supertest modules are being used.*
    
4.  Have you learned something new doing this test? If yes, describe it here.

- *Nope*
    
5.  How would you improve the HR System API you just used?

-  Well, it also needs some caching. Probably, response object might be more well structred instead of just saying the status code.
    
6.  Describe yourself using JSON.

- ``{
"name": "Emre Demir",
"birthday: "20.03.1993",
"lives_in" : "Heemstede, Netherlands",
"from": "Istanbul, Türkiye",
"job": "Senior Software Developer",
"hobbies": [ "tennis", "boardgames", "camping", "novels", "football" ],
"website": "demiremre.com",
"email": "demiremrece@gmail.com"
}``