#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { AwsCdkTemplateStack } from '../lib/aws-cdk-template-stack';


const app = new cdk.App();

const prj_name = 'AwsCdkTemplate';
const env = {
  account: process.env.CDK_DEPLOY_ACCOUNT || process.env.CDK_DEFAULT_ACCOUNT,
  region: process.env.CDK_DEPLOY_REGION || process.env.CDK_DEFAULT_REGION
}

const vpc_stack = new AwsCdkTemplateStack(app, prj_name+'-AwsCdkTemplateStack', {
  prj_name: prj_name,
  env: env,
});
