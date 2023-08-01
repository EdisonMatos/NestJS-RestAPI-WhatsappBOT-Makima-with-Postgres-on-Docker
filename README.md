## Dependencies & Services
- Prisma https://www.prisma.io
- NestJs - https://nestjs.com

## Get started Notes:
- Configure `.env` file while working on local environment  
- Health endpoint: `host:port/health`
- Swagger docs endpoint: `host:port/docs`


## Installation

```bash
$ yarn install
```
## Run in local

start core services first (rabbitmq)
```bash
$ yarn infra:up
```

Now, first place `.env` file in service folder
```bash
$ yarn start:dev
```

to stop core services, run
```bash
$ yarn infra:down
```

## Run in local with docker-compose

start core services
```bash
$ yarn infra:up
```

docker-compose command - this will take env variables from .env.local 
```bash
docker-compose up "service name" 
```

rebuild
```bash
docker-compose up "service name" --build
```

## Test

```bash
# unit tests
$ yarn run test

# e2e tests
$ yarn run test:e2e

# test coverage
$ yarn run test:cov
```

# Creating new endpoints
 
NestJS will be responsible for managing routes and some HTTP workloads inside the box. In order to create a new endpoint/route we need to follow some steps.


## Controllers

1. First we need to create entity controller or use an existent one. Let's take an Customer controller as example:

    ```
   @Controller('customers')
   export class CustomerController {
     constructor() {}

    }
    ```

1. All we have to do in order to create an new endpoint inside "customers" route is create and new method and decorate it with Method Decorators that we want it to work like, using native modules from @nestjs/common, as we can see below with @Post() decorator

    ```
   @Controller('customers')
   export class CustomerController {
     constructor() {}

    //this is a nest decorator to indicate that we want to create a POST route
    @Post()
    create(@Body() createCustomerDto: CreateCustomerDto) {

    }
    }
    ```

1. Thinking of layers, we need to separate our endpoint in controllers, services and repositories. We already have created or used our customer controller to create a new endpoint, so lets create our customer service or use and existent one. 

    ```
    // this injectable decorator is a must need to use that class in other classes
   @Injectable()
   export class CustomerService {
     constructor() {}
     create(data: CreateCustomerDto) {
        return "This is create method"
    }
    }
    ```
1. And now, lets import this new created method in our controller. First lets export it in customer module: 

    ```
    @Module({
      controllers: [CustomerController],

      //WE export here in providers
      providers: [CustomerService]
    })
    export class CustomerModule {}
    ```

1. Now, lets import in customer controller and return in new method:

    ```
    @Controller('customers')
    export class CustomerController {
    //Import here
     constructor(private readonly customerService: CustomerService) {}

    //this is a nest decorator to indicate that we want to create a POST route
    @Post()
    create(@Body() createCustomerDto: CreateCustomerDto) {

        //return here
        return this.customerService.create(createCustomerDto);
    }
    }
    ```
1. And just doing this, you're ready to go!