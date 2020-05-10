import boto3
import traceback
from web_service.src.aws_utilities import *
from django.shortcuts import render
from django.http import HttpResponse, JsonResponse

# Create your views here.
def index(requests):
  response = {'service_name': 'index'}

  response['service_list'] = {
    'testing': 'testing/',
    'start_instance': 'start_instance/',
    'stop_instance': 'stop_instance/'
  }

  return JsonResponse(response, safe=True)


def start_instance(requests):
  response = {'Service_Name': 'start_instance'}
  
  instance_id = requests.GET.get('instance_id')

  client = get_ec2_client()
  res = client.start_instances(InstanceIds=[instance_id])

  response['Content'] = res

  return JsonResponse(response, safe=True)


def stop_instance(requests):
  response = {'Service_Name': 'stop_instance'}

  instance_id = requests.GET.get('instance_id')

  client = get_ec2_client()
  res = client.stop_instances(InstanceIds=[instance_id])

  response['Content'] = res

  return JsonResponse(response, safe=True)

def testing(requests):
  response = {'Service_Name': 'testing'}

  # Add code below for testing

  return JsonResponse(response, safe=True)