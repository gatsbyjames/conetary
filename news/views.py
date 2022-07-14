from ast import Is
from unicodedata import category
from django.shortcuts import render
from .models import News, Comment
from django.db.models import Q

from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework.response import Response

from .serializers import NewsSerializer, CommentSerializer

def is_coin(news):
  return news["category"] == "코인"

@api_view(['GET'])
def news_list(request):

  news = []

  news_coin = News.objects.filter(category='코인').order_by('-create_date')[:12]
  news_stock = News.objects.filter(category='주식').order_by('-create_date')[:12]
  news_coin_post = News.objects.filter(category='코인 게시판').order_by('-create_date')[:8]
  news_stock_post = News.objects.filter(category='주식 게시판').order_by('-create_date')[:8]

  for x in news_coin:
    news.append(x)
  
  for y in news_stock:
    news.append(y)

  for z in news_coin_post:
    news.append(z)
  
  for r in news_stock_post:
    news.append(r)

  serializer = NewsSerializer(news, many=True)

  return Response(serializer.data)


@api_view(['GET'])
def news_detail(request, pk):
    
    product = News.objects.get(id=pk)
    serializer = NewsSerializer(product, many=False)
    return Response(serializer.data)


@api_view(['POST'])
def create_news(request):
  data = request.data
  news = News.objects.create(
    subject= data['subject'],
    content= data['content'],
    category= data['category']
  )
  serializer = NewsSerializer(news, many=False)
  return Response(serializer.data)


@api_view(['PUT'])
@permission_classes([IsAuthenticated])
def update_news(request, pk):

  news = News.objects.get(id=pk)

  data =request.data

  news.subject = data['subject']
  news.content = data['content']

  news.save()

  serializer = NewsSerializer(news, many=False)

  return Response(serializer.data)


@api_view(['DELETE'])
@permission_classes([IsAuthenticated])
def delete_news(request, pk):

  news = News.objects.get(id=pk)

  news.delete()

  return Response("News was deleted")


@api_view(['PUT'])
@permission_classes([IsAuthenticated])
def like_news(request, pk):

  user = request.user
  news = News.objects.get(id=pk)

  news.like.add(user)
  news.save()

  serializer = NewsSerializer(news, many=False)
  
  return Response(serializer.data)

@api_view(['PUT'])
@permission_classes([IsAuthenticated])
def dislike_news(request, pk):

  user = request.user
  news = News.objects.get(id=pk)
  
  news.dislike.add(user)
  news.save()

  serializer = NewsSerializer(news, many=False)

  return Response(serializer.data)

@api_view(['PUT'])
@permission_classes([IsAuthenticated])
def fact_news(request,pk):

  user = request.user
  news = News.objects.get(id=pk)

  news.fact.add(user)
  news.save()

  serializer = NewsSerializer(news, many=False)

  return Response(serializer.data)

@api_view(['PUT'])
@permission_classes([IsAuthenticated])
def fake_news(request, pk):
  
  user = request.user
  news= News.objects.get(id=pk)

  news.fake.add(user)
  news.save()

  serializer = NewsSerializer(news, many=False)

  return Response(serializer.data)
  

@api_view(['PUT'])
@permission_classes([IsAuthenticated])
def unlike_news(request, pk):

  user = request.user
  news = News.objects.get(id= pk)

  news.like.remove(user)
  news.save()

  serializer = NewsSerializer(news, many=False)

  return Response(serializer.data)

@api_view(['PUT'])
@permission_classes([IsAuthenticated])
def undislike_news(request,pk):

  user = request.user
  news = News.objects.get(id=pk)

  news.dislike.remove(user)
  news.save()

  serializer = NewsSerializer(news, many=False)

  return Response(serializer.data)

@api_view(['PUT'])
@permission_classes([IsAuthenticated])
def unfact_news(request, pk):

  user = request.user
  news = News.objects.get(id=pk)

  news.fact.remove(user)
  news.save()

  serializer = NewsSerializer(news, many=False)

  return Response(serializer.data)

@api_view(['PUT'])
@permission_classes([IsAuthenticated])
def unfake_news(request,pk):

  user = request.user
  news = News.objects.get(id=pk)

  news.fake.remove(user)
  news.save()

  serializer = NewsSerializer(news,many=False)

  return Response(serializer.data)


@api_view(['GET'])
def coin_news_list(request):

  news = []

  news_coin = News.objects.filter(category='코인').order_by('-create_date')

  for x in news_coin:
    news.append(x)
  
  serializer = NewsSerializer(news, many=True)
  
  return Response(serializer.data)