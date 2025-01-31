from rest_framework import generics
from rest_framework.response import Response
from .models import Group, Item
from .serializers import GroupSerializer, ItemSerializer

class Index(generics.ListCreateAPIView):
    serializer_class = GroupSerializer

    def get_queryset(self):
        return Group.objects.filter(user=self.request.user)

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)

class ItemList(generics.ListCreateAPIView):
    serializer_class = ItemSerializer

    def get_queryset(self):
        return Item.objects.filter(user=self.request.user, group=self.kwargs.get('pk'))

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)