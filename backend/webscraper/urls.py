from django.urls import path
from . import views

app_name = 'webscraper'

urlpatterns = [
    path('', views.Index.as_view(), name='index'),
    path('group/<int:pk>/', views.GroupDetail.as_view(), name='group_detail'),
    path('group/<int:group_id>/items/', views.Items.as_view(), name='items'),
    path('item/<int:pk>/', views.ItemDetail.as_view(), name='item_detail'),
    path('item/<int:pk>/fetch/', views.fetchData.as_view(), name='fetch_data'),
]