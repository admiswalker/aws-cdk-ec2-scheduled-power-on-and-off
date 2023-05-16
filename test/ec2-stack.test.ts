import * as cdk from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import { VpcStack } from '../lib/vpc-stack';
import { SsmStack } from '../lib/ssm-stack';
import { Ec2Stack } from '../lib/ec2-stack';


test('Ec2Stack', () => {
  
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
  
  const ssm_stack = new SsmStack(app, prj_name+'-SsmStack', {
    prj_name: prj_name,
    env: env,
    vpc: vpc_stack.vpc,
  });
  
  // WHEN
  const ec2_stack = new Ec2Stack(app, prj_name+'-Ec2Stack', {
    prj_name: prj_name,
    env: env,
    vpc: vpc_stack.vpc,
    ssm_iam_role: ssm_stack.iam_role,
  });
  
  // THEN
  expect(Template.fromStack(ec2_stack).toJSON()).toMatchSnapshot();

});
