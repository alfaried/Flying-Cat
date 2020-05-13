import boto3
import datetime
import traceback
from web_service.src.aws_utilities import *
from django.shortcuts import render
from django.http import HttpResponse, JsonResponse

# Create your views here.
def index(requests):
  response = {'service_name': 'index'}

  response['service_list'] = {
    'testing': 'testing/',
    'describe_instance': 'describe_instance/',
    'describe_instance_status': 'describe_instance_status/',
    'start_instance': 'start_instance/',
    'stop_instance': 'stop_instance/',
    'get_ec2_metric_statistics': 'get_ec2_metric_statistics/'
  }

  return JsonResponse(response, safe=True)


def get_ec2_metric_statistics(requests):
  response = {'Service_Name': 'get_ec2_metric_statistics'}

  instance_id = requests.GET.get('instance_id')
  metric_name = requests.GET.get('metric_name') # CPUUtilization, NetworkIn, NetworkOut
  unit = requests.GET.get('unit') # Percent, Bytes

  client = get_cloudwatch_client()
  res = client.get_metric_statistics(
    Namespace = 'AWS/EC2',
    MetricName = metric_name,
    Dimensions = [
      {
        'Name': 'InstanceId',
        'Value': instance_id
      }
    ],
    StartTime = datetime.datetime.now() - datetime.timedelta(minutes=15),
    EndTime = datetime.datetime.now(), 
    Period = 60,
    Statistics = [
      'Average'
    ],
    Unit = unit
  )

  response['Content'] = res

  return JsonResponse(response, safe=True)


def describe_instance(requests):
  response = {'Service_Name': 'describe_instance'}

  instance_id = requests.GET.get('instance_id')

  client = get_ec2_client()
  res = client.describe_instances(InstanceIds = [instance_id])

  response['Content'] = res

  return JsonResponse(response, safe=True)


def describe_instance_status(requests):
  response = {'Service_Name': 'describe_instance'}

  instance_id = requests.GET.get('instance_id')

  client = get_ec2_client()
  res = client.describe_instance_status(InstanceIds = [instance_id])

  response['Content'] = res

  return JsonResponse(response, safe=True)


def start_instance(requests):
  response = {'Service_Name': 'start_instance'}
  
  instance_id = requests.GET.get('instance_id')

  client = get_ec2_client()
  res = client.start_instances(InstanceIds = [instance_id])

  response['Content'] = res

  return JsonResponse(response, safe=True)


def stop_instance(requests):
  response = {'Service_Name': 'stop_instance'}

  instance_id = requests.GET.get('instance_id')

  client = get_ec2_client()
  res = client.stop_instances(InstanceIds = [instance_id])

  response['Content'] = res

  return JsonResponse(response, safe=True)

def testing(requests):
  response = {'Service_Name': 'testing'}

  # Add code below for testing

  return JsonResponse(response, safe=True)