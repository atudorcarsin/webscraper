from django.shortcuts import render
from django.http import HttpResponse
from rest_framework.views import APIView
from rest_framework.authentication import SessionAuthentication
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

class Test(APIView):
    def get(self, request):
        return Response("Hello, world. You're at the webscraper test page.")