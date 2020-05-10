import boto3

def get_ec2_client():
  client = boto3.client(
    'ec2'
  )
  return client