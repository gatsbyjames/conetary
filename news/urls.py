from django.urls import path
from .views import coin_news_list, create_news, delete_news, fact_news, like_news, news_detail, news_list, undislike_news, unfact_news, unfake_news, unlike_news, update_news,dislike_news,fake_news

# from rest_framework_simplejwt.views import (
#     TokenObtainPairView,
#     TokenRefreshView, # 커스터마이즈 해서 여기서 임포트 안하고 내 뷰 에서 임포트함
# )

urlpatterns = [
    path('', news_list, name='news-list'),
    path('post/<str:pk>/', news_detail, name='news-detail'),
    path('create/', create_news, name='create-news'),
    path('update/<str:pk>/', update_news, name='update-news'),
    path('delete/<str:pk>/', delete_news, name='delete-news'),
    path('like/<str:pk>/', like_news, name='like-news'),
    path('dislike/<str:pk>/', dislike_news, name='dislike-news'),
    path('fact/<str:pk>/', fact_news, name='fact-news'),
    path('fake/<str:pk>/', fake_news, name='fake-news'),
    path('unlike/<str:pk>/', unlike_news, name='unlike-news'),
    path('undislike/<str:pk>/', undislike_news, name='undislike-news'),
    path('unfact/<str:pk>/', unfact_news, name='unfact-news'),
    path('unfake/<str:pk>/', unfake_news, name='unfake-news'),
    path('coin/', coin_news_list, name='coin-news-list')

]
