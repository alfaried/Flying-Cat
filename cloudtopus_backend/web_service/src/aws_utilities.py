import boto3

def get_ec2_client(access_key, secret_access_key):
  client = boto3.client(
    'ec2', 
    aws_access_key_id=access_key, 
    aws_secret_access_key=secret_access_key
  )
  return client