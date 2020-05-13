import boto3
from web_service.src.aws_credentials import *

def get_ec2_client():
  client = boto3.client(
    'ec2',
    aws_access_key_id = ACCESS_KEY,
    aws_secret_access_key = SECRET_ACCESS_KEY
  )
  return client

def get_cloudwatch_client():
  client = boto3.client(
    'cloudwatch',
    aws_access_key_id = ACCESS_KEY,
    aws_secret_access_key = SECRET_ACCESS_KEY
  )
  return client