from rest_framework.response import Response
from rest_framework.views import APIView
from django.views.decorators.csrf import ensure_csrf_cookie
from django.utils.decorators import method_decorator
from django.contrib.auth import authenticate, login
from rest_framework import status

class Ping(APIView):
    permission_classes = []

    @method_decorator(ensure_csrf_cookie)
    def get(self, request):
        return Response('pong')

class Login(APIView):
    permission_classes = []

    def post(self, request):
        username = request.data.get('username')
        password = request.data.get('password')
        user = authenticate(request, username=username, password=password)
        if user is not None:
            login(request, user)
            return Response('Login successful', status=status.HTTP_200_OK)
        else:
            return Response('Invalid credentials', status=status.HTTP_401_UNAUTHORIZED)