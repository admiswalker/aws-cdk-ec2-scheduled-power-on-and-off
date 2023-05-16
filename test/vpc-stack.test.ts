import * as cdk from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import { VpcStack } from '../lib/vpc-stack';


test('VpcStack', () => {
  
  const app = new cdk.App();

  const prj_name = 'AwsCdkTemplate';
  const env = {
    account: 'test-account',
    region: 'test-region'
  }

  // WHEN
  const stack = new VpcStack(app, prj_name+'-VpcStack', {
    prj_name: prj_name,
    env: env,
  });

  // THEN
  expect(Template.fromStack(stack).toJSON()).toMatchSnapshot();

});
