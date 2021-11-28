# Using Tiny Injector With Express To Create Web API

In this article we'll see how **Tiny Injector** can be used with **Express** to create web API.

We are going to cover the following

1. Service lifetime.
2. Service Registration.

_You may have to refer to the documentions for deeper understanding._

## Service lifetimes

The service life-time means how long the service will live before it's disposed of. There are currently three different lifetimes:

- Transiant: An of the service is created each time we call that service. Its like having the new keyword to initiate the service everytime we are injecting it. this is used for lightweight stateless services
  var myService = new MyService();

- Scopped: these services are created once in the entire request scope. Within the context of a request if we ask for a service we will get the same instance. At the end of the request the service is disposed

- Singleton: created once when they are requested and the same instance is used through out the application lifetime. Until the App shuts down the same instance will be provided for us.
