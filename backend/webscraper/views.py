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

