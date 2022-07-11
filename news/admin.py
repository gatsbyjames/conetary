from django.contrib import admin

from .models import News, Comment
# Register your models here.


class NewsAdmin(admin.ModelAdmin):
  search_fields = ['subject']


class CommentAdmin(admin.ModelAdmin):
  search_fields = ['content']


admin.site.register(News, NewsAdmin)
admin.site.register(Comment, CommentAdmin)