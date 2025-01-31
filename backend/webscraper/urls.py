from django.urls import path
from . import views

app_name = 'webscraper'

urlpatterns = [
    path('', views.Index.as_view(), name='index'),
    path('groups/<int:pk>/', views.ItemList.as_view(), name='items'),
]