const { createLambdaFunction, createProbot } = require('@probot/adapter-aws-lambda-serverless');

const app = require('../src/app');

module.exports.handler = createLambdaFunction(app, {
  probot: createProbot(),
});