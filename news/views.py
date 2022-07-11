from django.shortcuts import render
from .models import News, Comment

from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework.response import Response

from .serializers import NewsSerializer, CommentSerializer

@api_view(['GET'])
def news_list(request):
  news = News.objects.all()
  serializer = NewsSerializer(news, many=True)
  return Response(serializer.data)

