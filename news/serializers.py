from rest_framework import serializers
from django.contrib.auth.models import User

from base.serializers import ReviewSerializer
from .models import News, Comment


class CommentSerializer(serializers.ModelSerializer):
  class Meta:
    model = Comment
    fields = '__all__'

class NewsSerializer(serializers.ModelSerializer):

  author = serializers.CharField()
  comments = serializers.SerializerMethodField(read_only=True)

  class Meta:
    model = News
    fields = '__all__'

  def get_comments(self, obj):
    comments = obj.comment_set.all()
    serializer = CommentSerializer(comments, many=True)
    return serializer.data




