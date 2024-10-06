# Writing a Payxn Solana API using NestJS
### Tips for using the backend API
To use a backend Payxn API app using NestJS and Solana web3.js, you can follow these steps to integrate Solana blockchain functionality within a NestJS application. This guide assumes you are familiar with both NestJS and the basics of Solana development.

<p align="center">
<a href="https://payxn.xyz/" target="blank"><img src="https://github.com/user-attachments/assets/d9bf3f00-557c-46d2-8729-24945df22aff" width="120" alt="Payxn Logo" >
</a>


[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://twitter.com/payxnsol" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

### Sample API Interface
<img width="1508" alt="Screenshot 2024-10-05 at 11 42 04 PM" src="https://github.com/user-attachments/assets/63740d75-8a71-4d72-aac6-a39d464feef6">


### Diagram of Payxn User Journey
<img width="968" alt="Screenshot 2024-10-04 at 11 54 30 AM" src="https://github.com/user-attachments/assets/0826e1c9-c6b3-4d4f-bdf9-77db621dd65a">

## Steps
- [x] Install Dependencies
- [x] Create a Solana Service
- [x] Create a Controller
- [x] Register the Solana Module
- [x] Install Swagger Dependencies
- [x] Configure Swagger in main.ts
- [x] Add Swagger Decorators to the Controller
- [x] Run the Application

## Description

Payxn is an abstracted virtual solana payment channel.

## Getting Started

```bash
npm i -g @nestjs/cli
nest new payxn-api
npm install @solana/web3.js
```

## Create a solana service

```bash
nest generate module solana 
nest generate service solana
```

## Create a Controller

```bash
nest generate controller solana
```


## Resources

Check out a few resources that may come in handy when working with NestJS:

- Visit the [NestJS Documentation](https://docs.nestjs.com) to learn more about the framework.
- For questions and support, please visit our [Discord channel](https://discord.gg/G7Qnnhy).
- To dive deeper and get more hands-on experience, check out our official video [courses](https://courses.nestjs.com/).
- Visualize your application graph and interact with the NestJS application in real-time using [NestJS Devtools](https://devtools.nestjs.com).
- Need help with your project (part-time to full-time)? Check out our official [enterprise support](https://enterprise.nestjs.com).
- To stay in the loop and get updates, follow us on [X](https://x.com/nestframework) and [LinkedIn](https://linkedin.com/company/nestjs).
- Looking for a job, or have a job to offer? Check out our official [Jobs board](https://jobs.nestjs.com).

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [graver](https://twitter.com/payxnsol)
- Website - [https://payxn.xyz](https://payxn.xyz/)


## License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).
