from django.urls import path

from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('start_instance/', views.start_instance, name='start_instance'),
    path('stop_instance/', views.stop_instance, name='stop_instance'),
]