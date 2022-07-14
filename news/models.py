from venv import create
from django.db import models
from django.contrib.auth.models import User

# Create your models here.


class News(models.Model):
  author = models.ForeignKey(User, on_delete=models.CASCADE, related_name='author_news', null=True, blank=True)
  subject = models.CharField(max_length=30)
  content = models.TextField(max_length=1500)
  category = models.CharField(max_length=10, null=True, blank=True)
  create_date = models.DateTimeField(auto_now_add=True)
  modify_date = models.DateTimeField(null=True, blank=True, auto_now=True)
  like = models.ManyToManyField(User, related_name='like_news', null=True, blank=True)
  dislike = models.ManyToManyField(User, related_name='dislike_news', null=True, blank=True)
  fact = models.ManyToManyField(User, related_name='fact_news', null=True, blank=True)
  fake = models.ManyToManyField(User, related_name='fake_news', null=True, blank=True)

  def __str__(self):
    return self.subject


class Comment(models.Model):
  author = models.ForeignKey(User, on_delete=models.CASCADE, related_name='author_comment', null=True, blank=True)
  news = models.ForeignKey(News, on_delete=models.CASCADE)
  content = models.TextField(max_length=1500)
  create_date = models.DateTimeField(auto_now_add=True)
  modify_date = models.DateTimeField(null=True, blank=True, auto_now=True)
  voter = models.ManyToManyField(User, related_name='voter_comment', null=True, blank=True)

  def __str__(self):
    return self.content