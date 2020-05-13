from django.urls import path

from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('testing/', views.testing, name='testing'),
    path('describe_instance/', views.describe_instance, name='describe_instance'),
    path('describe_instance_status/', views.describe_instance_status, name='describe_instance_status'),
    path('start_instance/', views.start_instance, name='start_instance'),
    path('stop_instance/', views.stop_instance, name='stop_instance'),
    path('get_ec2_metric_statistics/', views.get_ec2_metric_statistics, name='get_ec2_metric_statistics'),
    path('get_application_status/', views.get_application_status, name='get_application_status'),
]