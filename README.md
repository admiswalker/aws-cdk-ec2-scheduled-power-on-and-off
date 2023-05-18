# aws-cdk-ec2-scheduled-power-on-and-off

このリポジトリでは，Amazon EventBridge Scheduler で，EC2 インスタンスの定時起動，定時シャットダウンをする．

## 構成図

![](architecture.drawio.png)

## 使い方

### テスト
```
npx npm run test
```
```
npx npm run test -- -u
```

### デプロイ
```bash
npx cdk synth
```
```bash
npx cdk deploy --all --require-approval never
```
```bash
npx cdk destroy --all --force
```

### SSH アクセス

```bash
EC2_INSTANCE_ID=$(aws ec2 describe-instances \
    --filters "Name=tag:Name,Values=AwsCdkTemplate-AwsCdkTemplateStack/AwsCdkTemplate-AwsCdkTemplateStack-general_purpose_ec2" \
    --query "Reservations[].Instances[?State.Name=='running'].InstanceId[]" \
    --output text)
ssh -i ~/.ssh/ec2/id_ed25519 admis@$EC2_INSTANCE_ID
```

## 参考資料

- [【節約】EC2インスタンスを自動起動・自動停止する！【コスト削減】](https://hikari-blog.com/ec2-auto-start-and-stop/)
- [EventBridge Scheduler- Start/Stop EC2 instance](https://awsmantra.com/eventbridge-scheduler-startstop-ec2-instance)
- [EventBridge SchedulerでSecrets Managerのシークレットを毎分ローテーションさせてみた](https://dev.classmethod.jp/articles/rotate-secrets-manager-secrets-every-minute-with-eventbridge-scheduler/)
- [Cron 式のフォーマット](https://docs.aws.amazon.com/ja_jp/AmazonCloudWatch/latest/events/ScheduledEvents.html)

