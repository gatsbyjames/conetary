from rest_framework import serializers
from django.contrib.auth.models import User
from .models import News, Comment


class NewsSerializer(serializers.ModelSerializer):
  class Meta:
    model = News
    fields = '__all__'



class CommentSerializer(serializers.ModelSerializer):
  class Meta:
    model = Comment
    fields = '__all__'