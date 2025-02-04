from rest_framework import generics
from rest_framework.response import Response
from .models import Group, Item
from .serializers import GroupSerializer, ItemSerializer
from rest_framework.views import APIView
import requests
from bs4 import BeautifulSoup

class Index(generics.ListCreateAPIView):
    serializer_class = GroupSerializer

    def get_queryset(self):
        return Group.objects.filter(user=self.request.user)

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)

class GroupDetail(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = GroupSerializer

    def get_queryset(self):
        return Group.objects.filter(user=self.request.user, pk=self.kwargs.get('pk'))

class Items(generics.ListCreateAPIView):
    serializer_class = ItemSerializer

    def get_queryset(self):
        return Item.objects.filter(user=self.request.user, group_id=self.kwargs.get('group_id'))

    def perform_create(self, serializer):
        serializer.save(user=self.request.user, group_id=self.kwargs.get('group_id'))

class ItemDetail(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = ItemSerializer

    def get_queryset(self):
        return Item.objects.filter(user=self.request.user, pk=self.kwargs.get('pk'))

class fetchData(APIView):
    def get(self, request, pk):
        item = Item.objects.get(pk=pk, user=self.request.user)

        content = requests.get(item.url).content

        soup = BeautifulSoup(content, 'html.parser')
        element = item.html_element_name
        if element:
            data = soup.findAll(element, attrs=item.filtering_options)
            item.data_retrieved = str(data)
        else:
            item.data_retrieved = str(soup)

        item.save()
        return Response({'message': 'Data fetched successfully!'}, status=200)