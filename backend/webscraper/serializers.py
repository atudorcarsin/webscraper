from rest_framework import serializers
from .models import Group, Item

class GroupSerializer(serializers.ModelSerializer):
    class Meta:
        model = Group
        exclude = ['user', 'created_at']

class ItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = Item
        exclude = ['user', 'group', 'created_at']