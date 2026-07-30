---
title: "Load balancer. Round-Robin Algo and Least Connection Algo"
date: 2026-07-13
excerpt: "Load balancer with caddy in docker using Round-Robin Algo and Least Connection Algo"
tags: [Docker, Caddy]
---

**Caddy**
Open Source load-balancer and web server.

Running caddy

```sh
docker pull caddy
```

Create index1.html and index2.html

```html
<html>
  <body>
    <h1>Hello from server 1</h1>
    // 2 in index 2
  </body>
</html>
```

Run containers on different port replacing out html file with caddy index.html

```sh
docker run -d -p 8881:80 -v $PWD/index1.html:/usr/share/caddy/index.html caddy
docker run -d -p 8882:80 -v $PWD/index2.html:/usr/share/caddy/index.html caddy
```

Custom Network
We can create custom [bridge](https://docs.docker.com/network/bridge/) networks so that containers can communicate with each other if we want them to

```sh
docker network create caddytest

docker network ls
```

Run container with --name flag to its easier to reference them

```sh
   docker run -d --name caddy1 --network caddytest -v $PWD/index1.html:/usr/share/caddy/index.html caddy

      docker run -d --name caddy2 --network caddytest -v $PWD/index2.html:/usr/share/caddy/index.html caddy
```

Create another container within same network and get a terminal to curl into our servers

```sh
docker run -it --network caddytest docker/getting-started /bin/sh
```

then

```sh
curl caddy1
curl caddy2
```

```html
<html>
   
  <body>
       
    <h1>Hello from server 1</h1>
     
  </body>
</html>
```

**Configuring load balancer**

To use caddy as load balancer, we will need to create a custom [Caddyfile](https://caddyserver.com/docs/caddyfile). It is a script file to tell caddy how we can to configure it. Note: Spaces matters in the caddyfile.

```sh
localhost:80

reverse_proxy caddy1:80 caddy2:80 {
	lb_policy       round_robin
}
```

This tells caddy to run on localhost80 and roundrobin any incoming traffic to caddy1:80 and caddy2:80. But we need to run our proxy container in same network

```sh
docker run -d --network caddytest -p 8880:80 -v $PWD/Caddyfile:/etc/caddy/Caddyfile caddy
```

now if we open our browser

Hello from server 1 one time and next time
Hello from server 2.

In addition to the round_robin policy, Caddy supports several dynamic load balancing algorithms that distribute traffic based on real-time backend conditions. One of the most commonly used dynamic policies is least connection, which directs new requests to the backend with the fewest active connections. This is especially useful when your upstream services experience variable request processing times or uneven traffic loads.

To configure least connections, replace the lb_policy directive as shown below:

caddy

```sh
localhost:80
reverse_proxy caddy1:80 caddy2:80 {
lb_policy least_conn
}
```

With this configuration, Caddy will continuously evaluate the number of active connections to each backend and route each incoming request to the least busy upstream server. This helps prevent individual containers from becoming overloaded while others remain under utilized.
