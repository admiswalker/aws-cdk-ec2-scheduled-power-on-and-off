import * as cdk from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import { VpcStack } from '../lib/vpc-stack';
import { SsmStack } from '../lib/ssm-stack';


test('SsmStack', () => {
  
  const app = new cdk.App();

  const prj_name = 'AwsCdkTemplate';
  const env = {
    account: 'test-account',
    region: 'test-region'
  }

  const vpc_stack = new VpcStack(app, prj_name+'-VpcStack', {
    prj_name: prj_name,
    env: env,
  });
  
  // WHEN
  const ssm_stack = new SsmStack(app, prj_name+'-SsmStack', {
    prj_name: prj_name,
    env: env,
    vpc: vpc_stack.vpc,
  });
  
  // THEN
  expect(Template.fromStack(ssm_stack).toJSON()).toMatchSnapshot();

});
