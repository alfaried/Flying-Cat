import boto3
import traceback
from web_service.src.aws_utilities import *
from django.shortcuts import render
from django.http import HttpResponse, JsonResponse

# Global Params - Hardcodede to make the backend work
ACCESS_KEY_ID = 'AKIAJBIMKPRCB74ST2WA'
SECRET_ACCESS_KEY = '9oKObjBQOxSxD5I6fcNXG6LhixZhZnGCkykGoZta'

# instance_id = i-02901c2e26147bd43

# Create your views here.
def index(requests):
  response = {'service_name': 'index'}

  response['service_list'] = {
    'start_instance': 'start_instance/',
    'stop_instance': 'stop_instance/'
  }

  # To pass any other JSON-serializable object, set safe parameter to False
  return JsonResponse(response, safe=True)


def start_instance(requests):
  response = {'Service_Name': 'start_instance'}
  
  instance_id = requests.GET.get('instance_id')

  client = get_ec2_client(ACCESS_KEY_ID, SECRET_ACCESS_KEY)
  res = client.start_instances(InstanceIds=[instance_id])

  response['Content'] = res

  # To pass any other JSON-serializable object, set safe parameter to False
  return JsonResponse(response, safe=True)


def stop_instance(requests):
  response = {'Service_Name': 'stop_instance'}

  instance_id = requests.GET.get('instance_id')

  client = get_ec2_client(ACCESS_KEY_ID, SECRET_ACCESS_KEY)
  res = client.stop_instances(InstanceIds=[instance_id])

  response['Content'] = res

  # To pass any other JSON-serializable object, set safe parameter to False
  return JsonResponse(response, safe=True)
