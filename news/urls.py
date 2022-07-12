from django.urls import path
from .views import create_news, news_detail, news_list

# from rest_framework_simplejwt.views import (
#     TokenObtainPairView,
#     TokenRefreshView, # 커스터마이즈 해서 여기서 임포트 안하고 내 뷰 에서 임포트함
# )

urlpatterns = [
    path('', news_list, name='news-list'),
    path('post/<str:pk>/', news_detail, name='news-detail'),
    path('create/', create_news, name='create-news')

]
